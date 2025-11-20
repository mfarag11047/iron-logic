import { Exercise } from './types';

export const EXERCISE_DB: Exercise[] = [
    { id: "deadlift", name: "Deadlift", type: "Compound", primaryMuscle: "Glutes", secondaryMuscles: ["Core Muscles", "Adductors", "Forearm Flexors", "Rhomboids", "Shoulders", "Biceps"], equipment: "Barbell" },
    { id: "pull_up", name: "Pull-up", type: "Compound", primaryMuscle: "Latissimus Dorsi", secondaryMuscles: ["Trapezius", "Rhomboids", "Biceps", "Forearms"], equipment: "Pull-up Bar" },
    { id: "barbell_row", name: "Barbell Row", type: "Compound", primaryMuscle: "Latissimus Dorsi", secondaryMuscles: ["Biceps", "Erector Spinae", "Forearms"], equipment: "Barbell" },
    { id: "barbell_back_squat", name: "Barbell Back Squat", type: "Compound", primaryMuscle: "Quadriceps", secondaryMuscles: ["Erector Spinae", "Adductors", "Glutes"], equipment: "Barbell" },
    { id: "dumbbell_shoulder_press", name: "Dumbbell Shoulder Press", type: "Compound", primaryMuscle: "Anterior Deltoid", secondaryMuscles: ["Triceps Brachii", "Trapezius"], equipment: "Dumbbell" },
    { id: "barbell_bench_press", name: "Barbell Bench Press", type: "Compound", primaryMuscle: "Pectoralis Major", secondaryMuscles: ["Triceps Brachii", "Anterior Deltoid"], equipment: "Barbell" },
    { id: "romanian_deadlift", name: "Romanian Deadlift", type: "Compound", primaryMuscle: "Hamstrings", secondaryMuscles: ["Glutes", "Erector Spinae"], equipment: "Barbell" },
    { id: "dumbbell_bicep_curl", name: "Dumbbell Bicep Curl", type: "Isolation", primaryMuscle: "Biceps Brachii", secondaryMuscles: ["Forearms"], equipment: "Dumbbell" },
    { id: "triceps_pushdown", name: "Triceps Pushdown", type: "Isolation", primaryMuscle: "Triceps Brachii", secondaryMuscles: [], equipment: "Cable" },
    { id: "lateral_raises", name: "Lateral Raises", type: "Isolation", primaryMuscle: "Lateral Deltoid", secondaryMuscles: ["Trapezius"], equipment: "Dumbbell" },
    { id: "leg_press", name: "Leg Press", type: "Compound", primaryMuscle: "Quadriceps", secondaryMuscles: ["Glutes", "Hamstrings"], equipment: "Machine" },
    { id: "seated_cable_row", name: "Seated Cable Row", type: "Compound", primaryMuscle: "Latissimus Dorsi", secondaryMuscles: ["Biceps", "Rhomboids"], equipment: "Cable" },
    { id: "face_pulls", name: "Face Pulls", type: "Isolation", primaryMuscle: "Posterior Deltoids", secondaryMuscles: ["Rhomboids", "Trapezius"], equipment: "Cable" },
    { id: "incline_dumbbell_press", name: "Incline Dumbbell Press", type: "Compound", primaryMuscle: "Pectoralis Major", secondaryMuscles: ["Anterior Deltoid", "Triceps Brachii"], equipment: "Dumbbell" },
    { id: "leg_extensions", name: "Leg Extensions", type: "Isolation", primaryMuscle: "Quadriceps", equipment: "Machine" },
    { id: "lying_leg_curl", name: "Lying Leg Curl", type: "Isolation", primaryMuscle: "Hamstrings", equipment: "Machine" },
    { id: "calf_raises", name: "Calf Raises", type: "Isolation", primaryMuscle: "Calves", equipment: "Machine" },
    { id: "hanging_leg_raises", name: "Hanging Leg Raises", type: "Isolation", primaryMuscle: "Abs", equipment: "Bodyweight" },
    { id: "dips", name: "Dips", type: "Compound", primaryMuscle: "Triceps Brachii", secondaryMuscles: ["Pectoralis Major", "Anterior Deltoid"], equipment: "Bodyweight" }
];

export const MUSCLE_NAME_MAP: Record<string, string | string[]> = {
    "Glutes": "Glutes", "Quadriceps": "Quads", "Hamstrings": "Hamstrings",
    "Biceps": "Biceps", "Biceps Brachii": "Biceps", 
    "Triceps": "Triceps", "Triceps Brachii": "Triceps",
    "Pectoralis Major": "Chest", "Chest": "Chest",
    "Latissimus Dorsi": "Back", "Lats": "Back",
    "Anterior Deltoid": "Front Delts", "Lateral Deltoid": "Side Delts", "Posterior Deltoids": "Rear Delts",
    "Shoulders": "Shoulders", "Calves": "Calves", "Abs": "Abs", "Core Muscles": "Abs",
    "Erector Spinae": "ErectorSpinae", "Trapezius": "Trapezius", "Rhomboids": "Back",
    "Forearms": "Forearms", "Adductors": "Adductors"
};

export const MUSCLE_GROUPS = {
    PUSH: ["Chest", "Triceps", "Front Delts", "Side Delts", "Shoulders"],
    PULL: ["Back", "Biceps", "Rear Delts", "Trapezius", "Rhomboids", "ErectorSpinae", "Forearms"],
    LEGS: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"],
    CORE: ["Abs", "ErectorSpinae"]
};