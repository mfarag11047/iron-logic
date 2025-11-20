import { Exercise, WorkoutLog, MuscleState, Recommendation, UserSettings } from '../types';
import { EXERCISE_DB, MUSCLE_NAME_MAP, MUSCLE_GROUPS } from '../constants';

const RECOVERY_MODEL = { large: 33, medium: 50, small: 100 }; // % recovered per day
const STRESS_FACTOR = { PRIMARY: 1.0, SECONDARY: 0.3 };
const MIN_WORKABLE_RECOVERY = 70;

const CNS_STRESS_FACTORS: Record<string, number> = { 
    'deadlift': 3.0, 'squat': 2.5, 'compound': 1.5, 'isolation': 1.0 
};

export class WorkoutRecoveryAlgorithm {
    private exerciseMap: Map<string, Exercise>;

    constructor() {
        this.exerciseMap = new Map(EXERCISE_DB.map(ex => [ex.name, ex]));
    }

    private normalizeMuscleName(muscleName: string): string | string[] {
        const cleaned = muscleName.split('(')[0].trim();
        return MUSCLE_NAME_MAP[cleaned] || cleaned;
    }

    private getDaysBetween(date1: Date, date2: Date): number {
        const d1 = new Date(date1); d1.setHours(0,0,0,0);
        const d2 = new Date(date2); d2.setHours(0,0,0,0);
        return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    }

    private calculateCNSForExercise(exercise: Exercise, reps: number, rpe: number): number {
        let cnsFactor = CNS_STRESS_FACTORS.isolation;
        const nameLower = exercise.name.toLowerCase();
        if (nameLower.includes('deadlift')) cnsFactor = CNS_STRESS_FACTORS.deadlift;
        else if (nameLower.includes('squat')) cnsFactor = CNS_STRESS_FACTORS.squat;
        else if (exercise.type === 'Compound') cnsFactor = CNS_STRESS_FACTORS.compound;
        return 1 * reps * (rpe / 10) * cnsFactor;
    }

    public assessRecovery(workoutHistory: WorkoutLog[], currentDate: Date = new Date()) {
        // Initialize Muscle States
        const canonicalMuscles = new Set<string>();
        Object.values(MUSCLE_NAME_MAP).forEach(v => {
            if(Array.isArray(v)) v.forEach(m => canonicalMuscles.add(m));
            else canonicalMuscles.add(v);
        });

        const muscleStates: Record<string, MuscleState> = {};
        canonicalMuscles.forEach(m => {
            muscleStates[m] = {
                recovery: 100,
                lastWorked: null,
                sizeCategory: ["Quads", "Hamstrings", "Glutes", "Chest", "Back"].includes(m) ? "large" : "medium"
            };
        });

        let cnsStress = 0;
        const sortedHistory = [...workoutHistory].sort((a,b) => new Date(a.workoutDate).getTime() - new Date(b.workoutDate).getTime());

        if (sortedHistory.length === 0) return { muscleStates, cnsStress: 0 };

        let simTime = new Date(sortedHistory[0].workoutDate);
        simTime.setHours(0,0,0,0);

        let lastDate = new Date(simTime);

        const applyStress = (workout: WorkoutLog) => {
             workout.exercisesPerformed.forEach(log => {
                const ex = this.exerciseMap.get(log.exerciseName);
                if (!ex) return;

                // CNS
                cnsStress += this.calculateCNSForExercise(ex, log.reps, log.rpe);

                // Muscles
                const baseStress = 10 * log.reps * (log.rpe/10) * (ex.type === 'Compound' ? 1.25 : 1.0);
                
                const hitMuscle = (m: string, factor: number) => {
                    const normalized = this.normalizeMuscleName(m);
                    const targets = Array.isArray(normalized) ? normalized : [normalized];
                    targets.forEach(t => {
                        if (muscleStates[t]) {
                            muscleStates[t].recovery = Math.max(0, muscleStates[t].recovery - (baseStress * factor));
                            muscleStates[t].lastWorked = new Date(workout.workoutDate);
                        }
                    });
                };

                hitMuscle(ex.primaryMuscle, STRESS_FACTOR.PRIMARY);
                ex.secondaryMuscles?.forEach(m => hitMuscle(m, STRESS_FACTOR.SECONDARY));
            });
        };

        const recover = (days: number) => {
            if (days <= 0) return;
            cnsStress = Math.max(0, cnsStress - (days * 15));
            for (const m in muscleStates) {
                const state = muscleStates[m];
                if (state.recovery < 100) {
                    const rate = RECOVERY_MODEL[state.sizeCategory];
                    const gain = (100 - state.recovery) * (rate / 100) * days; // Simplified iterative approximation
                    state.recovery = Math.min(100, state.recovery + gain);
                }
            }
        };

        sortedHistory.forEach(workout => {
            const wDate = new Date(workout.workoutDate);
            const days = this.getDaysBetween(lastDate, wDate);
            recover(days);
            applyStress(workout);
            lastDate = wDate;
        });

        const finalDays = this.getDaysBetween(lastDate, currentDate);
        recover(finalDays);

        return { muscleStates, cnsStress };
    }

    public getRecommendation(userSettings: UserSettings, muscleStates: Record<string, MuscleState>, cnsStress: number): Recommendation {
        if (cnsStress > 150) { // Threshold
            return {
                recommendedSplitDayType: "Active Recovery",
                exercises: [],
                cnsStress,
                reason: "CNS fatigue is high. Rest or light cardio is recommended."
            };
        }

        const groupScores: { group: string, score: number, reason: string }[] = [];

        for (const [group, muscles] of Object.entries(MUSCLE_GROUPS)) {
            let totalRec = 0;
            let count = 0;
            let minRec = 100;
            
            muscles.forEach(m => {
                if (muscleStates[m]) {
                    totalRec += muscleStates[m].recovery;
                    minRec = Math.min(minRec, muscleStates[m].recovery);
                    count++;
                }
            });

            if (count === 0) continue;
            let avg = totalRec / count;
            let reason = `Avg recovery: ${Math.round(avg)}%`;

            if (minRec < MIN_WORKABLE_RECOVERY) {
                avg = 0;
                reason = "Contains fatigued muscles.";
            }

            groupScores.push({ group, score: avg, reason });
        }

        groupScores.sort((a,b) => b.score - a.score);
        
        let best = groupScores[0];
        // Bias towards user split if possible
        if (userSettings.split === "Push/Pull/Legs") {
            const preferred = groupScores.find(g => ["PUSH", "PULL", "LEGS"].includes(g.group));
            if (preferred && preferred.score > 80) best = preferred;
        } else if (userSettings.split === "Upper/Lower") {
            // Map PUSH/PULL to Upper, LEGS to Lower logic roughly
             const upperScore = groupScores.filter(g => ["PUSH", "PULL"].includes(g.group)).reduce((a,b) => a + b.score, 0) / 2;
             const legsScore = groupScores.find(g => g.group === "LEGS")?.score || 0;
             if (upperScore > legsScore && upperScore > 80) best = { group: "UPPER", score: upperScore, reason: "Upper body recovered" };
             else if (legsScore > 80) best = { group: "LOWER", score: legsScore, reason: "Legs recovered" };
        }

        const targetGroup = best.group;
        const candidates = EXERCISE_DB.filter(ex => {
             const primary = this.normalizeMuscleName(ex.primaryMuscle);
             const targetMuscles = MUSCLE_GROUPS[targetGroup as keyof typeof MUSCLE_GROUPS] || 
                (targetGroup === "UPPER" ? [...MUSCLE_GROUPS.PUSH, ...MUSCLE_GROUPS.PULL] : MUSCLE_GROUPS.LEGS);
             
             const pArr = Array.isArray(primary) ? primary : [primary];
             return pArr.some(p => targetMuscles.includes(p));
        });

        // Select exercises
        const selected = candidates.sort(() => 0.5 - Math.random()).slice(0, 5);

        return {
            recommendedSplitDayType: targetGroup,
            exercises: selected,
            cnsStress,
            reason: best.reason
        };
    }
}