import { Exercise } from './types';

export const EXERCISE_DB: Exercise[] = [
  {
    "id": "deadlift",
    "name": "Deadlift",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Core Muscles",
      "Adductors",
      "Forearm Flexors",
      "Rhomboids",
      "Shoulders",
      "Biceps"
    ],
    "equipment": "Barbell, Weight plates, Chalk, Lifting shoes"
  },
  {
    "id": "pull_up",
    "name": "Pull-up",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Trapezius",
      "Rhomboids",
      "Teres Major",
      "Infraspinatus",
      "Brachialis",
      "Posterior Deltoid",
      "Serratus Anterior",
      "Forearms",
      "Pectoralis Major",
      "Subscapularis",
      "Triceps Brachii",
      "Core"
    ],
    "equipment": "Pull-up Bar"
  },
  {
    "id": "barbell_row",
    "name": "Barbell Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps",
      "Erector Spinae",
      "Forearms",
      "Hamstrings",
      "Glutes",
      "Teres Minor",
      "Brachialis",
      "Brachioradialis",
      "Rotator Cuff"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "barbell_curls",
    "name": "Barbell Curls",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii (Long Head)",
    "secondaryMuscles": [
      "Forearm Flexors",
      "Deltoids (Stabilizer)",
      "Core (Stabilizer)"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "dumbbell_bicep_curl",
    "name": "Dumbbell Bicep Curl",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearm Flexors",
      "Anterior Deltoid"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "hammer_curls",
    "name": "Hammer Curls",
    "type": "Isolation",
    "primaryMuscle": "Brachialis",
    "secondaryMuscles": [
      "Forearms",
      "Anterior Deltoid",
      "Middle Trapezius",
      "Upper Trapezius",
      "Levator Scapulae",
      "Wrist Flexors",
      "Wrist Extensors"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "barbell_back_squat",
    "name": "Barbell Back Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Erector Spinae",
      "Adductors",
      "Calves",
      "Core",
      "Upper Back",
      "Shoulders"
    ],
    "equipment": "Barbell, Squat Rack, Weight Plates"
  },
  {
    "id": "leg_press",
    "name": "Leg Press",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Calves",
      "Adductors"
    ],
    "equipment": "Leg Press Machine"
  },
  {
    "id": "dumbbell_lunges",
    "name": "Dumbbell Lunges",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Calves",
      "Core",
      "Hip Flexors",
      "Adductors",
      "Spinal Erectors",
      "Grip"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "romanian_deadlift",
    "name": "Romanian Deadlift",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Adductors",
      "Trapezius",
      "Core",
      "Latissimus Dorsi",
      "Forearms",
      "Calves"
    ],
    "equipment": "Barbell, Dumbbell, Kettlebell, Smith Machine"
  },
  {
    "id": "lying_leg_curl",
    "name": "Lying Leg Curl",
    "type": "Isolation",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Gastrocnemius",
      "Soleus",
      "Gluteus Maximus"
    ],
    "equipment": "Leg curl machine"
  },
  {
    "id": "seated_leg_curl",
    "name": "Seated Leg Curl",
    "type": "Isolation",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves",
      "Glutes",
      "Hip Flexors",
      "Popliteus",
      "Sartorius",
      "Gracilis"
    ],
    "equipment": "Seated Leg Curl Machine"
  },
  {
    "id": "crunches",
    "name": "Crunches",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Obliques",
      "Transverse Abdominis",
      "Sternocleidomastoid"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "sit_ups",
    "name": "Sit-ups",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Obliques",
      "Transverse Abdominis",
      "Erector Spinae",
      "Neck Flexors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "leg_raises",
    "name": "Leg Raises",
    "type": "Isolation",
    "primaryMuscle": "Iliopsoas",
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Obliques",
      "Transverse Abdominis",
      "Sartorius",
      "Tensor Fasciae Latae"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "russian_twists",
    "name": "Russian Twists",
    "type": "Isolation",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Hip Flexors",
      "Lower Back",
      "Shoulders",
      "Rectus Femoris",
      "Sartorius",
      "Tensor Fasciae Latae"
    ],
    "equipment": "Bodyweight, Medicine Ball, Dumbbell, Weight Plate, Kettlebell"
  },
  {
    "id": "side_plank",
    "name": "Side Plank",
    "type": "Isolation",
    "primaryMuscle": "External Obliques",
    "secondaryMuscles": [
      "Gluteus Medius",
      "Gluteus Maximus",
      "Erector Spinae",
      "Rectus Abdominis",
      "Shoulder Stabilizers",
      "Hip Abductors",
      "Adductors",
      "Hamstrings",
      "Quadriceps",
      "Latissimus Dorsi"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "bicycle_crunches",
    "name": "Bicycle Crunches",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Transverse Abdominis",
      "Hip Flexors",
      "Quadriceps",
      "Hamstrings"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "dumbbell_shoulder_press",
    "name": "Dumbbell Shoulder Press",
    "type": "Compound",
    "primaryMuscle": "Anterior Deltoid",
    "secondaryMuscles": [
      "Rotator Cuff",
      "Trapezius",
      "Serratus Anterior",
      "Core",
      "Glutes",
      "Upper Pectorals"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "lateral_raises",
    "name": "Lateral Raises",
    "type": "Isolation",
    "primaryMuscle": "Lateral Deltoid",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Posterior Deltoid",
      "Upper Trapezius",
      "Supraspinatus",
      "Serratus Anterior",
      "Core Muscles",
      "Rotator Cuff"
    ],
    "equipment": "Dumbbell, Cable, Machine, Resistance Band"
  },
  {
    "id": "front_raises",
    "name": "Front Raises",
    "type": "Isolation",
    "primaryMuscle": "Anterior Deltoid",
    "secondaryMuscles": [
      "Lateral Deltoid",
      "Trapezius",
      "Biceps Brachii",
      "Serratus Anterior",
      "Triceps Brachii"
    ],
    "equipment": "Dumbbell, Barbell, Weight Plate, Resistance Band, Cable Machine"
  },
  {
    "id": "external_rotations",
    "name": "External Rotations",
    "type": "Isolation",
    "primaryMuscle": "Infraspinatus",
    "secondaryMuscles": [
      "Upper Back"
    ],
    "equipment": "Dumbbell, Resistance Band, Cable Machine, Weight Machine"
  },
  {
    "id": "shoulder_internal_rotation",
    "name": "Shoulder Internal Rotations",
    "type": "Isolation",
    "primaryMuscle": "Subscapularis",
    "secondaryMuscles": [],
    "equipment": "Dumbbell, Resistance Band, Cable Machine, Bodyweight"
  },
  {
    "id": "face_pulls",
    "name": "Face Pulls",
    "type": "Isolation",
    "primaryMuscle": "Posterior Deltoids",
    "secondaryMuscles": [
      "Lateral Deltoids",
      "Biceps",
      "Latissimus Dorsi",
      "Erector Spinae"
    ],
    "equipment": "Cable Machine, Rope Attachment"
  },
  {
    "id": "lat_pulldown",
    "name": "Lat Pulldown",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps Brachii",
      "Rhomboids",
      "Trapezius",
      "Teres Major",
      "Posterior Deltoids",
      "Brachialis",
      "Brachioradialis",
      "Forearms",
      "Rotator Cuff"
    ],
    "equipment": "Lat Pulldown Machine"
  },
  {
    "id": "seated_cable_row",
    "name": "Seated Cable Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps",
      "Forearms",
      "Erector Spinae",
      "Core",
      "Hamstrings",
      "Glutes",
      "Rotator Cuffs"
    ],
    "equipment": "Cable machine"
  },
  {
    "id": "single_arm_dumbbell_row",
    "name": "Single-Arm Dumbbell Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps Brachii",
      "Core",
      "Forearms"
    ],
    "equipment": "Dumbbell, Bench"
  },
  {
    "id": "barbell_shrugs",
    "name": "Barbell Shrugs",
    "type": "Isolation",
    "primaryMuscle": "Trapezius",
    "secondaryMuscles": [
      "Forearms",
      "Rhomboids",
      "Core Abdominals"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "dumbbell_shrugs",
    "name": "Dumbbell Shrugs",
    "type": "Isolation",
    "primaryMuscle": "Trapezius (Upper)",
    "secondaryMuscles": [
      "Levator Scapulae",
      "Rhomboids",
      "Forearm Flexors",
      "Core Abdominals",
      "Medial Deltoids"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "upright_rows",
    "name": "Upright Rows",
    "type": "Compound",
    "primaryMuscle": "Deltoids",
    "secondaryMuscles": [
      "Biceps",
      "Rhomboids",
      "Core"
    ],
    "equipment": "Barbell, Dumbbell, Kettlebell, Cable Machine, Resistance Band"
  },
  {
    "id": "barbell_bench_press",
    "name": "Barbell Bench Press",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Lateral Deltoids",
      "Posterior Deltoids",
      "Rotator Cuff",
      "Rhomboids",
      "Trapezius",
      "Latissimus Dorsi"
    ],
    "equipment": "Barbell, Bench"
  },
  {
    "id": "dumbbell_bench_press",
    "name": "Dumbbell Bench Press",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Pectoralis Minor",
      "Rotator Cuff",
      "Serratus Anterior",
      "Abdominals",
      "Lateral Deltoid",
      "Latissimus Dorsi"
    ],
    "equipment": "Dumbbell, Bench"
  },
  {
    "id": "incline_dumbbell_press",
    "name": "Incline Dumbbell Press",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major (Clavicular Head)",
    "secondaryMuscles": [
      "Triceps Brachii",
      "Core"
    ],
    "equipment": "Dumbbells, Incline Bench"
  },
  {
    "id": "close_grip_bench_press",
    "name": "Close-Grip Bench Press",
    "type": "Compound",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Pectoralis Major",
      "Anterior Deltoids"
    ],
    "equipment": "Barbell, Bench"
  },
  {
    "id": "triceps_pushdown",
    "name": "Triceps Pushdown",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable Machine, Rope attachment, V-bar attachment, Straight bar attachment, D-handle attachment"
  },
  {
    "id": "overhead_dumbbell_extension",
    "name": "Overhead Dumbbell Extension",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Deltoids",
      "Core",
      "Forearms"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "preacher_curls",
    "name": "Preacher Curls",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Brachioradialis",
      "Forearms",
      "Anterior Deltoids"
    ],
    "equipment": "Preacher Bench, EZ Curl Bar, Barbell, Dumbbell, Cable Machine"
  },
  {
    "id": "concentration_curls",
    "name": "Concentration Curls",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Forearms"
    ],
    "equipment": "Dumbbell, Bench"
  },
  {
    "id": "cable_curls",
    "name": "Cable Curls",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Forearms",
      "Brachioradialis",
      "Deltoids",
      "Core"
    ],
    "equipment": "Cable Machine, Straight Bar Attachment, D-Handle, EZ Bar, Rope Attachment"
  },
  {
    "id": "skull_crushers",
    "name": "Skullcrushers",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Anconeus",
      "Anterior Deltoid",
      "Forearm Flexors"
    ],
    "equipment": "Barbell, EZ Bar, Dumbbell, Weight Bench"
  },
  {
    "id": "triceps_dips",
    "name": "Triceps Dips",
    "type": "Compound",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Pectoralis Major",
      "Anterior Deltoids",
      "Core Stabilizers",
      "Latissimus Dorsi",
      "Rhomboids"
    ],
    "equipment": "Bodyweight, Parallel Bars, Dip Station, Bench, Chair, Gymnastic Rings"
  },
  {
    "id": "bench_dips",
    "name": "Bench Dips",
    "type": "Compound",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Pectoralis Major",
      "Lower Trapezius",
      "Latissimus Dorsi",
      "Rhomboids",
      "Core"
    ],
    "equipment": "Bodyweight, Bench"
  },
  {
    "id": "hack_squat",
    "name": "Hack Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Adductors",
      "Core"
    ],
    "equipment": "Hack Squat Machine, Barbell"
  },
  {
    "id": "front_squat",
    "name": "Front Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hamstrings",
      "Erector Spinae",
      "Abdominals",
      "Obliques",
      "Deltoids",
      "Trapezius (Upper Back)",
      "Adductors"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "goblet_squat",
    "name": "Goblet Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hamstrings",
      "Core Muscles",
      "Calves",
      "Upper Back",
      "Shoulders",
      "Forearms",
      "Biceps"
    ],
    "equipment": "Kettlebell, Dumbbell"
  },
  {
    "id": "glute_ham_raise",
    "name": "Glute-Ham Raise",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Lower Back",
      "Core",
      "Calves"
    ],
    "equipment": "Glute-Ham Developer"
  },
  {
    "id": "good_mornings",
    "name": "Good Mornings",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Erector Spinae",
      "Core",
      "Adductor Magnus",
      "Upper Back"
    ],
    "equipment": "Barbell, Squat Rack"
  },
  {
    "id": "nordic_hamstring_curl",
    "name": "Nordic Hamstring Curl",
    "type": "Isolation",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Erector Spinae",
      "Gastrocnemius"
    ],
    "equipment": "Bodyweight, Ankle anchor"
  },
  {
    "id": "dumbbell_wrist_curls",
    "name": "Dumbbell Wrist Curls",
    "type": "Isolation",
    "primaryMuscle": "Wrist Flexors",
    "secondaryMuscles": [
      "Finger Flexors",
      "Brachioradialis",
      "Pronator Teres"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "barbell_wrist_curls",
    "name": "Barbell Wrist Curls",
    "type": "Isolation",
    "primaryMuscle": "Flexor Carpi Radialis",
    "secondaryMuscles": [],
    "equipment": "Barbell"
  },
  {
    "id": "farmer_s_carry",
    "name": "Farmer's Carry",
    "type": "Isolation",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Shoulders",
      "Back",
      "Glutes",
      "Hamstrings",
      "Quadriceps",
      "Calves"
    ],
    "equipment": "Dumbbells, Kettlebells, Farmer's Carry Handles"
  },
  {
    "id": "dumbbell_wrist_extensions",
    "name": "Dumbbell Wrist Extensions",
    "type": "Isolation",
    "primaryMuscle": "Forearm Extensors",
    "secondaryMuscles": [],
    "equipment": "Dumbbell"
  },
  {
    "id": "barbell_wrist_extensions",
    "name": "Barbell Wrist Extensions",
    "type": "Isolation",
    "primaryMuscle": "Extensor Carpi Radialis Longus",
    "secondaryMuscles": [
      "Pronator Teres",
      "Flexor Carpi Radialis"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "reverse_barbell_curls",
    "name": "Reverse Barbell Curls",
    "type": "Isolation",
    "primaryMuscle": "Brachialis",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "standing_machine_calf_raises",
    "name": "Standing Machine Calf Raises",
    "type": "Isolation",
    "primaryMuscle": "Gastrocnemius",
    "secondaryMuscles": [
      "Fibularis Longus",
      "Fibularis Brevis",
      "Tibialis Posterior"
    ],
    "equipment": "Standing Calf Raise Machine"
  },
  {
    "id": "dumbbell_standing_calf_raises",
    "name": "Dumbbell Standing Calf Raises",
    "type": "Isolation",
    "primaryMuscle": "Gastrocnemius",
    "secondaryMuscles": [
      "Anterior Tibialis",
      "Core",
      "Lower Back"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "donkey_calf_raises",
    "name": "Donkey Calf Raises",
    "type": "Isolation",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Erector Spinae",
      "Abdominals"
    ],
    "equipment": "Bodyweight, Partner, Donkey Calf Raise Machine, Weight Plate, Smith Machine, Step/Platform"
  },
  {
    "id": "seated_calf_raise",
    "name": "Seated Calf Raise",
    "type": "Isolation",
    "primaryMuscle": "Soleus",
    "secondaryMuscles": [
      "Gastrocnemius",
      "Ankles",
      "Tibialis Posterior"
    ],
    "equipment": "Seated calf raise machine, Dumbbell, Barbell, Bench, Chair, Elevated surface, Resistance band"
  },
  {
    "id": "donkey_calf_raise",
    "name": "Donkey Calf Raise",
    "type": "Isolation",
    "primaryMuscle": "Gastrocnemius",
    "secondaryMuscles": [
      "Hamstrings",
      "Abdominals"
    ],
    "equipment": "Bodyweight, Donkey Calf Raise Machine, Weight Belt, Elevated Platform"
  },
  {
    "id": "calf_press_on_leg_press_machine",
    "name": "Calf Press on Leg Press Machine",
    "type": "Isolation",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Plantaris",
      "Flexor Hallucis Longus",
      "Flexor Digitorum Longus",
      "Quadriceps",
      "Hamstrings"
    ],
    "equipment": "Leg Press Machine"
  },
  {
    "id": "dumbbell_kickbacks",
    "name": "Dumbbell Kickbacks",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Rear Deltoids",
      "Upper Back",
      "Core",
      "Forearms"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "cable_overhead_triceps_extension",
    "name": "Cable Overhead Triceps Extension",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Abdominals",
      "Posterior Deltoids",
      "Trapezius"
    ],
    "equipment": "Cable machine, Rope attachment, Straight bar attachment, EZ bar, V bar, Single handle"
  },
  {
    "id": "diamond_push_up",
    "name": "Diamond Push-up",
    "type": "Compound",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Medial Deltoid",
      "Serratus Anterior",
      "Rectus Abdominis",
      "Obliques",
      "Glutes",
      "Quadriceps"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "push_up",
    "name": "Push-up",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Serratus Anterior",
      "Abdominals",
      "Glutes",
      "Quadriceps",
      "Erector Spinae",
      "Biceps Brachii"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "cable_crossover",
    "name": "Cable Crossover",
    "type": "Isolation",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Anterior Deltoids",
      "Serratus Anterior",
      "Core"
    ],
    "equipment": "Cable machine"
  },
  {
    "id": "dumbbell_flyes",
    "name": "Dumbbell Flyes",
    "type": "Isolation",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Biceps Brachii",
      "Triceps Brachii",
      "Scapular Stabilizers",
      "Core"
    ],
    "equipment": "Dumbbell, Bench"
  },
  {
    "id": "hip_thrust",
    "name": "Hip Thrust",
    "type": "Compound",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Adductors",
      "Gluteus Medius",
      "Gluteus Minimus",
      "Core Muscles",
      "Erector Spinae",
      "Hip Flexors"
    ],
    "equipment": "Bench, Barbell, Dumbbell, Resistance Band, Barbell Pad, Hip Thrust Machine"
  },
  {
    "id": "glute_bridge",
    "name": "Glute Bridge",
    "type": "Compound",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Hamstrings",
      "Transverse Abdominis",
      "Rectus Abdominis",
      "Obliques",
      "Erector Spinae",
      "Multifidus"
    ],
    "equipment": "Bodyweight, Resistance band, Dumbbell, Barbell, Bench, Glute machine"
  },
  {
    "id": "bulgarian_split_squat",
    "name": "Bulgarian Split Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Hip Adductors",
      "Hip Abductors",
      "Calves",
      "Hip Flexors"
    ],
    "equipment": "Bench, Dumbbell, Kettlebell, Barbell, Bodyweight"
  },
  {
    "id": "clamshell_exercise",
    "name": "Clamshells",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Core"
    ],
    "equipment": "Bodyweight, Resistance Band"
  },
  {
    "id": "banded_lateral_walk",
    "name": "Banded Lateral Walk",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Core",
      "Quadriceps",
      "Hamstrings",
      "Erector Spinae"
    ],
    "equipment": "Resistance Band"
  },
  {
    "id": "side_lying_leg_raise",
    "name": "Side Lying Leg Raise",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Tensor Fasciae Latae",
      "Obliques",
      "Core Stabilizers",
      "Lower Back Stabilizers"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "pigeon_pose",
    "name": "Pigeon Pose",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Gluteus Medius",
      "Gluteus Minimus",
      "Adductors",
      "Hamstrings",
      "Lower Back",
      "Outer Hip",
      "Quadriceps"
    ],
    "equipment": "Bodyweight, Yoga Mat"
  },
  {
    "id": "ninety_ninety_hip_rotation",
    "name": "90/90 Hip Rotation",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Obliques",
      "Core Stabilizers"
    ],
    "equipment": "Bodyweight, Yoga Block"
  },
  {
    "id": "frog_stretch",
    "name": "Frog Stretch",
    "type": "Isolation",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Glutes",
      "Hip Flexors",
      "Core",
      "Lower Back",
      "Tensor Fasciae Latae"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "arm_circles",
    "name": "Arm Circles",
    "type": "Isolation",
    "primaryMuscle": "Deltoid",
    "secondaryMuscles": [
      "Upper Trapezius",
      "Lower Trapezius",
      "Infraspinatus",
      "Biceps Brachii",
      "Triceps Brachii",
      "Pectoralis Major",
      "Core"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "pvc_pass_throughs",
    "name": "PVC Pass-Throughs",
    "type": "Isolation",
    "primaryMuscle": "Deltoids",
    "secondaryMuscles": [
      "Rotator Cuff",
      "Rhomboids",
      "Triceps"
    ],
    "equipment": "PVC Pipe"
  },
  {
    "id": "wall_slides",
    "name": "Wall Slides",
    "type": "Isolation",
    "primaryMuscle": "Serratus Anterior",
    "secondaryMuscles": [
      "Core Muscles"
    ],
    "equipment": "Wall, Bodyweight"
  },
  {
    "id": "box_jumps",
    "name": "Box Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Hip Flexors",
      "Lower Back",
      "Shoulders"
    ],
    "equipment": "Plyometric Box"
  },
  {
    "id": "broad_jumps",
    "name": "Broad Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Hip Flexors",
      "Shoulders"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "depth_jumps",
    "name": "Depth Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Calves",
      "Core",
      "Hip Flexors",
      "Adductors"
    ],
    "equipment": "Plyometric Box"
  },
  {
    "id": "kettlebell_swings",
    "name": "Kettlebell Swings",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abdominals",
      "Obliques",
      "Lats",
      "Quadriceps",
      "Shoulders"
    ],
    "equipment": "Kettlebell"
  },
  {
    "id": "medicine_ball_slams",
    "name": "Medicine Ball Slams",
    "type": "Compound",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Triceps",
      "Pectorals",
      "Spinal Erectors",
      "Calves",
      "Rotator Cuffs"
    ],
    "equipment": "Medicine Ball"
  },
  {
    "id": "plank",
    "name": "Plank",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Deltoids",
      "Pectorals",
      "Latissimus Dorsi",
      "Trapezius",
      "Rhomboids",
      "Biceps",
      "Triceps",
      "Gluteus Maximus",
      "Gluteus Medius",
      "Gluteus Minimus",
      "Quadriceps",
      "Hamstrings",
      "Calves",
      "Pelvic Floor",
      "Diaphragm",
      "Multifidus",
      "Quadratus Lumborum",
      "Hip Flexors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "bird_dog_exercise",
    "name": "Bird-dog",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Deltoids",
      "Latissimus Dorsi",
      "Hamstrings",
      "Serratus Anterior",
      "Multifidus",
      "Pelvic Floor Muscles"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "hollow_body_hold",
    "name": "Hollow Body Hold",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Hip Flexors",
      "Erector Spinae",
      "Quadratus Lumborum",
      "Psoas",
      "Glutes",
      "Shoulders",
      "Serratus Anterior",
      "Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "single_leg_stance",
    "name": "Single-Leg Stance",
    "type": "Isolation",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Intrinsic Foot Muscles",
      "Tibialis Anterior",
      "Deep Hip Rotators",
      "Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "tandem_walk",
    "name": "Tandem Walk",
    "type": "Isolation",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Core",
      "Intrinsic Foot Muscles",
      "Pelvic Stabilizers"
    ],
    "equipment": "Bodyweight, Optional: Wall, Optional: Counter, Optional: Marked line on floor"
  },
  {
    "id": "bosu_ball_standing",
    "name": "Bosu Ball Standing",
    "type": "Isolation",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Hamstrings",
      "Hip Adductors",
      "Hip Abductors",
      "Calves"
    ],
    "equipment": "Bosu Ball"
  },
  {
    "id": "high_knees",
    "name": "High Knees",
    "type": "Compound",
    "primaryMuscle": "Hip Flexors",
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Core",
      "Biceps",
      "Triceps"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "butt_kicks",
    "name": "Butt Kicks",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Quadriceps",
      "Hip Flexors",
      "Core"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "a_skips",
    "name": "A-Skips",
    "type": "Compound",
    "primaryMuscle": "Hip Flexors",
    "secondaryMuscles": [
      "Core",
      "Quadriceps",
      "Foot/Ankle Intrinsic Muscles",
      "Shoulders",
      "Arms"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "bodyweight_squat",
    "name": "Bodyweight Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Calves",
      "Adductors",
      "Hip Flexors",
      "Core",
      "Erector Spinae"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "step_ups",
    "name": "Step-ups",
    "type": "Compound",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Gluteus Medius",
      "Hip Adductors",
      "Calves",
      "Core",
      "Erector Spinae"
    ],
    "equipment": "Box, Step, Bench, Chair, Stairs, Dumbbell, Barbell, Bodyweight"
  },
  {
    "id": "wall_sits",
    "name": "Wall Sits",
    "type": "Isolation",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hamstrings",
      "Core",
      "Calves"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "cable_pull_through",
    "name": "Cable Pull-Through",
    "type": "Compound",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Erector Spinae",
      "Core",
      "Adductor Magnus",
      "Soleus"
    ],
    "equipment": "Cable Machine, Rope Attachment"
  },
  {
    "id": "reverse_hyperextension",
    "name": "Reverse Hyperextension",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Core"
    ],
    "equipment": "Reverse Hyperextension Machine, Glute-Ham Developer (GHD), Bench"
  },
  {
    "id": "hyperextension",
    "name": "Hyperextension",
    "type": "Compound",
    "primaryMuscle": "Erector Spinae",
    "secondaryMuscles": [
      "Core",
      "Abdominals"
    ],
    "equipment": "Hyperextension Bench, Roman Chair, Bodyweight, Dumbbell, Weight Plate"
  },
  {
    "id": "leg_extension",
    "name": "Leg Extension",
    "type": "Isolation",
    "primaryMuscle": "Quadriceps Femoris",
    "secondaryMuscles": [
      "Hip Flexors",
      "Rectus Abdominis",
      "Obliques",
      "Hamstrings"
    ],
    "equipment": "Leg Extension Machine"
  },
  {
    "id": "pistol_squat",
    "name": "Pistol Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip Flexors",
      "Core",
      "Calves",
      "Hip Adductors",
      "Hip Abductors",
      "Hip Rotators"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "sissy_squat",
    "name": "Sissy Squat",
    "type": "Isolation",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip Flexors",
      "Core",
      "Glutes",
      "Hamstrings",
      "Ankle Stabilizers"
    ],
    "equipment": "Bodyweight, Stable Surface, Sissy Squat Machine, Resistance Bands"
  },
  {
    "id": "plate_pinches",
    "name": "Plate Pinches",
    "type": "Isolation",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Shoulder Stabilizers",
      "Core"
    ],
    "equipment": "Weight Plates"
  },
  {
    "id": "hand_gripper_squeezes",
    "name": "Hand Gripper Squeezes",
    "type": "Isolation",
    "primaryMuscle": "Flexor Digitorum Superficialis",
    "secondaryMuscles": [
      "Forearm Extensors"
    ],
    "equipment": "Hand Gripper"
  },
  {
    "id": "dead_hangs",
    "name": "Dead Hangs",
    "type": "Isolation",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Deltoids",
      "Trapezius",
      "Rhomboids",
      "Core",
      "Scapular Stabilizers"
    ],
    "equipment": "Pull-up Bar, Bodyweight"
  },
  {
    "id": "dead_bug_exercise",
    "name": "Dead Bug",
    "type": "Isolation",
    "primaryMuscle": "Transverse Abdominis",
    "secondaryMuscles": [
      "Hip Flexors",
      "Erector Spinae",
      "Diaphragm"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "pallof_press",
    "name": "Pallof Press",
    "type": "Compound",
    "primaryMuscle": "Transverse Abdominis",
    "secondaryMuscles": [
      "Erector Spinae",
      "Gluteus Maximus",
      "Quadratus Lumborum",
      "Deltoids",
      "Pectoralis Major",
      "Latissimus Dorsi",
      "Triceps",
      "Scapular Stabilizers"
    ],
    "equipment": "Cable Machine, Resistance Band"
  },
  {
    "id": "stability_ball_rollout",
    "name": "Stability Ball Rollout",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Latissimus Dorsi",
      "Shoulders",
      "Transverse Abdominis",
      "Hip Flexors",
      "Triceps"
    ],
    "equipment": "Stability Ball"
  },
  {
    "id": "donkey_kicks",
    "name": "Donkey Kicks",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Hamstrings",
      "Core Muscles",
      "Lower Back Stabilizers",
      "Shoulder Stabilizers"
    ],
    "equipment": "Bodyweight, Resistance Band, Ankle Weights, Dumbbell"
  },
  {
    "id": "fire_hydrant_exercise",
    "name": "Fire Hydrant Exercise",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Core",
      "Psoas",
      "Piriformis",
      "Tensor Fasciae Latae"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "sumo_squat",
    "name": "Sumo Squat",
    "type": "Compound",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Hip Flexors",
      "Core",
      "Pelvic Floor",
      "Erector Spinae",
      "Obliques"
    ],
    "equipment": "Bodyweight, Dumbbell, Kettlebell, Barbell, Sandbag, Smith Machine"
  },
  {
    "id": "single_leg_romanian_deadlift",
    "name": "Single-Leg Romanian Deadlift",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Erector Spinae",
      "Core",
      "Calves",
      "Adductors",
      "Forearm Flexors",
      "Lats",
      "Trapezius",
      "Hip Flexors"
    ],
    "equipment": "Bodyweight, Dumbbell, Kettlebell, Barbell, Landmine attachment, Cable machine, Smith machine"
  },
  {
    "id": "swiss_ball_hamstring_curl",
    "name": "Swiss Ball Hamstring Curl",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Calves"
    ],
    "equipment": "Swiss Ball"
  },
  {
    "id": "sliding_leg_curl",
    "name": "Sliding Leg Curl",
    "type": "Isolation",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Core Muscles",
      "Calves"
    ],
    "equipment": "Sliders, Smooth Surface"
  },
  {
    "id": "ab_wheel_rollout",
    "name": "Ab Wheel Rollout",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Latissimus Dorsi",
      "Deltoids",
      "Erector Spinae",
      "Glutes",
      "Pectorals",
      "Triceps",
      "Hip Flexors",
      "Forearms"
    ],
    "equipment": "Ab Wheel"
  },
  {
    "id": "turkish_get_up",
    "name": "Turkish Get-up",
    "type": "Compound",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Trapezius",
      "Latissimus Dorsi",
      "Triceps",
      "Forearms",
      "Hip Flexors"
    ],
    "equipment": "Kettlebell, Dumbbell, Barbell, Bodyweight"
  },
  {
    "id": "suitcase_carry",
    "name": "Suitcase Carry",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Spinal Erectors",
      "Glutes",
      "Quadriceps",
      "Hamstrings",
      "Calves",
      "Hip Flexors",
      "Rhomboids"
    ],
    "equipment": "Dumbbell, Kettlebell"
  },
  {
    "id": "barbell_overhead_press",
    "name": "Barbell Overhead Press",
    "type": "Compound",
    "primaryMuscle": "Deltoids",
    "secondaryMuscles": [
      "Trapezius",
      "Core",
      "Rotator Cuff",
      "Serratus Anterior",
      "Glutes",
      "Quadriceps",
      "Hamstrings"
    ],
    "equipment": "Barbell, Weight Plates"
  },
  {
    "id": "incline_barbell_press",
    "name": "Incline Barbell Press",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Triceps Brachii",
      "Pectoralis Major (Sternal Head)",
      "Serratus Anterior",
      "Trapezius",
      "Rhomboids",
      "Rotator Cuff",
      "Pectoralis Minor",
      "Coracobrachialis",
      "Abdominals",
      "Obliques",
      "Lower Back"
    ],
    "equipment": "Barbell, Adjustable Bench"
  },
  {
    "id": "machine_chest_press",
    "name": "Machine Chest Press",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Serratus Anterior",
      "Biceps Brachii",
      "Rotator Cuff",
      "Core"
    ],
    "equipment": "Chest press machine"
  },
  {
    "id": "monster_walk",
    "name": "Monster Walk",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Tensor Fasciae Latae",
      "Hamstrings",
      "Quadriceps",
      "Adductors",
      "Core"
    ],
    "equipment": "Resistance Band"
  },
  {
    "id": "cable_kickbacks",
    "name": "Cable Kickbacks",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Hamstrings",
      "Core"
    ],
    "equipment": "Cable Machine, Ankle Strap"
  },
  {
    "id": "frog_pumps",
    "name": "Frog Pumps",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Hamstrings",
      "Core"
    ],
    "equipment": "Bodyweight, Dumbbell"
  },
  {
    "id": "band_pull_aparts",
    "name": "Band Pull-Aparts",
    "type": "Compound",
    "primaryMuscle": "Rhomboids",
    "secondaryMuscles": [
      "Rotator Cuff",
      "Lower Trapezius",
      "Upper Trapezius",
      "Teres Major",
      "Biceps",
      "Triceps",
      "Forearm Muscles",
      "Serratus Anterior"
    ],
    "equipment": "Resistance Band"
  },
  {
    "id": "scapular_push_ups",
    "name": "Scapular Push-ups",
    "type": "Isolation",
    "primaryMuscle": "Serratus Anterior",
    "secondaryMuscles": [
      "Trapezius",
      "Rhomboids",
      "Pectoralis Minor",
      "Core Abdominals"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "thread_the_needle_stretch",
    "name": "Thread the Needle Stretch",
    "type": "Isolation",
    "primaryMuscle": "Thoracic Erector Spinae",
    "secondaryMuscles": [
      "Pectorals",
      "Abdominals",
      "Gluteal Muscles"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "cable_wood_chop",
    "name": "Cable Wood Chop",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Shoulders",
      "Erector Spinae",
      "Glutes",
      "Hamstrings",
      "Quadriceps",
      "Hip Flexors"
    ],
    "equipment": "Cable Machine, D-handle or Rope Attachment"
  },
  {
    "id": "dumbbell_side_bend",
    "name": "Dumbbell Side Bend",
    "type": "Isolation",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Transverse Abdominis",
      "Erector Spinae",
      "Quadratus Lumborum",
      "Serratus Anterior",
      "Forearms"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "hanging_oblique_raise",
    "name": "Hanging Oblique Raise",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Transverse Abdominis",
      "Shoulders",
      "Forearms"
    ],
    "equipment": "Pull-up Bar"
  },
  {
    "id": "cable_chop",
    "name": "Cable Chop",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Erector Spinae",
      "Shoulders",
      "Glutes",
      "Hips",
      "Latissimus Dorsi",
      "Trapezius"
    ],
    "equipment": "Cable Machine"
  },
  {
    "id": "cable_lift",
    "name": "Cable Lift",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Glutes",
      "Quadriceps",
      "Biceps",
      "Triceps",
      "Serratus Anterior"
    ],
    "equipment": "Cable machine, Cable handle"
  },
  {
    "id": "bear_crawl",
    "name": "Bear Crawl",
    "type": "Compound",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Triceps",
      "Biceps",
      "Serratus Anterior",
      "Hip Flexors",
      "Wrists"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "prowler_push",
    "name": "Prowler Push",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Shoulders",
      "Triceps",
      "Lower Back"
    ],
    "equipment": "Prowler Sled, Weight Plates"
  },
  {
    "id": "zercher_squat",
    "name": "Zercher Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hamstrings",
      "Core",
      "Erector Spinae",
      "Upper Back",
      "Biceps",
      "Calves",
      "Adductors"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "belt_squat",
    "name": "Belt Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Calves",
      "Adductors",
      "Core"
    ],
    "equipment": "Belt Squat Machine, Belt, Weight Plates"
  },
  {
    "id": "reverse_sled_pull",
    "name": "Reverse Sled Pull",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Calves",
      "Lower Back",
      "Abdominals",
      "Adductors",
      "Lats",
      "Shoulders",
      "Traps",
      "Upper Back",
      "Erector Spinae",
      "Forearms",
      "Biceps",
      "Hip Flexors"
    ],
    "equipment": "Sled, Harness, Handles, Weight Plates"
  },
  {
    "id": "lateral_lunge",
    "name": "Lateral Lunge",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Calves"
    ],
    "equipment": "Bodyweight, Dumbbell, Kettlebell, Barbell"
  },
  {
    "id": "superman_exercise",
    "name": "Superman Exercise",
    "type": "Compound",
    "primaryMuscle": "Erector Spinae",
    "secondaryMuscles": [
      "Rhomboids",
      "Trapezius",
      "Posterior Deltoids",
      "Rectus Abdominis",
      "Transverse Abdominis",
      "Obliques"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "kneeling_squat",
    "name": "Kneeling Squat",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Erector Spinae",
      "Abdominals",
      "Hip Flexors",
      "Adductor Magnus"
    ],
    "equipment": "Bodyweight, Barbell, Dumbbell, Kettlebell, Smith machine"
  },
  {
    "id": "ghd_hip_extension",
    "name": "GHD Hip Extension",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Spinal Erectors",
      "Abdominals"
    ],
    "equipment": "Glute-Ham Developer (GHD)"
  },
  {
    "id": "jump_squats",
    "name": "Jump Squats",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Calves",
      "Core",
      "Lower Back"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "clapping_push_ups",
    "name": "Clapping Push-ups",
    "type": "Compound",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Core muscles",
      "Scapular Stabilizers",
      "Glutes"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "split_squat_jumps",
    "name": "Split Squat Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Calves",
      "Core",
      "Hip Flexors",
      "Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "dragon_flag",
    "name": "Dragon Flag",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Serratus Anterior",
      "Shoulders",
      "Biceps"
    ],
    "equipment": "Bodyweight, Bench, Sturdy Anchor"
  },
  {
    "id": "l_sit",
    "name": "L-Sit",
    "type": "Compound",
    "primaryMuscle": "Abdominals",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps",
      "Pectorals",
      "Latissimus Dorsi",
      "Quadriceps",
      "Obliques",
      "Forearms"
    ],
    "equipment": "Bodyweight, Parallettes, Dip Bars, Gymnastic Rings"
  },
  {
    "id": "toes_to_bar",
    "name": "Toes to Bar",
    "type": "Compound",
    "primaryMuscle": "Abdominals",
    "secondaryMuscles": [
      "Obliques",
      "Serratus Anterior",
      "Forearms",
      "Shoulders",
      "Back"
    ],
    "equipment": "Pull-up bar, Bodyweight"
  },
  {
    "id": "sumo_deadlift",
    "name": "Sumo Deadlift",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Erector Spinae",
      "Trapezius",
      "Abdominals",
      "Forearms",
      "Obliques",
      "Deltoids",
      "Tibialis Anterior"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "box_squat",
    "name": "Box Squat",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Lower Back",
      "Core",
      "Hip Abductors",
      "Spinal Erectors",
      "Calves",
      "Adductors",
      "Anterior Tibialis"
    ],
    "equipment": "Barbell, Squat Rack, Box, Kettlebell, Dumbbell"
  },
  {
    "id": "pause_squat",
    "name": "Pause Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hamstrings",
      "Adductors",
      "Erector Spinae",
      "Core",
      "Hip Flexors"
    ],
    "equipment": "Barbell, Dumbbell, Kettlebell, Bodyweight"
  },
  {
    "id": "static_barbell_hold",
    "name": "Static Barbell Hold",
    "type": "Isolation",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Abdominals",
      "Upper Back",
      "Triceps",
      "Neck Muscles",
      "Glutes",
      "Hamstrings",
      "Quadriceps"
    ],
    "equipment": "Barbell, Power Rack"
  },
  {
    "id": "towel_pull_ups",
    "name": "Towel Pull-ups",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps Brachii",
      "Posterior Deltoids",
      "Core",
      "Rhomboids",
      "Trapezius (Middle)",
      "Hand Muscles"
    ],
    "equipment": "Pull-up Bar, Towel, Bodyweight"
  },
  {
    "id": "zottman_curls",
    "name": "Zottman Curls",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Forearm Extensors",
      "Wrist Extensors",
      "Core"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "standing_cable_hamstring_curl",
    "name": "Standing Cable Hamstring Curl",
    "type": "Isolation",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Abs",
      "Obliques",
      "Adductors",
      "Calves"
    ],
    "equipment": "Cable Machine, Ankle Strap"
  },
  {
    "id": "machine_hip_abduction",
    "name": "Machine Hip Abduction",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Gluteus Maximus",
      "Piriformis",
      "Sartorius",
      "Obturator Internus",
      "Superior Gemellus",
      "Inferior Gemellus",
      "Quadratus Femoris"
    ],
    "equipment": "Hip Abduction Machine"
  },
  {
    "id": "cossack_squat",
    "name": "Cossack Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Hip Stabilizers",
      "Calves",
      "Hip Flexors"
    ],
    "equipment": "Bodyweight, Kettlebell, Dumbbell, Barbell"
  },
  {
    "id": "kettlebell_windmill",
    "name": "Kettlebell Windmill",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Rotator Cuff",
      "Scapular Stabilizers",
      "Latissimus Dorsi",
      "Trapezius",
      "Triceps",
      "Transverse Abdominis",
      "Multifidus",
      "Adductors",
      "Piriformis"
    ],
    "equipment": "Kettlebell"
  },
  {
    "id": "overhead_squat",
    "name": "Overhead Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip Flexors",
      "Adductors",
      "Calves",
      "Trapezius",
      "Rhomboids",
      "Latissimus Dorsi",
      "Triceps",
      "Forearm Flexors",
      "Forearm Extensors",
      "Foot Intrinsics"
    ],
    "equipment": "Barbell, Dumbbell, Kettlebell"
  },
  {
    "id": "renegade_row",
    "name": "Renegade Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Deltoids",
      "Biceps",
      "Triceps",
      "Forearms",
      "Erector Spinae",
      "Rotator Cuff",
      "Glutes"
    ],
    "equipment": "Dumbbell, Kettlebell"
  },
  {
    "id": "standing_banded_glute_kickback",
    "name": "Standing Banded Glute Kickback",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Hamstrings",
      "Erector Spinae",
      "Core"
    ],
    "equipment": "Resistance Band"
  },
  {
    "id": "seated_banded_hip_abduction",
    "name": "Seated Banded Hip Abduction",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Core (Stabilizers)"
    ],
    "equipment": "Resistance Band, Bench, Chair"
  },
  {
    "id": "single_leg_glute_squeeze",
    "name": "Single-Leg Glute Squeeze",
    "type": "Isolation",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Core",
      "Hip Abductors",
      "Lower Back"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "cable_kneeling_crunch",
    "name": "Cable Kneeling Crunch",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Obliques",
      "Erector Spinae",
      "Hip Flexors"
    ],
    "equipment": "Cable machine, Rope attachment"
  },
  {
    "id": "landmine_anti_rotation_press",
    "name": "Landmine Anti-Rotation Press",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Erector Spinae",
      "Scapular Stabilizers",
      "Glutes"
    ],
    "equipment": "Barbell, Landmine Attachment"
  },
  {
    "id": "landmine_rotations",
    "name": "Landmine Rotations",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Deltoids",
      "Scapular Stabilizers",
      "Glutes",
      "Trapezius"
    ],
    "equipment": "Barbell, Landmine attachment, Weight plates, Weight collar"
  },
  {
    "id": "tuck_jumps",
    "name": "Tuck Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Abdominals",
      "Obliques",
      "Erector Spinae",
      "Shoulders",
      "Biceps"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "pogo_jumps",
    "name": "Pogo Jumps",
    "type": "Compound",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings",
      "Glutes"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "lateral_bounds",
    "name": "Lateral Bounds",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Hip Adductors",
      "Hip Abductors",
      "Rotator Cuffs"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "stomach_vacuum",
    "name": "Stomach Vacuum",
    "type": "Isolation",
    "primaryMuscle": "Transversus Abdominis",
    "secondaryMuscles": [
      "Internal Obliques",
      "Pelvic Floor Muscles",
      "Diaphragm",
      "Multifidus"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "mcgill_curl_up",
    "name": "McGill Curl-up",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [],
    "equipment": "Bodyweight"
  },
  {
    "id": "copenhagen_plank",
    "name": "Copenhagen Plank",
    "type": "Compound",
    "primaryMuscle": "Hip Adductors",
    "secondaryMuscles": [
      "Obliques",
      "Gluteus Medius",
      "Gluteus Minimus",
      "Transverse Abdominis",
      "Rectus Abdominis",
      "Hip Flexors",
      "Rotator Cuff"
    ],
    "equipment": "Bench, Chair, Elevated Surface, Bodyweight"
  },
  {
    "id": "isometric_squat_hold",
    "name": "Isometric Squat Hold",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Spinal Erectors",
      "Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "static_lunge_hold",
    "name": "Static Lunge Hold",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Adductors",
      "Calves",
      "Hip Flexors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "chair_pose",
    "name": "Chair Pose",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Erector Spinae",
      "Calves",
      "Ankles",
      "Shoulders",
      "Hip Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "handstand_push_up",
    "name": "Handstand Push-up",
    "type": "Compound",
    "primaryMuscle": "Deltoids",
    "secondaryMuscles": [
      "Trapezius",
      "Latissimus Dorsi",
      "Serratus Anterior",
      "Core",
      "Forearms",
      "Rhomboids"
    ],
    "equipment": "Bodyweight, Wall (optional for support), Parallettes (optional), Mat/Pad (optional)"
  },
  {
    "id": "muscle_up",
    "name": "Muscle-up",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Upper Trapezius",
      "Lower Trapezius",
      "Serratus Anterior",
      "Forearm Flexors",
      "Core Stabilizers"
    ],
    "equipment": "Pull-up Bar, Gymnastic Rings"
  },
  {
    "id": "inverted_rows",
    "name": "Inverted Rows",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps Brachii",
      "Forearm Flexors",
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Erector Spinae",
      "Gluteus Maximus",
      "Hamstrings",
      "Rectus Abdominis",
      "Obliques"
    ],
    "equipment": "Barbell, Suspension Trainer, Rings, Chairs, Dowel, Bodyweight"
  },
  {
    "id": "vertical_jump",
    "name": "Vertical Jump",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hamstrings",
      "Transverse Abdominis",
      "Multifidus",
      "Erector Spinae",
      "Anterior Deltoid"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "single_leg_hops",
    "name": "Single-Leg Hops",
    "type": "Compound",
    "primaryMuscle": "Gastrocnemius",
    "secondaryMuscles": [
      "Ankle Stabilizers",
      "Core",
      "Foot Intrinsic Muscles"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "forward_bounding",
    "name": "Forward Bounding",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Adductors",
      "Tensor Fasciae Latae"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "burpee",
    "name": "Burpee",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Obliques",
      "Erector Spinae",
      "Hip Flexors",
      "Latissimus Dorsi"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "mountain_climbers",
    "name": "Mountain Climbers",
    "type": "Compound",
    "primaryMuscle": "Core",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps",
      "Chest",
      "Glutes",
      "Hamstrings",
      "Serratus Anterior",
      "Calves",
      "Latissimus Dorsi",
      "Lower Back"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "sprints",
    "name": "Sprints",
    "type": "Compound",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Hip Flexors",
      "Core",
      "Anterior Tibialis",
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Bodyweight, Running Shoes"
  },
  {
    "id": "star_jumps",
    "name": "Star Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Abdominals",
      "Hip Flexors",
      "Chest"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "kneeling_jumps",
    "name": "Kneeling Jumps",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hip Flexors",
      "Core",
      "Calves"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "medicine_ball_chest_pass",
    "name": "Medicine Ball Chest Pass",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Core Muscles",
      "Serratus Anterior",
      "Rotator Cuff",
      "Quadriceps",
      "Gluteal Muscles"
    ],
    "equipment": "Medicine Ball"
  },
  {
    "id": "medicine_ball_overhead_throw",
    "name": "Medicine Ball Overhead Throw",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Triceps",
      "Trapezius",
      "Glutes",
      "Hips",
      "Scapular Stabilizers",
      "Rotator Cuff"
    ],
    "equipment": "Medicine Ball"
  },
  {
    "id": "hurdle_jumps",
    "name": "Hurdle Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Hip Flexors",
      "Tibialis Anterior",
      "Deltoids"
    ],
    "equipment": "Hurdles"
  },
  {
    "id": "t_drill",
    "name": "T-Drill",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Adductors",
      "Abductors",
      "Core",
      "Tibialis Anterior"
    ],
    "equipment": "Cones, Markers"
  },
  {
    "id": "l_drill_3_cone_drill",
    "name": "L-Drill (3-Cone Drill)",
    "type": "Isolation",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip Flexors",
      "Adductors",
      "Abductors",
      "Core Musculature",
      "Ankle Stabilizers",
      "Shoulders",
      "Arms"
    ],
    "equipment": "Cones"
  },
  {
    "id": "5_10_5_shuttle",
    "name": "5-10-5 Shuttle (Pro-Agility Test)",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Erector Spinae",
      "Abdominals",
      "Shoulders",
      "Arms"
    ],
    "equipment": "Cones, Measuring Tape"
  },
  {
    "id": "agility_ladder_ickey_shuffle",
    "name": "Agility Ladder Ickey Shuffle",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Hip Flexors",
      "Core",
      "Adductors",
      "Abductors",
      "Ankle Stabilizers"
    ],
    "equipment": "Agility Ladder, Bodyweight"
  },
  {
    "id": "cone_weaving_drill",
    "name": "Cone Weaving Drill",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Obliques",
      "Hip Adductors",
      "Hip Abductors",
      "Erector Spinae"
    ],
    "equipment": "Cones, Bodyweight"
  },
  {
    "id": "carioca_grapevine_drill",
    "name": "Carioca (Grapevine Drill)",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Calves",
      "Core",
      "Quadriceps",
      "Tibialis Anterior",
      "Fibularis Longus and Brevis",
      "Hip Rotators",
      "Upper Body (stabilizers)"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "medicine_ball_rotational_throws",
    "name": "Medicine Ball Rotational Throws",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Erector Spinae",
      "Quadriceps",
      "Hamstrings",
      "Rotator Cuff"
    ],
    "equipment": "Medicine Ball, Wall"
  },
  {
    "id": "depth_drop",
    "name": "Depth Drop",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Ankle Stabilizers"
    ],
    "equipment": "Box"
  },
  {
    "id": "slalom_hops",
    "name": "Slalom Hops",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Adductors",
      "Abductors",
      "Hip Flexors",
      "Ankle Stabilizers"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "tree_pose",
    "name": "Tree Pose (Vrksasana)",
    "type": "Isolation",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Ankle Stabilizers",
      "Foot Muscles",
      "Adductors",
      "Iliopsoas",
      "Sartorius",
      "Deltoids",
      "Triceps",
      "Trapezius",
      "Erector Spinae",
      "Intercostals"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "warrior_iii_pose",
    "name": "Warrior III Pose",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Deltoids",
      "Triceps",
      "Calves",
      "Ankle Stabilizers",
      "Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "clock_reach_exercise",
    "name": "Clock Reach Exercise",
    "type": "Isolation",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hip Flexors",
      "Hip Adductors",
      "Calves"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "plyometric_push_up",
    "name": "Plyometric Push-up",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Core",
      "Serratus Anterior"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "scissor_jumps",
    "name": "Scissor Jumps",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Core",
      "Adductors",
      "Abductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "frog_jumps",
    "name": "Frog Jumps",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Core",
      "Hip Flexors",
      "Ankles"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "decline_barbell_bench_press",
    "name": "Decline Barbell Bench Press",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Triceps Brachii",
      "Serratus Anterior",
      "Core",
      "Latissimus Dorsi"
    ],
    "equipment": "Barbell, Decline Bench"
  },
  {
    "id": "t_bar_row",
    "name": "T-Bar Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps Brachii",
      "Forearms",
      "Erector Spinae",
      "Core",
      "Hamstrings",
      "Glutes",
      "Teres Major",
      "Teres Minor"
    ],
    "equipment": "Barbell, Landmine Attachment, T-Bar Row Machine, V-Handle (Close-grip handle), Weight Plates"
  },
  {
    "id": "chest_supported_machine_row",
    "name": "Chest-Supported Machine Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps",
      "Forearms",
      "Teres Major",
      "Infraspinatus"
    ],
    "equipment": "Machine, Incline Bench"
  },
  {
    "id": "straight_arm_cable_pulldown",
    "name": "Straight-Arm Cable Pulldown",
    "type": "Isolation",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Posterior Deltoid",
      "Triceps",
      "Trapezius",
      "Rhomboids",
      "Teres Major",
      "Core"
    ],
    "equipment": "Cable Machine, Rope Handle, Straight Bar, Lat Bar"
  },
  {
    "id": "v_ups",
    "name": "V-ups",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Obliques",
      "Transverse Abdominis",
      "Erector Spinae",
      "Glutes",
      "Hamstrings",
      "Quadriceps",
      "Deltoids",
      "Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "reverse_plank",
    "name": "Reverse Plank",
    "type": "Compound",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Core",
      "Posterior Deltoids",
      "Triceps",
      "Rhomboids",
      "Trapezius"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "boat_pose",
    "name": "Boat Pose",
    "type": "Compound",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Quadriceps",
      "Hamstrings",
      "Erector Spinae",
      "Gluteus",
      "Adductors",
      "Deltoids",
      "Biceps",
      "Triceps",
      "Serratus Anterior"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "chin_up",
    "name": "Chin-up",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Teres Major",
      "Posterior Deltoid",
      "Brachioradialis",
      "Trapezius",
      "Rhomboids",
      "Forearm Muscles",
      "Core Muscles",
      "Pectoralis Major",
      "Erector Spinae",
      "Infraspinatus"
    ],
    "equipment": "Pull-up bar, Bodyweight"
  },
  {
    "id": "dumbbell_reverse_fly",
    "name": "Dumbbell Reverse Fly",
    "type": "Isolation",
    "primaryMuscle": "Posterior Deltoids",
    "secondaryMuscles": [
      "Rhomboids",
      "Trapezius",
      "Rotator Cuff"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "machine_pullover",
    "name": "Machine Pullover",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Triceps",
      "Rhomboids",
      "Deltoids",
      "Teres Major",
      "Serratus Anterior",
      "Abdominals"
    ],
    "equipment": "Pullover Machine"
  },
  {
    "id": "spanish_squat",
    "name": "Spanish Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Core",
      "Hamstrings",
      "Erector Spinae",
      "Trapezius",
      "Rhomboids",
      "Rotator Cuff Muscles"
    ],
    "equipment": "Resistance Band, Anchor Point"
  },
  {
    "id": "peterson_step_up",
    "name": "Peterson Step-up",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Calves",
      "Tibialis Anterior",
      "Core"
    ],
    "equipment": "Elevated surface, Dumbbell, Barbell"
  },
  {
    "id": "cyclist_squat",
    "name": "Cyclist Squat",
    "type": "Compound",
    "primaryMuscle": "Quadriceps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Calves",
      "Core",
      "Lower Back"
    ],
    "equipment": "Elevated surface, Barbell, Kettlebell, Dumbbell, Bodyweight"
  },
  {
    "id": "stiff_leg_deadlift",
    "name": "Stiff-Leg Deadlift",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Core",
      "Calves",
      "Adductors",
      "Lats",
      "Forearms"
    ],
    "equipment": "Barbell, Dumbbell"
  },
  {
    "id": "single_leg_stiff_leg_deadlift",
    "name": "Single-Leg Stiff-Leg Deadlift",
    "type": "Compound",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Erector Spinae",
      "Core",
      "Hip Stabilizers",
      "Forearms",
      "Trapezius",
      "Calves"
    ],
    "equipment": "Dumbbell, Kettlebell, Barbell, Bodyweight"
  },
  {
    "id": "dumbbell_swings",
    "name": "Dumbbell Swings",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quadriceps",
      "Deltoids",
      "Latissimus Dorsi",
      "Trapezius",
      "Forearms",
      "Abdominals"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "arnold_press",
    "name": "Arnold Press",
    "type": "Compound",
    "primaryMuscle": "Anterior Deltoid",
    "secondaryMuscles": [
      "Triceps Brachii",
      "Trapezius",
      "Core"
    ],
    "equipment": "Dumbbell"
  },
  {
    "id": "machine_shoulder_press",
    "name": "Machine Shoulder Press",
    "type": "Compound",
    "primaryMuscle": "Deltoids",
    "secondaryMuscles": [
      "Pectoralis Major",
      "Upper Trapezius",
      "Core",
      "Serratus Anterior",
      "Pectoralis Minor",
      "Infraspinatus",
      "Teres Minor",
      "Anconeus"
    ],
    "equipment": "Machine"
  },
  {
    "id": "reverse_pec_deck_fly",
    "name": "Reverse Pec Deck Fly",
    "type": "Isolation",
    "primaryMuscle": "Posterior Deltoids",
    "secondaryMuscles": [
      "Rhomboids",
      "Trapezius",
      "Infraspinatus",
      "Teres Minor"
    ],
    "equipment": "Pec Deck Machine"
  },
  {
    "id": "scaption_raise",
    "name": "Scaption",
    "type": "Isolation",
    "primaryMuscle": "Deltoids",
    "secondaryMuscles": [
      "Trapezius",
      "Serratus Anterior",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
      "Rhomboids",
      "Core"
    ],
    "equipment": "Dumbbell, Resistance Band"
  },
  {
    "id": "cuban_rotations",
    "name": "Cuban Rotations",
    "type": "Isolation",
    "primaryMuscle": "Rotator Cuff",
    "secondaryMuscles": [
      "Rhomboids",
      "Trapezius",
      "Core"
    ],
    "equipment": "Dumbbell, Barbell, Resistance Band, Bodyweight"
  },
  {
    "id": "prone_y_raises",
    "name": "Prone Y-Raises",
    "type": "Isolation",
    "primaryMuscle": "Lower Trapezius",
    "secondaryMuscles": [
      "Upper Trapezius",
      "Serratus Anterior",
      "Erector Spinae",
      "Rotator Cuff"
    ],
    "equipment": "Bodyweight, Dumbbell, Bench, Stability Ball"
  },
  {
    "id": "pec_deck_fly",
    "name": "Pec Deck Fly",
    "type": "Isolation",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Serratus Anterior"
    ],
    "equipment": "Pec Deck Machine"
  },
  {
    "id": "decline_dumbbell_press",
    "name": "Decline Dumbbell Press",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Anterior Deltoid",
      "Triceps Brachii",
      "Core",
      "Middle Deltoid",
      "Glutes"
    ],
    "equipment": "Decline Bench, Dumbbell"
  },
  {
    "id": "floor_press",
    "name": "Floor Press",
    "type": "Compound",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Deltoids",
      "Core",
      "Rhomboids",
      "Scapular Stabilizers"
    ],
    "equipment": "Barbell, Dumbbell, Kettlebell"
  },
  {
    "id": "jm_press",
    "name": "JM Press",
    "type": "Compound",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Pectoralis Major",
      "Anterior Deltoid"
    ],
    "equipment": "Barbell, Dumbbell, Smith Machine"
  },
  {
    "id": "tate_press",
    "name": "Tate Press",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Pectoralis Major",
      "Anterior Deltoid",
      "Forearms"
    ],
    "equipment": "Dumbbell, Bench"
  },
  {
    "id": "close_grip_dumbbell_floor_press",
    "name": "Close-Grip Dumbbell Floor Press",
    "type": "Compound",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Core Stabilizers"
    ],
    "equipment": "Dumbbells, Floor"
  },
  {
    "id": "dumbbell_pullover",
    "name": "Dumbbell Pullover",
    "type": "Compound",
    "primaryMuscle": "Pectoralis Major",
    "secondaryMuscles": [
      "Triceps",
      "Serratus Anterior",
      "Teres Major",
      "Posterior Deltoids",
      "Abdominals",
      "Glutes",
      "Lower Back"
    ],
    "equipment": "Dumbbell, Bench"
  },
  {
    "id": "landmine_row",
    "name": "Landmine Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Posterior Deltoid",
      "Erector Spinae",
      "Core Stabilizers",
      "Forearms",
      "Teres Major",
      "Teres Minor"
    ],
    "equipment": "Barbell, Landmine Attachment, Handle"
  },
  {
    "id": "meadows_row",
    "name": "Meadows Row",
    "type": "Compound",
    "primaryMuscle": "Latissimus Dorsi",
    "secondaryMuscles": [
      "Biceps",
      "Brachialis",
      "Rear Deltoids",
      "Erector Spinae",
      "Forearms",
      "Core"
    ],
    "equipment": "Barbell, Landmine Attachment"
  },
  {
    "id": "cable_shrugs",
    "name": "Cable Shrugs",
    "type": "Isolation",
    "primaryMuscle": "Trapezius",
    "secondaryMuscles": [
      "Rhomboids",
      "Levator Scapulae",
      "Forearms"
    ],
    "equipment": "Cable Machine"
  },
  {
    "id": "rack_pulls",
    "name": "Rack Pulls",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quadriceps",
      "Forearms",
      "Rhomboids",
      "Calves"
    ],
    "equipment": "Barbell, Power Rack"
  },
  {
    "id": "snatch_grip_high_pull",
    "name": "Snatch Grip High Pull",
    "type": "Compound",
    "primaryMuscle": "Trapezius",
    "secondaryMuscles": [
      "Latissimus Dorsi",
      "Rhomboids",
      "Erector Spinae",
      "Abdominals",
      "Calves",
      "Forearms"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "hanging_knee_raise",
    "name": "Hanging Knee Raise",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Forearms",
      "Shoulders",
      "Latissimus Dorsi",
      "Gluteals"
    ],
    "equipment": "Pull-up Bar, Captain's Chair"
  },
  {
    "id": "reverse_crunch",
    "name": "Reverse Crunch",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Transverse Abdominis",
      "Obliques",
      "Hip Flexors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "decline_crunch",
    "name": "Decline Crunch",
    "type": "Isolation",
    "primaryMuscle": "Rectus Abdominis",
    "secondaryMuscles": [
      "Obliques",
      "Transverse Abdominis",
      "Erector Spinae"
    ],
    "equipment": "Decline Bench, Bodyweight"
  },
  {
    "id": "heel_touches",
    "name": "Heel Touches",
    "type": "Isolation",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Intercostal Muscles",
      "Hip Flexors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "windshield_wipers",
    "name": "Windshield Wipers",
    "type": "Compound",
    "primaryMuscle": "Obliques",
    "secondaryMuscles": [
      "Erector Spinae",
      "Transverse Abdominis"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "standing_oblique_crunch",
    "name": "Standing Oblique Crunch",
    "type": "Isolation",
    "primaryMuscle": "External Obliques",
    "secondaryMuscles": [
      "Rectus Abdominis",
      "Hip Flexors",
      "Quadratus Lumborum",
      "Transverse Abdominis",
      "Erector Spinae",
      "Gluteus Medius",
      "Adductors"
    ],
    "equipment": "Bodyweight"
  },
  {
    "id": "machine_bicep_curl",
    "name": "Machine Bicep Curl",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "equipment": "Bicep Curl Machine"
  },
  {
    "id": "resistance_band_bicep_curls",
    "name": "Resistance Band Bicep Curls",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Forearm Flexors"
    ],
    "equipment": "Resistance Band"
  },
  {
    "id": "kettlebell_bicep_curl",
    "name": "Kettlebell Bicep Curl",
    "type": "Isolation",
    "primaryMuscle": "Biceps Brachii",
    "secondaryMuscles": [
      "Brachialis",
      "Brachioradialis",
      "Forearms",
      "Anterior Deltoid",
      "Core"
    ],
    "equipment": "Kettlebell"
  },
  {
    "id": "seated_overhead_barbell_extension",
    "name": "Seated Overhead Barbell Extension",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Anconeus",
      "Deltoids",
      "Rotator Cuff",
      "Forearms",
      "Core"
    ],
    "equipment": "Barbell"
  },
  {
    "id": "one_arm_cable_triceps_extension",
    "name": "One-Arm Cable Triceps Extension",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Anconeus",
      "Forearms",
      "Core",
      "Rotator Cuff",
      "Posterior Deltoids"
    ],
    "equipment": "Cable Machine"
  },
  {
    "id": "kettlebell_overhead_triceps_extension",
    "name": "Kettlebell Overhead Triceps Extension",
    "type": "Isolation",
    "primaryMuscle": "Triceps Brachii",
    "secondaryMuscles": [
      "Deltoids",
      "Core",
      "Forearms",
      "Anconeus",
      "Trapezius"
    ],
    "equipment": "Kettlebell"
  },
  {
    "id": "curtsy_lunge",
    "name": "Curtsy Lunge",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Core"
    ],
    "equipment": "Bodyweight, Dumbbell, Kettlebell, Barbell"
  },
  {
    "id": "single_leg_elevated_glute_bridge",
    "name": "Single-Leg Elevated Glute Bridge",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Maximus",
    "secondaryMuscles": [
      "Core",
      "Erector Spinae"
    ],
    "equipment": "Bodyweight, Elevated surface"
  },
  {
    "id": "weighted_glute_focused_back_extension",
    "name": "Weighted Glute-Focused Back Extension",
    "type": "Compound",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Erector Spinae",
      "Core"
    ],
    "equipment": "Hyperextension machine, Dumbbell, Kettlebell, Weight plate"
  },
  {
    "id": "cable_hip_abduction",
    "name": "Cable Hip Abduction",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Core",
      "Gluteus Maximus"
    ],
    "equipment": "Cable Machine, Ankle Strap"
  },
  {
    "id": "hip_hike",
    "name": "Hip Hike",
    "type": "Isolation",
    "primaryMuscle": "Gluteus Medius",
    "secondaryMuscles": [
      "Hip Abductors",
      "Obliques"
    ],
    "equipment": "Bodyweight, Step/Elevated Surface"
  },
  {
    "id": "wrist_roller",
    "name": "Wrist Roller",
    "type": "Isolation",
    "primaryMuscle": "Forearm Flexors",
    "secondaryMuscles": [
      "Biceps",
      "Shoulders",
      "Upper Trapezius"
    ],
    "equipment": "Wrist Roller Device, Weight Plates"
  },
  {
    "id": "cable_wrist_curls_palms_up",
    "name": "Cable Wrist Curls (Palms Up)",
    "type": "Isolation",
    "primaryMuscle": "Flexor Carpi Radialis",
    "secondaryMuscles": [
      "Flexor Digitorum Superficialis",
      "Flexor Digitorum Profundus",
      "Flexor Pollicis Longus"
    ],
    "equipment": "Cable Machine, Straight Bar Attachment, Bench"
  },
  {
    "id": "finger_curls_plate_dumbbell",
    "name": "Finger Curls",
    "type": "Isolation",
    "primaryMuscle": "Finger Flexors",
    "secondaryMuscles": [],
    "equipment": "Dumbbell, Weight Plate"
  },
  {
    "id": "wrist_roller_extensions_overhand_grip",
    "name": "Wrist Roller Extensions (Overhand Grip)",
    "type": "Isolation",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Brachioradialis",
      "Shoulders",
      "Upper Back"
    ],
    "equipment": "Wrist Roller, Weight Plate, Kettlebell, Dumbbell, Rope, Loading Pin"
  },
  {
    "id": "cable_wrist_extensions_reverse_grip",
    "name": "Cable Wrist Extensions (Reverse Grip)",
    "type": "Isolation",
    "primaryMuscle": "Forearm Extensors",
    "secondaryMuscles": [
      "Grip Muscles"
    ],
    "equipment": "Cable Machine, Straight Bar Attachment"
  },
  {
    "id": "resistance_band_finger_extensions",
    "name": "Resistance Band Finger Extensions",
    "type": "Isolation",
    "primaryMuscle": "Extensor Digitorum",
    "secondaryMuscles": [
      "Lumbricals",
      "Dorsal Interossei",
      "Palmar Interossei",
      "Common Wrist Extensors"
    ],
    "equipment": "Resistance Band"
  }
];

export const MUSCLE_NAME_MAP: Record<string, string | string[]> = {
    // Core Muscle Groups
    "Glutes": "Glutes", "Gluteus Maximus": "Glutes", "Gluteus Medius": "Glutes", "Gluteus Minimus": "Glutes",
    "Quadriceps": "Quads", "Quadriceps Femoris": "Quads", "Vastus Lateralis": "Quads", "Vastus Medialis": "Quads", "Vastus Intermedius": "Quads", "Rectus Femoris": "Quads",
    "Hamstrings": "Hamstrings", "Biceps Femoris": "Hamstrings", "Semitendinosus": "Hamstrings", "Semimembranosus": "Hamstrings",
    "Biceps": "Biceps", "Biceps Brachii": "Biceps", "Biceps Brachii (Long Head)": "Biceps", "Brachialis": "Biceps", "Brachioradialis": "Biceps",
    "Triceps": "Triceps", "Triceps Brachii": "Triceps", "Anconeus": "Triceps",
    "Pectoralis Major": "Chest", "Pectoralis Minor": "Chest", "Pectoralis Major (Clavicular Head)": "Chest", "Pectoralis Major (Sternal Head)": "Chest", "Chest": "Chest",
    "Latissimus Dorsi": "Back", "Lats": "Back", "Teres Major": "Back", "Teres Minor": "Back",
    "Anterior Deltoid": "Front Delts", "Lateral Deltoid": "Side Delts", "Posterior Deltoid": "Rear Delts", "Rear Deltoids": "Rear Delts",
    "Deltoids": ["Front Delts", "Side Delts", "Rear Delts"],
    "Shoulders": "Shoulders",
    "Calves": "Calves", "Gastrocnemius": "Calves", "Soleus": "Calves", "Plantaris": "Calves", "Fibularis Longus": "Calves", "Fibularis Brevis": "Calves", "Tibialis Posterior": "Calves", "Anterior Tibialis": "Calves",
    "Rectus Abdominis": "Abs", "Obliques": "Abs", "Obliques (Internal and External)": "Abs", "External Obliques": "Abs", "Transverse Abdominis": "Abs", "Core Muscles": "Abs", "Core": "Abs", "Abdominals": "Abs", "Abs": "Abs",
    "Forearms": "Forearms", "Forearm Flexors": "Forearms", "Forearm Extensors": "Forearms", "Wrist Flexors": "Forearms", "Wrist Extensors": "Forearms", "Grip": "Forearms", "Hand Muscles": "Forearms", "Flexor Carpi Radialis": "Forearms", "Flexor Digitorum Superficialis": "Forearms", "Flexor Digitorum Profundus": "Forearms", "Flexor Pollicis Longus": "Forearms", "Extensor Carpi Radialis Longus": "Forearms", "Extensor Digitorum": "Forearms",
    "Erector Spinae": "ErectorSpinae", "Lower Back": "ErectorSpinae", "Spinal Erectors": "ErectorSpinae",
    "Trapezius": "Trapezius", "Traps": "Trapezius", "Upper Trapezius": "Trapezius", "Middle Trapezius": "Trapezius", "Lower Trapezius": "Trapezius",
    "Rhomboids": "Rhomboids",
    "Rotator Cuff": "Shoulders", "Rotator Cuffs": "Shoulders", "Infraspinatus": "Shoulders", "Subscapularis": "Shoulders", "Supraspinatus": "Shoulders",
    "Serratus Anterior": "Chest",
    "Adductors": "Adductors", "Adductor Magnus": "Adductors",
    "Hip Flexors": "HipFlexors", "Iliopsoas": "HipFlexors", "Psoas": "HipFlexors", "Sartorius": "HipFlexors",
    "Tensor Fasciae Latae": "Glutes",
    "Popliteus": "Hamstrings",
    "Gracilis": "Adductors",
    "Sternocleidomastoid": "Abs",
    "Quadratus Lumborum": "Abs",
    "Multifidus": "ErectorSpinae",
    "Pelvic Floor": "Abs", "Pelvic Floor Muscles": "Abs", "Diaphragm": "Abs",
    "Intrinsic Foot Muscles": "Calves", "Ankle Stabilizers": "Calves", "Foot/Ankle Intrinsic Muscles": "Calves", "Ankles": "Calves",
    "Thoracic Erector Spinae": "ErectorSpinae",
    "Hip Abductors": "Glutes",
    "Hip Adductors": "Adductors",
    "Hip Rotators": "Glutes",
    "Scapular Stabilizers": ["Shoulders", "Back"],
    "Intercostal Muscles": "Abs",
    "Neck Muscles": "Trapezius",
    "Biceps (Stabilizer)": "Biceps", "Triceps (Stabilizer)": "Triceps", "Glutes (Stabilizer)": "Glutes", "Quadriceps (stabilizer)": "Quads", "Hamstrings (stabilizer)": "Hamstrings",
    "Hip Stabilizers": ["Glutes", "Adductors", "HipFlexors"],
    "Shoulder Stabilizers": "Shoulders",
    "Lower Back Stabilizers": "ErectorSpinae",
    "Core Stabilizers": "Abs", "Core Abdominals": "Abs",
    "Pectorals": "Chest",
    "Hips": ["Glutes", "HipFlexors", "Adductors"]
};

export const MUSCLE_GROUPS = {
    PUSH: ["Chest", "Triceps", "Front Delts", "Side Delts", "Shoulders"],
    PULL: ["Back", "Biceps", "Rear Delts", "Trapezius", "Rhomboids", "ErectorSpinae", "Forearms"],
    LEGS: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors", "HipFlexors"],
    CORE: ["Abs", "ErectorSpinae"]
};