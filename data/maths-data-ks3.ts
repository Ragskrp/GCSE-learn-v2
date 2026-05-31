import { Subject } from "@/types/curriculum";

export const year7Mathematics: Subject = {
    id: "maths-7",
    name: "KS3 Maths (Year 7)",
    duration: 120,
    questions: 100,
    color: "from-blue-400 to-indigo-600",
    icon: "📐",
    level: 1,
    xp: 0,
    maxXp: 3000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Number Novice",
    timeLimit: 60,
    topics: [
        {
            id: "ks3-number",
            name: "7N: Number",
            completed: false,
            studyMaterials: [
                {
                    id: "place-value",
                    title: "Place Value",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🔢 Number
*   **Integers:** Whole numbers.
*   **Decimals:** Parts of whole.
*   **Rounding:** Nearest 10, 100, 1000.

## Operations
*   **Addition:** Column method.
*   **Subtraction:** Column method.
*   **Multiplication:** Grid or Column.
*   **Division:** Bus stop.
`,
                    learningObjectives: ["Order decimals", "Round numbers"]
                }
            ],
            quizzes: [
                {
                    id: "qz-ks3-num",
                    title: "Number Quiz",
                    difficulty: "foundation",
                    passingScore: 60,
                    xpReward: 100,
                    coinReward: 10,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "q1",
                            question: "Round 456 to nearest 10",
                            type: "multiple-choice",
                            options: ["450", "460", "400"],
                            correctAnswer: "460",
                            marks: 1,
                            topic: "Rounding"
                        }
                    ]
                }
            ]
        },
        {
            id: "ks3-algebra",
            name: "7A: Algebra",
            completed: false,
            studyMaterials: [
                {
                    id: "alg-intro",
                    title: "Introduction to Algebra",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 📦 Algebra
*   **Variable:** A letter representing a number (x, y).
*   **Term:** 3x, 4y.
*   **Expression:** 3x + 4y (no equals sign).
*   **Equation:** 3x + 4 = 10 (has equals sign).

## Simplify
*   Add like terms: 2a + 3a = 5a.
*   Multiply: 2 * 3a = 6a.
`,
                    learningObjectives: ["Collect like terms"]
                }
            ],
            quizzes: []
        },
        {
            id: "ks3-geom",
            name: "7G: Geometry",
            completed: false,
            studyMaterials: [
                {
                    id: "angles",
                    title: "Angles",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 📐 Angles
*   **Acute:** < 90
*   **Right:** = 90
*   **Obtuse:** > 90 and < 180
*   **Reflex:** > 180

## Rules
*   Angles on a straight line add to **180**.
*   Angles around a point add to **360**.
*   Angles in a triangle add to **180**.
`,
                    learningObjectives: ["Measure angles", "Classify angles"]
                }
            ],
            quizzes: []
        }
    ]
};
