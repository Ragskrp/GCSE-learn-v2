
import { Subject } from "@/types/curriculum";

export const year10Mathematics: Subject = {
    id: "maths-10",
    name: "Mathematics (Higher)",
    duration: 180,
    questions: 300,
    color: "from-blue-500 to-indigo-600",
    icon: "📐",
    level: 1,
    xp: 0,
    maxXp: 5000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Maths Master",
    timeLimit: 120,
    topics: [
        // --- 1. NUMBER ---
        {
            id: "number-foundation",
            name: "Number Skills",
            completed: false,
            studyMaterials: [
                {
                    id: "surds",
                    title: "Surds",
                    content: `# 🌿 Surds

## Rules of Surds
- **√a × √b = √ab**
- **√a / √b = √(a/b)**
- **(√a)² = a**

## Simplifying Surds
Find the largest square number factor.
*   **√12** = √(4×3) = √4 × √3 = **2√3**
*   **√75** = √(25×3) = **5√3**

## Rationalising the Denominator
Get rid of the root on the bottom!
*   **1/√a** -> multiply top and bottom by **√a**. Result: **√a/a**.
*   **1/(a+√b)** -> multiply by **(a-√b)** (Difference of Two Squares).
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Simplify surds", "Rationalise denominators"]
                },
                {
                    id: "indices",
                    title: "Indices (Powers)",
                    content: `# ⚡ Indices

## The Laws
1.  **Multiply:** Add powers. (xᵃ × xᵇ = xᵃ⁺ᵇ)
2.  **Divide:** Subtract powers. (xᵃ ÷ xᵇ = xᵃ⁻ᵇ)
3.  **Brackets:** Multiply powers. ((xᵃ)ᵇ = xᵃᵇ)
4.  **Negative:** Flip it. (x⁻ᵃ = 1/xᵃ)
5.  **0 Power:** Anything to power 0 is **1**.
6.  **Fractional:** Top is power, Bottom is root. (x½ = √x).

## Examples
*   2⁵ × 2³ = 2⁸
*   5⁻² = 1/5² = 1/25
*   8^(2/3) = (³√8)² = 2² = 4
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Apply index laws", "Calculate fractional indices"]
                }
            ],
            quizzes: [
                {
                    id: "num-quiz",
                    title: "Test: Number",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 15,
                    questions: [
                        { id: "q-num-1", question: "Simplify √50", type: "multiple-choice", options: ["5√2", "2√5", "5√10", "10√5"], correctAnswer: "5√2", marks: 1, topic: "Surds" },
                        { id: "q-num-2", question: "Calculate 9^(1/2)", type: "multiple-choice", options: ["3", "4.5", "81", "1"], correctAnswer: "3", marks: 1, topic: "Indices" }
                    ]
                }
            ]
        },

        // --- 2. ALGEBRA ---
        {
            id: "algebra-adv",
            name: "Advanced Algebra",
            completed: false,
            studyMaterials: [
                {
                    id: "simultaneous-eq",
                    title: "Simultaneous Equations",
                    content: `# ⚔️ Simultaneous Equations

## Elimination Method
Make the coefficient of x or y the same.
1.  3x + y = 10
2.  x + y = 4

Subtract (2) from (1):
2x = 6  ->  **x = 3**
Sub x=3 into (2):
3 + y = 4 -> **y = 1**

## Substitution Method
Rearrange one equation to get x=... or y=... then plug into the other.
Usually used when one is quadratic.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Solve linear simultaneous equations", "Solve linear/quadratic pair"]
                },
                {
                    id: "quadratics-hard",
                    title: "Quadratics: Completing the Square",
                    content: `# 🎢 Quadratics

## Solving Methods
1.  **Factorising:** Find two numbers that multiply to add to b.
2.  **Formula:** x = [-b ± √(b²-4ac)] / 2a
3.  **Completing Square:** (x+p)² - q = 0.

## Turning Points
For y = (x+a)² + b
*   Minimum point is at **(-a, b)**.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Complete the square", "Find turning points"]
                }
            ],
            quizzes: [
                {
                    id: "alg-quiz",
                    title: "Test: Algebra",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 15,
                    questions: [
                        { id: "q-alg-1", question: "Solve for x: 2x + y = 7 and x - y = 2", type: "multiple-choice", options: ["3", "2", "4", "1"], correctAnswer: "3", marks: 1, topic: "Simultaneous Eq" }
                    ]
                }
            ]
        },

        // --- 3. RATIO & PROPORTION ---
        {
            id: "ratio-prop",
            name: "Ratio & Proportion",
            completed: false,
            studyMaterials: [
                {
                    id: "direct-inverse",
                    title: "Direct & Inverse Proportion",
                    content: `# ⚖️ Proportion

## Direct Proportion (y ∝ x)
*   **Formula:** y = kx
*   Graph is a straight line through origin.
*   *Example:* Cost is proportional to weight.

## Inverse Proportion (y ∝ 1/x)
*   **Formula:** y = k/x
*   Graph is a curve (hyperbola).
*   *Example:* Speed vs Time for a set distance.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Set up proportion equations", "Calculate k constant"]
                }
            ],
            quizzes: [
                {
                    id: "rat-quiz",
                    title: "Test: Ratio",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 15,
                    questions: [
                        { id: "q-rat-1", question: "If y is directly proportional to x, and y=10 when x=2, what is k?", type: "multiple-choice", options: ["5", "20", "0.2", "8"], correctAnswer: "5", marks: 1, topic: "Proportion" }
                    ]
                }
            ]
        },

        // --- 4. GEOMETRY ---
        {
            id: "geometry-adv",
            name: "Geometry",
            completed: false,
            studyMaterials: [
                {
                    id: "trigonometry",
                    title: "Trigonometry",
                    content: `# 📐 Trigonometry

## SOH CAH TOA (Right-angled)
*   **Sin** x = Opp / Hyp
*   **Cos** x = Adj / Hyp
*   **Tan** x = Opp / Adj

## Non-Right-Angled Triangles
*   **Sine Rule:** a/sinA = b/sinB
*   **Cosine Rule:** a² = b² + c² - 2bcCosA
*   **Area:** 1/2 abSinC
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Use SOHCAHTOA", "Apply Sine and Cosine rules"]
                },
                {
                    id: "vectors",
                    title: "Vectors",
                    content: `# ↗️ Vectors

## Basics
*   Vector: Magnitude + Direction.
*   Notation: Column vector (x over y).

## Geometry
*   **Parallel Vectors:** One is a scalar multiple of another (e.g., **a** and **2a**).
*   **Collinear:** Points lie on the same straight line.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Add vectors", "Prove parallel lines"]
                },
                {
                    id: "circle-theorems",
                    title: "Circle Theorems",
                    content: `# ⚪ Circle Theorems

1.  **Angle at centre is twice angle at circumference.**
2.  **Angle in a semicircle is 90°.**
3.  **Angles in same segment are equal.**
4.  **Cyclic Quadrilateral:** Opposite angles add to 180°.
5.  **Tangent is 90° to radius.**
6.  **Tangents from same point are equal length.**
7.  **Alternate Segment Theorem:** Angle between tangent and chord = Angle in alternate segment.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Identify circle theorems", "Calculate missing angles"]
                }
            ],
            quizzes: [
                {
                    id: "geo-quiz",
                    title: "Test: Geometry",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 15,
                    questions: [
                        { id: "q-geo-1", question: "What is the angle in a semicircle?", type: "multiple-choice", options: ["90°", "180°", "45°", "60°"], correctAnswer: "90°", marks: 1, topic: "Circle Theorems" },
                        { id: "q-geo-2", question: "Which rule relates sides and angles in any triangle?", type: "multiple-choice", options: ["SOHCAHTOA", "Sine Rule", "Pythagoras", "Circle Thm"], correctAnswer: "Sine Rule", marks: 1, topic: "Trigonometry" }
                    ]
                }
            ]
        },

        // --- 5. PROBABILITY & STATISTICS ---
        {
            id: "prob-stats",
            name: "Probability & Statistics",
            completed: false,
            studyMaterials: [
                {
                    id: "probability-hard",
                    title: "Probability",
                    content: `# 🎲 Probability

## Rules
*   **P(A or B)** = P(A) + P(B) (Mutually Exclusive).
*   **P(A and B)** = P(A) × P(B) (Independent).

## Tree Diagrams
*   Multiply along branches (AND).
*   Add results at the end (OR).
*   **Conditional Probability:** The probability changes if you don't replace the item!
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Draw tree diagrams", "Calculate conditional probability"]
                },
                {
                    id: "histograms",
                    title: "Histograms",
                    content: `# 📊 Histograms

For continuous data with unequal class widths.

## Frequency Density
> **FD = Frequency / Class Width**

*   The **Area** of the bar = Frequency.
*   No gaps between bars.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Calculate Frequency Density", "Draw histograms"]
                }
            ],
            quizzes: [
                {
                    id: "stat-quiz",
                    title: "Test: Stats & Prob",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 15,
                    questions: [
                        { id: "q-stat-1", question: "In a histogram, what does the area represent?", type: "multiple-choice", options: ["Frequency", "Class Width", "Density", "Mean"], correctAnswer: "Frequency", marks: 1, topic: "Histograms" }
                    ]
                }
            ]
        }
    ]
};
