import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { AppState, UserSettings, WorkoutLog, ActiveWorkout, Recommendation, MuscleState, ActiveExercise } from '../types';
import { WorkoutRecoveryAlgorithm } from '../services/workoutAlgorithm';

interface AppContextProps extends AppState {
    updateSettings: (s: UserSettings) => void;
    startWorkout: (rec: Recommendation) => void;
    updateActiveSet: (exIdx: number, setIdx: number, field: string, value: any) => void;
    addSet: (exIdx: number) => void;
    finishWorkout: () => void;
    resetData: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userProfile, setUserProfile] = useState<UserSettings>(() => {
        const saved = localStorage.getItem('il_settings');
        return saved ? JSON.parse(saved) : { split: "Push/Pull/Legs", goal: "hypertrophy", volume: "moderate" };
    });

    const [workoutHistory, setWorkoutHistory] = useState<WorkoutLog[]>(() => {
        const saved = localStorage.getItem('il_history');
        return saved ? JSON.parse(saved) : [];
    });

    const [activeWorkout, setActiveWorkout] = useState<ActiveWorkout | null>(null);
    const [muscleStates, setMuscleStates] = useState<Record<string, MuscleState>>({});
    const [cnsStress, setCnsStress] = useState(0);
    const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

    const algo = new WorkoutRecoveryAlgorithm();

    // Recalculate recovery whenever history changes
    useEffect(() => {
        const result = algo.assessRecovery(workoutHistory);
        setMuscleStates(result.muscleStates);
        setCnsStress(result.cnsStress);
    }, [workoutHistory]);

    // Recalculate recommendation when states or profile changes
    useEffect(() => {
        if (Object.keys(muscleStates).length > 0) {
            const rec = algo.getRecommendation(userProfile, muscleStates, cnsStress);
            setRecommendation(rec);
        }
    }, [muscleStates, cnsStress, userProfile]);

    // Persistence
    useEffect(() => {
        localStorage.setItem('il_settings', JSON.stringify(userProfile));
    }, [userProfile]);

    useEffect(() => {
        localStorage.setItem('il_history', JSON.stringify(workoutHistory));
    }, [workoutHistory]);

    const updateSettings = (s: UserSettings) => setUserProfile(s);

    const startWorkout = (rec: Recommendation) => {
        const setsCount = userProfile.volume === 'high' ? 4 : userProfile.volume === 'low' ? 2 : 3;
        const initialExercises: ActiveExercise[] = rec.exercises.map(ex => ({
            name: ex.name,
            sets: Array.from({ length: setsCount }).map(() => ({ weight: 0, reps: 0, rpe: 8, completed: false }))
        }));

        setActiveWorkout({
            startTime: new Date(),
            split: rec.recommendedSplitDayType,
            exercises: initialExercises
        });
    };

    const updateActiveSet = (exIdx: number, setIdx: number, field: string, value: any) => {
        if (!activeWorkout) return;
        const updated = { ...activeWorkout };
        updated.exercises[exIdx].sets[setIdx] = {
            ...updated.exercises[exIdx].sets[setIdx],
            [field]: value
        };
        setActiveWorkout(updated);
    };

    const addSet = (exIdx: number) => {
        if (!activeWorkout) return;
        const updated = { ...activeWorkout };
        updated.exercises[exIdx].sets.push({ weight: 0, reps: 0, rpe: 8, completed: false });
        setActiveWorkout(updated);
    };

    const finishWorkout = () => {
        if (!activeWorkout) return;
        
        const log: WorkoutLog = {
            workoutDate: new Date(),
            exercisesPerformed: []
        };

        activeWorkout.exercises.forEach(ex => {
            let totalWeight = 0, totalReps = 0, totalRpe = 0, count = 0;
            ex.sets.forEach(s => {
                if (s.completed) {
                    totalWeight = Math.max(totalWeight, s.weight);
                    totalReps += s.reps;
                    totalRpe += s.rpe;
                    count++;
                }
            });
            if (count > 0) {
                log.exercisesPerformed.push({
                    exerciseName: ex.name,
                    weight: totalWeight,
                    reps: totalReps,
                    rpe: totalRpe / count,
                    sets: count
                });
            }
        });

        setWorkoutHistory(prev => [...prev, log]);
        setActiveWorkout(null);
    };

    const resetData = () => {
        setWorkoutHistory([]);
        localStorage.removeItem('il_history');
    };

    return (
        <AppContext.Provider value={{
            userProfile, workoutHistory, muscleStates, cnsStress, activeWorkout, recommendation,
            updateSettings, startWorkout, updateActiveSet, addSet, finishWorkout, resetData
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within AppProvider");
    return context;
};