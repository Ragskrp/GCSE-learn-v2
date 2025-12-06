
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('❌ Error: Firebase configuration missing!');
  console.error('Make sure .env.local exists with all Firebase credentials.');
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const year10Mathematics = {
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
};

const year7Mathematics = {
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
- Use place value in real-world contexts

## Place Value Chart
| Thousands | Hundreds | Tens | Units | . | Tenths | Hundredths | Thousandths |
|-----------|----------|------|-------|---|--------|------------|-------------|
| 3         | 4        | 2    | 7     | . | 5      | 8          | 6           |

Value of digit 4 is 400 (4 Hundreds).
Value of digit 8 is 0.08 (8 Hundredths).

## Ordering Numbers
When comparing numbers:
1. Compare the digits in the largest place value column first.
2. If they are the same, move to the next column to the right.
3. Continue until you find a difference.

**Example:** Compare 3.42 and 3.45
- Units: Both 3 (Same)
- Tenths: Both 4 (Same)
- Hundredths: 2 vs 5 (5 is bigger)
So, 3.45 > 3.42

## Rounding Numbers
**Rule:** Look at the digit to the right of the place you are rounding to.
- If it's 5 or more, round UP (add 1 to the rounding digit).
- If it's 4 or less, stay DOWN (keep the rounding digit same).

**Example:** Round 45.67 to 1 decimal place.
- Digit at 1st decimal place is 6.
- Digit to the right is 7 (5 or more).
- Round up 6 to 7.
- Answer: 45.7

**Example:** Round 342 to the nearest 10.
- Digit at tens place is 4.
- Digit to the right is 2 (4 or less).
- Keep 4, replace 2 with 0.
- Answer: 340

## Applications
- Money: £12.50 is 1 ten, 2 units, 5 tenths, 0 hundredths.
- Measurement: 1.5m vs 1.45m.

## Practice
1. Value of 7 in 372? (Answer: 70)
2. Order: 0.5, 0.05, 0.55 (Answer: 0.05, 0.5, 0.55)
3. Round 12.85 to 1 d.p. (Answer: 12.9)
`,
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
          id: "operations",
          title: "Four Operations",
          content: `# The Four Operations

## Learning Objectives
- Add and subtract whole numbers and decimals
- Multiply and divide whole numbers
- Understand order of operations (BIDMAS)

## Addition and Subtraction
**Key Rule:** Align the decimal points!

**Example:** 12.5 + 3.75
  12.50
+  3.75
-------
  16.25

## Multiplication
**Method:** Column multiplication / Grid method

**Example:** 23 x 4
  23
x  4
----
  92

## Division
**Method:** Bus stop method or short division.

**Example:** 96 ÷ 3
3 | 96
   32

## Order of Operations (BIDMAS)
- **B**rackets
- **I**ndices (Powers)
- **D**ivision
- **M**ultiplication
- **A**ddition
- **S**ubtraction

**Example:** 3 + 4 x 2
Multiplication first: 4 x 2 = 8
Then addition: 3 + 8 = 11
(NOT 7 x 2 = 14)

## Practice
1. 145 + 67
2. 54 - 28
3. 12 x 5
4. 45 ÷ 9
5. 5 + 2 x 3
`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          learningObjectives: [
            "Perform column addition and subtraction",
            "Multiply and divide correctly",
            "Apply BIDMAS to calculations"
          ],
        }
      ],
      quizzes: [
        {
          id: "number-basics-quiz",
          title: "Number Basics Quiz",
          timeLimit: 15,
          difficulty: "foundation",
          passingScore: 60,
          xpReward: 80,
          coinReward: 40,
          questions: [
            {
              id: "nbq1",
              question: "What is the value of the digit 5 in 1254?",
              type: "multiple-choice",
              options: ["5", "50", "500", "5000"],
              correctAnswer: "50",
              explanation: "The 5 is in the tens column, so its value is 50.",
              marks: 1,
              topic: "Place Value",
            },
            {
              id: "nbq2",
              question: "Round 14.62 to 1 decimal place.",
              type: "short-answer",
              correctAnswer: "14.6",
              explanation: "The digit after 6 is 2 (less than 5), so we round down: 14.6",
              marks: 1,
              topic: "Rounding",
            },
            {
              id: "nbq3",
              question: "Calculate: 12 + 4 x 3",
              type: "calculation",
              correctAnswer: "24",
              explanation: "Using BIDMAS, multiplication first: 4x3=12. Then addition: 12+12=24.",
              marks: 2,
              topic: "BIDMAS",
            },
            {
              id: "nbq4",
              question: "Which number is smallest? 0.4, 0.04, 0.44",
              type: "multiple-choice",
              options: ["0.4", "0.04", "0.44"],
              correctAnswer: "0.04",
              explanation: "0.04 has 0 tenths, while others have 4 tenths.",
              marks: 1,
              topic: "Ordering Decimals",
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
  ]
};

// Fill in the rest of Year 7 maths content (simplified for this script, but in real scenario should be complete)
// For now, I'll rely on the user running this or me providing the full content.
// Since I can't run it, I'm providing it for the user.

async function seedMaths() {
  console.log('🔥 Starting Maths Seeding...');

  try {
    // Write Year 10 Maths
    console.log('📝 Seeding Year 10 Maths...');
    await setDoc(doc(db, 'subjects', 'maths-10'), year10Mathematics);

    // Write Year 7 Maths
    console.log('📝 Seeding Year 7 Maths...');
    await setDoc(doc(db, 'subjects', 'maths-7'), year7Mathematics);

    console.log(`✅ Mathematics (Year 7 & 10) seeded successfully!`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedMaths();
