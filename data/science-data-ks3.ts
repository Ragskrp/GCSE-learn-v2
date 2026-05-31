import { Subject } from "@/types/curriculum";

export const year7Science: Subject = {
    id: "science-7",
    name: "KS3 Science (Year 7)",
    duration: 120,
    questions: 100,
    color: "from-green-400 to-emerald-600",
    icon: "🔬",
    level: 1,
    xp: 0,
    maxXp: 3000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Science Explorer",
    timeLimit: 60,
    topics: [
        {
            id: "ks3-bio-cells",
            name: "7A: Cells & Tissues",
            completed: false,
            studyMaterials: [
                {
                    id: "intro-cells",
                    title: "Introduction to Cells",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🔬 Cells: The Building Blocks
> All living things are made of cells.

## Animal Cells
*   **Nucleus:** Control centre. Contains DNA.
*   **Cytoplasm:** Jelly-like substance where reactions happen.
*   **Cell Membrane:** Controls what goes in and out.
*   **Mitochondria:** For respiration (energy).

## Plant Cells
*   Everything above PLUS:
*   **Cell Wall:** Made of cellulose for support.
*   **Chloroplasts:** Green bits for photosynthesis.
*   **Vacuole:** Contains cell sap.
`,
                    learningObjectives: ["Identify label animal and plant cells", "Use a microscope"]
                },
                {
                    id: "tissues-organs",
                    title: "Tissues, Organs & Systems",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🧱 Organisation
1.  **Cell:** Muscle cell.
2.  **Tissue:** Muscle tissue (group of similar cells).
3.  **Organ:** Heart (group of tissues working together).
4.  **System:** Circulatory system (group of organs).
5.  **Organism:** Human.
`,
                    learningObjectives: ["Define tissue, organ, system"]
                }
            ],
            quizzes: [
                {
                    id: "qz-ks3-cells",
                    title: "Cells Quiz",
                    difficulty: "foundation",
                    passingScore: 60,
                    xpReward: 100,
                    coinReward: 10,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "q1",
                            question: "Which part controls the cell?",
                            type: "multiple-choice",
                            options: ["Nucleus", "Cytoplasm", "Wall"],
                            correctAnswer: "Nucleus",
                            marks: 1,
                            topic: "Cells"
                        },
                        {
                            id: "q2",
                            question: "Which is ONLY in plant cells?",
                            type: "multiple-choice",
                            options: ["Nucleus", "Startch", "Chloroplast"],
                            correctAnswer: "Chloroplast",
                            marks: 1,
                            topic: "Cells"
                        }
                    ]
                }
            ]
        },
        {
            id: "ks3-chem-particles",
            name: "7E: Mixtures & Separation",
            completed: false,
            studyMaterials: [
                {
                    id: "states-matter",
                    title: "Solids, Liquids & Gases",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🧊💧💨 States of Matter
*   **Solid:** Particles vibrate in fixed position. Strong forces.
*   **Liquid:** Particles move around each other. Medium forces.
*   **Gas:** Particles move fast and random. Weak forces.

## Changes of State
*   Melting: Solid -> Liquid
*   Boiling: Liquid -> Gas
*   Condensing: Gas -> Liquid
*   Freezing: Liquid -> Solid
`,
                    learningObjectives: ["Describe states of matter", "Draw particle diagrams"]
                }
            ],
            quizzes: []
        },
        {
            id: "ks3-phys-forces",
            name: "7K: Forces",
            completed: false,
            studyMaterials: [
                {
                    id: "forces-intro",
                    title: "Introduction to Forces",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🚀 Forces
A force can be a **push** or a **pull**.

## Types
*   **Contact:** Friction, Air Resistance, Tension.
*   **Non-Contact:** Gravity, Magnetism, Electrostatic.

## Measuring Forces
*   Measured in **Newtons (N)** using a Newton Meter.
`,
                    learningObjectives: ["Identify contact vs non-contact forces"]
                }
            ],
            quizzes: []
        }
    ]
};
