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
          learningObjectives: ["Prime factorisation", "Find HCF", "Find LCM", "Venn Diagram Method"],
          content: `# 🔢 Primes, HCF & LCM

> [!NOTE]
> **Learning Objectives:** Learn to find Prime Factorisations, calculate HCF and LCM, and master the Venn Diagram Method.

## What are Prime Numbers?
A **Prime Number** is a natural number greater than 1 that has exactly two factors: **1 and itself**.

### Key Examples:
*   **2** (The only even prime!)
*   **3, 5, 7, 11, 13, 17, 19...**

> ⚠️ **Common Pitfall:** 1 is NOT a prime number because it only has one factor (itself).

---

# 🌳 Prime Factorisation
Every composite number can be written as a product of its prime factors. We use **Factor Trees** to break them down.

### How to use a Factor Tree:
1.  Split the number into two factors.
2.  If a factor is prime, **circle it**.
3.  Continue until every branch ends in a circled prime.

**Example: 60**
<div class="flex justify-center p-6 my-6 glass-panel rounded-2xl">
  <svg width="200" height="200" viewBox="0 0 200 200" class="drop-shadow-lg">
    <text x="90" y="20" font-weight="bold" fill="currentColor">60</text>
    <line x1="100" y1="30" x2="60" y2="70" stroke="currentColor" stroke-width="2" />
    <line x1="100" y1="30" x2="140" y2="70" stroke="currentColor" stroke-width="2" />
    <text x="45" y="90" fill="currentColor">6</text>
    <text x="135" y="90" fill="currentColor">10</text>
    <line x1="55" y1="100" x2="35" y2="140" stroke="currentColor" stroke-width="2" />
    <line x1="55" y1="100" x2="75" y2="140" stroke="currentColor" stroke-width="2" />
    <circle cx="35" cy="155" r="15" fill="rgba(255,105,180,0.2)" stroke="#FF69B4" stroke-width="2" />
    <text x="30" y="160" fill="#FF69B4" font-weight="bold">2</text>
    <circle cx="75" cy="155" r="15" fill="rgba(255,105,180,0.2)" stroke="#FF69B4" stroke-width="2" />
    <text x="70" y="160" fill="#FF69B4" font-weight="bold">3</text>
  </svg>
</div>

**Result (Index Form):** $60 = 2^2 \times 3 \times 5$

---

# 🎯 Highest Common Factor (HCF)
The **HCF** is the largest number that divides exactly into two or more numbers.

### The Venn Diagram Method:
1. Find prime factors for both numbers.
2. Place common factors in the **intersection** (overlap).
3. **HCF Rule:** Multiply all numbers in the overlapping middle part.

---

# 🔗 Lowest Common Multiple (LCM)
The **LCM** is the smallest number that is a multiple of all the numbers in the set.

### Finding LCM with Venn Diagrams:
1. Fill in the Venn Diagram as you did for HCF.
2. **LCM Rule:** Multiply **EVERY** number shown in both circles.

---

# ✍️ Worked Example: 60 and 72
Let's find the HCF and LCM of 60 and 72.

Prime factors:
$60 = 2 \times 2 \times 3 \times 5$
$72 = 2 \times 2 \times 2 \times 3 \times 3$

*   **HCF** (Middle Only) $= 2 \times 2 \times 3 = \mathbf{12}$
*   **LCM** (All Numbers) $= 5 \times (2 \times 2 \times 3) \times 2 \times 3 = \mathbf{360}$

---

# 🚀 Exam Strategy: Problem Solving
Sometimes you aren't given the numbers, but their prime factorisations already in index form:
$A = 2^3 \times 3^2 \times 5$
$B = 2^2 \times 3^4 \times 7$

*   **For HCF:** Take the **lowest** power of each common prime factor.
    *   $HCF = 2^2 \times 3^2 = 36$.
*   **For LCM:** Take the **highest** power of every prime factor mentioned.
    *   $LCM = 2^3 \times 3^4 \times 5 \times 7 = 25200$.
`
        },
        {
          id: "fractions-fdp",
          title: "Fractions & Decimals",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 35,
          learningObjectives: ["Recurring decimals to fractions", "Arithmetic with mixed numbers", "Comparing FDP"],
          content: `# 🍰 Fractions, Decimals & Percentages

> [!NOTE]
> **Learning Objectives:** Mastering conversions, handling recurring decimals, and perfecting fraction arithmetic.

## Fundamental Conversions
In GCSE, speed is key. You should know these conversions by heart:

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div class="concept-card text-center">
    <div class="text-3xl mb-2">🔢</div>
    <strong>Fraction to Decimal</strong>
    <p class="text-sm">Divide Top by Bottom</p>
    <div class="formula-block">$3/4 = 0.75$</div>
  </div>
  <div class="concept-card text-center">
    <div class="text-3xl mb-2">💹</div>
    <strong>Decimal to %</strong>
    <p class="text-sm">Multiply by 100</p>
    <div class="formula-block">$0.75 = 75\%$</div>
  </div>
  <div class="concept-card text-center">
    <div class="text-3xl mb-2">🧩</div>
    <strong>% to Fraction</strong>
    <p class="text-sm">Put over 100</p>
    <div class="formula-block">$45\% = \frac{45}{100}$</div>
  </div>
</div>

---

# 🔁 Recurring Decimals (Higher Tier)
Recurring decimals keep going forever (e.g., $0.333...$ or $0.\dot{4}\dot{5}$).

<div class="concept-card">
  <h3>Steps to Convert $x = 0.\dot{4}\dot{5}$ to a Fraction:</h3>
  <ol class="space-y-2 ml-4">
    <li>1. Let $x = 0.4545...$</li>
    <li>2. Multiply by 100 (2 repeating digits): $100x = 45.4545...$</li>
    <li>3. Subtract $x$: $99x = 45$</li>
    <li>4. Solve: $x = \frac{45}{99} = \mathbf{\frac{5}{11}}$</li>
  </ol>
</div>

---

# ➕ Arithmetic: The Golden Rules

<div class="exam-tip">
  <h3>🌟 The Golden Rule for Addition/Subtraction:</h3>
  <p>You MUST find a <strong>Common Denominator</strong> (LCM of the bottom numbers) before you can add or subtract.</p>
</div>

### Multiplication vs Division:
*   **Multiplication:** Just multiply across! $\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}$
*   **Division (KFC Method):** 
    1. **K**eep the first. 
    2. **F**lip the second. 
    3. **C**hange to multiply.

---

# 🏆 Ordering & Comparing
To order a mix of FDP, convert them TOP to decimals first:

**Example:** Order $3/5, 7/10, 0.62$
1. $3/5 = 0.60$
2. $7/10 = 0.70$
3. $0.62$
**Result:** $3/5 < 0.62 < 7/10$
`
        },
        {
          id: "indices-surds",
          title: "Indices & Surds",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          learningObjectives: ["Index laws", "Negative and fractional indices", "Simplifying surds", "Rationalising"],
          content: `# ⚡ The Index Laws

> [!NOTE]
> **Focus:** Mastering the 4 basic laws and tackling negative/fractional indices.

Indices follow specific rules when base numbers are the same:

<div class="formula-block">
  $a^m \times a^n = a^{m+n}$ <br/>
  $a^m \div a^n = a^{m-n}$ <br/>
  $(a^m)^n = a^{mn}$ <br/>
  $a^0 = 1$
</div>

<div class="pitfall-card">
  <h3>⚠️ Watch out!</h3>
  <p>These only work if the <strong>base</strong> is the same. You cannot simplify $2^3 \times 3^2$ using these laws!</p>
</div>

---

# 📉 Advanced Indices

### 1. Negative Indices
A negative index indicates a **reciprocal** (flipping the number).
<div class="formula-block">
  $x^{-n} = \frac{1}{x^n}$
</div>
**Example:** $5^{-2} = \frac{1}{5^2} = \frac{1}{25}$

### 2. Fractional Indices
The denominator is the **root**, and the numerator is the **power**.
<div class="formula-block">
  $x^{m/n} = (\sqrt[n]{x})^m$
</div>

**Worked Example:** Calculate $27^{2/3}$
1. Take the **cube root** (denominator 3): $\sqrt[3]{27} = 3$
2. Apply the **power** (numerator 2): $3^2 = 9$
3. **Final Answer: 9**

---

# 📐 Surds: The Logic
A surd is an irrational root (like $\sqrt{2}$). We must be able to simplify them accurately.

<div class="concept-card">
  <h3>Multiplying & Dividing Surds:</h3>
  <ul>
    <li>$\sqrt{a} \times \sqrt{b} = \sqrt{ab}$</li>
    <li>$\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}$</li>
  </ul>
</div>

### Simplifying Surds
To simplify, find the **largest square number** that is a factor.

**Example:** $\sqrt{72}$
*   $72 = 36 \times 2$
*   $\sqrt{72} = \sqrt{36} \times \sqrt{2} = \mathbf{6\sqrt{2}}$

---

# 🚿 Rationalising the Denominator
Standard form requires that we don't leave surds on the bottom of fractions.

### Type 1: Basic
If you have $\frac{k}{\sqrt{a}}$, multiply top and bottom by $\sqrt{a}$.
<div class="formula-block">
  $\frac{6}{\sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$
</div>

### Type 2: Conjugate (Higher Tier)
If you have $\frac{k}{a + \sqrt{b}}$, multiply by the **conjugate** ($a - \sqrt{b}$).
This uses the "Difference of Two Squares" to cancel out the surd.
`
        },
        {
          id: "standard-form",
          title: "Standard Form & Bounds",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 35,
          learningObjectives: ["Standard form conversion", "Calculating in standard form", "Finding upper/lower bounds", "Error intervals"],
          content: `# 🔬 Standard Form
Standard form (scientific notation) is used to handle very large or tiny numbers: **$A \times 10^n$**
*Requirement:* $1 \le A < 10$ and $n$ is an integer.

**Converting Large Numbers:**
$582,000 = 5.82 \times 10^5$ (Decimal moved 5 places left).

**Converting Tiny Numbers:**
$0.000045 = 4.5 \times 10^{-5}$ (Decimal moved 5 places right).

---

# 🚀 Calculating without a Calculator
## Multiplication
$(2 \times 10^3) \times (4 \times 10^6)$
1. Multiply numbers: $2 \times 4 = 8$.
2. Add powers: $10^3 \times 10^6 = 10^9$.
3. **Result:** $8 \times 10^9$.

## Addition (The Sneaky One)
$(3 \times 10^4) + (2 \times 10^3)$
You must make the powers the same first!
$30 \times 10^3 + 2 \times 10^3 = \mathbf{32 \times 10^3 = 3.2 \times 10^4}$.

---

# 📏 Bounds (Accuracy)
When a measurement is rounded, the original value could have been anywhere within a range.

**Example:** $x = 150g$ (to the nearest $10g$).
*   The "Step" is 10. Half-step is 5.
*   **Lower Bound (LB):** $150 - 5 = \mathbf{145g}$.
*   **Upper Bound (UB):** $150 + 5 = \mathbf{155g}$.

**Error Interval:** $145 \le x < 155$.
> ⚠️ **Note:** The UB uses $<$ because $155$ would round UP to $160$.

---

# ⚖️ Calculation Bounds
What is the largest or smallest a final result could be?

## Multiplication & Addition
*   **Max Result:** $UB \times UB$ or $UB + UB$.
*   **Min Result:** $LB \times LB$ or $LB + LB$.

## Division & Subtraction (The Switch)
*   **Max Result (Division):** $UB \div LB$ (Large divided by small).
*   **Max Result (Subtraction):** $UB - LB$ (Large minus small).
*   **Min Result (Division):** $LB \div UB$ (Small divided by large).
`
        }
      ],
      quizzes: [
        {
          id: "qz-num-1", title: "Number Mastery", difficulty: "higher", passingScore: 75, xpReward: 300, coinReward: 40, timeLimit: 20,
          questions: [
            { id: "nq1", question: "Find the **HCF** of $24$ and $36$.", type: "short-answer", correctAnswer: "12", marks: 2, topic: "HCF" },
            { id: "nq2", question: "Convert $0.1\\dot{6}$ to a fraction in its simplest form.", type: "multiple-choice", options: ["$1/6$", "$16/99$", "$16/90$", "$1/5$"], correctAnswer: "$1/6$", marks: 3, topic: "Fractions" },
            { id: "nq3", question: "Calculate **$64^{2/3}$**.", type: "short-answer", correctAnswer: "16", marks: 2, topic: "Indices" },
            { id: "nq4", question: "Rationalise the denominator of $\\frac{5}{\\sqrt{5}}$.", type: "short-answer", correctAnswer: "√5", marks: 2, topic: "Surds" }
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
          learningObjectives: ["Expand single/double brackets", "Factorise into single/double brackets", "Difference of two squares"],
          content: `# 📦 Expanding Brackets
Expansion means multiplying out the terms to remove the brackets.

## Single Brackets
Multiply the term outside by everything inside.
$3x(x + 4) = \mathbf{3x^2 + 12x}$.

## Double Brackets (FOIL Method)
**F**irst, **O**uter, **I**nner, **L**ast.
$(x + 3)(x - 5)$
1. $x \times x = x^2$
2. $x \times -5 = -5x$
3. $3 \times x = 3x$
4. $3 \times -5 = -15$
**Simplify:** $x^2 - 2x - 15$.

---

# 📥 Factorising (The Reverse)
Factorising means putting brackets back in by finding common factors.

## Type 1: Single Bracket
Find the highest common factor of all terms.
$6x^2 + 9x$
*   HCF of 6 and 9 is 3.
*   HCF of $x^2$ and $x$ is $x$.
**Result:** $3x(2x + 3)$.

---

# 🎢 Factorising Quadratics
To factorise a quadratic like $x^2 + 7x + 10$ into two brackets: $(x + \dots)(x + \dots)$

1.  Look for two numbers that **multiply** to give the end number ($10$).
2.  The same numbers must **add** to give the middle number ($7$).
3.  Possible pairs for 10: $(1 \times 10)$ or $(2 \times 5)$.
4.  $2 + 5 = 7$, so we use those!

**Final Result:** $(x + 2)(x + 5)$.

---

# ⏹️ The Difference of Two Squares
This is a special case that often comes up in exams. It looks like: $x^2 - y^2$.

**The Rule:** $x^2 - y^2 = (x + y)(x - y)$

**Examples:**
*   $x^2 - 16 = (x + 4)(x - 4)$
*   $9y^2 - 1 = (3y + 1)(3y - 1)$
*   $25a^2 - 64b^2 = (5a + 8b)(5a - 8b)$

> ⚠️ **Common Trap:** $x^2 + 16$ CANNOT be factorised this way. It must be a **subtraction**.

---

# 🚀 Harder Factorising (Advanced)
What if there is a number in front of $x^2$? 
Example: $2x^2 + 7x + 3$.

1. Multiply the coefficient of $x^2$ (2) by the constant (3) $\rightarrow 6$.
2. Find two numbers that multiply to 6 and add to 7 $\rightarrow 6$ and $1$.
3. Split the middle term: $2x^2 + 6x + x + 3$.
4. Factorise in pairs: $2x(x + 3) + 1(x + 3)$.
5. **Final Result:** $(2x + 1)(x + 3)$.
`
        },
        {
          id: "equations-inequalities",
          title: "Equations & Inequalities",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          learningObjectives: ["Linear equations", "Unknowns on both sides", "Solving inequalities", "Integer solutions"],
          content: `# ⚖️ Solving Linear Equations
The goal is to isolate the variable ($x$) by performing the same "inverse" operation on both sides.

**Inverse Operations:**
*   $+$ reverses with $-$
*   $\times$ reverses with $\div$
*   $x^2$ reverses with $\sqrt{x}$

**Example:** $5x - 3 = 17$
1. Add 3: $5x = 20$
2. Divide by 5: $x = 4$

---

# ⚔️ Unknowns on Both Sides
If $x$ is on both sides, collect them on one side (usually the side where you have more to begin with).

**Example:** $7x + 2 = 3x + 10$
1. Subtract $3x$ from both sides: $4x + 2 = 10$
2. Subtract 2: $4x = 8$
3. Divide by 4: $x = 2$

---

# 🎢 Equations with Brackets & Fractions
If there's a fraction, multiply it away first!

**Example:** $\frac{x+5}{3} = 4$
1. Multiply by 3: $x + 5 = 12$
2. Subtract 5: $x = 7$

**Example (Brackets):** $3(x - 2) = 15$
1. Expand first: $3x - 6 = 15$
2. Add 6: $3x = 21$
3. Divide by 3: $x = 7$

---

# ⚠️ Inequalities: The Danger Zone
Solving inequalities ($<, >, \le, \ge$) is EXACTLY like solving equations, with one major exception.

> 🛑 **The Golden Rule:** When you multiply or divide by a **NEGATIVE** number, you MUST **flip** the inequality sign.

**Example:** $-3x < 12$
1. Divide by $-3$: **$x > -4$**

**Example:** $10 - x \ge 7$
1. Subtract 10: $-x \ge -3$
2. Multiply by $-1$: **$x \le 3$**

---

# 🎯 Representing Solutions
You might be asked for the "Integer Solutions" or to show it on a number line.

**Number Lines:**
*   $<$ or $>$: Open circle ($\circ$)
*   $\le$ or $\ge$: Closed circle ($\bullet$)

**Example:** Solve $3 < 2x - 1 \le 9$
1. Add 1 to all sides: $4 < 2x \le 10$
2. Divide all by 2: **$2 < x \le 5$**
*Integers are:* $\{3, 4, 5\}$.
`
        },
        {
          id: "formulae",
          title: "Rearranging Formulae",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 35,
          learningObjectives: ["Changing the subject", "Multi-step rearranging", "Rearranging with factoring"],
          content: `# 🔄 Changing the Subject
"Making $x$ the subject" means rearranging until the formula looks like $x = \dots$.

## Basic Rearranging
Treat it like an equation.
**Example:** Make $x$ the subject of $y = 5x - 2$
1. Add 2: $y + 2 = 5x$
2. Divide by 5: **$x = \frac{y + 2}{5}$**

---

# ⚡ Dealing with Roots & Powers
Always apply the inverse power/root to the **ENTIRE** other side.

**Example:** Make $r$ the subject of $V = \frac{4}{3}\pi r^3$
1. Multiply by 3: $3V = 4\pi r^3$
2. Divide by $4\pi$: $\frac{3V}{4\pi} = r^3$
3. Cube root: **$r = \sqrt[3]{\frac{3V}{4\pi}}$**

---

# 📥 The "Factorising" Trick
This is the most common "hard" question in GCSE Higher. What if the new subject appears twice?

**Example:** Make $x$ the subject of $y = \frac{x+5}{x-2}$
1. Multiply by $(x-2)$: $y(x-2) = x+5$
2. Expand: $xy - 2y = x + 5$
3. Get all $x$'s on one side: $xy - x = 2y + 5$
4. **FACTORISE $x$ out:** $x(y - 1) = 2y + 5$
5. Divide: **$x = \frac{2y + 5}{y - 1}$**

> 💡 **Exam Tip:** Whenever the term you want is in more than one place, you will almost always need to factorise at the end.
`
        }
      ],
      quizzes: [
        {
          id: "qz-alg-1", title: "Algebra Basics", difficulty: "foundation", passingScore: 70, xpReward: 250, coinReward: 30, timeLimit: 15,
          questions: [
            { id: "aq1", question: "Factorise $x^2 - 25$.", type: "short-answer", correctAnswer: "(x+5)(x-5)", marks: 1, topic: "Diff Squares" },
            { id: "aq2", question: "Rearrange **$v = u + at$** to make $u$ the subject.", type: "short-answer", correctAnswer: "u = v - at", marks: 1, topic: "Formulae" }
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
          learningObjectives: ["Elimination method", "Substitution method", "Linear and Quadratic"],
          content: `# ⚔️ Simultaneous Equations: Elimination
Simultaneous equations are a set of equations with multiple variables (usually $x$ and $y$). We need both to find a single solution.

## The Elimination Method
1.  **Label** your equations (1) and (2).
2.  Make the coefficients of one variable the same (multiply one or both equations).
3.  **ADD** if the signs are different, **SUBTRACT** if they are same (**SSS**: Same Sign Subtract).
4.  Solve for the remaining variable.
5.  Substitute back to find the other.

---

# ✍️ Elimination Example
Solve:
(1) $3x + 2y = 16$
(2) $2x + y = 9$

1. Multiply (2) by 2: $(2x + y = 9) \times 2 \rightarrow 4x + 2y = 18$ (3).
2. Subtract (1) from (3): 
   $(4x + 2y) - (3x + 2y) = 18 - 16 \rightarrow \mathbf{x = 2}$.
3. Sub $x=2$ into (2): $2(2) + y = 9 \rightarrow 4 + y = 9 \rightarrow \mathbf{y = 5}$.

---

# 🎢 The Substitution Method
Better when one equation is already "$y = \dots$" or "$x = \dots$".

**Example:**
(1) $y = 3x - 1$
(2) $2x + y = 14$

1. Replace '$y$' in (2) with the expression from (1):
   $2x + (3x - 1) = 14$
2. Solve: $5x - 1 = 14 \rightarrow 5x = 15 \rightarrow \mathbf{x = 3}$.
3. Sub back into (1): $y = 3(3) - 1 \rightarrow \mathbf{y = 8}$.

---

# 🚀 Linear & Quadratic (Higher Tier)
This is a standard "Grade 8/9" question. You MUST use substitution here.

**Example:**
(1) $y = x^2 - 5x + 6$
(2) $y = x - 2$

1. Equate them: $x^2 - 5x + 6 = x - 2$
2. Set to zero: $x^2 - 6x + 8 = 0$
3. Factorise: $(x - 2)(x - 4) = 0$
4. Find two sets of answers:
   If $x = 2, y = 2 - 2 = \mathbf{0}$.
   If $x = 4, y = 4 - 2 = \mathbf{2}$.

---

# 📉 Interpreting Graphically
The solutions to simultaneous equations are simply the **coordinates of the points where the two lines cross**.

*   If the lines are parallel, there are ZERO solutions.
*   A linear and quadratic line can cross at 0, 1, or 2 points.
`
        },
        {
          id: "quadratics-hard",
          title: "Harder Quadratics",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 50,
          learningObjectives: ["The Quadratic Formula", "Completing the Square", "Turning Points", "Quadratic Graphs"],
          content: `# 🎢 The Quadratic Formula
When a quadratic $ax^2 + bx + c = 0$ cannot be factorised, use the formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

## Step-by-Step Guide:
1.  Identify $a, b, c$ (don't forget the signs!).
2.  Calculate the **Discriminant** ($b^2 - 4ac$) first.
    *   If it's negative, there are no real solutions!
3.  Plug into the full formula.

---

# ⏹️ Completing the Square
Turning $x^2 + bx + c$ into $(x + p)^2 + q$.

**The Method:**
1.  Take half of '$b$' $\rightarrow$ this is your '$p$'.
2.  Write $(x + p)^2$.
3.  Subtract $p^2$.
4.  Add the original '$c$'.

**Example:** $x^2 + 6x - 5$
1. Half of 6 is 3. Write $(x + 3)^2$.
2. Square 3 and subtract it: $(x + 3)^2 - 9$.
3. Add original $-5$: **$(x + 3)^2 - 14$**.

---

# 🎯 Finding Turning Points
Completing the square tells you the exact location of the **minimum** or **maximum** point of a quadratic graph.

**The Rule:** For $y = (x + p)^2 + q$
The Turning Point is at **$(-p, q)$**.

**Example:** $y = (x - 4)^2 + 10$
*   Turning point is at $(4, 10)$.
*   Since the $x^2$ coefficient is positive, it's a **minimum**.

---

# 📉 Quadratic Graphs: Key Features
To sketch a quadratic graph $y = ax^2 + bx + c$, you need 4 things:

1.  **The Shape:** '$a$' is positive $\rightarrow \cup$ (Smile), '$a$' is negative $\rightarrow \cap$ (Frown).
2.  **$y$-intercept:** When $x=0$. It's always '$c$'.
3.  **$x$-intercepts (Roots):** Use factorising or the formula.
4.  **Turning Point:** Use Completing the Square.

---

# 🏃 Quadratic Sequences
Finding the nth term of a sequence like: $3, 10, 21, 36 \dots$

1. Find the 1st differences: $7, 11, 15$.
2. Find the 2nd differences: $4, 4$.
3. **The Rule:** Half the 2nd difference is the coefficient of $n^2$.
   $4 \div 2 = 2 \rightarrow \mathbf{2n^2}$.
4. Subtract $2n^2$ values from the sequence:
   Seq: $3, 10, 21$
   $2n^2$: $2, 8, 18$
   Rem: $1, 2, 3 \dots \rightarrow$ this is just $n$.
5. **Final Result:** $2n^2 + n$.
`
        },
        {
          id: "sequences-graphs",
          title: "Sequences & Graphs",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          learningObjectives: ["nth term of sequences", "Reciprocal/Cubic graphs", "Circle equations", "Tangent to a circle"],
          content: `# 📈 Advanced Graphs: Shapes
You must recognize the characteristic shapes of different functions:

*   **Linear ($y = mx + c$):** A straight line.
*   **Quadratic ($y = x^2$):** A parabola ($\cup$ or $\cap$).
*   **Cubic ($y = x^3$):** An S-shaped curve. 
*   **Reciprocal ($y = 1/x$):** Two curves that never touch the axes (asymptotes).

---

# ⚪ Equations of Circles
Circles centered at the origin $(0,0)$ follow the formula:
**$x^2 + y^2 = r^2$**
*(Where $r$ is the radius)*

**Example:** $x^2 + y^2 = 25$
*   Radius is $\sqrt{25} = 5$.

---

# 📐 Tangents to Circles (Grade 9)
A tangent is a straight line that touches a circle at exactly one point.

**The Rule:** The radius is **perpendicular** to the tangent at the point of contact.

## How to find the equation of a tangent:
1.  Find the gradient of the radius ($m_r$).
2.  Find the perpendicular gradient ($m_t = -1/m_r$).
3.  Use $y - y_1 = m(x - x_1)$ with the point of contact.

---

# ✨ Graph Transformations
How changing the equation shifts the graph.

1.  **$f(x) + k$:** Shifts UP by $k$.
2.  **$f(x - k)$:** Shifts RIGHT by $k$ (The "inside-opposite" rule).
3.  **$-f(x)$:** Reflect over the x-axis (upside down).
4.  **$f(-x)$:** Reflect over the y-axis.

---

# ✍️ Worked Example: Transformation
If the turning point of $y = x^2$ is $(0,0)$, where is the turning point of $y = (x - 3)^2 + 5$?

1.  $(x-3)$ is inside the bracket $\rightarrow$ shift **Right 3**.
2.  $+5$ is outside $\rightarrow$ shift **Up 5**.
3.  **Final Turning Point:** $(3, 5)$.
`
        }
      ],
      quizzes: [
        {
          id: "qz-alg-2", title: "Advanced Algebra", difficulty: "higher", passingScore: 70, xpReward: 400, coinReward: 50, timeLimit: 25,
          questions: [
            { id: "aa1", question: "Solve $x^2 + 4x + 1 = 0$ by completing the square.", type: "multiple-choice", options: ["$-2 \pm \sqrt{3}$", "$-2 \pm \sqrt{5}$", "$2 \pm \sqrt{3}$"], correctAnswer: "$-2 \pm \sqrt{3}$", marks: 3, topic: "Quadratics" }
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
          learningObjectives: ["Sharing in a ratio", "Combining ratios", "Compound measures"],
          content: `# 🔢 Sharing in a Ratio
Sharing a total amount (like money) into parts.

**Example:** Share £350 in the ratio $2:3:5$.
1.  Find the total number of parts: $2 + 3 + 5 = 10$.
2.  Find the value of ONE part: $350 \div 10 = £35$.
3.  Multiply each part of the ratio:
    *   $2 \times 35 = £70$
    *   $3 \times 35 = £105$
    *   $5 \times 35 = £175$
**Check:** $70 + 105 + 175 = 350$. Perfect!

---

# 🔗 Combining Ratios
What if you have two different ratios for the same middle person?

**Example:** Ratio $A:B$ is $2:3$. Ratio $B:C$ is $4:5$.
Find the ratio $A:B:C$.

1.  The linking person is $B$.
2.  Find LCM of B's values (3 and 4) $\rightarrow 12$.
3.  Scale them: 
    *   $A:B = 2:3 \rightarrow$ multiply by 4 $\rightarrow \mathbf{8:12}$.
    *   $B:C = 4:5 \rightarrow$ multiply by 3 $\rightarrow \mathbf{12:15}$.
4.  **Final Ratio:** $8:12:15$.

---

# 🏎️ Compound Measures
Compound measures involve three variables linked in a triangle.

1.  **Speed, Distance, Time:** $S = D/T$
2.  **Density, Mass, Volume:** $D = M/V$
3.  **Pressure, Force, Area:** $P = F/A$

> ⚠️ **Common Trap:** Convert time to decimals correctly! 1 hour 30 mins is **1.5 hours**, NOT 1.3 hours.

---

# 📉 Percentages: Profit & Loss
Percentage change is a core GCSE skill.

**The Formula:**
$$\text{Percentage Change} = \frac{\text{Change}}{\text{Original}} \times 100$$

**Example:** A watch bought for £80 is sold for £100.
1. Change = 20.
2. Original = 80.
3. $\frac{20}{80} \times 100 = \mathbf{25\% \text{ profit}}$.

---

# 🔄 Multipliers
Multipliers are the fastest way to do percentage problems.

*   Increase by $15\% \rightarrow$ multiply by $1.15$
*   Decrease by $30\% \rightarrow$ multiply by $0.70$

**Reverse Percentages:**
If a price *after* a $20\%$ increase is £120, find the original.
$Original \times 1.2 = 120 \rightarrow Original = 120 \div 1.2 = \mathbf{£100}$.
`
        },
        {
          id: "growth-decay",
          title: "Percent Growth & Decay",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          learningObjectives: ["Compound Interest", "Depreciation", "Iteration", "Exponential growth"],
          content: `# 📈 Compound Interest
Unlike simple interest, compound interest adds the interest back to the total before calculating the next year's.

**The Power Formula:**
$$\text{Final Amount} = \text{Principal} \times (\text{Multiplier})^{\text{years}}$$

**Example:** £2000 invested at $3\%$ for 5 years.
Multiplier = $1.03$.
$2000 \times 1.03^5 = £2318.55$.

---

# 📉 Depreciation
Depreciation is simply "negative growth." The value of an item (like a car) decreases over time.

**Example:** A £15,000 car loses $20\%$ value each year. How much is it worth after 3 years?
Multiplier = $0.80$.
$15000 \times 0.8^3 = \mathbf{£7,680}$.

---

# 🔄 Iterative Processes
Iteration is repeating a calculation to get closer to an answer.

**Symbol notation:** $x_{n+1} = \dots x_n$
Usually, you plug your "Current" answer back into the formula to get your "Next" answer.

**Example:** $x_{n+1} = \sqrt{x_n + 5}$, starting with $x_0 = 2$.
$x_1 = \sqrt{2 + 5} = 2.645\dots$
$x_2 = \sqrt{2.645 + 5} = 2.765\dots$

---

# 🚀 Exponential Growth
Exponential growth or decay happens when something grows by a fixed **percentage** rather than a fixed amount.

*   **Growth:** Curve goes steeply UP.
*   **Decay:** Curve flattens out towards the x-axis.

> 💡 **Tip:** Compound interest problems are just exponential growth models where $t$ (time) is the index.
`
        },
        {
          id: "direct-inverse",
          title: "Direct & Inverse Proportion",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 40,
          learningObjectives: ["Direct proportion", "Inverse proportion", "Proportional to squares/roots", "Graphs of proportion"],
          content: `# ⛓️ Direct Proportion
If $y$ is directly proportional to $x$, when $x$ doubles, $y$ also doubles.

**The Equation:** $y = kx$ 
*(Where $k$ is the constant of proportionality)*

**Solving Step-by-Step:**
1.  Write the relationship: $y = kx$.
2.  Plug in the given values of $x$ and $y$ to solve for $k$.
3.  Rewrite the formula with your $k$ value.
4.  Answer the final question.

---

# 🔄 Inverse Proportion
If $y$ is inversely proportional to $x$, as one increases, the other decreases.

**The Equation:** $y = \frac{k}{x}$

**Example:** $y$ is inversely proportional to $x$. When $x=4, y=10$. Find $y$ when $x=5$.
1.  $y = k/x$
2.  $10 = k/4 \rightarrow k = 40$.
3.  Formula: $y = 40/x$.
4.  When $x=5, y = 40/5 = \mathbf{8}$.

---

# ⚡ Squares, Cubes & Roots
Sometimes proportion isn't just to $x$, but $x^2$ or $\sqrt{x}$. Pay close attention to the wording!

*   "$y$ proportional to square of $x$" $\rightarrow y = kx^2$
*   "$y$ inversely proportional to square root of $x$" $\rightarrow y = \frac{k}{\sqrt{x}}$

**Quick check:** If $y \propto x^2$, and $x$ doubles ($ \times 2$), then $y$ quadruples ($ \times 2^2 = \times 4$).

---

# 📉 Proportionality Graphs
You can recognize the relationship by the shape of the graph:

*   **Direct ($y \propto x$):** Simple straight line through $(0,0)$.
*   **Direct ($y \propto x^2$):** Half of a parabola starting at $(0,0)$.
*   **Inverse ($y \propto 1/x$):** A curve that gets closer and closer to the axes but never touches them.
`
        }
      ],
      quizzes: [
        {
          id: "qz-rat", title: "Ratio & Prop", difficulty: "foundation", passingScore: 75, xpReward: 250, coinReward: 30, timeLimit: 20,
          questions: [
            { id: "rq1", question: "Given that $y \propto x^2$ and $y=20$ when $x=2$, find the constant of proportionality $k$.", type: "short-answer", correctAnswer: "5", marks: 2, topic: "Proportion" },
            { id: "rq2", question: "Calculate the total amount after £2000 is invested at 10% compound interest for 2 years.", type: "short-answer", correctAnswer: "2420", marks: 2, topic: "Compound Interest" }
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
          learningObjectives: ["Angle facts", "Parallel lines", "Interior/Exterior angles"],
          content: `# � Angle Facts: The Basics
Before we tackle shapes, you must know the fundamental angle rules:

*   **Straight Line:** Angles sum to $180^\circ$.
*   **Around a Point:** Angles sum to $360^\circ$.
*   **Vertically Opposite:** These are exactly equal.
*   **Triangle:** Angles sum to $180^\circ$.
*   **Quadrilateral:** Angles sum to $360^\circ$.

---

# 🛤️ Parallel Lines
When a line (transversal) crosses two parallel lines, several equal angles are created.

1.  **Corresponding Angles:** F-shape. They are equal.
2.  **Alternate Angles:** Z-shape. They are equal.
3.  **Co-interior Angles:** C-shape. They **sum to $180^\circ$**.

> 💡 **Tip:** Always state the full name of the rule in your exam working to get the method marks!

---

# 🔷 Interior Angles of Polygons
An "Interior Angle" is inside the shape.

**The Sum Rule:**
$$\text{Sum of Interior Angles} = (n - 2) \times 180$$
*(Where $n$ is the number of sides)*

**Example: Hexagon ($n=6$):**
Sum $= (6 - 2) \times 180 = 4 \times 180 = \mathbf{720^\circ}$.

If it's a **Regular** polygon, all angles are equal:
One angle $= 720 \div 6 = \mathbf{120^\circ}$.

---

# ☀️ Exterior Angles
An "Exterior Angle" is the angle between a side and the extension of the adjacent side.

**The Golden Rule:**
> **The Sum of Exterior Angles of ANY polygon is always $360^\circ$.**

**Example: Regular Octagon ($n=8$):**
One Exterior Angle $= 360 \div 8 = \mathbf{45^\circ}$.

**Connection:**
$\text{Interior} + \text{Exterior} = 180^\circ$ (since they sit on a straight line).

---

# ✍️ Worked Example: Finding Sides
A regular polygon has an interior angle of $150^\circ$. How many sides does it have?

1.  Find the exterior angle first: $180 - 150 = \mathbf{30^\circ}$.
2.  Use the $360$ rule: $n = 360 \div 30 = \mathbf{12}$.
3.  **Final Result:** It's a Dodecagon (12 sides).
`
        },
        {
          id: "transformations",
          title: "Transformations",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 40,
          learningObjectives: ["Reflections", "Rotations", "Translations", "Enlargements"],
          content: `# 🔄 Movement 1: Reflection
To describe a reflection, you only need one thing: **The Equation of the Mirror Line**.

*   **Vertical lines:** $x = k$ (e.g., $x=2$)
*   **Horizontal lines:** $y = k$ (e.g., $y=0$ is the x-axis)
*   **Diagonal lines:** $y = x$ or $y = -x$

---

# 🌀 Movement 2: Rotation
To describe a rotation, you need three pieces of info:
1.  **Angle:** (e.g., $90^\circ$ or $180^\circ$)
2.  **Direction:** (Clockwise or Anticlockwise)
3.  **Centre of Rotation:** (The coordinate point $(x,y)$)

> 💡 **Tip:** Use tracing paper! It is provided in every GCSE exam and makes rotation much easier.

---

# 🚀 Movement 3: Translation
Translation is sliding a shape without turning or flipping it.

**The Vector:** $\binom{x}{y}$
*   **Top number ($x$):** Move right if positive, left if negative.
*   **Bottom number ($y$):** Move up if positive, down if negative.

**Example:** $\binom{3}{-2}$ means "Move 3 right and 2 down."

---

# 🔍 Movement 4: Enlargement
Enlargement changes the size of the shape. To describe it, you need:
1.  **Scale Factor ($k$):** How many times bigger?
2.  **Centre of Enlargement:** Where does it grow from?

**Special Scale Factors:**
*   **Fractional (e.g., $1/2$):** The shape gets smaller.
*   **Negative (e.g., $-2$):** The shape is inverted (upside down) and on the opposite side of the center.

---

# 📏 Area & Volume in Enlargement
If you enlarge a shape by scale factor $k$:

*   The **Lengths** change by $\mathbf{k}$.
*   The **Area** changes by $\mathbf{k^2}$.
*   The **Volume** changes by $\mathbf{k^3}$.

**Example:** If scale factor is 3, the area is $3^2 = 9$ times larger!
`
        },
        {
          id: "circle-theorems",
          title: "8 Key Circle Theorems",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 45,
          learningObjectives: ["Angles in circles", "Tangents", "Cyclic quadrilaterals", "Alternate segment theorem"],
          content: `# ⚪ Theorem 1 & 2: Center & Semicircle
1.  **Angle at the Centre:** The angle at the centre is exactly **double** the angle at the circumference (subtended from the same arc).
2.  **Angle in a Semicircle:** The angle subtended by the diameter is always **$90^\circ$**.

---

# ⚪ Theorem 3 & 4: Segments & Quads
3.  **Angles in the Same Segment:** Angles subtended from the same arc are **equal**. (Often looks like "Butterfly wings").
4.  **Cyclic Quadrilaterals:** In a 4-sided shape where all corners touch the circle, **opposite angles sum to $180^\circ$**.

---

# ⚪ Theorem 5 & 6: Tangents
5.  **Tangent/Radius:** A tangent and a radius meet at exactly **$90^\circ$**.
6.  **Tangents from a Point:** Two tangents meeting at the same point outside the circle are **equal in length**. (Forms an isosceles triangle with the center).

---

# ⚪ Theorem 7: Alternate Segment
7.  **Alternate Segment Theorem:** The angle between a tangent and a chord is equal to the angle in the alternate segment. 
*(This is often the hardest one to spot! Look for a triangle touching a tangent line).*

---

# ⚪ Theorem 8: Perpendicular Bisector
8.  **Chord Bisector:** A radius that is perpendicular to a chord **bisects** the chord (cuts it exactly in half).

> 💡 **Exam Tip:** When a question says "Give reasons for your answer," you MUST write out the name of the circle theorem word-for-word.
`
        }
      ],
      quizzes: [
        {
          id: "qz-geo-1", title: "Shapes & Angles", difficulty: "foundation", passingScore: 70, xpReward: 300, coinReward: 30, timeLimit: 20,
          questions: [
            { id: "gq1", question: "What is the sum of the interior angles of a regular hexagon?", type: "short-answer", correctAnswer: "720", marks: 2, topic: "Polygons" }
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
          learningObjectives: ["2D area", "Circles and sectors", "3D Volume", "Surface area"],
          content: `# 📦 2D Area Refresher
*   **Rectangle:** $w \times h$
*   **Triangle:** $\frac{1}{2} \times b \times h$
*   **Trapezium:** $\frac{a + b}{2} \times h$
*   **Parallelogram:** $b \times h$ (perpendicular height!)

---

# ⚪ Circles: Area & Circumference
*   **Circumference ($C$):** $\pi d$ or $2\pi r$.
*   **Area ($A$):** $\pi r^2$.

## Arc Length & Sector Area
A sector is a "pizza slice."
*   **Arc Length:** $\frac{\theta}{360} \times 2\pi r$
*   **Sector Area:** $\frac{\theta}{360} \times \pi r^2$
*(Where $\theta$ is the angle of the slice).*

---

# 🧊 3D Volume
Volume is the space inside a 3D shape, measured in cubic units ($cm^3$).

**Prisms:** Area of cross-section $\times$ length.
*   **Cylinder:** $\pi r^2 h$
*   **Cuboid:** $l \times w \times h$

**Pyramids & Cones:**
*   **Volume:** $\frac{1}{3} \times \text{Base Area} \times \text{Height}$
*   **Cone:** $\frac{1}{3} \pi r^2 h$
*   **Sphere:** $\frac{4}{3} \pi r^3$

---

# 🏗️ Surface Area
Surface area is the total area of all the faces combined.

**Sphere:** $4 \pi r^2$
**Cylinder:** $2\pi r^2 + 2\pi rh$ (Two circles + the "label" rectangle).

**Example: Cone Curved Surface**
The curved part of a cone is $\pi r l$.
*(Where $l$ is the slant height).*

---

# ✍️ Worked Example: Frustums
A "Frustum" is a cone with the top chopped off.
To find its volume:
1.  Calculate the volume of the **original large cone**.
2.  Calculate the volume of the **small missing cone**.
3.  **Subtract** them.
`
        },
        {
          id: "trig-vectors",
          title: "Trigonometry & Vectors",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 50,
          learningObjectives: ["SOH CAH TOA", "Sine/Cosine Rules", "Area of triangle", "Vector proofs"],
          content: `# 📐 SOH CAH TOA
Used for **Right-Angled** triangles.

*   **$\sin(\theta) = \frac{\text{Opposite}}{\text{Hypotenuse}}$**
*   **$\cos(\theta) = \frac{\text{Adjacent}}{\text{Hypotenuse}}$**
*   **$\tan(\theta) = \frac{\text{Opposite}}{\text{Adjacent}}$**

## Inverse Trig
To find an **angle**, use the "Shift" button on your calculator ($\sin^{-1}$, etc.).

---

# 🌊 Sine & Cosine Rules
Used for **ANY** triangle (not just right-angled).

## The Sine Rule
Finds side: $\frac{a}{\sin A} = \frac{b}{\sin B}$
Finds angle: $\frac{\sin A}{a} = \frac{\sin B}{b}$
*(Use when you have an opposite "Pair" of angle and side).*

## The Cosine Rule
Finds side: $a^2 = b^2 + c^2 - 2bc\cos A$
Finds angle: $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$
*(Use when you have "SAS" - Side, Angle, Side).*

---

# 🍰 Area of Any Triangle
You don't need the perpendicular height if you have two sides ($a, b$) and the included angle ($C$).

**The Formula:**
$$\text{Area} = \frac{1}{2} ab \sin C$$

> 💡 **Exam Tip:** Ensure your calculator is in **DEG** (Degrees) mode, not RAD or GRA.

---

# 🚀 Vectors: The Basics
A vector describes a movement with direction and magnitude.

*   **$\vec{AB}$** means move from point A to point B.
*   **Addition:** Follow the path. $\vec{AC} = \vec{AB} + \vec{BC}$.
*   **Negative:** $-\mathbf{a}$ is the same movement but in the **opposite direction**.

**Collinear Points:**
If $\vec{AB} = 2\mathbf{a}$ and $\vec{BC} = 4\mathbf{a}$, then A, B, and C sit on a straight line because the vectors are parallel and share a common point (B).

---

# ✍️ Vector Proof Example
In triangle ABC, $M$ is the midpoint of BC.
Find $\vec{AM}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.

1.  Find the path for BC: $\vec{BC} = \vec{BA} + \vec{AC} = -\mathbf{a} + \mathbf{b}$.
2.  Half it for MC: $\vec{MC} = \frac{1}{2}\mathbf{b} - \frac{1}{2}\mathbf{a}$.
3.  $\vec{AM} = \vec{AC} + \vec{CM} = \mathbf{b} - (\frac{1}{2}\mathbf{b} - \frac{1}{2}\mathbf{a}) = \mathbf{\frac{1}{2}a + \frac{1}{2}b}$.
`
        }
      ],
      quizzes: [
        {
          id: "qz-geo-2", title: "Measures Mastery", difficulty: "higher", passingScore: 70, xpReward: 400, coinReward: 50, timeLimit: 25,
          questions: [
            { id: "mg1", question: "Find the volume of a sphere with radius $3$. Leave your answer in terms of $\pi$.", type: "short-answer", correctAnswer: "36pi", marks: 2, topic: "Volume" }
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
          learningObjectives: ["Probability scale", "AND/OR rules", "Tree diagrams", "Venn diagrams", "Conditional probability"],
          content: `# 🎲 The Probability Scale
Probability measures how likely an event is to happen.

*   **Impossible:** 0
*   **Certain:** 1
*   **The Rule:** Total probability of ALL possible outcomes always sum to **1**.

**Relative Frequency:**
If you don't know the theoretical probability, you can estimate it from an experiment:
$$\text{Relative Freq} = \frac{\text{Number of successful trials}}{\text{Total number of trials}}$$

---

# ➕ The OR and AND Rules
1.  **The OR Rule (Addition):** If events are mutually exclusive (can't happen at same time):
    $P(A \text{ or } B) = P(A) + P(B)$
2.  **The AND Rule (Multiplication):** If events are independent:
    $P(A \text{ and } B) = P(A) \times P(B)$

**Example:** Rolling a 6 AND flipping a Head.
$1/6 \times 1/2 = \mathbf{1/12}$.

---

# 🌳 Tree Diagrams
Tree diagrams help visualize a sequence of events.

1.  **Multiply** ALONG branches to find the probability of a specific outcome.
2.  **Add** results DOWN the column for outcomes that satisfy the question.

> ⚠️ **Common Trap:** Ensure you check if the event is "With Replacement" or "Without Replacement." Without replacement, the total and the numerator will decrease!

---

# ⭕ Venn Diagrams & Sets
Venn diagrams show the relationships between different sets of data.

*   **$A \cap B$ (Intersection):** In $A$ AND $B$ (the middle).
*   **$A \cup B$ (Union):** In $A$ OR $B$ (the whole of both circles).
*   **$A'$ (Complement):** NOT in $A$.

**Probability from Venn:**
$P(A|B) = \frac{P(A \cap B)}{P(B)}$
*(This is "Probability of A GIVEN that B has happened").*

---

# 🧪 Conditional Probability
The outcome of the second event depends on the outcome of the first.

**Example:** 10 sweets in a bag (7 red, 3 blue). You take two without looking and WITHOUT replacing.
Find $P(\text{Both Red})$:
1.  First sweet is red: $7/10$.
2.  Second sweet is red: $6/9$. (One red is gone, and total is now 9).
3.  $7/10 \times 6/9 = 42/90 = \mathbf{7/15}$.
`
        },
        {
          id: "stats-basics",
          title: "Averages & Charts",
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 35,
          learningObjectives: ["Mean, Median, Mode, Range", "Averages from tables", "Pie charts", "Scatter graphs"],
          content: `# 📊 The 4 Averages
1.  **Mean:** $(\text{Sum of all values}) \div (\text{How many values})$.
2.  **Median:** The middle value when in order (The "Middle-man").
3.  **Mode:** The value that appears the most (The "Most-common").
4.  **Range:** $\text{Highest} - \text{Lowest}$ (Measures "Spread").

---

# 🗂️ Averages from Frequency Tables
If you have a table showing "Score" and "Frequency":

1.  **Total Frequency ($n$):** Add up the freq column.
2.  **Estimated Mean:**
    *   Find the **midpoint** of each group.
    *   Multiply $(\text{Midpoint} \times \text{Frequency})$.
    *   Sum these results and divide by **Total Frequency**.
    
$$\text{Estimated Mean} = \frac{\sum fx}{\sum f}$$

---

# 🥧 Drawing Pie Charts
To find the angle for a section:

1.  Find the **Total Frequency**.
2.  Divide $360$ by the Total Frequency $\rightarrow$ this is "Degrees per person".
3.  Multiply each group's frequency by this number.

**Example:** 20 people total.
$360 \div 20 = 18^\circ$ per person.
If 5 like apples, the angle is $5 \times 18 = \mathbf{90^\circ}$.

---

# 📈 Scatter Graphs & Correlation
Scatter graphs show the relationship between two variables.

*   **Positive Correlation:** Both go up together.
*   **Negative Correlation:** One goes up, other goes down.
*   **No Correlation:** Points are scattered randomly.

**Line of Best Fit:**
*   Always draw a single straight line through the center of the points.
*   Use it to **interpolate** (estimate values within the range).
*   Avoid **extrapolating** (estimating values outside the range) as it's unreliable.
`
        },
        {
          id: "stats-adv",
          title: "Advanced Statistics",
          type: "lesson",
          difficulty: "higher",
          estimatedTime: 45,
          learningObjectives: ["Histograms", "Frequency Density", "Cumulative Frequency", "Box Plots"],
          content: `# 📈 Histograms
Histograms have bars of **different widths**. In a histogram, the **AREA of the bar represents the frequency**, not the height.

**The Formula:**
$$\text{Frequency Density} = \frac{\text{Frequency}}{\text{Class Width}}$$

## Drawing a Histogram:
1.  Add a column to your table for "Class Width."
2.  Add a column for "Frequency Density."
3.  Calculate FD for every row.
4.  Plot FD on the vertical y-axis.

---

# 📉 Cumulative Frequency
A "Running Total" graph.

1.  Plot points at the **UPPER BOUND** of each group.
2.  Connect with a smooth S-shaped curve (the "Ogive").

## Reading the Graph:
*   **Median:** Read across from $50\%$ of the total frequency.
*   **Lower Quartile (LQ):** Read from $25\%$.
*   **Upper Quartile (UQ):** Read from $75\%$.
*   **Interquartile Range (IQR):** $UQ - LQ$. (Measures how consistent the "middle 50%" is).

---

# 📦 Box Plots (Box and Whisker)
A visual summary of the 5 key statistics:

1.  **Minimum Value** (Left whisker)
2.  **Lower Quartile** (Left side of box)
3.  **Median** (Line inside box)
4.  **Upper Quartile** (Right side of box)
5.  **Maximum Value** (Right whisker)

## Why use them?
They are perfect for **comparing** two data sets.
> 💡 **Exam Tip:** When comparing, you MUST comment on:
> 1. The average (Median).
> 2. The spread (IQR or Range).

---

# ✍️ Worked Example: Comparing Box Plots
"Describe the difference between Year 10 and Year 11 test scores."

1.  "Year 11 has a higher median ($65\%$) compared to Year 10 ($58\%$), so on average, they scored better."
2.  "Year 11 has a smaller IQR ($10\%$) than Year 10 ($22\%$), meaning their scores were more consistent."
`
        }
      ],
      quizzes: [
        {
          id: "qz-stat", title: "Stats Master", difficulty: "higher", passingScore: 70, xpReward: 300, coinReward: 40, timeLimit: 20,
          questions: [
            { id: "sq1", question: "Calculate the Frequency Density (FD) if $Frequency = 30$ and $Class Width = 10$.", type: "short-answer", correctAnswer: "3", marks: 1, topic: "Histograms" }
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
