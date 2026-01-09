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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Comprehensive Year 10 Maths Data
const year10Mathematics = {
  id: "maths-10",
  name: "Mathematics (Higher)",
  duration: 360,
  questions: 1000,
  color: "from-blue-600 to-cyan-500",
  icon: "📐",
  level: 1,
  xp: 0,
  maxXp: 20000,
  coins: 0,
  unlocked: true,
  conquestTitle: "Maths Master",
  timeLimit: 120,
  topics: [
    // ==========================================
    // 1. NUMBER
    // ==========================================
    {
      id: "num-basics",
      name: "Number & Arithmetic",
      completed: false,
      studyMaterials: [
        {
          id: "primes-hcf-lcm",
          title: "Primes, HCF & LCM",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 30,
          learningObjectives: ["Prime factorisation", "Find HCF", "Find LCM"],
          content: `# 🔢 Primes, HCF & LCM

## Definitions
*   **Prime Number:** A number with exactly two factors (1 and itself). E.g., 2, 3, 5, 7, 11, 13, 17... (1 is NOT prime).
*   **Prime Factorisation:** Writing a number as a product of prime numbers (e.g., $12 = 2^2 \\times 3$).

## Finding HCF & LCM
Using Prime Factorisation (Venn Diagram Method):
**Example: 60 and 72**
*   $60 = 2 \\times 2 \\times 3 \\times 5$
*   $72 = 2 \\times 2 \\times 2 \\times 3 \\times 3$

*   **HCF:** Product of common factors ($2, 2, 3$) -> $2 \\times 2 \\times 3 = 12$.
*   **LCM:** Product of HCF and remaining factors -> $12 \\times 5 \\times 2 \\times 3 = 360$.
`
        },
        {
          id: "fractions-fdp",
          title: "Fractions & Decimals",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 35,
          learningObjectives: ["Recurring decimals to fractions", "Arithmetic with fractions"],
          content: `# 🍰 Fractions & Decimals

## Recurring Decimals
To convert $x = 0.\\dot{4}\\dot{5}$:
1.  $x = 0.4545...$
2.  Multiply by 100 (digits repeat every 2): $100x = 45.4545...$
3.  Subtract: $99x = 45$.
4.  $x = 45/99 = 5/11$.

## Fraction Arithmetic
*   **Adding/Subtracting:** Find common denominator.
    *   $2/3 + 1/5 = 10/15 + 3/15 = 13/15$.
*   **Multiplying:** Top $\\times$ Top, Bottom $\\times$ Bottom.
*   **Dividing (KFC):** Keep first, Flip second, Change to Multiply.
    *   $2/3 \\div 4/5 = 2/3 \\times 5/4 = 10/12 = 5/6$.
`
        },
        {
          id: "indices-surds",
          title: "Indices & Surds",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          learningObjectives: ["Rationalise denominator", "Fractional indices"],
          content: `# ⚡ Indices & Surds

## Index Laws
1.  $x^a \\times x^b = x^{a+b}$
2.  $x^a \\div x^b = x^{a-b}$
3.  $(x^a)^b = x^{ab}$
4.  $x^{-a} = 1/x^a$
5.  $x^{m/n} = (\\sqrt[n]{x})^m$

**Example:** $8^{-2/3} = 1 / (\\sqrt[3]{8})^2 = 1 / 2^2 = 1/4$.

## Surds
*   **Simplify:** $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$.
*   **Rationalise:** $\\frac{1}{3+\\sqrt{2}} \\times \\frac{3-\\sqrt{2}}{3-\\sqrt{2}} = \\frac{3-\\sqrt{2}}{9-2} = \\frac{3-\\sqrt{2}}{7}$.
`
        },
        {
          id: "standard-form",
          title: "Standard Form & Bounds",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 35,
          learningObjectives: ["Calculate in standard form", "Upper and Lower Bounds"],
          content: `# 🔬 Standard Form & Bounds

## Standard Form ($A \\times 10^n$)
*   $45000 = 4.5 \\times 10^4$
*   $0.0032 = 3.2 \\times 10^{-3}$
*   **Multiply:** $(2 \\times 10^3) \\times (3 \\times 10^5) = 6 \\times 10^8$.

## Bounds
If length $x = 10cm$ (to nearest cm):
*   **Lower Bound (LB):** $9.5cm$
*   **Upper Bound (UB):** $10.5cm$
*   **Error Interval:** $9.5 \\le x < 10.5$.

**Calculation Example:**
Max area of rectangle $5cm \\times 8cm$ (nearest cm)?
Use UBs: $5.5 \\times 8.5 = 46.75cm^2$.
`
        }
      ],
      quizzes: [
        {
          id: "qz-num-1", title: "Number Mastery", difficulty: "higher", passingScore: 75, xpReward: 300, coinReward: 40, timeLimit: 20,
          questions: [
            { id: "nq1", question: "HCF of 24 and 36?", type: "short-answer", correctAnswer: "12", marks: 2, topic: "HCF" },
            { id: "nq2", question: "Convert 0.1666... to fraction", type: "multiple-choice", options: ["1/6", "16/99", "16/90", "1/5"], correctAnswer: "1/6", marks: 3, topic: "Fractions" },
            { id: "nq3", question: "Calculate 64^(2/3)", type: "short-answer", correctAnswer: "16", marks: 2, topic: "Indices" },
            { id: "nq4", question: "Rationalise 5/√5", type: "short-answer", correctAnswer: "√5", marks: 2, topic: "Surds" }
          ]
        }
      ]
    },

    // ==========================================
    // 2. ALGEBRA
    // ==========================================
    {
      id: "alg-fund",
      name: "Algebra Fundamentals",
      completed: false,
      studyMaterials: [
        {
          id: "expanding-factorising",
          title: "Expanding & Factorising",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 35,
          learningObjectives: ["Expand double brackets", "Factorise quadratics"],
          content: `# 📦 Expanding & Factorising

## Expanding
*   **Single:** $3(2x+5) = 6x + 15$
*   **Double (FOIL):** $(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$.
*   **Triple:** Expand two first, then multiply result by third.

## Factorising
*   **Common Term:** $4x^2 + 8x = 4x(x+2)$.
*   **Quadratic Simple:** $x^2 + 5x + 6$. Need numbers adding to 5, multiplying to 6 ($2, 3$). Result: $(x+2)(x+3)$.
*   **Diff of Squares:** $x^2 - 16 = (x+4)(x-4)$.
`
        },
        {
          id: "equations-inequalities",
          title: "Equations & Inequalities",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          learningObjectives: ["Solve linear equations", "Solve inequalities"],
          content: `# ⚖️ Equations & Inequalities

## Solving
*   **Linear:** $5x - 3 = 17 \\rightarrow 5x=20 \\rightarrow x=4$.
*   **Unknowns both sides:** $5x + 2 = 3x + 10 \\rightarrow 2x=8 \\rightarrow x=4$.

## Inequalities
Treat like equations, but **FLIP symbol if multiplying/dividing by negative**.
*   $-2x < 10 \\rightarrow x > -5$.
*   **Integer solutions:** If $-2 < x \\le 1$, integers are $-1, 0, 1$.
`
        },
        {
          id: "formulae",
          title: "Rearranging Formulae",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 35,
          learningObjectives: ["Change the subject"],
          content: `# 🔄 Formulae

## Changing the Subject
Make $x$ the subject of $y = 3x^2 + 5$.
1.  Subtract 5: $y - 5 = 3x^2$
2.  Divide by 3: $\\frac{y-5}{3} = x^2$
3.  Square Root: $x = \\sqrt{\\frac{y-5}{3}}$.

**Factorising required:**
Make $x$ subject of $ax - y = c - bx$.
1.  Group x's: $ax + bx = c + y$
2.  Factorise x: $x(a+b) = c + y$
3.  Divide: $x = \\frac{c+y}{a+b}$.
`
        }
      ],
      quizzes: [
        {
          id: "qz-alg-1", title: "Algebra Basics", difficulty: "foundation", passingScore: 70, xpReward: 250, coinReward: 30, timeLimit: 15,
          questions: [
            { id: "aq1", question: "Factorise x² - 25", type: "short-answer", correctAnswer: "(x+5)(x-5)", marks: 1, topic: "Diff Squares" },
            { id: "aq2", question: "Make u subject: v = u + at", type: "short-answer", correctAnswer: "u = v - at", marks: 1, topic: "Formulae" }
          ]
        }
      ]
    },
    {
      id: "alg-adv",
      name: "Advanced Algebra",
      completed: false,
      studyMaterials: [
        {
          id: "simultaneous",
          title: "Simultaneous Equations",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 45,
          content: `# ⚔️ Simultaneous Equations
## Linear Elimination
1. $3x + y = 10 \n 2. x - y = 2$
*   Add them: $4x = 12 \\rightarrow x=3$.
*   Sub back in: $3 - y = 2 \\rightarrow y=1$.

## Quadratic Substitution
1. $y = x^2$
2. $y = 2x+3$
*   $x^2 = 2x+3 \\rightarrow x^2 - 2x - 3 = 0$.
*   $(x-3)(x+1)=0$. $x=3, x=-1$.
*   Find y for each x.
`,
          learningObjectives: ["Elimination method", "Substitution method"]
        },
        {
          id: "quadratics-hard",
          title: "Harder Quadratics",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 50,
          content: `# 🎢 Quadratics
## Formula
$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$

## Completing the Square
$x^2 + 6x - 5 = 0$
$(x+3)^2 - 9 - 5 = 0$
$(x+3)^2 = 14$
$x = -3 \\pm \\sqrt{14}$

## Turning Points
Min point of $(x+a)^2 + b$ is $(-a, b)$.
`,
          learningObjectives: ["Quadratic Formula", "Completing Square"]
        },
        {
          id: "sequences-graphs",
          title: "Sequences & Graphs",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          content: `# 📈 Sequences & Graphs
## nth Term (Linear)
$3, 7, 11, 15$ (Gap +4)
$4n - 1$

## nth Term (Quadratic)
Find second difference. If 2nd diff is $2a$, then $n^2$ coefficient is $a$.

## Graphs
*   **Cubic:** S-shape.
*   **Reciprocal ($1/x$):** Hyperbola (two curves).
*   **Circle:** $x^2 + y^2 = r^2$. Centre (0,0), radius $r$.
`,
          learningObjectives: ["Quadratic nth term", "Recognise graph shapes"]
        }
      ],
      quizzes: [
        {
          id: "qz-alg-2", title: "Advanced Algebra", difficulty: "higher", passingScore: 70, xpReward: 400, coinReward: 50, timeLimit: 25,
          questions: [
            { id: "aa1", question: "Solve x² + 4x + 1 = 0 (complete square)", type: "multiple-choice", options: ["-2±√3", "-2±√5", "2±√3"], correctAnswer: "-2±√3", marks: 3, topic: "Quadratics" }
          ]
        }
      ]
    },

    // ==========================================
    // 3. RATIO & PROPORTION
    // ==========================================
    {
      id: "ratio-context",
      name: "Ratio & Proportion",
      completed: false,
      studyMaterials: [
        {
          id: "ratio-basics",
          title: "Ratio Sharing & Compounding",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 30,
          content: `# 🔢 Ratio
## Sharing
Share £40 in 3:5. 
Total parts = 8.
1 part = £5.
Shares: £15, £25.

## Compound Measures
*   **Speed** = Distance / Time
*   **Density** = Mass / Volume
*   **Pressure** = Force / Area
`,
          learningObjectives: ["Share in ratios", "Use speed/density formulae"]
        },
        {
          id: "growth-decay",
          title: "Percent Growth & Decay",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          content: `# 📈 Growth & Decay
## Compound Interest
Formula: $A = P \\times (1 \\pm r/100)^n$

**Example:**
£1000 invested at 5% interest for 3 years.
$1000 \\times 1.05^3 = 1157.63$.

## Depreciation
Car worth £20k loses 10% per year for 2 years.
$20000 \\times 0.9^2$.
`,
          learningObjectives: ["Compound interest", "Depreciation multipliers"]
        },
        {
          id: "direct-inverse",
          title: "Direct & Inverse Proportion",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          content: `# 🔗 Proportion
## Direct ($y \\propto x$)
$y = kx$.
If $y=10, x=2 \\rightarrow k=5$. Formula: $y=5x$.

## Inverse ($y \\propto 1/x$)
$y = k/x$.
If $y=10, x=2 \\rightarrow 10=k/2 \\rightarrow k=20$. Formula: $y=20/x$.

## Graph Types
*   **Direct:** Straight line through origin.
*   **Inverse:** Curve in 1st quadrant, never touching axes.
`,
          learningObjectives: ["Solving proportion problems", "Proportion graphs"]
        }
      ],
      quizzes: [
        {
          id: "qz-rat", title: "Ratio & Prop", difficulty: "foundation", passingScore: 75, xpReward: 250, coinReward: 30, timeLimit: 20,
          questions: [
            { id: "rq1", question: "If y ∝ x² and y=20 when x=2, find k", type: "short-answer", correctAnswer: "5", marks: 2, topic: "Proportion" },
            { id: "rq2", question: "£2000 at 10% interest for 2 years?", type: "calculation", correctAnswer: "2420", marks: 2, topic: "Compound Interest" }
          ]
        }
      ]
    },

    // ==========================================
    // 4. GEOMETRY
    // ==========================================
    {
      id: "geo-shapes",
      name: "Geometry: Shapes",
      completed: false,
      studyMaterials: [
        {
          id: "angles-polygons",
          title: "Angles & Polygons",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 35,
          content: `# 🔷 Polygons
*   **Ext Angle:** $360 / n$.
*   **Int Angle:** $180 - \\text{Ext}$.
*   **Sum of Int Angles:** $(n-2) \\times 180$.

## Parallel Lines
*   **Corresponding:** Equal (F-shape).
*   **Alternate:** Equal (Z-shape).
*   **Co-interior:** Sum to 180 (C-shape).
`,
          learningObjectives: ["Calculate polygon angles", "Parallel line rules"]
        },
        {
          id: "transformations",
          title: "Transformations",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          content: `# 🔄 Transformations
1.  **Reflection:** Need Mirror Line (e.g. $x=1$).
2.  **Rotation:** Need Centre, Angle, Direction.
3.  **Translation:** Need Vector $\\binom{x}{y}$.
4.  **Enlargement:** Need Centre, Scale Factor (SF).
    *   **Negative SF:** Shape is inverted.
    *   **Fractional SF:** Shape gets smaller.
`,
          learningObjectives: ["Describe transformations", "Perform enlargements"]
        },
        {
          id: "circle-theorems",
          title: "Circle Theorems",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 45,
          content: `# ⚪ Key Theorems
1.  Angle at centre = $2 \\times$ angle at circumf.
2.  Angle in semicircle = 90°.
3.  Angles in same segment = Equal.
4.  Cyclic Quad opposite angles sum to 180°.
5.  Tangent $\\perp$ Radius.
6.  Alternate Segment Theorem.
`,
          learningObjectives: ["Apply circle theorems"]
        }
      ],
      quizzes: [
        {
          id: "qz-geo-1", title: "Shapes & Angles", difficulty: "foundation", passingScore: 70, xpReward: 300, coinReward: 30, timeLimit: 20,
          questions: [
            { id: "gq1", question: "Sum of interior angles of hexagon?", type: "calculation", correctAnswer: "720", marks: 2, topic: "Polygons" }
          ]
        }
      ]
    },
    {
      id: "geo-measures",
      name: "Geometry: Measures",
      completed: false,
      studyMaterials: [
        {
          id: "area-volume",
          title: "Perimeter, Area & Volume",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          content: `# 📦 Measures
## Area
*   **Trapezium:** $\\frac{1}{2}(a+b)h$.
*   **Circle:** $\\pi r^2$.
*   **Sector:** $\\frac{\\theta}{360} \\times \\pi r^2$.

## Volume
*   **Prism:** Area of cross-section $\\times$ length.
*   **Cylinder:** $\\pi r^2 h$.
*   **Cone:** $\\frac{1}{3} \\pi r^2 h$.
*   **Sphere:** $\\frac{4}{3} \\pi r^3$.
`,
          learningObjectives: ["Area of compound shapes", "Volume of spheres/cones"]
        },
        {
          id: "trig-vectors",
          title: "Trigonometry & Vectors",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 50,
          content: `# 📐 Advanced Measures
## Pythagoras
$a^2 + b^2 = c^2$.

## Trigonometry
*   SOH CAH TOA for right-angled.
*   **Sine Rule:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$.
*   **Cosine Rule:** $a^2 = b^2 + c^2 - 2bc\\cos A$.
*   **Area:** $\\frac{1}{2}ab\\sin C$.

## Vectors
*   Vector Arithmetic.
*   Geometric Proofs (Parallel vectors).
`,
          learningObjectives: ["Sine/Cosine Rules", "Vector Proofs"]
        }
      ],
      quizzes: [
        {
          id: "qz-geo-2", title: "Measures Mastery", difficulty: "higher", passingScore: 70, xpReward: 400, coinReward: 50, timeLimit: 25,
          questions: [
            { id: "mg1", question: "Volume of sphere radius 3? (Leave in terms of pi)", type: "short-answer", correctAnswer: "36pi", marks: 2, topic: "Volume" }
          ]
        }
      ]
    },

    // ==========================================
    // 5. STATISTICS & PROBABILITY
    // ==========================================
    {
      id: "stats-prob",
      name: "Probability & Statistics",
      completed: false,
      studyMaterials: [
        {
          id: "probability",
          title: "Probability",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 35,
          content: `# 🎲 Probability
*   **AND** rule: Multiply (Independent events).
*   **OR** rule: Add (Mutually exclusive).

## Tree Diagrams
Use for conditional probability (e.g. taking items without replacement).
*   Multiply along branches.
*   Add resulting columns required.
`,
          learningObjectives: ["Tree diagrams", "Venn diagrams"]
        },
        {
          id: "stats-basics",
          title: "Averages & Charts",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 35,
          content: `# 📊 Basics
*   **Mean:** Sum / Count.
*   **Median:** Middle value.
*   **Mode:** Most common.
*   **Range:** Max - Min.

## Charts
*   **Pie Chart:** Angle = (Freq / Total) $\\times 360$.
*   **Scatter Graph:** Correlation (Positive/Negative). Line of Best Fit.
`,
          learningObjectives: ["Calculate averages", "Interpret scatter graphs"]
        },
        {
          id: "stats-adv",
          title: "Advanced Statistics",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 45,
          content: `# 📈 Advanced Stats
## Histograms
*   Area = Frequency.
*   **Frequency Density** = Frequency / Class Width.

## Cumulative Frequency
*   Plot at upper bound.
*   Read off Median (50%) and Quartiles (25%, 75%).
*   **Box Plots:** Show Min, LQ, Median, UQ, Max.
`,
          learningObjectives: ["Draw histograms", "Cumulative frequency graphs"]
        }
      ],
      quizzes: [
        {
          id: "qz-stat", title: "Stats Master", difficulty: "higher", passingScore: 70, xpReward: 300, coinReward: 40, timeLimit: 20,
          questions: [
            { id: "sq1", question: "FD if Freq=30 and Width=10?", type: "calculation", correctAnswer: "3", marks: 1, topic: "Histograms" }
          ]
        }
      ]
    }
  ]
};

async function seedMaths() {
  console.log('🔥 Starting Maths Seeding...');
  try {
    console.log('📝 Seeding Year 10 Maths with comprehensive new syllabus...');
    await setDoc(doc(db, 'subjects', 'maths-10'), year10Mathematics);
    console.log('✅ Mathematics (Year 10) seeded successfully!');
    console.log('📊 Topics:', year10Mathematics.topics.length);
    console.log('📚 Lessons:', year10Mathematics.topics.reduce((acc, t) => acc + t.studyMaterials.length, 0));
    console.log('❓ Quiz Questions:', year10Mathematics.topics.reduce((acc, t) => acc + t.quizzes.reduce((q, quiz) => q + quiz.questions.length, 0), 0));
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedMaths();
