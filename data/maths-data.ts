
import { Subject } from "@/types/curriculum";

export const year10Mathematics: Subject = {
    id: "maths",
    name: "Mathematics",
    duration: 120,
    questions: 100,
    color: "from-blue-400 to-indigo-600",
    icon: "📐",
    level: 1,
    xp: 0,
    maxXp: 3000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Number Ninja",
    timeLimit: 120,
    topics: [
        {
            id: "number",
            name: "Number Operations",
            completed: false,
            studyMaterials: [
                {
                    id: "fractions-percentages",
                    title: "Fractions, Decimals & Percentages",
                    content: `# 🔢 Fractions, Decimals, and Percentages

> **"Mathematics is the language with which God has written the universe." - Galileo**

---

## 🎯 Learning Objectives
- 🍰 Convert between **Fractions, Decimals, and Percentages**.
- ➕ Add, Subtract, Multiply, and Divide contents.
- 💸 Calculate **Percentage Change** and **Reverse Percentages**.

**XP Reward:** 150 ⭐ | **Time:** 45 mins

---

## 📚 Chapter 1: The Golden Trinity 
Fractions, Decimals, and Percentages are three ways of saying the same thing.

| Fraction | Decimal | Percentage |
| :--- | :--- | :--- |
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/10 | 0.1 | 10% |
| 1/5 | 0.2 | 20% |
| 1/8 | 0.125 | 12.5% |

### 🔄 Using Multipliers
*   **Increase by 20%:** Multiply by 1.20
*   **Decrease by 20%:** Multiply by 0.80
*   **Find 15%:** Multiply by 0.15

---

## 📚 Chapter 2: Compound Interest
Generating interest on interest.
> **Formula:** Amount = Original x (Multiplier)^Years

*Example:* £1000 at 5% for 3 years.
\`£1000 x 1.05³ = £1157.63\`

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Convert FDP", "Calculate Percentage Change", "Compound Interest"]
                },
                {
                    id: "surds-indices",
                    title: "Surds and Indices",
                    content: `# ⚡ Surds & Indices

## 🎯 Objectives
- 🦠 Simplify **Surds**.
- 📈 Apply **Laws of Indices**.
- 🌓 Rationalise the **Denominator**.

---

## 📚 Chapter 1: Surds (Irrational Roots)
A surd is a square root that cannot be simplified into a whole number (e.g., √2, √3, √5).

### Rules
1.  **√a × √b = √ab**
    *   *Example:* √3 × √2 = √6
2.  **√a / √b = √(a/b)**
    *   *Example:* √10 / √2 = √5
3.  **√a × √a = a**
    *   *Example:* √5 × √5 = 5

### Simplifying
Find the largest **square number** factor.
*   **√12** = √4 × √3 = **2√3**
*   **√75** = √25 × √3 = **5√3**

### Rationalising the Denominator
Getting rid of the surd on the bottom of a fraction.
*   multiply top and bottom by the surd.
*   *Example:* 1/√2 × (√2/√2) = **√2 / 2**

---

## 📚 Chapter 2: Indices (Powers)

| Rule | Formula | Example |
| :--- | :--- | :--- |
| **Multiply** | xᵃ × xᵇ = xᵃ⁺ᵇ | x² × x³ = x⁵ |
| **Divide** | xᵃ ÷ xᵇ = xᵃ⁻ᵇ | x⁵ ÷ x² = x³ |
| **Brackets** | (xᵃ)ᵇ = xᵃᵇ | (x²)³ = x⁶ |
| **Negative** | x⁻ᵃ = 1/xᵃ | 2⁻² = 1/4 |
| **Fractional** | x^(1/n) = ⁿ√x | 64^(1/2) = √64 = 8 |
| **Zero** | x⁰ = 1 | 999⁰ = 1 |

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Simplify Surds", "Apply Index Laws"]
                }
            ],
            quizzes: [
                {
                    id: "number-exit-test",
                    title: "End of Topic Test: Number",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "math-n1",
                            question: "Simplify √50",
                            type: "multiple-choice",
                            options: ["2√5", "5√2", "10√5", "5√10"],
                            correctAnswer: "5√2",
                            explanation: "√50 = √25 × √2 = 5√2.",
                            marks: 1,
                            topic: "Surds"
                        },
                        {
                            id: "math-n2",
                            question: "What is 2⁻³?",
                            type: "multiple-choice",
                            options: ["-6", "-8", "1/8", "1/6"],
                            correctAnswer: "1/8",
                            explanation: "Negative power means 1 over the number. 2 cubed is 8.",
                            marks: 1,
                            topic: "Indices"
                        },
                        {
                            id: "math-n3",
                            question: "Calculate 8^(2/3)",
                            type: "multiple-choice",
                            options: ["2", "4", "6", "16"],
                            correctAnswer: "4",
                            explanation: "Cube root of 8 is 2. 2 squared is 4.",
                            marks: 1,
                            topic: "Indices"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "algebra",
            name: "Algebra",
            completed: false,
            studyMaterials: [
                {
                    id: "algebra-basics",
                    title: "Equations & Quadratics",
                    content: `# ✖️ Algebra: Advanced

## 🎯 Objectives
- ⚖️ Solve **Simultaneous Equations**.
- 🎢 Solve **Quadratics** (Factorising, Formula, Completing Square).
- 📉 Solve **Inequalities**.

---

## 📚 Chapter 1: Quadratics

### 1. Factorising
Find two numbers that multiply to make C and add to make B.
*   x² + 5x + 6 = 0
*   (x + 2)(x + 3) = 0
*   x = -2, x = -3

### 2. The Quadratic Formula
For when factorising is impossible.
> **x = [-b ± √(b² - 4ac)] / 2a**

### 3. Completing the Square
Write in form: **(x + p)² + q = 0**
1.  Halve the 'b' coefficient. (x + 3)²
2.  Subtract the square of it. (x + 3)² - 9
3.  Add the 'c' term.

---

## 📚 Chapter 2: Simultaneous Equations
Finding where two lines cross.

### Elimination Method
1.  Make x or y coefficients the same.
2.  Add or Subtract equations to eliminate one variable.
3.  Solve.
4.  Substitute back in.

*Example:*
\`\`\`
2x + y = 7
x - y = 2
---------- (Add)
3x = 9  -> x = 3
\`\`\`
Substitute x=3: 3 - y = 2 -> y = 1.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Solve using Formula", "Solve Simultaneous Equations"]
                }
            ],
            quizzes: [
                {
                    id: "algebra-exit-test",
                    title: "End of Topic Test: Algebra",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "alg-1",
                            question: "Solve x² - 5x + 6 = 0",
                            type: "multiple-choice",
                            options: ["2 and 3", "-2 and -3", "2 and -3", "1 and 6"],
                            correctAnswer: "2 and 3",
                            explanation: "Factors are (x-2) and (x-3).",
                            marks: 1,
                            topic: "Quadratics"
                        },
                        {
                            id: "alg-2",
                            question: "What is the Quadratic Formula?",
                            type: "multiple-choice",
                            options: ["-b ± √(b² - 4ac) / 2a", "-b ± √(b² + 4ac) / 2a", "b ± √(b² - 4ac) / 2a", "-b ± √(c² - 4ab) / 2a"],
                            correctAnswer: "-b ± √(b² - 4ac) / 2a",
                            explanation: "The standard formula for solving quadratics.",
                            marks: 1,
                            topic: "Formula"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "geometry",
            name: "Geometry & Measures",
            completed: false,
            studyMaterials: [
                {
                    id: "circles-vectors",
                    title: "Circle Theorems & Vectors",
                    content: `# 📐 Advanced Geometry

## 🎯 Objectives
- ⭕ Apply **Circle Theorems**.
- ↗️ Understand **Vectors**.
- 📐 Use **Sine and Cosine Rules**.

---

## 📚 Chapter 1: The Circle Theorems
Rules about angles inside circles.

1.  **Angle at Centre:** Is TWICE the angle at the circumference.
2.  **Semicircle:** Angle in a semicircle is 90°.
3.  **Same Segment:** Angles subtended by the same arc are equal (the "Bowtie").
4.  **Cyclic Quadrilateral:** Opposite angles sum to 180°.
5.  **Tangent:** Radius meets tangent at 90°.
6.  **Alternate Segment:** Angle between chord and tangent equals angle in alternate segment.

---

## 📚 Chapter 2: Vectors
Vectors have Magnitude (Size) and Direction. represented as column vectors.

### Addition
Add the top numbers, add the bottom numbers.
\`(3, 2) + (1, 4) = (4, 6)\`

### Geometry with Vectors
*   **Resultant:** The direct path from start to finish.
*   **Parallel:** Vectors are parallel if one is a multiple of the other (e.g., **a** and **2a**).
*   **Collinear:** Points lie on the same straight line.

---

## 📚 Chapter 3: Advanced Trigonometry
For non right-angled triangles.

### Sine Rule 🌊
> **a / SinA = b / SinB** (For finding sides)
> **SinA / a = SinB / b** (For finding angles)
> *Use when you have a "matching pair".*

### Cosine Rule ⏸️
> **a² = b² + c² - 2bcCosA**
> *Use when you have two sides and the included angle (SAS).*

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 60,
                    learningObjectives: ["Identify Circle Theorems", "Add Vectors", "Apply Sine/Cosine Rules"]
                }
            ],
            quizzes: [
                {
                    id: "geometry-exit-test",
                    title: "End of Topic Test: Geometry",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "geo-1",
                            question: "What is the angle in a semicircle?",
                            type: "multiple-choice",
                            options: ["45°", "60°", "90°", "180°"],
                            correctAnswer: "90°",
                            explanation: "Thales' Theorem states it is always a right angle.",
                            marks: 1,
                            topic: "Circle Theorems"
                        },
                        {
                            id: "geo-2",
                            question: "What does the Cosine Rule calculate?",
                            type: "multiple-choice",
                            options: ["Area of a circle", "Missing side in non-right angled triangle", "Volume of a sphere", "Gradient of a line"],
                            correctAnswer: "Missing side in non-right angled triangle",
                            explanation: "Used when you know two sides and the included angle.",
                            marks: 1,
                            topic: "Trigonometry"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "probability",
            name: "Probability & Statistics",
            completed: false,
            studyMaterials: [
                {
                    id: "prob-stats",
                    title: "Probability & Statistics",
                    content: `# 🎲 Probability & Statistics

## 🎯 Objectives
- 🌳 Use **Tree Diagrams**.
- 🤝 **Conditional Probability**.
- 📊 Calculate **Mean, Median, Mode, Range**.

---

## 📚 Chapter 1: Probability Rules

### The Basics
*   P(Event) = Successes / Total.
*   P(A or B) = P(A) + P(B) (Mutually Exclusive).
*   P(A and B) = P(A) × P(B) (Independent).

### Conditional Probability
When one event affects the next (e.g., Eating a sweet and not putting it back).
*   The denominator decreases by 1 for the second pick.

### Tree Diagrams
*   Multiply along the branches (AND).
*   Add the results at the end (OR).

---

## 📚 Chapter 2: Averages (The 3 M's)

1.  **Mean:** Add all up and divide by count.
2.  **Median:** The middle value (put in order first!).
3.  **Mode:** The most common value.
4.  **Range:** Largest - Smallest.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Construct Tree Diagrams", "Calculate Averages"]
                }
            ],
            quizzes: [
                {
                    id: "prob-exit-test",
                    title: "End of Topic Test: Probability",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "prob-1",
                            question: "If P(A) = 0.2 and P(B) = 0.5, what is P(A and B) if independent?",
                            type: "multiple-choice",
                            options: ["0.7", "0.3", "0.1", "0.01"],
                            correctAnswer: "0.1",
                            explanation: "0.2 multiplied by 0.5 is 0.1.",
                            marks: 1,
                            topic: "Probability"
                        },
                        {
                            id: "prob-2",
                            question: "What represents the 'middle' value?",
                            type: "multiple-choice",
                            options: ["Mean", "Median", "Mode", "Range"],
                            correctAnswer: "Median",
                            explanation: "Median is the middle number in a sorted list.",
                            marks: 1,
                            topic: "Averages"
                        }
                    ]
                }
            ]
        }
    ]
};
