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
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const year10Mathematics = {
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
    // --- 1. NUMBER SKILLS (6 LESSONS) ---
    {
      id: "number-foundation",
      name: "Number Skills",
      completed: false,
      studyMaterials: [
        {
          id: "num-l1", title: "Fractions",
          type: "lesson", difficulty: "foundation", estimatedTime: 40,
          content: "# 🍰 Fractions\n## Types\n* **Proper:** Numerator < Denominator (3/4)\n* **Improper:** Numerator ≥ Denominator (7/4)\n* **Mixed:** Whole + Fraction (1¾)\n\n## Operations\n* **Multiply:** Top × Top, Bottom × Bottom\n* **Divide:** Flip second fraction, then multiply\n* **Add/Subtract:** Find common denominator",
          learningObjectives: ["Convert between types", "Add/subtract fractions", "Multiply/divide fractions"]
        },
        {
          id: "num-l2", title: "Surds",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# 🌿 Surds\n## Rules\n* √a × √b = √(ab)\n* √a / √b = √(a/b)\n* (√a)² = a\n\n## Simplifying\nFind largest square factor:\n* √12 = √(4×3) = 2√3\n* √75 = √(25×3) = 5√3\n\n## Rationalising\n1/√2 = 1/√2 × √2/√2 = √2/2",
          learningObjectives: ["Simplify surds", "Rationalise denominators", "Add/subtract surds"]
        },
        {
          id: "num-l3", title: "Indices",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# ⚡ Indices\n## Laws\n1. x^a × x^b = x^(a+b)\n2. x^a ÷ x^b = x^(a-b)\n3. (x^a)^b = x^(ab)\n4. x^(-a) = 1/x^a\n5. x^0 = 1\n6. x^(1/n) = ⁿ√x\n7. x^(m/n) = (ⁿ√x)^m\n\n## Examples\n* 2^5 × 2^3 = 2^8 = 256\n* 16^(3/4) = (⁴√16)³ = 2³ = 8",
          learningObjectives: ["Apply index laws", "Calculate fractional indices", "Simplify expressions"]
        },
        {
          id: "num-l4", title: "Standard Form",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 🔬 Standard Form\nA × 10^n where 1 ≤ A < 10\n\n## Converting\n* 3400 = 3.4 × 10³\n* 0.00056 = 5.6 × 10⁻⁴\n\n## Calculations\n* Multiply: Multiply numbers, add powers\n* Divide: Divide numbers, subtract powers",
          learningObjectives: ["Convert to/from standard form", "Calculate with standard form"]
        },
        {
          id: "num-l5", title: "Percentages",
          type: "lesson", difficulty: "foundation", estimatedTime: 40,
          content: "# 💯 Percentages\n## Multipliers\n* Increase 20%: × 1.2\n* Decrease 20%: × 0.8\n* Find 15%: × 0.15\n\n## Reverse Percentages\nIf £120 = 80% of original:\nOriginal = 120 ÷ 0.8 = £150\n\n## Compound Interest\nAmount = P × (multiplier)^n",
          learningObjectives: ["Use multipliers", "Reverse percentages", "Compound interest"]
        },
        {
          id: "num-l6", title: "Bounds & Estimation",
          type: "lesson", difficulty: "higher", estimatedTime: 35,
          content: "# 📏 Bounds\n## Upper/Lower Bounds\n5cm to nearest cm:\n* Lower: 4.5cm\n* Upper: 5.5cm\n\n## Error Intervals\n4.5 ≤ x < 5.5\n\n## Estimation\nRound to 1 s.f. for quick calculations",
          learningObjectives: ["Find upper/lower bounds", "Calculate error intervals"]
        }
      ],
      quizzes: [{
        id: "num-quiz", title: "Number Skills Test", difficulty: "higher",
        passingScore: 70, xpReward: 150, coinReward: 50, timeLimit: 20,
        questions: [
          { id: "q1", question: "Simplify √50", type: "multiple-choice", options: ["5√2", "2√5", "5√10", "10√5"], correctAnswer: "5√2", explanation: "√50 = √(25×2) = 5√2", marks: 1, topic: "Surds" },
          { id: "q2", question: "Calculate 9^(1/2)", type: "calculation", correctAnswer: "3", explanation: "Square root of 9 is 3", marks: 1, topic: "Indices" },
          { id: "q3", question: "Write 0.00045 in standard form", type: "short-answer", correctAnswer: "4.5 × 10⁻⁴", marks: 1, topic: "Standard Form" },
          { id: "q4", question: "Increase £50 by 12%", type: "calculation", correctAnswer: "56", explanation: "50 × 1.12 = £56", marks: 1, topic: "Percentages" },
          { id: "q5", question: "Calculate 2/3 + 1/4", type: "multiple-choice", options: ["11/12", "3/7", "5/6", "8/12"], correctAnswer: "11/12", explanation: "8/12 + 3/12 = 11/12", marks: 1, topic: "Fractions" },
          { id: "q6", question: "Simplify 3√2 + 5√2", type: "short-answer", correctAnswer: "8√2", marks: 1, topic: "Surds" },
          { id: "q7", question: "What is 8^(-2/3)?", type: "calculation", correctAnswer: "0.25", explanation: "(³√8)⁻² = 2⁻² = 1/4 = 0.25", marks: 2, topic: "Indices" },
          { id: "q8", question: "Lower bound of 7cm (nearest cm)", type: "short-answer", correctAnswer: "6.5", marks: 1, topic: "Bounds" },
          { id: "q9", question: "£150 after 20% decrease. Original price?", type: "calculation", correctAnswer: "187.50", explanation: "150 ÷ 0.8 = £187.50", marks: 2, topic: "Reverse %" },
          { id: "q10", question: "Rationalise 1/√3", type: "short-answer", correctAnswer: "√3/3", marks: 2, topic: "Surds" }
        ]
      }]
    },

    // --- 2. ALGEBRA (6 LESSONS) ---
    {
      id: "algebra-adv",
      name: "Advanced Algebra",
      completed: false,
      studyMaterials: [
        {
          id: "alg-l1", title: "Expanding & Factorising",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 🎈 Expanding\n## Single Brackets\n3(x + 4) = 3x + 12\n\n## Double Brackets (FOIL)\n(x + 3)(x + 5) = x² + 8x + 15\n\n## Factorising\n* Common Factor: 6x + 9 = 3(2x + 3)\n* Quadratic: x² + 5x + 6 = (x + 2)(x + 3)",
          learningObjectives: ["Expand single/double brackets", "Factorise expressions"]
        },
        {
          id: "alg-l2", title: "Solving Linear Equations",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# ⚖️ Equations\n## Method\n1. Expand brackets\n2. Collect x terms on one side\n3. Collect numbers on other side\n4. Divide\n\n## Example\n3(x - 2) = 15\n3x - 6 = 15\n3x = 21\nx = 7",
          learningObjectives: ["Solve linear equations", "Equations with brackets"]
        },
        {
          id: "alg-l3", title: "Simultaneous Equations",
          type: "lesson", difficulty: "higher", estimatedTime: 45,
          content: "# ⚔️ Simultaneous Equations\n## Elimination Method\n1. Make coefficients equal\n2. Add/subtract to eliminate\n3. Solve\n4. Substitute back\n\n## Substitution Method\nRearrange one, plug into other.\nUsed for one linear + one quadratic.",
          learningObjectives: ["Solve by elimination", "Solve by substitution"]
        },
        {
          id: "alg-l4", title: "Quadratics: Factorising",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# 🎢 Quadratics\n## Factorising\nFind two numbers that:\n* Multiply to give c\n* Add to give b\n\nx² + 5x + 6 = 0\nNumbers: 2 and 3\n(x + 2)(x + 3) = 0\nx = -2 or x = -3",
          learningObjectives: ["Factorise quadratics", "Solve by factorising"]
        },
        {
          id: "alg-l5", title: "Quadratics: Formula & Completing Square",
          type: "lesson", difficulty: "higher", estimatedTime: 50,
          content: "# 📐 Quadratic Formula\nx = [-b ± √(b² - 4ac)] / 2a\n\n## Completing the Square\nx² + 6x + 2 = 0\n(x + 3)² - 9 + 2 = 0\n(x + 3)² = 7\nx = -3 ± √7\n\n## Turning Points\ny = (x + a)² + b\nMinimum at (-a, b)",
          learningObjectives: ["Use quadratic formula", "Complete the square", "Find turning points"]
        },
        {
          id: "alg-l6", title: "Inequalities",
          type: "lesson", difficulty: "higher", estimatedTime: 35,
          content: "# ⚠️ Inequalities\n## Linear\n3x + 2 < 11\n3x < 9\nx < 3\n\n## Quadratic\nSolve equality first, then test regions.\n\n## Number Lines\nOpen circle: < or >\nClosed circle: ≤ or ≥",
          learningObjectives: ["Solve linear inequalities", "Represent on number line"]
        }
      ],
      quizzes: [{
        id: "alg-quiz", title: "Algebra Test", difficulty: "higher",
        passingScore: 70, xpReward: 150, coinReward: 50, timeLimit: 25,
        questions: [
          { id: "q1", question: "Expand (x + 3)(x + 5)", type: "short-answer", correctAnswer: "x² + 8x + 15", marks: 1, topic: "Expanding" },
          { id: "q2", question: "Solve 3x - 7 = 11", type: "calculation", correctAnswer: "6", marks: 1, topic: "Linear Equations" },
          { id: "q3", question: "Factorise x² + 7x + 12", type: "short-answer", correctAnswer: "(x + 3)(x + 4)", marks: 2, topic: "Factorising" },
          { id: "q4", question: "Solve x² - 5x + 6 = 0", type: "multiple-choice", options: ["2 and 3", "-2 and -3", "1 and 6", "-1 and -6"], correctAnswer: "2 and 3", marks: 2, topic: "Quadratics" },
          { id: "q5", question: "Solve for x: 2x + y = 7 and x - y = 2", type: "calculation", correctAnswer: "3", explanation: "Add equations: 3x = 9, x = 3", marks: 2, topic: "Simultaneous" },
          { id: "q6", question: "Solve 2x + 3 < 11", type: "short-answer", correctAnswer: "x < 4", marks: 1, topic: "Inequalities" },
          { id: "q7", question: "Complete square: x² + 6x + 5", type: "short-answer", correctAnswer: "(x + 3)² - 4", marks: 2, topic: "Completing Square" },
          { id: "q8", question: "Expand 3(2x - 5)", type: "short-answer", correctAnswer: "6x - 15", marks: 1, topic: "Brackets" },
          { id: "q9", question: "Use formula to solve x² + 3x - 5 = 0 (to 2dp)", type: "calculation", correctAnswer: "1.19", explanation: "Using quadratic formula", marks: 3, topic: "Formula" },
          { id: "q10", question: "Factorise 4x + 8", type: "short-answer", correctAnswer: "4(x + 2)", marks: 1, topic: "Common Factor" }
        ]
      }]
    },

    // --- 3. RATIO & PROPORTION (5 LESSONS) ---
    {
      id: "ratio-prop",
      name: "Ratio & Proportion",
      completed: false,
      studyMaterials: [
        {
          id: "rat-l1", title: "Simplifying Ratios",
          type: "lesson", difficulty: "foundation", estimatedTime: 30,
          content: "# ⚖️ Ratios\n## Simplifying\nDivide all parts by HCF:\n12:18 = 2:3 (÷6)\n\n## Writing as 1:n\n4:10 = 1:2.5 (÷4)\n\n## Equivalent Ratios\n2:3 = 4:6 = 6:9",
          learningObjectives: ["Simplify ratios", "Write as 1:n", "Find equivalent ratios"]
        },
        {
          id: "rat-l2", title: "Sharing in Ratios",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 🎂 Sharing\n## Method\n1. Add ratio parts\n2. Divide total by sum\n3. Multiply each part\n\n## Example\nShare £60 in ratio 2:3\nParts = 2+3 = 5\nOne part = 60÷5 = £12\nShares: £24 and £36",
          learningObjectives: ["Share quantities in ratios", "Solve ratio problems"]
        },
        {
          id: "rat-l3", title: "Direct Proportion",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# ➡️ Direct Proportion\ny ∝ x means y = kx\n\n## Finding k\nIf y = 10 when x = 2:\nk = y/x = 10/2 = 5\n\n## Graph\nStraight line through origin",
          learningObjectives: ["Set up equations", "Find constant k", "Solve problems"]
        },
        {
          id: "rat-l4", title: "Inverse Proportion",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# ⬅️ Inverse Proportion\ny ∝ 1/x means y = k/x\n\n## Example\nIf 5 workers take 6 days:\nk = 5×6 = 30\n3 workers take: 30/3 = 10 days\n\n## Graph\nCurve (hyperbola)",
          learningObjectives: ["Identify inverse proportion", "Calculate k", "Solve problems"]
        },
        {
          id: "rat-l5", title: "Best Buys & Unit Rates",
          type: "lesson", difficulty: "foundation", estimatedTime: 30,
          content: "# 💰 Best Buys\n## Unit Price\nPrice per unit = Total Price ÷ Quantity\n\n## Comparing\n500g for £2.50: £5/kg\n750g for £3: £4/kg ← Better!\n\n## Speed = Distance/Time\nDensity = Mass/Volume",
          learningObjectives: ["Calculate unit rates", "Compare prices", "Use rate formulas"]
        }
      ],
      quizzes: [{
        id: "rat-quiz", title: "Ratio Test", difficulty: "higher",
        passingScore: 70, xpReward: 150, coinReward: 50, timeLimit: 20,
        questions: [
          { id: "q1", question: "Simplify 15:25", type: "short-answer", correctAnswer: "3:5", marks: 1, topic: "Simplifying" },
          { id: "q2", question: "Share £40 in ratio 3:5. Larger share?", type: "calculation", correctAnswer: "25", marks: 2, topic: "Sharing" },
          { id: "q3", question: "If y ∝ x and y=12 when x=3, find k", type: "calculation", correctAnswer: "4", marks: 1, topic: "Direct Proportion" },
          { id: "q4", question: "4 workers take 5 days. How long for 10 workers?", type: "calculation", correctAnswer: "2", marks: 2, topic: "Inverse Proportion" },
          { id: "q5", question: "Write 4:10 as 1:n", type: "short-answer", correctAnswer: "1:2.5", marks: 1, topic: "Ratios" },
          { id: "q6", question: "200g costs £1.20. Price per kg?", type: "calculation", correctAnswer: "6", marks: 2, topic: "Unit Rates" },
          { id: "q7", question: "If y = k/x and y=6 when x=2, find k", type: "calculation", correctAnswer: "12", marks: 1, topic: "Inverse" },
          { id: "q8", question: "Share £75 in ratio 2:3. Smaller share?", type: "calculation", correctAnswer: "30", marks: 1, topic: "Sharing" }
        ]
      }]
    },

    // --- 4. GEOMETRY (6 LESSONS) ---
    {
      id: "geometry-adv",
      name: "Geometry",
      completed: false,
      studyMaterials: [
        {
          id: "geo-l1", title: "Pythagoras' Theorem",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 📐 Pythagoras\na² + b² = c²\n(c is hypotenuse)\n\n## Finding Hypotenuse\n3² + 4² = c²\n9 + 16 = 25\nc = 5\n\n## Finding Shorter Side\nc² - a² = b²\n13² - 5² = b²\n169 - 25 = 144\nb = 12",
          learningObjectives: ["Use Pythagoras", "Find missing sides", "Solve problems"]
        },
        {
          id: "geo-l2", title: "Trigonometry: SOHCAHTOA",
          type: "lesson", difficulty: "higher", estimatedTime: 45,
          content: "# 📐 Trigonometry\n## Right-angled Triangles\n* sin θ = Opp/Hyp\n* cos θ = Adj/Hyp\n* tan θ = Opp/Adj\n\n## Finding Sides\ntan(30°) = x/10\nx = 10 × tan(30°)\n\n## Finding Angles\nsin θ = 5/13\nθ = sin⁻¹(5/13)",
          learningObjectives: ["Use SOHCAHTOA", "Find sides", "Find angles"]
        },
        {
          id: "geo-l3", title: "Sine Rule & Cosine Rule",
          type: "lesson", difficulty: "higher", estimatedTime: 50,
          content: "# 🔺 Non-Right Triangles\n## Sine Rule\na/sinA = b/sinB = c/sinC\n\nUse when: Two angles + one side OR Two sides + non-included angle\n\n## Cosine Rule\na² = b² + c² - 2bc×cosA\n\nUse when: Two sides + included angle OR All three sides",
          learningObjectives: ["Apply Sine Rule", "Apply Cosine Rule", "Choose correct rule"]
        },
        {
          id: "geo-l4", title: "Vectors",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# ↗️ Vectors\n## Notation\nColumn vector: (x)\n                (y)\n\n## Operations\n* Add: Add components\n* Scalar multiply: Multiply each component\n* Magnitude: |v| = √(x² + y²)\n\n## Geometry\n* Parallel: One is scalar multiple\n* Collinear: Points on same line",
          learningObjectives: ["Add vectors", "Scalar multiplication", "Find magnitude"]
        },
        {
          id: "geo-l5", title: "Circle Theorems",
          type: "lesson", difficulty: "higher", estimatedTime: 45,
          content: "# ⚪ Circle Theorems\n1. Angle at centre = 2 × angle at circumference\n2. Angle in semicircle = 90°\n3. Angles in same segment are equal\n4. Opposite angles in cyclic quad = 180°\n5. Tangent ⊥ radius\n6. Two tangents from point are equal\n7. Alternate segment theorem",
          learningObjectives: ["Identify theorems", "Calculate angles", "Prove with theorems"]
        },
        {
          id: "geo-l6", title: "3D Pythagoras & Trigonometry",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# 📦 3D Problems\n## 3D Pythagoras\n1. Find diagonal of base (2D Pythagoras)\n2. Use diagonal + height (2D Pythagoras again)\n\n## 3D Trigonometry\n1. Identify the right-angled triangle\n2. Use SOHCAHTOA/Pythagoras\n3. Draw 2D diagrams to help",
          learningObjectives: ["Solve 3D Pythagoras", "3D trig problems", "Visualize 3D shapes"]
        }
      ],
      quizzes: [{
        id: "geo-quiz", title: "Geometry Test", difficulty: "higher",
        passingScore: 70, xpReward: 150, coinReward: 50, timeLimit: 25,
        questions: [
          { id: "q1", question: "Sides 3 and 4. Find hypotenuse.", type: "calculation", correctAnswer: "5", marks: 1, topic: "Pythagoras" },
          { id: "q2", question: "Angle in semicircle?", type: "multiple-choice", options: ["90°", "180°", "45°", "60°"], correctAnswer: "90°", marks: 1, topic: "Circle Theorems" },
          { id: "q3", question: "sin θ = Opp/? ", type: "short-answer", correctAnswer: "Hyp", marks: 1, topic: "SOHCAHTOA" },
          { id: "q4", question: "Which rule for 2 sides + included angle?", type: "multiple-choice", options: ["Cosine Rule", "Sine Rule", "Pythagoras", "SOHCAHTOA"], correctAnswer: "Cosine Rule", marks: 1, topic: "Rules" },
          { id: "q5", question: "Vector (3,4) magnitude?", type: "calculation", correctAnswer: "5", marks: 2, topic: "Vectors" },
          { id: "q6", question: "Hyp=13, Opp=5. Find Adj.", type: "calculation", correctAnswer: "12", marks: 2, topic: "Pythagoras" },
          { id: "q7", question: "tan 45° = ?", type: "calculation", correctAnswer: "1", marks: 1, topic: "Trig Values" },
          { id: "q8", question: "Angle at centre = 80°. Angle at circumference?", type: "calculation", correctAnswer: "40", marks: 2, topic: "Circle Theorems" }
        ]
      }]
    },

    // --- 5. PROBABILITY & STATISTICS (6 LESSONS) ---
    {
      id: "prob-stats",
      name: "Probability & Statistics",
      completed: false,
      studyMaterials: [
        {
          id: "stat-l1", title: "Averages: Mean, Median, Mode",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 📊 Averages\n## Mean\nSum of values ÷ Number of values\n\n## Median\nMiddle value when ordered\n(Or average of two middle values)\n\n## Mode\nMost common value\n\n## Range\nLargest - Smallest",
          learningObjectives: ["Calculate mean", "Find median", "Identify mode"]
        },
        {
          id: "stat-l2", title: "Frequency Tables",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 📋 Frequency Tables\n## Mean from Frequency Table\n1. Multiply value × frequency\n2. Sum all (value × freq)\n3. Divide by total frequency\n\n## Modal Class\nClass with highest frequency\n\n## Median\nFind n/2 position",
          learningObjectives: ["Calculate mean from table", "Find modal class"]
        },
        {
          id: "stat-l3", title: "Probability Basics",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 🎲 Probability\nP(Event) = Favorable outcomes / Total outcomes\n\n## Rules\n* 0 ≤ P ≤ 1\n* P(not A) = 1 - P(A)\n* P(A or B) = P(A) + P(B) (mutually exclusive)\n* P(A and B) = P(A) × P(B) (independent)",
          learningObjectives: ["Calculate probability", "Use probability rules"]
        },
        {
          id: "stat-l4", title: "Tree Diagrams",
          type: "lesson", difficulty: "higher", estimatedTime: 45,
          content: "# 🌳 Tree Diagrams\n## Method\n1. Draw branches for each event\n2. Label probabilities on branches\n3. Multiply along branches (AND)\n4. Add results (OR)\n\n## Conditional Probability\nProbability changes if not replacing.\nDenominator decreases.",
          learningObjectives: ["Draw tree diagrams", "Calculate conditional probability"]
        },
        {
          id: "stat-l5", title: "Histograms",
          type: "lesson", difficulty: "higher", estimatedTime: 40,
          content: "# 📊 Histograms\nFor continuous data with unequal class widths.\n\n## Frequency Density\nFD = Frequency / Class Width\n\n## Reading\nArea of bar = Frequency\n\n## Drawing\nPlot FD on y-axis, class on x-axis",
          learningObjectives: ["Calculate frequency density", "Draw histograms", "Interpret histograms"]
        },
        {
          id: "stat-l6", title: "Scatter Graphs & Correlation",
          type: "lesson", difficulty: "foundation", estimatedTime: 35,
          content: "# 📈 Scatter Graphs\n## Correlation\n* Positive: ↗️ Both increase\n* Negative: ↘️ One increases, other decreases\n* None: No pattern\n\n## Line of Best Fit\nEqual points above/below\nPasses through (mean x, mean y)\n\n## Interpolation vs Extrapolation\n* Inter: Within data range ✓\n* Extra: Outside data range ✗ (unreliable)",
          learningObjectives: ["Describe correlation", "Draw line of best fit", "Make predictions"]
        }
      ],
      quizzes: [{
        id: "stat-quiz", title: "Statistics & Probability Test", difficulty: "higher",
        passingScore: 70, xpReward: 150, coinReward: 50, timeLimit: 20,
        questions: [
          { id: "q1", question: "Find mean: 2, 4, 6, 8, 10", type: "calculation", correctAnswer: "6", marks: 1, topic: "Mean" },
          { id: "q2", question: "Find median: 3, 7, 2, 9, 5", type: "calculation", correctAnswer: "5", marks: 1, topic: "Median" },
          { id: "q3", question: "P(rolling 6 on dice)?", type: "short-answer", correctAnswer: "1/6", marks: 1, topic: "Probability" },
          { id: "q4", question: "In histogram, area represents?", type: "multiple-choice", options: ["Frequency", "Class Width", "Density", "Mean"], correctAnswer: "Frequency", marks: 1, topic: "Histograms" },
          { id: "q5", question: "Frequency Density formula?", type: "short-answer", correctAnswer: "Frequency / Class Width", marks: 1, topic: "FD" },
          { id: "q6", question: "If P(A) = 0.3, what is P(not A)?", type: "calculation", correctAnswer: "0.7", marks: 1, topic: "Probability" },
          { id: "q7", question: "Temperature ↑, Ice cream sales ↑. Correlation?", type: "multiple-choice", options: ["Positive", "Negative", "None"], correctAnswer: "Positive", marks: 1, topic: "Correlation" },
          { id: "q8", question: "Mode of: 3, 5, 5, 7, 9", type: "calculation", correctAnswer: "5", marks: 1, topic: "Mode" },
          { id: "q9", question: "Range of: 12, 18, 15, 20, 10", type: "calculation", correctAnswer: "10", marks: 1, topic: "Range" },
          { id: "q10", question: "P(Red) = 0.4, P(Blue) = 0.35. P(Red or Blue)?", type: "calculation", correctAnswer: "0.75", marks: 2, topic: "Probability Rules" }
        ]
      }]
    }
  ]
};

async function seedMaths() {
  console.log('🔥 Starting Maths Seeding...');
  try {
    console.log('📝 Seeding Year 10 Maths with 5-6 lessons per topic...');
    await setDoc(doc(db, 'subjects', 'maths-10'), year10Mathematics);
    console.log('✅ Mathematics (Year 10) seeded successfully with COMPREHENSIVE content!');
    console.log('📊 Total Topics: 5');
    console.log('📚 Total Lessons: 29');
    console.log('❓ Total Quiz Questions: 46');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seedMaths();
