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
  title: string
  description: string
  order: number
  studyMaterials: StudyMaterial[]
  quizzes: Quiz[]
  tests: Quiz[]
  isUnlocked: boolean
  isCompleted: boolean
  progress: number // 0-100
}

export interface Subject {
  id: string
  name: string
  description: string
  color: string
  icon: string
  yearGroup: number
  topics: Topic[]
  totalXP: number
  earnedXP: number
}

// Year 10 GCSE Mathematics Curriculum
export const year10Mathematics: Subject = {
  id: "math-y10",
  name: "Mathematics",
  description: "GCSE Mathematics covering Number, Algebra, Geometry, Statistics, and Probability",
  color: "from-blue-500 to-indigo-600",
  icon: "📊",
  yearGroup: 10,
  totalXP: 5000,
  earnedXP: 0,
  topics: [
    {
      id: "number-y10",
      title: "Number",
      description: "Fractions, decimals, percentages, ratios, and number operations",
      order: 1,
      isUnlocked: true,
      isCompleted: false,
      progress: 0,
      studyMaterials: [
        {
          id: "fractions-lesson",
          title: "Working with Fractions",
          content: `# Working with Fractions

## Learning Objectives
- Add, subtract, multiply and divide fractions
- Convert between mixed numbers and improper fractions
- Simplify fractions to their lowest terms

## Key Concepts

### Adding and Subtracting Fractions
When adding or subtracting fractions, you need a common denominator:

**Example 1:** 1/3 + 1/4
- Find common denominator: 12
- Convert: 4/12 + 3/12 = 7/12

**Example 2:** 3/5 - 1/3
- Find common denominator: 15
- Convert: 9/15 - 5/15 = 4/15

### Multiplying Fractions
Multiply numerators together and denominators together:

**Example:** 2/3 × 3/4 = 6/12 = 1/2

### Dividing Fractions
Multiply by the reciprocal (flip the second fraction):

**Example:** 2/3 ÷ 3/4 = 2/3 × 4/3 = 8/9

## Practice Problems
1. Calculate: 2/5 + 1/3
2. Calculate: 3/4 × 2/9
3. Simplify: 18/24
4. Convert to mixed number: 17/5`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 45,
          learningObjectives: [
            "Add and subtract fractions with different denominators",
            "Multiply and divide fractions",
            "Convert between mixed numbers and improper fractions",
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

## Key Concepts

### Finding a Percentage of an Amount
To find x% of an amount, multiply by x/100:

**Example:** Find 15% of £240
15% of £240 = 15/100 × £240 = £36

### Percentage Increase and Decrease
**Percentage Increase:** New Value = Original × (100 + increase%)/100
**Percentage Decrease:** New Value = Original × (100 - decrease%)/100

**Example:** A £200 item increases by 15%
New price = £200 × 115/100 = £230

### Reverse Percentages
If you know the final amount after a percentage change, work backwards:

**Example:** After a 20% increase, a price is £144. Find original price.
Let original price = x
x × 1.2 = £144
x = £144 ÷ 1.2 = £120

## Real-World Applications
- VAT calculations (20% in UK)
- Salary increases
- Discount calculations
- Interest rates

## Practice Problems
1. Find 35% of £180
2. A £50 item is reduced by 30%. What's the new price?
3. After a 25% increase, a salary is £37,500. What was the original salary?`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 50,
          learningObjectives: [
            "Calculate percentages of amounts",
            "Apply percentage increases and decreases",
            "Solve reverse percentage problems",
          ],
        },
        {
          id: "ratios-proportion-lesson",
          title: "Ratios and Proportion",
          content: `# Ratios and Proportion

## Learning Objectives
- Simplify ratios to their simplest form
- Divide a quantity into a given ratio
- Solve direct and inverse proportion problems

## Key Concepts

### Simplifying Ratios
Divide all parts of the ratio by their highest common factor.

**Example:** Simplify the ratio 18:24
- Highest common factor of 18 and 24 is 6
- 18 ÷ 6 = 3
- 24 ÷ 6 = 4
- Simplest form is 3:4

### Dividing a Quantity in a Ratio
1. Add the parts of the ratio to find the total number of parts.
2. Divide the quantity by the total number of parts to find the value of one part.
3. Multiply this value by each number in the ratio.

**Example:** Share £80 in the ratio 3:5
- Total parts = 3 + 5 = 8
- One part = £80 ÷ 8 = £10
- 3 parts = 3 × £10 = £30
- 5 parts = 5 × £10 = £50
- The shares are £30 and £50

### Direct and Inverse Proportion
**Direct Proportion:** As one variable increases, the other increases at the same rate. (y = kx)
**Inverse Proportion:** As one variable increases, the other decreases. (y = k/x)

## Practice Problems
1. Simplify the ratio 25:45
2. Share 120 sweets in the ratio 2:3:5
3. If 5 pens cost £1.50, how much do 8 pens cost? (Direct)
4. If it takes 3 builders 8 days to build a wall, how long would it take 4 builders? (Inverse)`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 60,
          learningObjectives: [
            "Simplify ratios",
            "Divide quantities into a given ratio",
            "Solve problems involving direct and inverse proportion",
          ],
        },
        {
          id: "standard-form-lesson",
          title: "Standard Form",
          content: `# Standard Form

## Learning Objectives
- Convert numbers to and from standard form
- Perform calculations with numbers in standard form

## Key Concepts

Standard form is a way of writing very large or very small numbers. It is written in the form A × 10^n, where 1 ≤ A < 10 and n is an integer.

### Converting to Standard Form
- Move the decimal point to get a number between 1 and 10.
- The number of places moved is the power of 10.
- Power is positive for large numbers, negative for small numbers.

**Example 1:** Write 345,000 in standard form.
- Move decimal 5 places left: 3.45
- Standard form: 3.45 × 10^5

**Example 2:** Write 0.0078 in standard form.
- Move decimal 3 places right: 7.8
- Standard form: 7.8 × 10^-3

### Calculations with Standard Form
**Multiplication:** Multiply the numbers, add the powers.
(a × 10^n) × (b × 10^m) = (a × b) × 10^(n+m)

**Division:** Divide the numbers, subtract the powers.
(a × 10^n) ÷ (b × 10^m) = (a ÷ b) × 10^(n-m)

## Practice Problems
1. Write 5,280,000 in standard form.
2. Write 0.000091 in standard form.
3. Calculate (2.5 × 10^4) × (3 × 10^2)
4. Calculate (8 × 10^6) ÷ (4 × 10^3)`,
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 50,
          learningObjectives: [
            "Understand and use standard form",
            "Perform calculations with numbers in standard form",
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
          ],
        },
      ],
    },
    {
      id: "algebra-y10",
      title: "Algebra",
      description: "Equations, inequalities, sequences, and graphs",
      order: 2,
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
      studyMaterials: [
        {
          id: "linear-equations",
          title: "Solving Linear Equations",
          content: `# Solving Linear Equations

## Learning Objectives
- Solve linear equations with one unknown
- Rearrange formulae to change the subject
- Solve equations with brackets and fractions

## Key Concepts

### Basic Linear Equations
An equation where the highest power of the variable is 1.

**Example:** Solve 3x + 7 = 22
- Subtract 7 from both sides: 3x = 15
- Divide by 3: x = 5

### Equations with Brackets
Expand brackets first, then solve.

**Example:** Solve 2(x + 3) = 14
- Expand: 2x + 6 = 14
- Subtract 6: 2x = 8
- Divide by 2: x = 4

### Equations with Fractions
Multiply through by the denominator to clear fractions.

**Example:** Solve (x + 2)/3 = 5
- Multiply by 3: x + 2 = 15
- Subtract 2: x = 13

### Rearranging Formulae
Change the subject by performing inverse operations.

**Example:** Make x the subject of y = 3x + 2
- Subtract 2: y - 2 = 3x
- Divide by 3: x = (y - 2)/3

## Practice Problems
1. Solve: 5x - 3 = 17
2. Solve: 3(x - 2) = 21
3. Make t the subject: v = u + at`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          learningObjectives: [
            "Solve linear equations systematically",
            "Handle equations with brackets and fractions",
            "Rearrange formulae to change the subject",
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
          ],
        },
      ],
      tests: [],
    },
  ],
}

// Year 10 Combined Science Curriculum
export const year10CombinedScience: Subject = {
  id: "science-y10",
  name: "Combined Science",
  description: "GCSE Combined Science covering Biology, Chemistry, and Physics",
  color: "from-green-500 to-emerald-600",
  icon: "🔬",
  yearGroup: 10,
  totalXP: 6000,
  earnedXP: 0,
  topics: [
    {
      id: "biology-cells",
      title: "Cell Biology",
      description: "Animal and plant cells, cell specialisation, and microscopy",
      order: 1,
      isUnlocked: true,
      isCompleted: false,
      progress: 0,
      studyMaterials: [
        {
          id: "cell-structure",
          title: "Cell Structure and Function",
          content: `# Cell Structure and Function

## Learning Objectives
- Identify the main parts of animal and plant cells
- Explain the function of each cell organelle
- Compare prokaryotic and eukaryotic cells

## Animal Cell Structure

### Key Organelles:
1. **Nucleus** - Controls cell activities and contains DNA
2. **Cytoplasm** - Jelly-like substance where chemical reactions occur
3. **Cell membrane** - Controls what enters and leaves the cell
4. **Mitochondria** - Site of respiration, releases energy
5. **Ribosomes** - Site of protein synthesis

## Plant Cell Structure

### Additional organelles in plant cells:
1. **Cell wall** - Made of cellulose, provides structural support
2. **Chloroplasts** - Contain chlorophyll for photosynthesis
3. **Vacuole** - Large permanent vacuole maintains cell shape

## Prokaryotic vs Eukaryotic Cells

### Prokaryotic Cells (Bacteria):
- No nucleus (DNA free in cytoplasm)
- No membrane-bound organelles
- Smaller and simpler

### Eukaryotic Cells (Animals, Plants, Fungi):
- Nucleus present
- Membrane-bound organelles
- Larger and more complex

## Microscopy
- **Magnification** = Image size ÷ Actual size
- Light microscopes: up to ×2000 magnification
- Electron microscopes: up to ×2,000,000 magnification

## Practice Questions
1. Name three organelles found in plant cells but not animal cells
2. Calculate magnification if actual size is 0.1mm and image size is 50mm
3. Explain why plant cells have cell walls but animal cells don't`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 50,
          learningObjectives: [
            "Identify cell organelles and their functions",
            "Compare different cell types",
            "Use microscopy calculations",
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
          ],
        },
      ],
      tests: [],
    },
  ],
}

// Year 7 Curriculum (simplified versions)
export const year7Mathematics: Subject = {
  id: "math-y7",
  name: "Mathematics",
  description: "Key Stage 3 Mathematics fundamentals",
  color: "from-purple-500 to-pink-600",
  icon: "🔢",
  yearGroup: 7,
  totalXP: 3000,
  earnedXP: 0,
  topics: [
    {
      id: "basic-number-y7",
      title: "Basic Number Skills",
      description: "Place value, ordering, and basic operations",
      order: 1,
      isUnlocked: true,
      isCompleted: false,
      progress: 0,
      studyMaterials: [
        {
          id: "place-value",
          title: "Place Value and Ordering Numbers",
          content: `# Place Value and Ordering Numbers

## Learning Objectives
- Understand place value in whole numbers and decimals
- Order numbers from smallest to largest
- Round numbers to given places

## Place Value Chart
| Thousands | Hundreds | Tens | Units | . | Tenths | Hundredths |
|-----------|----------|------|-------|---|--------|------------|
|     3     |    4     |  2   |   7   | . |   5    |     8      |

The number above is: 3,427.58

## Ordering Numbers
To order numbers:
1. Compare the largest place value first
2. If equal, move to the next place value
3. Continue until you find a difference

**Example:** Order: 3.45, 3.4, 3.54
- All have 3 units
- Compare tenths: 4, 4, 5
- 3.54 is largest
- Compare hundredths of remaining: 5, 0
- Order: 3.4, 3.45, 3.54

## Rounding
- Look at the digit to the right of the rounding place
- If 5 or more, round up
- If less than 5, round down

**Example:** Round 3.47 to 1 decimal place
- Look at hundredths: 7
- 7 ≥ 5, so round up
- Answer: 3.5`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 30,
          learningObjectives: [
            "Read and write numbers using place value",
            "Order numbers correctly",
            "Round numbers to specified places",
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
          ],
        },
      ],
      tests: [],
    },
  ],
}

// Database of all subjects by year group
export const curriculumDatabase: Record<number, Subject[]> = {
  7: [year7Mathematics],
  10: [year10Mathematics, year10CombinedScience],
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
