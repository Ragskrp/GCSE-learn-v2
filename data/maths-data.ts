
import { Subject } from "@/types/curriculum";

export const year10Mathematics: Subject = {
    id: "maths",
    name: "Mathematics",
    duration: 90,
    questions: 50,
    color: "from-blue-400 to-indigo-600",
    icon: "📐",
    level: 1,
    xp: 0,
    maxXp: 1000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Number Ninja",
    timeLimit: 90,
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

### 🔄 Converting
*   **Fraction to Decimal:** Divide top by bottom (e.g. 3 ÷ 4 = 0.75).
*   **Decimal to Percentage:** Multiply by 100 (e.g. 0.75 × 100 = 75%).
*   **Percentage to Fraction:** Put over 100 and simplify (e.g. 20% = 20/100 = 1/5).

---

## 📚 Chapter 2: Working with Fractions

### ➕ Addition & Subtraction
**Rule:** You need a **Common Denominator** (bottom number).
1.  Make bottom numbers the same.
2.  Add/Subtract top numbers.
3.  Keep bottom number the same.

*Example:* 
\`\`\`
1/4 + 1/2
= 1/4 + 2/4  (Multiply 1/2 by 2)
= 3/4
\`\`\`

### ✖️ Multiplication
**Rule:** Top × Top, Bottom × Bottom.
*Example:* 
\`2/3 × 4/5 = 8/15\`

### ➗ Division (KFC)
**Keep, Flip, Change.**
1.  **Keep** the first fraction.
2.  **Flip** the second fraction.
3.  **Change** sign to Multiply.

*Example:* 
\`\`\`
1/2 ÷ 1/4
= 1/2 × 4/1
= 4/2
= 2
\`\`\`

---

## 📚 Chapter 3: Percentage Power 💥

### 📈 Percentage of Amounts
"Find 15% of £80"
1.  Find 10% (Divide by 10) = £8.
2.  Find 5% (Half of 10%) = £4.
3.  Add them up: £8 + £4 = £12.

### 📉 Percentage Change
Formula:
\`(Difference ÷ Original) × 100\`

*Example:* Phone price drops from £200 to £150.
1.  Difference = £50.
2.  50 ÷ 200 = 0.25.
3.  0.25 × 100 = **25% Decrease**.

### ↩️ Reverse Percentages
"The price is £120 including 20% VAT. What was the price before VAT?"
1.  £120 represents 120% (100% original + 20% tax).
2.  Divide by 1.20 to get 100%.
3.  120 ÷ 1.20 = £100.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Convert FDP", "Calculate Percentage Change", "Operate with Fractions"]
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
                            question: "What is 3/4 as a percentage?",
                            type: "multiple-choice",
                            options: ["30%", "45%", "60%", "75%"],
                            correctAnswer: "75%",
                            explanation: "3 divided by 4 is 0.75, which is 75%.",
                            marks: 1,
                            topic: "Number"
                        },
                        {
                            id: "math-n2",
                            question: "Calculate 1/3 + 1/6",
                            type: "multiple-choice",
                            options: ["2/9", "3/6", "1/2", "5/6"],
                            correctAnswer: "1/2",
                            explanation: "1/3 becomes 2/6. 2/6 + 1/6 = 3/6, which simplifies to 1/2.",
                            marks: 1,
                            topic: "Fractions"
                        },
                        {
                            id: "math-n3",
                            question: "A shirt costs £40. It is reduced by 20%. What is the new price?",
                            type: "multiple-choice",
                            options: ["£30", "£32", "£35", "£20"],
                            correctAnswer: "£32",
                            explanation: "10% is £4. 20% is £8. £40 - £8 = £32.",
                            marks: 1,
                            topic: "Percentages"
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
                    title: "Equations and Quadratics",
                    content: `# ✖️ Algebra: Solving Equations

> **"Algebra is the metaphysical shorthand of numbers."**

---

## 🎯 Objectives
- ⚖️ Solve **Linear Equations**.
- 📦 **Expand and Factorise** brackets.
- 📈 Solve **Quadratic Equations**.

**XP Reward:** 200 ⭐

---

## 📚 Chapter 1: Basic Solving (Balancing Act)
Whatever you do to one side of the \`=\`, you MUST do to the other.

*Solve:* \`3x + 5 = 20\`
1.  Subtract 5 from both sides:
    \`3x = 15\`
2.  Divide by 3:
    \`x = 5\`

---

## 📚 Chapter 2: Expanding & Factorising

### Expanding (The Claw) 🦞
Multiply everything outside the bracket by everything inside.
\`\`\`
  2(x + 3)
= 2x + 6
\`\`\`

### Double Brackets (FOIL)
**F**irst, **O**uter, **I**nner, **L**ast.
\`\`\`
  (x + 2)(x + 3)
F: x * x = x²
O: x * 3 = 3x
I: 2 * x = 2x
L: 2 * 3 = 6
Total: x² + 5x + 6
\`\`\`

### Factorising
Putting it back into brackets (Reverse of expanding).
*Start:* \`6x + 9\`
*Common Factor:* 3 goes into both.
*Result:* \`3(2x + 3)\`

---

## 📚 Chapter 3: Quadratics 🎢
Equations with an \`x²\`. They usually have **two solutions**.

*Solve:* \`x² - 5x + 6 = 0\`
1.  find two numbers that Multiply to make 6 and Add to make -5.
    *   (-2 and -3)
2.  Put into brackets: \`(x - 2)(x - 3) = 0\`
3.  Solve each bracket:
    *   \`x - 2 = 0\` → **x = 2**
    *   \`x - 3 = 0\` → **x = 3**

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Solve linear equations", "Factorise quadratics"]
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
                            question: "Solve 2x - 4 = 10",
                            type: "multiple-choice",
                            options: ["x = 5", "x = 7", "x = 6", "x = 3"],
                            correctAnswer: "x = 7",
                            explanation: "Add 4 to get 2x = 14. Divide by 2 to get x = 7.",
                            marks: 1,
                            topic: "Equations"
                        },
                        {
                            id: "alg-2",
                            question: "Expand (x + 4)(x - 4)",
                            type: "multiple-choice",
                            options: ["x² + 8x - 16", "x² - 16", "x² + 16", "x² - 8x + 16"],
                            correctAnswer: "x² - 16",
                            explanation: "This is difference of two squares. The middle terms cancel out.",
                            marks: 1,
                            topic: "Expanding"
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
                    id: "pythagoras-trig",
                    title: "Pythagoras and Trigonometry",
                    content: `# 📐 Geometry: Triangles

> **"The shortest distance between two points is a straight line."**

---

## 🎯 Objectives
- 📐 Use **Pythagoras' Theorem**.
- 🌊 Use **SOH CAH TOA**.
- 📏 Calculate Area and Perimeter.

---

## 📚 Chapter 1: Pythagoras' Theorem
For **Right-Angled Triangles** only. Finding a missing side.

> **a² + b² = c²** 
> (where c is the Hypotenuse, the longest side)

*Example:* Finds side \`c\` if a=3 and b=4.
1.  3² + 4² = c²
2.  9 + 16 = c²
3.  25 = c²
4.  c = √25 = **5**

---

## 📚 Chapter 2: Trigonometry (SOH CAH TOA)
Using angles in Right-Angled Triangles.

*   **S**in(x) = **O**pposite / **H**ypotenuse
*   **C**os(x) = **A**djacent / **H**ypotenuse
*   **T**an(x) = **O**pposite / **A**djacent

### Steps:
1.  Label sides (Hypotenuse, Opposite, Adjacent).
2.  Pick correct formula (S, C, or T).
3.  Substitute numbers and solve.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Apply Pythagoras", "Use Trigonometry"]
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
                            question: "Which side is the Hypotenuse?",
                            type: "multiple-choice",
                            options: ["The side opposite the right angle", "The shortest side", "The side touching the right angle", "The vertical side"],
                            correctAnswer: "The side opposite the right angle",
                            explanation: "The hypotenuse is always the longest side, opposite the 90 degree angle.",
                            marks: 1,
                            topic: "Pythagoras"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};
