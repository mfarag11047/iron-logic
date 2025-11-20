export interface Exercise {
    id: string;
    name: string;
    type: 'Compound' | 'Isolation';
    primaryMuscle: string;
    secondaryMuscles?: string[];
    equipment?: string;
}

export interface ExerciseSet {
    weight: number;
    reps: number;
    rpe: number;
    completed: boolean;
}

export interface ActiveExercise {
    name: string;
    sets: ExerciseSet[];
}

export interface WorkoutSetLog {
    exerciseName: string;
    weight: number;
    reps: number;
    rpe: number;
    sets: number;
}

export interface WorkoutLog {
    workoutDate: Date;
    exercisesPerformed: WorkoutSetLog[];
}

export interface ActiveWorkout {
    startTime: Date;
    split: string;
    exercises: ActiveExercise[];
}

export interface MuscleState {
    recovery: number;
    lastWorked: Date | null;
    sizeCategory: 'large' | 'medium' | 'small';
}

export interface UserSettings {
    split: string;
    goal: 'hypertrophy' | 'strength' | 'general';
    volume: 'moderate' | 'low' | 'high';
}

export interface Recommendation {
    recommendedSplitDayType: string;
    exercises: Exercise[];
    cnsStress: number;
    reason: string;
}

export interface AppState {
    userProfile: UserSettings;
    workoutHistory: WorkoutLog[];
    muscleStates: Record<string, MuscleState>;
    cnsStress: number;
    activeWorkout: ActiveWorkout | null;
    recommendation: Recommendation | null;
}