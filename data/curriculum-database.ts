import { year10ComputerScienceJ277 } from "./computer-science-data";
import { year10EnglishLiterature, year10History } from "./extra-subjects";
export { year10EnglishLiterature, year10History };

export interface StudyMaterial {
  id: string
  title: string
  content: string
  type: "lesson" | "video" | "interactive" | "worksheet"
  difficulty: "foundation" | "higher"
  estimatedTime: number // in minutes
  prerequisites?: string[]
  learningObjectives: string[]
}

export interface Quiz {
  id: string
  title: string
  questions: QuizQuestion[]
  timeLimit: number // in minutes
  difficulty: "foundation" | "higher"
  passingScore: number // percentage
  xpReward: number
  coinReward: number
}

export interface QuizQuestion {
  id: string
  question: string
  type: "multiple-choice" | "true-false" | "short-answer" | "calculation"
  options?: string[]
  correctAnswer: string | string[]
  explanation: string
  marks: number
  topic: string
}

export interface Topic {
  id: string
  name: string
  completed: boolean
  studyMaterials: StudyMaterial[]
  quizzes: Quiz[]
  tests: Quiz[]
}

export interface Subject {
  id: string
  name: string
  duration: number
  questions: number
  color: string
  icon: string
  level: number
  xp: number
  maxXp: number
  coins: number
  unlocked: boolean
  conquestTitle: string
  topics: Topic[]
  timeLimit: number
}

// Year 10 GCSE Mathematics - Complete Curriculum
export const year10Mathematics: Subject = {
  id: "maths",
  name: "Mathematics",
  duration: 90,
  questions: 25,
  color: "from-blue-400 to-blue-600",
  icon: "🔢",
  level: 1,
  xp: 0,
  maxXp: 500,
  coins: 0,
  unlocked: true,
  conquestTitle: "Number Ninja",
  timeLimit: 90,
  topics: [
    {
      id: "number",
      name: "Number",
      completed: false,
      studyMaterials: [
        {
          id: "fractions-lesson",
          title: "Working with Fractions",
          content: `# 🍰 Working with Fractions

## "Fractions are just part of the whole picture!"

Understanding fractions is a superpower in maths. Whether you're baking a cake or building a bridge, you need to know your way around them.

### 🎯 Learning Objectives
- Add, subtract, multiply and divide fractions
- Convert between mixed numbers and improper fractions
- Simplify fractions to their lowest terms
- Apply fractions to real-world problems

---

## 1. Adding and Subtracting Fractions
**Rule:** You MUST have a common denominator (the bottom number).

### ➕ Addition
**Example:** 1/3 + 1/4

1.  **Find the LCM:** The lowest common multiple of 3 and 4 is **12**.
2.  **Convert:**
    - 1/3 = 4/12
    - 1/4 = 3/12
3.  **Add:** 4/12 + 3/12 = 7/12

### ➖ Subtraction
**Example:** 3/4 - 1/2

1.  **Find the LCM:** LCM of 4 and 2 is **4**.
2.  **Convert:** 1/2 = 2/4
3.  **Subtract:** 3/4 - 2/4 = 1/4

---

## 2. Multiplying and Dividing
These are actually easier than adding!

### ✖️ Multiplication
**Rule:** Multiply the tops (numerators) and multiply the bottoms (denominators).

**Example:** 2/3 × 4/5 = 8/15

### ➗ Division
**Rule:** Keep, Change, Flip (KCF).
1.  **Keep** the first fraction.
2.  **Change** division to multiplication.
3.  **Flip** the second fraction (reciprocal).

**Example:** 1/2 ÷ 1/4
- 1/2 × 4/1 = 4/2 = 2

---

## 🧠 Quick Quiz
**What is 1/2 × 1/2?**
- [ ] 1
- [ ] 1/4
- [ ] 2/4

*Answer: 1/4 (Half of a half is a quarter!)*
`,

          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 45,
          learningObjectives: [
            "Add and subtract fractions with different denominators",
            "Multiply and divide fractions",
            "Convert between mixed numbers and improper fractions",
            "Apply fraction skills to solve real-world problems"
          ],
        },
        {
          id: "percentages-lesson",
          title: "Percentages and Percentage Change",
          content: `# Percentages and Percentage Change

## Learning Objectives
    - Calculate percentages of amounts
    - Find percentage increases and decreases
    - Solve reverse percentage problems
    - Apply percentages in financial contexts

## Key Concepts

### Finding a Percentage of an Amount
Method 1: Convert to decimal
15 % of £240 = 0.15 × £240 = £36

Method 2: Use fractions
15 % of £240 = 15 / 100 × £240 = £36

### Percentage Increase and Decrease
    ** Percentage Increase:** New Value = Original × (100 + increase %) / 100
    ** Percentage Decrease:** New Value = Original × (100 - decrease %) / 100

    ** Example 1:** A £200 item increases by 15 %
    New price = £200 × 115 / 100 = £200 × 1.15 = £230

    ** Example 2:** A £80 jacket is reduced by 25 %
    Sale price = £80 × 75 / 100 = £80 × 0.75 = £60

### Reverse Percentages
If you know the final amount after a percentage change, work backwards:

** Example:** After a 20 % increase, a price is £144. Find original price.
Let original price = x
x × 1.2 = £144
x = £144 ÷ 1.2 = £120

### Compound Interest
A = P(1 + r / 100) ^ t
Where: A = final amount, P = principal, r = rate %, t = time

    ** Example:** £1000 invested at 5 % compound interest for 3 years
A = 1000(1.05)³ = 1000 × 1.157625 = £1157.63

## Real - World Applications
- VAT calculations (20 % in UK)
  - Salary increases and tax calculations
    - Discount calculations in shopping
      - Interest rates and investments
        - Statistics and data analysis

## Practice Problems
1. Find 35 % of £180
2. A £50 item is reduced by 30 %.What's the new price?
3. After a 25 % increase, a salary is £37, 500. What was the original salary ?
  4. Calculate compound interest: £500 at 4 % for 2 years
5. A shop adds 20 % VAT to all prices.If the final price is £96, what was the pre - VAT price ? `,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 50,
          learningObjectives: [
            "Calculate percentages of amounts using multiple methods",
            "Apply percentage increases and decreases",
            "Solve reverse percentage problems",
            "Calculate compound interest",
            "Apply percentage skills in real-world contexts"
          ],
        },
        {
          id: "standard-form-lesson",
          title: "Standard Form and Scientific Notation",
          content: `# Standard Form and Scientific Notation

## Learning Objectives
  - Convert numbers to and from standard form
    - Perform calculations with numbers in standard form
      - Apply standard form to scientific contexts

## Key Concepts

Standard form expresses numbers as A × 10 ^ n, where 1 ≤ A < 10 and n is an integer.

### Converting to Standard Form

  ** Large Numbers:**
    345,000 = 3.45 × 10 ^ 5
      (Move decimal 5 places left, so power is + 5)

      ** Small Numbers:**
        0.0078 = 7.8 × 10 ^ -3
          (Move decimal 3 places right, so power is - 3)

### Converting from Standard Form
4.7 × 10 ^ 6 = 4, 700,000
2.3 × 10 ^ -4 = 0.00023

### Calculations with Standard Form

  ** Multiplication:**
    (2.5 × 10 ^ 4) × (3 × 10 ^ 2) = (2.5 × 3) × 10 ^ (4 + 2) = 7.5 × 10 ^ 6

      ** Division:**
        (8 × 10 ^ 6) ÷ (4 × 10 ^ 3) = (8 ÷ 4) × 10 ^ (6 - 3) = 2 × 10 ^ 3

          ** Addition / Subtraction:**
            Convert to same power of 10 first:
3.2 × 10 ^ 5 + 4.7 × 10 ^ 4 = 3.2 × 10 ^ 5 + 0.47 × 10 ^ 5 = 3.67 × 10 ^ 5

## Scientific Applications
  - Astronomical distances(light years, AU)
    - Atomic measurements(mass, size)
      - Population statistics
        - Financial calculations(national debt, GDP)

## Practice Problems
1. Write 5, 280,000 in standard form
2. Write 0.000091 in standard form
3. Calculate(2.5 × 10 ^ 4) × (3 × 10 ^ 2)
4. Calculate(8 × 10 ^ 6) ÷ (4 × 10 ^ 3)
5. The distance to the nearest star is 4.2 × 10 ^ 13 km.Light travels at 3 × 10 ^ 8 m / s.How long does light take to reach us ? `,
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 50,
          learningObjectives: [
            "Convert between standard form and ordinary numbers",
            "Perform arithmetic operations with standard form",
            "Apply standard form to scientific problems"
          ],
        },
      ],
      quizzes: [
        {
          id: "fractions-quiz",
          title: "Fractions Mastery Quiz",
          timeLimit: 20,
          difficulty: "foundation",
          passingScore: 70,
          xpReward: 100,
          coinReward: 50,
          questions: [
            {
              id: "fq1",
              question: "Calculate: 2/3 + 1/4",
              type: "multiple-choice",
              options: ["5/7", "11/12", "3/7", "2/12"],
              correctAnswer: "11/12",
              explanation: "Find common denominator 12: 8/12 + 3/12 = 11/12",
              marks: 2,
              topic: "Adding Fractions",
            },
            {
              id: "fq2",
              question: "Simplify: 18/24",
              type: "multiple-choice",
              options: ["3/4", "9/12", "6/8", "2/3"],
              correctAnswer: "3/4",
              explanation: "Divide both numerator and denominator by 6: 18÷6 = 3, 24÷6 = 4",
              marks: 2,
              topic: "Simplifying Fractions",
            },
            {
              id: "fq3",
              question: "Calculate: 3/5 × 2/7",
              type: "multiple-choice",
              options: ["6/35", "5/12", "6/12", "1/2"],
              correctAnswer: "6/35",
              explanation: "Multiply numerators: 3×2=6, multiply denominators: 5×7=35",
              marks: 2,
              topic: "Multiplying Fractions",
            },
            {
              id: "fq4",
              question: "Convert to mixed number: 17/5",
              type: "short-answer",
              correctAnswer: "3 2/5",
              explanation: "17 ÷ 5 = 3 remainder 2, so 17/5 = 3 2/5",
              marks: 2,
              topic: "Mixed Numbers",
            },
            {
              id: "fq5",
              question: "A recipe needs 2 1/3 cups of flour. How much flour for 1 1/2 times the recipe?",
              type: "calculation",
              correctAnswer: "3 1/2",
              explanation: "2 1/3 × 1 1/2 = 7/3 × 3/2 = 21/6 = 3 1/2 cups",
              marks: 3,
              topic: "Real-world Fractions",
            },
          ],
        },
        {
          id: "percentages-quiz",
          title: "Percentages Challenge",
          timeLimit: 25,
          difficulty: "foundation",
          passingScore: 70,
          xpReward: 120,
          coinReward: 60,
          questions: [
            {
              id: "pq1",
              question: "Calculate 15% of £240",
              type: "multiple-choice",
              options: ["£36", "£24", "£40", "£30"],
              correctAnswer: "£36",
              explanation: "15% of £240 = 0.15 × £240 = £36",
              marks: 2,
              topic: "Percentage of Amount",
            },
            {
              id: "pq2",
              question: "A £80 jacket is reduced by 25%. What's the sale price?",
              type: "calculation",
              correctAnswer: "£60",
              explanation: "25% of £80 = £20, so sale price = £80 - £20 = £60",
              marks: 3,
              topic: "Percentage Decrease",
            },
            {
              id: "pq3",
              question: "After a 20% increase, a price is £144. What was the original price?",
              type: "calculation",
              correctAnswer: "£120",
              explanation: "Let x be original price. x × 1.2 = £144, so x = £144 ÷ 1.2 = £120",
              marks: 4,
              topic: "Reverse Percentages",
            },
          ],
        },
      ],
      tests: [
        {
          id: "number-test",
          title: "Number Skills Assessment",
          timeLimit: 45,
          difficulty: "foundation",
          passingScore: 60,
          xpReward: 200,
          coinReward: 100,
          questions: [
            {
              id: "nt1",
              question: "A shop reduces all prices by 25%. If a jacket originally cost £80, what is the new price?",
              type: "calculation",
              correctAnswer: "£60",
              explanation: "25% of £80 = £20, so new price = £80 - £20 = £60",
              marks: 3,
              topic: "Percentage Decrease",
            },
            {
              id: "nt2",
              question: "Express 0.375 as a fraction in its simplest form.",
              type: "short-answer",
              correctAnswer: "3/8",
              explanation: "0.375 = 375/1000 = 3/8 (dividing by 125)",
              marks: 3,
              topic: "Decimal to Fraction",
            },
            {
              id: "nt3",
              question: "Calculate: 2 1/4 + 1 5/6",
              type: "calculation",
              correctAnswer: "4 1/12",
              explanation: "2 1/4 + 1 5/6 = 9/4 + 11/6 = 27/12 + 22/12 = 49/12 = 4 1/12",
              marks: 4,
              topic: "Adding Mixed Numbers",
            },
          ],
        },
      ],
    },
    {
      id: "algebra",
      name: "Algebra",
      completed: false,
      studyMaterials: [
        {
          id: "linear-equations",
          title: "Solving Linear Equations",
          content: `# Solving Linear Equations

## Learning Objectives
  - Solve linear equations with one unknown
    - Rearrange formulae to change the subject
      - Solve equations with brackets and fractions
        - Apply algebraic skills to real - world problems

## Key Concepts

### Basic Linear Equations
An equation where the highest power of the variable is 1.

  ** Example 1:** Solve 3x + 7 = 22
    - Subtract 7 from both sides: 3x = 15
      - Divide by 3: x = 5
        - Check: 3(5) + 7 = 15 + 7 = 22 ✓

** Example 2:** Solve 5x - 8 = 2x + 10
  - Subtract 2x from both sides: 3x - 8 = 10
    - Add 8 to both sides: 3x = 18
      - Divide by 3: x = 6

### Equations with Brackets
Expand brackets first, then solve.

** Example:** Solve 2(x + 3) = 14
  - Expand: 2x + 6 = 14
    - Subtract 6: 2x = 8
      - Divide by 2: x = 4

        ** Example:** Solve 3(2x - 1) = 4(x + 2)
          - Expand: 6x - 3 = 4x + 8
            - Subtract 4x: 2x - 3 = 8
              - Add 3: 2x = 11
                - Divide by 2: x = 5.5

### Equations with Fractions
Multiply through by the denominator to clear fractions.

** Example:** Solve(x + 2) / 3 = 5
  - Multiply by 3: x + 2 = 15
    - Subtract 2: x = 13

      ** Example:** Solve x / 4 + x / 6 = 5
        - Find common denominator(12): 3x / 12 + 2x / 12 = 5
          - Simplify: 5x / 12 = 5
            - Multiply by 12: 5x = 60
              - Divide by 5: x = 12

### Rearranging Formulae
Change the subject by performing inverse operations.

** Example 1:** Make x the subject of y = 3x + 2
  - Subtract 2: y - 2 = 3x
    - Divide by 3: x = (y - 2) / 3

      ** Example 2:** Make r the subject of A = πr²
- Divide by π: A / π = r²
- Square root: r = √(A / π)

## Real - World Applications
  - Distance, speed, time problems
    - Financial calculations(loans, investments)
      - Engineering and construction
        - Scientific formulae

## Practice Problems
1. Solve: 5x - 3 = 17
2. Solve: 3(x - 2) = 21
3. Solve: (2x + 1)/5 = 3
4. Make t the subject: v = u + at
5. A mobile phone plan costs £20 per month plus £0.10 per minute.If the monthly bill is £35, how many minutes were used ? `,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          learningObjectives: [
            "Solve linear equations systematically",
            "Handle equations with brackets and fractions",
            "Rearrange formulae to change the subject",
            "Apply algebraic skills to solve real-world problems"
          ],
        },
        {
          id: "quadratic-equations",
          title: "Quadratic Equations",
          content: `# Quadratic Equations

## Learning Objectives
  - Solve quadratic equations by factoring
    - Use the quadratic formula
      - Complete the square
        - Interpret solutions graphically

## Key Concepts

### Standard Form
A quadratic equation has the form ax² + bx + c = 0, where a ≠ 0.

### Factoring Method
  ** Example 1:** Solve x² + 5x + 6 = 0
    - Factor: (x + 2)(x + 3) = 0
      - Solutions: x = -2 or x = -3

        ** Example 2:** Solve x² - 7x + 12 = 0
          - Factor: (x - 3)(x - 4) = 0
            - Solutions: x = 3 or x = 4

### Quadratic Formula
For ax² + bx + c = 0:
x = (-b ± √(b² - 4ac)) / 2a

  ** Example:** Solve 2x² + 3x - 2 = 0
    - a = 2, b = 3, c = -2
      - x = (-3 ± √(9 + 16)) / 4 = (-3 ± 5) / 4
        - x = 1 / 2 or x = -2

### Completing the Square
  ** Example:** Solve x² + 6x + 5 = 0
    - Rearrange: x² + 6x = -5
      - Complete square: (x + 3)² - 9 = -5
        - Simplify: (x + 3)² = 4
          - Solutions: x + 3 = ±2, so x = -1 or x = -5

### The Discriminant
b² - 4ac tells us about the nature of roots:
- If > 0: two real roots
  - If = 0: one repeated root
    - If < 0: no real roots

## Real - World Applications
  - Projectile motion
    - Area and optimization problems
      - Business profit / loss calculations
        - Engineering design

## Practice Problems
1. Solve by factoring: x² - 8x + 15 = 0
2. Use the quadratic formula: 3x² - 5x - 2 = 0
3. Complete the square: x² + 4x - 1 = 0
4. A ball is thrown upward with initial velocity 20 m / s.Its height h = 20t - 5t². When does it hit the ground ? `,
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 60,
          learningObjectives: [
            "Solve quadratic equations using multiple methods",
            "Understand the discriminant",
            "Apply quadratic equations to real-world problems"
          ],
        },
      ],
      quizzes: [
        {
          id: "algebra-quiz",
          title: "Linear Equations Quiz",
          timeLimit: 25,
          difficulty: "foundation",
          passingScore: 70,
          xpReward: 120,
          coinReward: 60,
          questions: [
            {
              id: "aq1",
              question: "Solve: 4x + 5 = 21",
              type: "short-answer",
              correctAnswer: "x = 4",
              explanation: "Subtract 5: 4x = 16, then divide by 4: x = 4",
              marks: 2,
              topic: "Linear Equations",
            },
            {
              id: "aq2",
              question: "Solve: 3(x - 2) = 15",
              type: "short-answer",
              correctAnswer: "x = 7",
              explanation: "Expand: 3x - 6 = 15, add 6: 3x = 21, divide by 3: x = 7",
              marks: 3,
              topic: "Equations with Brackets",
            },
            {
              id: "aq3",
              question: "Make x the subject: y = 2x - 3",
              type: "short-answer",
              correctAnswer: "x = (y + 3)/2",
              explanation: "Add 3: y + 3 = 2x, then divide by 2: x = (y + 3)/2",
              marks: 3,
              topic: "Rearranging Formulae",
            },
          ],
        },
      ],
      tests: [],
    },
    {
      id: "geometry",
      name: "Geometry and Measures",
      completed: false,
      studyMaterials: [
        {
          id: "angles-lesson",
          title: "Angles and Polygons",
          content: `# Angles and Polygons

## Learning Objectives
  - Calculate angles in triangles and quadrilaterals
    - Use angle properties of parallel lines
      - Find angles in regular and irregular polygons
        - Apply circle theorems

## Key Concepts

### Basic Angle Facts
  - Angles on a straight line sum to 180°
- Angles around a point sum to 360°
- Vertically opposite angles are equal

### Triangle Properties
  - Sum of interior angles = 180°
- Exterior angle = sum of two opposite interior angles
  - Isosceles triangle: two equal sides, two equal angles
    - Equilateral triangle: all sides equal, all angles 60°

### Quadrilateral Properties
  - Sum of interior angles = 360°
- Rectangle: opposite sides equal, all angles 90°
- Rhombus: all sides equal, opposite angles equal
  - Parallelogram: opposite sides parallel and equal

### Parallel Lines
When a transversal crosses parallel lines:
- Corresponding angles are equal
  - Alternate angles are equal
    - Co - interior angles sum to 180°

### Polygons
For a regular n - sided polygon:
- Sum of interior angles = (n - 2) × 180°
- Each interior angle = (n - 2) × 180° ÷ n
  - Each exterior angle = 360° ÷ n

### Circle Theorems
1. Angle in semicircle = 90°
2. Angles in same segment are equal
3. Angle at center = 2 × angle at circumference
4. Opposite angles in cyclic quadrilateral sum to 180°

## Practice Problems
1. Find the missing angle in a triangle with angles 65° and 48°
2. Calculate each interior angle of a regular octagon
3. Two parallel lines are cut by a transversal.If one angle is 75°, find all other angles
4. In a circle, an arc subtends an angle of 80° at the center.What angle does it subtend at the circumference ? `,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 55,
          learningObjectives: [
            "Apply angle properties in various geometric shapes",
            "Use parallel line angle relationships",
            "Calculate polygon angles",
            "Apply basic circle theorems"
          ],
        },
      ],
      quizzes: [],
      tests: [],
    },
    {
      id: "statistics",
      name: "Statistics and Probability",
      completed: false,
      studyMaterials: [
        {
          id: "data-handling",
          title: "Data Handling and Averages",
          content: `# Data Handling and Averages

## Learning Objectives
  - Calculate mean, median, mode, and range
    - Interpret frequency tables and grouped data
      - Create and interpret charts and graphs
        - Compare data sets using statistics

## Key Concepts

### Measures of Central Tendency

  ** Mean(Average):**
    Sum of all values ÷ number of values

Example: 2, 5, 7, 8, 3
Mean = (2 + 5 + 7 + 8 + 3) ÷ 5 = 25 ÷ 5 = 5

  ** Median(Middle Value):**
    Arrange in order, find middle value
Example: 2, 3, 5, 7, 8 → Median = 5

For even number of values, take mean of middle two:
2, 3, 5, 7, 8, 9 → Median = (5 + 7) ÷ 2 = 6

  ** Mode(Most Common):**
    The value that appears most frequently
Example: 2, 3, 3, 5, 7 → Mode = 3

### Measures of Spread

  ** Range:**
    Highest value - Lowest value
Example: 2, 3, 5, 7, 8 → Range = 8 - 2 = 6

### Frequency Tables
  | Score | Frequency |
| -------| -----------|
| 1 | 3 |
| 2 | 5 |
| 3 | 7 |
| 4 | 2 |

  Mean = (1×3 + 2×5 + 3×7 + 4×2) ÷ (3 + 5 + 7 + 2) = 43 ÷ 17 = 2.53

### Grouped Data
For grouped data, use midpoint of each class:

| Height(cm) | Frequency | Midpoint |
| -------------| -----------| ----------|
| 150 - 159 | 5 | 154.5 |
| 160 - 169 | 8 | 164.5 |
| 170 - 179 | 3 | 174.5 |

  Estimated mean = (154.5×5 + 164.5×8 + 174.5×3) ÷ 16

### Charts and Graphs
  - Bar charts: for categorical data
    - Histograms: for continuous data
      - Pie charts: for showing proportions
        - Scatter graphs: for showing correlation

## Practice Problems
1. Find mean, median, mode, and range: 4, 7, 2, 9, 5, 7, 3
2. From a frequency table showing test scores, calculate the mean
3. Interpret a histogram showing heights of students
4. Create a pie chart for favorite subjects survey data`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 50,
          learningObjectives: [
            "Calculate and interpret measures of central tendency",
            "Work with frequency tables and grouped data",
            "Create and interpret statistical charts",
            "Compare data sets using appropriate statistics"
          ],
        },
      ],
      quizzes: [],
      tests: [],
    },
  ],
}

// Year 10 GCSE Combined Science - Complete Curriculum
export const year10CombinedScience: Subject = {
  id: "science",
  name: "Combined Science",
  duration: 105,
  questions: 30,
  color: "from-purple-400 to-purple-600",
  icon: "🧪",
  level: 1,
  xp: 0,
  maxXp: 500,
  coins: 0,
  unlocked: true,
  conquestTitle: "Lab Legend",
  timeLimit: 105,
  topics: [
    {
      id: "cell-biology",
      name: "Cell Biology",
      completed: false,
      studyMaterials: [
        {
          id: "cell-structure",
          title: "Cell Structure and Function",
          content: `# Cell Structure and Function

## Learning Objectives
  - Identify the main parts of animal and plant cells
    - Explain the function of each cell organelle
      - Compare prokaryotic and eukaryotic cells
        - Use microscopy calculations

## Animal Cell Structure

### Key Organelles and Functions:

** 1. Nucleus **
  - Controls cell activities and contains DNA
    - Surrounded by nuclear membrane with pores
    - Contains chromosomes made of DNA and proteins

      ** 2. Cytoplasm **
        - Jelly - like substance where chemical reactions occur
          - Contains dissolved nutrients and waste products
            - Site of many metabolic processes

              ** 3. Cell Membrane **
                - Controls what enters and leaves the cell
                  - Selectively permeable barrier
                    - Made of phospholipids and proteins

                      ** 4. Mitochondria **
                        - Site of aerobic respiration
                          - Releases energy from glucose
                            - More numerous in active cells(muscle, nerve)

                              ** 5. Ribosomes **
                                - Site of protein synthesis
                                  - Found free in cytoplasm or attached to ER
                                    - Made of RNA and proteins

## Plant Cell Structure

### Additional organelles in plant cells:

** 1. Cell Wall **
  - Made of cellulose fibers
    - Provides structural support and protection
      - Fully permeable to water and dissolved substances

        ** 2. Chloroplasts **
          - Contain chlorophyll for photosynthesis
            - Convert light energy to chemical energy
              - Found mainly in leaf cells

                ** 3. Permanent Vacuole **
                  - Large fluid - filled space
                    - Maintains cell shape and stores substances
                      - Surrounded by tonoplast membrane

## Prokaryotic vs Eukaryotic Cells

### Prokaryotic Cells(Bacteria):
- No nucleus(DNA free in cytoplasm)
  - No membrane - bound organelles
    - Smaller(1 - 5 μm)
    - Cell wall made of peptidoglycan
      - Examples: bacteria, archaea

### Eukaryotic Cells(Animals, Plants, Fungi):
- Nucleus present with nuclear membrane
  - Membrane - bound organelles
    - Larger(10 - 100 μm)
    - More complex internal structure
      - Examples: animal, plant, fungal cells

## Microscopy and Magnification

### Magnification Calculation:
** Magnification = Image size ÷ Actual size **

### Types of Microscopes:
- ** Light microscopes:** up to ×2000 magnification, can see living cells
  - ** Electron microscopes:** up to ×2,000,000 magnification, higher resolution

### Units of Measurement:
- 1 meter = 1000 millimeters(mm)
  - 1 mm = 1000 micrometers(μm)
    - 1 μm = 1000 nanometers(nm)

## Specialized Cells

### Examples of Cell Specialization:
- ** Red blood cells:** no nucleus, biconcave shape for oxygen transport
  - ** Nerve cells:** long extensions for electrical signal transmission
    - ** Root hair cells:** increased surface area for water absorption
      - ** Sperm cells:** tail for swimming, many mitochondria for energy

## Practice Questions
1. Name three organelles found in plant cells but not animal cells
2. Calculate magnification if actual size is 0.05mm and image size is 25mm
3. Explain why plant cells have cell walls but animal cells don't
4. Describe how a red blood cell is adapted for its function`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 50,
          learningObjectives: [
            "Identify cell organelles and their functions",
            "Compare different cell types",
            "Use microscopy calculations",
            "Understand cell specialization"
          ],
        },
        {
          id: "cell-division",
          title: "Cell Division and Genetics",
          content: `# Cell Division and Genetics

## Learning Objectives
  - Understand the cell cycle and mitosis
    - Explain the process of meiosis
      - Describe DNA structure and function
- Understand inheritance patterns

## The Cell Cycle

### Phases of the Cell Cycle:
1. ** G1 Phase:** Cell grows and organelles duplicate
2. ** S Phase:** DNA replication occurs
3. ** G2 Phase:** Further growth and protein synthesis
4. ** M Phase:** Mitosis and cell division

### Mitosis
Purpose: Growth and repair of tissues

  ** Stages of Mitosis:**
    1. ** Prophase:** Chromosomes condense, nuclear membrane breaks down
2. ** Metaphase:** Chromosomes line up at cell equator
3. ** Anaphase:** Chromosomes separate and move to opposite poles
4. ** Telophase:** Nuclear membranes reform, chromosomes uncoil

  ** Result:** Two identical diploid cells

### Meiosis
Purpose: Production of gametes(sex cells)

  ** Key Features:**
    - Two divisions(meiosis I and II)
      - Crossing over creates genetic variation
        - Results in four genetically different haploid cells
          - Reduces chromosome number by half

## DNA Structure and Function

### DNA Structure:
- Double helix made of two complementary strands
  - Made of nucleotides(phosphate, sugar, base)
    - Four bases: A, T, G, C
      - Base pairing rules: A - T, G - C

### DNA Function:
- Stores genetic information
  - Controls protein synthesis
    - Passed from parents to offspring

### Genes and Chromosomes:
- Gene: section of DNA coding for a protein
  - Chromosome: structure containing many genes
    - Humans have 46 chromosomes(23 pairs)

## Inheritance

### Key Terms:
- ** Allele:** different versions of a gene
  - ** Dominant:** allele expressed when present(capital letter)
    - ** Recessive:** allele only expressed when two copies present(lowercase)
      - ** Homozygous:** two identical alleles(AA or aa)
        - ** Heterozygous:** two different alleles(Aa)
          - ** Genotype:** genetic makeup(e.g., Aa)
            - ** Phenotype:** observable characteristics(e.g., brown eyes)

### Monohybrid Crosses:
Example: Brown eyes(B) dominant to blue eyes(b)
Bb × Bb cross:
- Offspring: BB, Bb, Bb, bb
  - Ratio: 3 brown: 1 blue

## Genetic Disorders

### Examples:
- ** Cystic fibrosis:** recessive disorder affecting lungs
  - ** Huntington's disease:** dominant disorder affecting nervous system
    - ** Sickle cell anemia:** recessive disorder affecting red blood cells

## Practice Problems
1. Draw a Punnett square for Aa × aa cross
2. Explain why mitosis produces identical cells but meiosis doesn't
3. Calculate the probability of two heterozygous parents having a child with a recessive trait
4. Describe the structure of DNA using key terms`,
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 60,
          learningObjectives: [
            "Understand cell division processes",
            "Explain DNA structure and function",
            "Predict inheritance patterns",
            "Analyze genetic crosses"
          ],
        },
      ],
      quizzes: [
        {
          id: "cells-quiz",
          title: "Cell Biology Quiz",
          timeLimit: 20,
          difficulty: "foundation",
          passingScore: 70,
          xpReward: 100,
          coinReward: 50,
          questions: [
            {
              id: "cq1",
              question: "Which organelle controls the cell's activities?",
              type: "multiple-choice",
              options: ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"],
              correctAnswer: "Nucleus",
              explanation: "The nucleus contains DNA and controls all cell activities",
              marks: 1,
              topic: "Cell Structure",
            },
            {
              id: "cq2",
              question: "What is the function of chloroplasts?",
              type: "multiple-choice",
              options: ["Respiration", "Photosynthesis", "Protein synthesis", "Storage"],
              correctAnswer: "Photosynthesis",
              explanation: "Chloroplasts contain chlorophyll and are the site of photosynthesis",
              marks: 1,
              topic: "Plant Cells",
            },
            {
              id: "cq3",
              question: "A cell image is 50mm and the actual size is 0.1mm. What is the magnification?",
              type: "calculation",
              correctAnswer: "×500",
              explanation: "Magnification = Image size ÷ Actual size = 50 ÷ 0.1 = 500",
              marks: 2,
              topic: "Microscopy",
            },
            {
              id: "cq4",
              question: "Which type of cell division produces gametes?",
              type: "multiple-choice",
              options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
              correctAnswer: "Meiosis",
              explanation: "Meiosis produces gametes (sex cells) with half the chromosome number",
              marks: 1,
              topic: "Cell Division",
            },
          ],
        },
      ],
      tests: [],
    },
    {
      id: "chemistry",
      name: "Chemistry",
      completed: false,
      studyMaterials: [
        {
          id: "atomic-structure",
          title: "Atomic Structure and Periodic Table",
          content: `# Atomic Structure and Periodic Table

## Learning Objectives
  - Describe the structure of atoms
    - Understand the arrangement of the periodic table
      - Explain chemical bonding
        - Calculate relative atomic mass

## Atomic Structure

### Subatomic Particles:
| Particle | Charge | Mass | Location |
| ----------| --------| ------| ----------|
| Proton | +1 | 1 | Nucleus |
| Neutron | 0 | 1 | Nucleus |
| Electron | -1 | 1 / 1840 | Shells |

### Key Terms:
- ** Atomic number:** number of protons
  - ** Mass number:** protons + neutrons
    - ** Isotopes:** atoms with same protons, different neutrons

### Electronic Configuration:
- First shell: maximum 2 electrons
  - Second shell: maximum 8 electrons
    - Third shell: maximum 8 electrons(for first 20 elements)

  Examples:
  - Carbon(6): 2, 4
    - Sodium(11): 2, 8, 1
      - Chlorine(17): 2, 8, 7

## The Periodic Table

### Organization:
- ** Groups:** vertical columns(1 - 7, 0)
  - ** Periods:** horizontal rows
    - Elements in same group have similar properties

### Group Properties:
** Group 1(Alkali Metals):**
  - One electron in outer shell
    - React with water to form hydroxides
      - Reactivity increases down the group

        ** Group 7(Halogens):**
          - Seven electrons in outer shell
            - Form salts with metals
            - Reactivity decreases down the group

              ** Group 0(Noble Gases):**
                - Full outer shell(stable)
                  - Unreactive / inert
                  - Used in lighting and welding

## Chemical Bonding

### Ionic Bonding:
- Transfer of electrons from metal to non - metal
  - Forms ions with opposite charges
    - Strong electrostatic attraction
      - Example: Na⁺Cl⁻ (sodium chloride)

### Covalent Bonding:
- Sharing of electrons between non - metals
  - Forms molecules
    - Example: H₂O(water), CO₂ (carbon dioxide)

### Metallic Bonding:
- Sea of delocalized electrons
  - Explains conductivity and malleability
    - Found in metals and alloys

## Chemical Formulae and Equations

### Writing Formulae:
- Use valency / oxidation states
  - Balance charges
    - Examples: MgO, CaCl₂, Al₂O₃

### Balancing Equations:
Example: Mg + O₂ → MgO
Balanced: 2Mg + O₂ → 2MgO

## Relative Atomic Mass

### Calculation:
RAM = (mass of isotope 1 × % abundance + mass of isotope 2 × % abundance) ÷ 100

Example: Chlorine has isotopes ³⁵Cl(75 %) and ³⁷Cl(25 %)
RAM = (35 × 75 + 37 × 25) ÷ 100 = 35.5

## Practice Problems
1. Draw the electronic configuration for oxygen(atomic number 8)
2. Explain why Group 1 metals become more reactive down the group
3. Balance the equation: Al + O₂ → Al₂O₃
4. Calculate the RAM of copper with isotopes ⁶³Cu(69 %) and ⁶⁵Cu(31 %)`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 55,
          learningObjectives: [
            "Describe atomic structure and electronic configuration",
            "Understand periodic table organization",
            "Explain different types of chemical bonding",
            "Calculate relative atomic mass"
          ],
        },
      ],
      quizzes: [],
      tests: [],
    },
    {
      id: "physics",
      name: "Physics",
      completed: false,
      studyMaterials: [
        {
          id: "forces-motion",
          title: "Forces and Motion",
          content: `# Forces and Motion

## Learning Objectives
  - Understand Newton's laws of motion
    - Calculate speed, velocity, and acceleration
      - Analyze forces and their effects
        - Apply equations of motion

## Key Concepts

### Speed, Velocity, and Acceleration

  ** Speed:**
    - Distance traveled per unit time
      - Speed = distance ÷ time
        - Units: m / s, km / h
          - Scalar quantity(magnitude only)

            ** Velocity:**
              - Displacement per unit time
                - Includes direction
                  - Vector quantity(magnitude and direction)

                    ** Acceleration:**
                      - Change in velocity per unit time
                        - a = (v - u) ÷ t
                          - Units: m / s²
- Can be positive(speeding up) or negative(slowing down)

### Distance - Time Graphs
  - Gradient = speed
    - Horizontal line = stationary
      - Curved line = changing speed

### Velocity - Time Graphs
  - Gradient = acceleration
    - Area under graph = displacement
      - Horizontal line = constant velocity

## Newton's Laws of Motion

### First Law(Law of Inertia):
An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an unbalanced force.

### Second Law:
Force = mass × acceleration
F = ma
  - Force in Newtons(N)
  - Mass in kilograms(kg)
  - Acceleration in m / s²

### Third Law:
For every action, there is an equal and opposite reaction.
  Examples:
- Walking: foot pushes back on ground, ground pushes forward on foot
  - Rocket propulsion: gases pushed down, rocket pushed up

## Types of Forces

### Contact Forces:
- ** Friction:** opposes motion between surfaces
  - ** Air resistance:** friction with air
  - ** Normal force:** perpendicular to surface
    - ** Tension:** force in stretched rope / cable

### Non - contact Forces:
- ** Gravitational:** attraction between masses
  - ** Magnetic:** attraction / repulsion between magnets
    - ** Electrostatic:** attraction / repulsion between charges

## Equations of Motion

For constant acceleration:
1. v = u + at
2. s = ut + ½at²
3. v² = u² + 2as

  Where:
- u = initial velocity
  - v = final velocity
    - a = acceleration
      - t = time
        - s = displacement

## Weight and Mass

### Mass:
- Amount of matter in object
  - Measured in kg
  - Same everywhere

### Weight:
- Gravitational force on object
  - Weight = mass × gravitational field strength
    - W = mg(g = 9.8 N / kg on Earth)
      - Measured in Newtons

## Terminal Velocity

When falling through air:
1. Initially accelerates due to gravity
2. Air resistance increases with speed
3. Eventually air resistance = weight
4. No net force, so constant velocity(terminal velocity)

## Practice Problems
1. A car travels 150m in 10s.Calculate its speed.
2. Calculate the force needed to accelerate a 1200kg car at 2m / s².
3. A ball is dropped from rest.After 3s, what is its velocity ? (g = 9.8m / s²)
4. Use v² = u² + 2as to find the stopping distance of a car traveling at 20m / s with deceleration 5m / s².`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 60,
          learningObjectives: [
            "Apply Newton's laws of motion",
            "Calculate motion quantities using equations",
            "Interpret motion graphs",
            "Understand different types of forces"
          ],
        },
      ],
      quizzes: [],
      tests: [],
    },
  ],
}

// Year 7 Mathematics - Enhanced Curriculum
export const year7Mathematics: Subject = {
  id: "maths",
  name: "Mathematics",
  duration: 60,
  questions: 20,
  color: "from-blue-400 to-blue-600",
  icon: "🔢",
  level: 1,
  xp: 0,
  maxXp: 400,
  coins: 0,
  unlocked: true,
  conquestTitle: "Number Explorer",
  timeLimit: 60,
  topics: [
    {
      id: "number-basics",
      name: "Number Basics",
      completed: false,
      studyMaterials: [
        {
          id: "place-value",
          title: "Place Value and Ordering Numbers",
          content: `# Place Value and Ordering Numbers

## Learning Objectives
  - Understand place value in whole numbers and decimals
    - Order numbers from smallest to largest
      - Round numbers to given places
        - Use place value in real - world contexts

## Place Value Chart
  | Thousands | Hundreds | Tens | Units | . | Tenths | Hundredths | Thousandths |
| -----------| ----------| ------| -------| ---| --------| ------------| -------------|
| 3 | 4 | 2 | 7 | . | 5 | 8 | 6 |

  The number above is: 3, 427.586
    - 3 is worth 3,000(3 thousands)
      - 4 is worth 400(4 hundreds)
        - 2 is worth 20(2 tens)
          - 7 is worth 7(7 units)
            - 5 is worth 0.5(5 tenths)
              - 8 is worth 0.08(8 hundredths)
                - 6 is worth 0.006(6 thousandths)

## Ordering Numbers
To order numbers from smallest to largest:
1. Compare the largest place value first
2. If equal, move to the next place value
3. Continue until you find a difference

  ** Example:** Order: 3.45, 3.4, 3.54, 3.405
    - All have 3 units
      - Compare tenths: 4, 4, 5, 4
        - 3.54 is largest(5 tenths)
          - Compare hundredths of remaining: 5, 0, 0.5
            - Order: 3.4, 3.405, 3.45, 3.54

## Rounding Numbers
  ** Rules for Rounding:**
    - Look at the digit to the right of the rounding place
      - If 5 or more, round up
        - If less than 5, round down

          ** Examples:**
            - Round 3.47 to 1 decimal place: Look at 7(≥5), so 3.5
              - Round 2, 847 to nearest 100: Look at 4(<5), so 2, 800
                - Round 156.83 to nearest whole number: Look at 8(≥5), so 157

## Real - World Applications
  - Money: £3.47 rounded to nearest penny
    - Measurements: 2.34m rounded to nearest cm
      - Population: 45, 678 people rounded to nearest thousand

## Practice Problems
1. What is the value of 7 in 2, 374.56 ?
  2. Order these numbers: 4.2, 4.02, 4.12, 4.021
3. Round 67.89 to 1 decimal place
4. Round 3, 456 to the nearest hundred
5. A shop sells items for £2.47, £3.89, and £1.23.Order from cheapest to most expensive.`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 30,
          learningObjectives: [
            "Read and write numbers using place value",
            "Order numbers correctly",
            "Round numbers to specified places",
            "Apply place value skills to real situations"
          ],
        },
        {
          id: "basic-operations",
          title: "Addition, Subtraction, Multiplication, and Division",
          content: `# Basic Number Operations

## Learning Objectives
  - Perform addition and subtraction with whole numbers and decimals
    - Multiply and divide whole numbers and decimals
      - Use mental math strategies
        - Solve word problems involving all four operations

## Addition and Subtraction

### Column Method for Addition:
\`\`\`
  2,347
+   856
-------
  3,203
\`\`\`

### Column Method for Subtraction:
\`\`\`
  3,205
-   847
-------
  2,358
\`\`\`

### Adding and Subtracting Decimals:
Line up the decimal points:
\`\`\`
  23.45
+  7.8
-------
  31.25
\`\`\`

## Multiplication

### Long Multiplication:
\`\`\`
    347
×    24
-------
  1,388  (347 × 4)
  6,940  (347 × 20)
-------
  8,328
\`\`\`

### Multiplying Decimals:
1. Ignore decimal points and multiply
2. Count total decimal places in both numbers
3. Put that many decimal places in answer

**Example:** 3.2 × 1.5
- 32 × 15 = 480
- 2 decimal places total
- Answer: 4.80 = 4.8

## Division

### Short Division:
\`\`\`
    47
  ------
6 | 282
\`\`\`

### Long Division:
\`\`\`
      23
    -----
15 | 345
     30
     ---
      45
      45
      ---
       0
\`\`\`

### Dividing Decimals:
- Make divisor a whole number by multiplying both numbers by 10, 100, etc.
- Then divide as normal

**Example:** 12.6 ÷ 0.3
- Multiply both by 10: 126 ÷ 3 = 42

## Mental Math Strategies

### Addition:
- Break numbers into parts: 47 + 38 = (40 + 30) + (7 + 8) = 70 + 15 = 85
- Round and adjust: 47 + 38 = 50 + 38 - 3 = 88 - 3 = 85

### Subtraction:
- Count up: 83 - 47 = count from 47 to 83
- Round and adjust: 83 - 47 = 83 - 50 + 3 = 36

### Multiplication:
- Doubling: 16 × 5 = 8 × 10 = 80
- Partitioning: 23 × 4 = (20 × 4) + (3 × 4) = 80 + 12 = 92

### Division:
- Use multiplication facts: 56 ÷ 8 = 7 (because 7 × 8 = 56)
- Halving: 96 ÷ 4 = 48 ÷ 2 = 24

## Word Problems

**Steps to solve:**
1. Read carefully and identify what you need to find
2. Identify the numbers and operation needed
3. Estimate the answer
4. Calculate
5. Check if answer makes sense

**Example:** Sarah buys 3 books costing £4.50 each and 2 pens costing £1.25 each. How much does she spend in total?
- Books: 3 × £4.50 = £13.50
- Pens: 2 × £1.25 = £2.50
- Total: £13.50 + £2.50 = £16.00

## Practice Problems
1. Calculate: 2,456 + 789
2. Calculate: 5.67 - 2.89
3. Calculate: 23 × 47
4. Calculate: 144 ÷ 12
5. A cinema has 24 rows with 18 seats in each row. How many seats in total?`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 45,
          learningObjectives: [
            "Perform accurate calculations with whole numbers and decimals",
            "Use mental math strategies effectively",
            "Solve multi-step word problems",
            "Check answers for reasonableness"
          ],
        },
      ],
      quizzes: [
        {
          id: "number-y7-quiz",
          title: "Basic Number Quiz",
          timeLimit: 15,
          difficulty: "foundation",
          passingScore: 60,
          xpReward: 80,
          coinReward: 40,
          questions: [
            {
              id: "ny7q1",
              question: "What is the value of the digit 7 in 2,374?",
              type: "multiple-choice",
              options: ["7", "70", "700", "7000"],
              correctAnswer: "70",
              explanation: "The 7 is in the tens column, so its value is 70",
              marks: 1,
              topic: "Place Value",
            },
            {
              id: "ny7q2",
              question: "Round 67.89 to 1 decimal place:",
              type: "multiple-choice",
              options: ["67.8", "67.9", "68.0", "67"],
              correctAnswer: "67.9",
              explanation: "Look at the hundredths digit (9). Since 9 ≥ 5, round up to 67.9",
              marks: 1,
              topic: "Rounding",
            },
            {
              id: "ny7q3",
              question: "Calculate: 23.4 + 15.67",
              type: "calculation",
              correctAnswer: "39.07",
              explanation: "Line up decimal points: 23.40 + 15.67 = 39.07",
              marks: 2,
              topic: "Decimal Addition",
            },
            {
              id: "ny7q4",
              question: "A shop sells 15 boxes of chocolates with 24 chocolates in each box. How many chocolates in total?",
              type: "calculation",
              correctAnswer: "360",
              explanation: "15 × 24 = 360 chocolates",
              marks: 2,
              topic: "Word Problems",
            },
          ],
        },
      ],
      tests: [],
    },
    {
      id: "fractions-decimals",
      name: "Fractions and Decimals",
      completed: false,
      studyMaterials: [
        {
          id: "understanding-fractions",
          title: "Understanding Fractions",
          content: `# Understanding Fractions

## Learning Objectives
- Understand what fractions represent
- Compare and order fractions
- Add and subtract simple fractions
- Convert between fractions and decimals

## What are Fractions?

A fraction represents part of a whole:
- **Numerator** (top number): how many parts we have
- **Denominator** (bottom number): how many equal parts in total

Examples:
- 3/4 means 3 out of 4 equal parts
- 1/2 means 1 out of 2 equal parts (half)
- 5/8 means 5 out of 8 equal parts

## Types of Fractions

### Proper Fractions:
Numerator < denominator (less than 1)
Examples: 1/2, 3/4, 7/10

### Improper Fractions:
Numerator ≥ denominator (equal to or greater than 1)
Examples: 5/4, 7/3, 9/9

### Mixed Numbers:
Whole number + proper fraction
Examples: 1 1/2, 2 3/4, 3 2/5

## Equivalent Fractions

Fractions that represent the same amount:
- 1/2 = 2/4 = 3/6 = 4/8
- 2/3 = 4/6 = 6/9 = 8/12

**Finding Equivalent Fractions:**
Multiply or divide numerator and denominator by same number:
- 1/3 × 2/2 = 2/6
- 6/9 ÷ 3/3 = 2/3

## Simplifying Fractions

Reduce to lowest terms by dividing by common factors:
- 6/8 = 3/4 (divide by 2)
- 12/16 = 3/4 (divide by 4)
- 15/20 = 3/4 (divide by 5)

## Comparing Fractions

### Same Denominator:
Compare numerators: 3/7 < 5/7

### Different Denominators:
Convert to equivalent fractions with same denominator:
- Compare 2/3 and 3/4
- 2/3 = 8/12 and 3/4 = 9/12
- So 2/3 < 3/4

## Adding and Subtracting Fractions

### Same Denominator:
Add/subtract numerators, keep denominator:
- 2/5 + 1/5 = 3/5
- 4/7 - 2/7 = 2/7

### Different Denominators:
Find common denominator first:
- 1/3 + 1/4 = 4/12 + 3/12 = 7/12

## Fractions and Decimals

### Converting Fractions to Decimals:
Divide numerator by denominator:
- 1/2 = 1 ÷ 2 = 0.5
- 3/4 = 3 ÷ 4 = 0.75
- 1/8 = 1 ÷ 8 = 0.125

### Converting Decimals to Fractions:
- 0.5 = 5/10 = 1/2
- 0.25 = 25/100 = 1/4
- 0.75 = 75/100 = 3/4

## Practice Problems
1. Which is larger: 2/3 or 3/5?
2. Simplify: 12/18
3. Calculate: 1/4 + 1/3
4. Convert to decimal: 3/8
5. Convert to fraction: 0.6`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          learningObjectives: [
            "Understand fraction concepts and notation",
            "Compare and order fractions",
            "Perform basic fraction operations",
            "Convert between fractions and decimals"
          ],
        },
      ],
      quizzes: [],
      tests: [],
    },
  ],
}


// Database of all subjects by year group
export const curriculumDatabase: Record<number, Subject[]> = {
  7: [year7Mathematics],
  10: [year10Mathematics, year10CombinedScience, year10EnglishLiterature, year10History, year10ComputerScienceJ277],
}

// Function to get subjects for a year group
export function getSubjectsForYear(yearGroup: number): Subject[] {
  return curriculumDatabase[yearGroup] || []
}

// Function to get a specific subject
export function getSubject(subjectId: string, yearGroup: number): Subject | undefined {
  const subjects = getSubjectsForYear(yearGroup)
  return subjects.find((subject) => subject.id === subjectId)
}

// Function to get a specific topic
export function getTopic(subjectId: string, topicId: string, yearGroup: number): Topic | undefined {
  const subject = getSubject(subjectId, yearGroup)
  return subject?.topics.find((topic) => topic.id === topicId)
}
