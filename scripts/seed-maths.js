
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
          content: `# 🍰 Mastering Fractions: Your Complete Guide

> **"A fraction is not just a number—it's a story about sharing!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🧩 Understand what fractions really mean
- ➕ Add and subtract fractions like a pro
- ✖️ Multiply and divide with confidence
- 🔄 Convert between mixed numbers and improper fractions
- ⚡ Apply fractions to solve real-world problems

**Estimated Time:** 45 minutes | **Difficulty:** Foundation | **XP Reward:** 150 ⭐

---

## 📚 Chapter 1: Understanding Fractions

### What IS a Fraction?
A fraction represents **part of a whole**. Think of it like slicing a pizza! 🍕

\`\`\`
Numerator (Top) → How many slices you have
─────────────────
Denominator (Bottom) → Total slices in the pizza
\`\`\`

**Example:** 3/4 means you have **3 slices** out of a pizza cut into **4 equal parts**.

![Pizza showing 3 out of 4 slices](/lessons/fractions/fractions_pizza_intro_1765043998061.png)

### Visual Representation
\`\`\`
Full Pizza:    🍕🍕🍕🍕 (4 slices)
3/4 Pizza:     🍕🍕🍕□ (3 slices eaten, 1 left)
1/2 Pizza:     🍕🍕□□ (2 slices left)
1/4 Pizza:     🍕□□□ (only 1 slice!)
\`\`\`

### 🎮 Quick Check
**Which is MORE pizza?**
- A) 3/8 of a pizza
- B) 5/8 of a pizza
- C) 1/8 of a pizza

<details>
<summary>💡 Show Answer</summary>

**B) 5/8** - More slices = more pizza! When denominators are the same, just compare the numerators.
</details>

---

## 📚 Chapter 2: Types of Fractions

### 🟢 Proper Fractions (Less than 1)
The numerator is **smaller** than the denominator.
> Examples: 1/2, 3/4, 7/10

Think: "I have less than one whole pizza"

### 🔴 Improper Fractions (Greater than or equal to 1)
The numerator is **equal to or larger** than the denominator.
> Examples: 5/4, 7/3, 9/9

Think: "I have more than one pizza!"

### 🟡 Mixed Numbers
A whole number plus a proper fraction.
> Examples: 1½, 2¾, 3⅖

Think: "I have 2 whole pizzas AND 3 extra slices"

### 🔄 Converting Between Them

**Improper → Mixed:**
\`\`\`
Example: 11/4 = ? 

Step 1: Divide 11 ÷ 4 = 2 remainder 3
Step 2: Whole number = 2, Remainder = 3, Denominator stays = 4
Answer: 2¾
\`\`\`

**Mixed → Improper:**
\`\`\`
Example: 3⅖ = ?

Step 1: Multiply whole number by denominator: 3 × 5 = 15
Step 2: Add the numerator: 15 + 2 = 17
Step 3: Keep the denominator: 5
Answer: 17/5
\`\`\`

![Types of Fractions Visual Guide](/lessons/fractions/fractions_types_visual_1765044014625.png)

### 🎮 Practice Challenge
**Convert 13/5 to a mixed number**

<details>
<summary>💡 Show Answer</summary>

13 ÷ 5 = 2 remainder 3
**Answer: 2⅗**
</details>

---

## 📚 Chapter 3: Equivalent Fractions

Different fractions can represent the **same amount**!

### The Rule
**Multiply or divide BOTH the top and bottom by the SAME number.**

\`\`\`
1/2 = 2/4 = 3/6 = 4/8 = 5/10

All of these are 50% - exactly half!
\`\`\`

### Visual Proof
\`\`\`
1/2:   [████████░░░░░░░░] Half is shaded
2/4:   [████░░░░|████░░░░] Same amount shaded!
4/8:   [██░░|██░░|██░░|██░░] Still the same!
\`\`\`

![Equivalent Fractions Bars](/lessons/fractions/equivalent_fractions_bars_1765044027328.png)

### 🎮 Spot the Fake!
Which of these is NOT equal to 2/3?
- A) 4/6
- B) 6/9
- C) 8/15
- D) 10/15

<details>
<summary>💡 Show Answer</summary>

**C) 8/15** - If you multiply 2×4 and 3×4, you get 8/12, not 8/15!
The pattern is: 2/3 = 4/6 = 6/9 = 8/12 = 10/15 ✅
</details>

---

## 📚 Chapter 4: Simplifying Fractions

**Goal:** Make the fraction as simple as possible!

### The Method
**Divide both numerator and denominator by their Greatest Common Factor (GCF)**

\`\`\`
Example: Simplify 12/16

Step 1: Find factors
  12: 1, 2, 3, 4, 6, 12
  16: 1, 2, 4, 8, 16
  
Step 2: Find GCF = 4

Step 3: Divide both by 4
  12 ÷ 4 = 3
  16 ÷ 4 = 4
  
Answer: 3/4 ✨
\`\`\`

### 🎯 Pro Tip
Look for obvious factors first:
- Both even? → Divide by 2
- Both end in 5 or 0? → Divide by 5
- Both divisible by 3? → Divide by 3

---

## 📚 Chapter 5: Adding & Subtracting Fractions

### 🔑 Golden Rule
**You MUST have the same denominator (bottom number)!**

### Same Denominator? Easy!
\`\`\`
Example: 3/7 + 2/7

Just add the tops: 3 + 2 = 5
Keep the bottom: 7
Answer: 5/7 🎉
\`\`\`

### Different Denominators? Find the LCM!
\`\`\`
Example: 1/3 + 1/4

Step 1: Find LCM of 3 and 4
  Multiples of 3: 3, 6, 9, 12, 15...
  Multiples of 4: 4, 8, 12, 16...
  LCM = 12 ✅

Step 2: Convert both fractions
  1/3 = 1×4/3×4 = 4/12
  1/4 = 1×3/4×3 = 3/12

Step 3: Add!
  4/12 + 3/12 = 7/12 ✨
\`\`\`

### Real-World Example 🌍
**Pizza Party Problem:**
- Sarah ate 1/3 of a pizza
- Tom ate 1/4 of the SAME pizza
- How much did they eat together?

1/3 + 1/4 = 4/12 + 3/12 = **7/12** of the pizza! 🍕

![Adding Fractions Step by Step](/lessons/fractions/adding_fractions_visual_1765044046370.png)

---

## 📚 Chapter 6: Multiplying Fractions

### The EASIEST Operation!
**Just multiply across: tops × tops, bottoms × bottoms**

\`\`\`
Example: 2/3 × 4/5

Numerator: 2 × 4 = 8
Denominator: 3 × 5 = 15

Answer: 8/15 ✨
\`\`\`

### Shortcut: Cancel First!
\`\`\`
Example: 3/4 × 2/3

Notice: 3 on top cancels with 3 on bottom!

3̶/4 × 2/3̶ → 1/4 × 2/1 = 2/4 = 1/2
\`\`\`

### What Does It Mean?
"Half of a half" = 1/2 × 1/2 = 1/4 (a quarter!)

\`\`\`
Start:  [████████████████] (whole)
Half:   [████████░░░░░░░░] 
Half of that: [████░░░░░░░░░░░░] (quarter!)
\`\`\`

![Multiplying Fractions Concept](/lessons/fractions/multiplying_fractions_concept_1765044063911.png)

---

## 📚 Chapter 7: Dividing Fractions

### The KCF Rule 🎯
**Keep, Change, Flip**

\`\`\`
Example: 1/2 ÷ 1/4

Step 1: KEEP the first fraction → 1/2
Step 2: CHANGE ÷ to × → ×
Step 3: FLIP the second fraction → 4/1

New problem: 1/2 × 4/1 = 4/2 = 2 ✨
\`\`\`

### Why Does This Work?
Dividing by 1/4 means "how many quarters fit in this?"
- How many 1/4s fit in 1/2?
- Answer: **2** quarter slices fit in a half! 🍕

---

## 🏆 Final Boss Challenge

**Multi-Step Problem:**

A recipe calls for 2¾ cups of flour. You want to make half the recipe. How much flour do you need?

<details>
<summary>💡 Show Solution</summary>

Step 1: Convert to improper fraction
  2¾ = (2×4+3)/4 = 11/4

Step 2: Find half (multiply by 1/2)
  11/4 × 1/2 = 11/8

Step 3: Convert back to mixed number
  11÷8 = 1 remainder 3
  **Answer: 1⅜ cups of flour** ✅
</details>

---

## 🎯 Key Takeaways

✅ Fractions represent **parts of a whole**
✅ Always find a **common denominator** to add/subtract
✅ **Multiply straight across** for multiplication
✅ Use **KCF (Keep, Change, Flip)** for division
✅ Simplify your final answer when possible!

---

## 🌟 Bonus: Real-World Applications

- 🍳 **Cooking:** Adjusting recipes (halving, doubling)
- 💰 **Money:** Calculating discounts and sales
- ⏱️ **Time:** Understanding hours and minutes
- 📏 **Measurement:** Converting units (feet to inches)
- 🎮 **Gaming:** Understanding health bars and progress

![Real-World Fractions in Cooking](/lessons/fractions/real_world_fractions_cooking_1765044078678.png)

---

## 📝 Practice Problems

1. Simplify: 24/36
2. Calculate: 2/5 + 3/10
3. Calculate: 3/4 × 2/3
4. Calculate: 5/6 ÷ 1/3
5. Convert to mixed number: 23/7

**Ready to test your skills? Take the quiz to earn your Fraction Master badge!** 🏅
`,
          type: "lesson",
          difficulty: "foundation",
          estimatedTime: 45,
          learningObjectives: [
            "Understand the fundamental concept of fractions and their visual representations",
            "Master converting between improper fractions and mixed numbers",
            "Identify and create equivalent fractions",
            "Add and subtract fractions with different denominators using LCM",
            "Multiply and divide fractions using efficient methods",
            "Simplify fractions to their lowest terms",
            "Apply fraction skills to solve multi-step real-world problems"
          ],
        },
        {
          id: "percentages-lesson",
          title: "Percentages and Percentage Change",
          content: `# 💯 Mastering Percentages: Your Complete Guide

> **"Percentages are everywhere - from shop sales to bank interest to exam scores!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🔢 Calculate percentages of amounts using multiple methods
- 📈 Find percentage increases and decreases
- 🔄 Solve reverse percentage problems
- 💰 Calculate compound interest for investments
- 🛍️ Apply percentages to real-world shopping and finance

**Estimated Time:** 50 minutes | **Difficulty:** Foundation | **XP Reward:** 200 ⭐

---

## 📚 Chapter 1: What ARE Percentages?

**Percent** means "per hundred" - it's a way of expressing parts of 100!

### The Big Idea
\`\`\`
50% = 50/100 = 1/2 = half
25% = 25/100 = 1/4 = quarter
100% = the whole thing!
\`\`\`

### Visual Understanding
Think of percentages as a grid of 100 squares:
- **50%** = 50 squares filled
- **75%** = 75 squares filled
- **10%** = just 10 squares filled

### 🎮 Quick Check
**What percentage of 100 squares is 35 squares?**

<details>
<summary>💡 Show Answer</summary>

**35%** - It's right there in the number! 35 out of 100 = 35%
</details>

---

## 📚 Chapter 2: Finding Percentages of Amounts

There are TWO super methods you need to know!

### Method 1: Convert to Decimal (The Fast Way! ⚡)
\`\`\`
Example: Find 15% of £240

Step 1: Convert 15% to decimal: 15 ÷ 100 = 0.15
Step 2: Multiply: 0.15 × £240 = £36

Answer: £36 ✨
\`\`\`

### Method 2: Use Fractions (The Traditional Way)
\`\`\`
Example: Find 15% of £240

Step 1: Write as fraction: 15/100
Step 2: Multiply: (15/100) × £240 = £36

Answer: £36 ✨
\`\`\`

### 🎯 Pro Tip
For common percentages, use shortcuts:
- **50%** → Divide by 2
- **25%** → Divide by 4
- **10%** → Divide by 10
- **1%** → Divide by 100

### 🎮 Practice Challenge
**Find 20% of £85**

<details>
<summary>💡 Show Answer</summary>

Method 1: 0.20 × £85 = **£17**
Method 2: (20/100) × £85 = **£17**
</details>

---

## 📚 Chapter 3: Percentage Increase & Decrease

This is where percentages get REALLY useful! 🚀

### Percentage INCREASE
\`\`\`
Formula: New Value = Original × (100 + increase%) / 100

Multiplier Method:
New Value = Original × 1.[increase%]

Example: A £200 item increases by 15%
New price = £200 × 1.15 = £230 ✅
\`\`\`

### Percentage DECREASE
\`\`\`
Formula: New Value = Original × (100 - decrease%) / 100

Multiplier Method:
New Value = Original × 0.[remaining%]

Example: A £80 jacket is reduced by 25%
Sale price = £80 × 0.75 = £60 ✅
(75% because 100% - 25% = 75%)
\`\`\`

### 🛍️ Real-World Example
**SALE! 30% OFF everything!**

Original price: £50 coat
Discount: 30%
Multiplier: 1 - 0.30 = 0.70
**Sale price: £50 × 0.70 = £35**

You save £15! 💰

---

## 📚 Chapter 4: Reverse Percentages

**REVERSE** means working BACKWARDS from the final amount!

### The Concept
\`\`\`
If you know the RESULT after a percentage change,
you can find the ORIGINAL amount!
\`\`\`

### The Method
\`\`\`
Example: After a 20% increase, a price is £144.
What was the original price?

Step 1: Find the multiplier
  20% increase → multiplier = 1.20

Step 2: Set up equation
  Original × 1.20 = £144

Step 3: Divide to find original
  Original = £144 ÷ 1.20 = £120 ✨
\`\`\`

### 🎮 Challenge Problem
**After a 40% discount, an item costs £48. What was the original price?**

<details>
<summary>💡 Show Solution</summary>

40% discount means you pay 60% (100% - 40%)
Multiplier = 0.60

Original × 0.60 = £48
Original = £48 ÷ 0.60 = **£80** ✅
</details>

---

## 📚 Chapter 5: Compound Interest

This is how money GROWS in savings accounts! 📈

### The Formula
\`\`\`
A = P(1 + r/100)^t

Where:
A = Final amount
P = Principal (starting amount)
r = Interest rate (%)
t = Time (years)
\`\`\`

### Step-by-Step Example
\`\`\`
You invest £1000 at 5% compound interest for 3 years

Step 1: Identify values
  P = £1000
  r = 5
  t = 3

Step 2: Calculate multiplier
  1 + 5/100 = 1.05

Step 3: Apply formula
  A = 1000 × (1.05)³
  A = 1000 × 1.157625
  A = £1157.63 ✨

You earned £157.63 in interest! 💰
\`\`\`

### Why "Compound"?
Because you earn **interest on your interest**!
- Year 1: Interest on £1000
- Year 2: Interest on £1050 (including year 1 interest!)
- Year 3: Interest on £1102.50 (including all previous interest!)

---

## 🌟 Real-World Applications

### Where You'll Use Percentages:

💰 **Finance:**
- Bank interest rates
- Credit card APR
- Savings accounts

🛍️ **Shopping:**
- Sales and discounts
- VAT (20% in UK)
- Price comparisons

📊 **Work & School:**
- Exam scores
- Pay rises
- Statistics

💪 **Health:**
- Body fat percentage
- Success rates
- Nutrition labels

---

## 🎯 Key Takeaways

✅ Percent means "per hundred" - it's parts of 100
✅ Convert to decimal by dividing by 100
✅ For increase: multiply by (1 + rate)
✅ For decrease: multiply by (1 - rate)
✅ Reverse percentages: divide by the multiplier
✅ Compound interest grows exponentially!

---

## 📝 Practice Problems

1. Find 35% of £180
2. A £50 item is reduced by 30%. What's the new price?
3. After a 25% increase, a salary is £37,500. What was the original salary?
4. Calculate compound interest: £500 at 4% for 2 years
5. A shop adds 20% VAT to all prices. If the final price is £96, what was the pre-VAT price?

**Ready to test your skills? Take the quiz to earn your Percentages Master badge!** 🏅
`,
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
          content: `# 🚀 Mastering Standard Form: From Atoms to Galaxies

> **"Standard form lets us write incredibly large and tiny numbers simply!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🔢 Convert between standard form and ordinary numbers
- ✨ Perform calculations with standard form
- 🌌 Apply standard form to astronomical distances
- ⚛️ Use standard form for atomic measurements
- 📊 Understand when and why standard form is essential

**Estimated Time:** 50 minutes | **Difficulty:** Higher | **XP Reward:** 250 ⭐

---

## 📚 Chapter 1: What IS Standard Form?

Standard form (also called **scientific notation**) is a way to write very large or very small numbers neatly!

### The Format
\`\`\`
A × 10^n

Where:
- A is a number between 1 and 10 (1 ≤ A < 10)
- n is an integer (the power of 10)
\`\`\`

### Why Do We Need It?
**Compare these:**
- Normal: 150,000,000,000,000 km
- Standard: 1.5 × 10¹⁴ km ✨

Much easier to read and work with!

### 🎮 Quick Check
**Which is easier to understand?**
- A) 0.00000000056 meters
- B) 5.6 × 10⁻¹⁰ meters

<details>
<summary>💡 Show Answer</summary>

**B) 5.6 × 10⁻¹⁰ meters** - Much clearer to see it's a very tiny number!
</details>

---

## 📚 Chapter 2: Converting TO Standard Form

### For LARGE Numbers (Move decimal LEFT)
\`\`\`
Example: Write 345,000 in standard form

Step 1: Place decimal after first digit
  3.45000

Step 2: Count places moved
  Moved 5 places LEFT

Step 3: Write in standard form
  3.45 × 10⁵ ✨
\`\`\`

### For SMALL Numbers (Move decimal RIGHT)
\`\`\`
Example: Write 0.0078 in standard form

Step 1: Move decimal to after first non-zero digit
  7.8

Step 2: Count places moved
  Moved 3 places RIGHT

Step 3: Write in standard form (negative power!)
  7.8 × 10⁻³ ✨
\`\`\`

### 🎯 Quick Rule
- **Big numbers** → Positive powers
- **Small numbers** (decimals) → Negative powers

### 🎮 Practice Time
**Convert 5,280,000 to standard form**

<details>
<summary>💡 Show Answer</summary>

Move decimal 6 places left:
**5.28 × 10⁶** ✅
</details>

---

## 📚 Chapter 3: Converting FROM Standard Form

This is the reverse process!

### Large Numbers (Positive Powers)
\`\`\`
Example: 4.7 × 10⁶ = ?

Step 1: The power tells you how many places
  Power = 6

Step 2: Move decimal 6 places RIGHT
  4.700000 → 4,700,000

Answer: 4,700,000 ✨
\`\`\`

### Small Numbers (Negative Powers)
\`\`\`
Example: 2.3 × 10⁻⁴ = ?

Step 1: Negative power = move LEFT
  Power = -4

Step 2: Move decimal 4 places LEFT (add zeros!)
  0.00023

Answer: 0.00023 ✨
\`\`\`

---

## 📚 Chapter 4: Calculations with Standard Form

### ✖️ MULTIPLICATION (Add the Powers!)
\`\`\`
Example: (2.5 × 10⁴) × (3 × 10²)

Step 1: Multiply the numbers
  2.5 × 3 = 7.5

Step 2: ADD the powers
  10⁴ × 10² = 10⁽⁴⁺²⁾ = 10⁶

Answer: 7.5 × 10⁶ ✨
\`\`\`

### ➗ DIVISION (Subtract the Powers!)
\`\`\`
Example: (8 × 10⁶) ÷ (4 × 10³)

Step 1: Divide the numbers
  8 ÷ 4 = 2

Step 2: SUBTRACT the powers
  10⁶ ÷ 10³ = 10⁽⁶⁻³⁾ = 10³

Answer: 2 × 10³ ✨
\`\`\`

### ➕ ADDITION/SUBTRACTION (Match the Powers First!)
\`\`\`
Example: 3.2 × 10⁵ + 4.7 × 10⁴

Step 1: Convert to SAME power
  4.7 × 10⁴ = 0.47 × 10⁵

Step 2: Add the numbers
  3.2 + 0.47 = 3.67

Answer: 3.67 × 10⁵ ✨
\`\`\`

### 🎮 Challenge
**Calculate: (6 × 10⁷) × (2 × 10³)**

<details>
<summary>💡 Show Solution</summary>

Numbers: 6 × 2 = 12
Powers: 10⁷ × 10³ = 10¹⁰

Result: 12 × 10¹⁰

**But wait!** 12 is NOT between 1 and 10!
Adjust: 12 = 1.2 × 10¹

**Final Answer: 1.2 × 10¹¹** ✅
</details>

---

## 🌌 Chapter 5: Real-World Applications

### Astronomy 🌠
\`\`\`
Distance to nearest star: 4.2 × 10¹³ km
Age of universe: 1.4 × 10¹⁰ years
Number of stars in galaxy: ~2 × 10¹¹
\`\`\`

### Atomic Physics ⚛️
\`\`\`
Mass of electron: 9.11 × 10⁻³¹ kg
Diameter of atom: 1 × 10⁻¹⁰ m
Speed of light: 3 × 10⁸ m/s
\`\`\`

### Computing 💻
\`\`\`
1 Terabyte = 1 × 10¹² bytes
Processing speed: 3.5 × 10⁹ operations/second
\`\`\`

### Economics 💰
\`\`\`
UK National Debt: ~2 × 10¹² pounds
World population: 8 × 10⁹ people
\`\`\`

---

## 🎯 Key Takeaways

✅ Standard form = A × 10ⁿ where 1 ≤ A < 10
✅ Large numbers → positive powers
✅ Small numbers → negative powers
✅ Multiply → ADD the powers
✅ Divide → SUBTRACT the powers
✅ Add/Subtract → match powers first!

---

## 📝 Practice Problems

1. Write 5,280,000 in standard form
2. Write 0.000091 in standard form
3. Calculate: (2.5 × 10⁴) × (3 × 10²)
4. Calculate: (8 × 10⁶) ÷ (4 × 10³)
5. The distance to the nearest star is 4.2 × 10¹³ km. Light travels at 3 × 10⁸ m/s. How long does light take to reach us?

**Ready to master the universe of numbers? Take the quiz!** 🏅
`,
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
          content: `# ⚖️ Solving Linear Equations: The Balancing Act

> **"Algebra is just a puzzle - keep things balanced, and you'll find the missing piece!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🔍 Solve linear equations with one unknown
- 🔄 Rearrange complicated formulae to change the subject
- 🧩 Tackle equations with brackets and fractions
- 🏗️ Apply algebra to solve real-world problems

**Estimated Time:** 40 minutes | **Difficulty:** Foundation | **XP Reward:** 150 ⭐

---

## 📚 Chapter 1: The Golden Rule

**"Whatever you do to one side, you MUST do to the other!"**

Think of an equation like a balanced scale. ⚖️

### Example 1: Basic Solving
\`\`\`
Solve: 3x + 7 = 22

Step 1: Get '3x' by itself (Subtract 7 from both sides)
   3x + 7 - 7 = 22 - 7
   3x = 15

Step 2: Get 'x' by itself (Divide by 3)
   3x ÷ 3 = 15 ÷ 3
   x = 5

Check: 3(5) + 7 = 15 + 7 = 22 ✅
\`\`\`

### Example 2: Unknowns on Both Sides
\`\`\`
Solve: 5x - 8 = 2x + 10

Step 1: Move smaller x term (Subtract 2x)
   3x - 8 = 10

Step 2: Move number term (Add 8)
   3x = 18

Step 3: Solve for x (Divide by 3)
   x = 6 ✨
\`\`\`

### 🎮 Quick Check
**What is the first step to solve 4x + 5 = 17?**
- A) Divide by 4
- B) Subtract 5
- C) Add 5

<details>
<summary>💡 Show Answer</summary>

**B) Subtract 5** - Always deal with the added/subtracted numbers first!
Then 4x = 12, so x = 3.
</details>

---

## 📚 Chapter 2: Equations with Brackets

**Standard Strategy:** Expand first, THEN solve!

### Review: Expanding Brackets
\`\`\`
2(x + 3) means 2 × x AND 2 × 3
So: 2x + 6
\`\`\`

### Walkthrough
\`\`\`
Solve: 3(2x - 1) = 4(x + 2)

Step 1: Expand BOTH sides
   6x - 3 = 4x + 8

Step 2: Subtract smaller x term (4x)
   2x - 3 = 8

Step 3: Add 3 to both sides
   2x = 11

Step 4: Divide by 2
   x = 5.5 ✨
\`\`\`

---

## 📚 Chapter 3: Equations with Fractions

**Strategy:** Multiply to destroy the denominator! 🔨

### Example: Simple Fraction
\`\`\`
Solve: (x + 2) / 3 = 5

Step 1: Multiply both sides by 3
   x + 2 = 15

Step 2: Subtract 2
   x = 13 ✅
\`\`\`

### Example: Tricky Fractions
\`\`\`
Solve: x/4 + x/6 = 5

Step 1: Find Common Denominator for 4 and 6 (It's 12!)
   3x/12 + 2x/12 = 5

Step 2: Combine tops
   5x/12 = 5

Step 3: Multiply by 12
   5x = 60

Step 4: Divide by 5
   x = 12 ✨
\`\`\`

---

## 📚 Chapter 4: Rearranging Formulae

Changing the subject is just solving for a letter instead of a number!

### Level 1: Linear Rearranging
**Make x the subject of y = 3x + 2**
\`\`\`
1. Subtract 2:
   y - 2 = 3x

2. Divide by 3:
   x = (y - 2) / 3 ✅
\`\`\`

### Level 2: Squares and Roots
**Make r the subject of A = πr²**
\`\`\`
1. Divide by π:
   A / π = r²

2. Square root:
   r = √(A / π) ✅
\`\`\`

---

## 🌍 Real-World Applications

### Where is Algebra Used?
- 🏗️ **Engineering:** Calculating loads and stresses
- 💸 **Finance:** Working out loan repayments
- 🚗 **Physics:** Speed, distance, time problems
- 🧪 **Chemistry:** balancing chemical equations

### Challenge Problem
A mobile plan costs £20/month plus £0.10 per minute.
The bill is £35. How many minutes (m) were used?

\`\`\`
Equation: 20 + 0.10m = 35
Step 1: 0.10m = 15  (Subtract 20)
Step 2: m = 150     (Divide by 0.10)

Answer: 150 minutes! 📞
\`\`\`

---

## 🎯 Key Takeaways

✅ **Balance is Key:** Do the same to both sides
✅ **Order:** Expand brackets → Clear fractions → Collect methods → Solve
✅ **Check:** Always put your answer back into the equation
✅ **Rearranging:** Same rules apply, just with letters!

---

## 📝 Practice Problems

1. Solve: 5x - 3 = 17
2. Solve: 3(x - 2) = 21
3. Solve: (2x + 1)/5 = 3
4. Make t the subject: v = u + at
5. Solve: 2x + 4 = 5x - 11

**Ready to balance some equations? Take the quiz!** 🏅
`,
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
          content: `# 🎢 Quadratic Equations: The Power of Squares

> **"From throwing a ball to satellite dishes, quadratics describe the curves of our world!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🧩 Solve quadratics by **factoring** (the puzzle method)
- 🧪 Use the **Quadratic Formula** (the universal tool)
- 🔲 **Complete the Square** (for vertex finding)
- 📉 Understand **graphs** of quadratic functions
- 🔍 Use the **discriminant** to predict solutions

**Estimated Time:** 60 minutes | **Difficulty:** Higher | **XP Reward:** 300 ⭐

---

## 📚 Chapter 1: What is a Quadratic?

A quadratic is any equation where the highest power is **x²** (x squared).

### Standard Form
\`\`\`
ax² + bx + c = 0
\`\`\`
Where 'a' cannot be zero.

### The Shape: Parabola ∪
Every quadratic graph makes a U-shape called a **parabola**.
- If a > 0: Happy face ∪ (minimum point)
- If a < 0: Sad face ∩ (maximum point)

---

## 📚 Chapter 2: Solving by Factoring

**Goal:** Turn addition into multiplication!
If A × B = 0, then either A=0 or B=0.

### Example 1: Simple Factoring
\`\`\`
Solve: x² + 5x + 6 = 0

Step 1: Find two numbers that:
   - Multiply to make 6
   - Add to make 5
   Thinking... 2 and 3! (2×3=6, 2+3=5)

Step 2: Put into brackets
   (x + 2)(x + 3) = 0

Step 3: Solve each bracket
   x + 2 = 0  →  x = -2
   x + 3 = 0  →  x = -3

Answers: x = -2, x = -3 ✨
\`\`\`

### Example 2: Negative Numbers
\`\`\`
Solve: x² - 7x + 12 = 0

Multiply to +12, Add to -7?
Must be two negative numbers! -3 and -4.

Factors: (x - 3)(x - 4) = 0
Answers: x = 3, x = 4 ✅
\`\`\`

(Because -3 × -4 = +12)

---

## 📚 Chapter 3: The Quadratic Formula

**The Universal Hammer** 🔨 - Works for ANY quadratic!

### The Formula
\`\`\`
      -b ± √(b² - 4ac)
x = ───────────────────
              2a
\`\`\`

### Walkthrough
\`\`\`
Solve: 2x² + 3x - 2 = 0

1. Identify: a=2, b=3, c=-2

2. Substitute:
   x = (-3 ± √(3² - 4(2)(-2))) / (2×2)

3. Simplify inside root:
   3² = 9
   -4(2)(-2) = +16
   So: √(9 + 16) = √25 = 5

4. Solve both cases:
   x = (-3 + 5) / 4  = 2/4 = 0.5
   x = (-3 - 5) / 4  = -8/4 = -2

Answers: x = 0.5, x = -2 ✨
\`\`\`

---

## 📚 Chapter 4: Completing the Square

Useful for finding the turning point (vertex) of the graph!

### The Method
\`\`\`
Objective: Turn x² + bx into (x + b/2)² - ...

Example: x² + 6x + 5 = 0

Step 1: Halve the coefficient of x (6 ÷ 2 = 3)
   (x + 3)²

Step 2: Subtract the square of that number (3² = 9)
   (x + 3)² - 9

Step 3: Don't forget the original constant (+5)
   (x + 3)² - 9 + 5 = 0
   (x + 3)² - 4 = 0

Step 4: Solve
   (x + 3)² = 4
   x + 3 = ±√4 = ±2
   x = -3 ± 2
   
   x = -1 or x = -5 ✅
\`\`\`

---

## 📚 Chapter 5: The Discriminant

The part UNDER the square root sign tells us about the answers!

\`\`\`
Discriminant = b² - 4ac
\`\`\`

- **Positive (> 0):** Two real solutions (graph crosses x-axis twice)
- **Zero (= 0):** One repeated solution (graph touches x-axis once)
- **Negative (< 0):** No real solutions (graph never touches x-axis)

### 🎮 Quick Check
**For x² + 4x + 5, how many solutions?**

<details>
<summary>💡 Show Answer</summary>

b² - 4ac
4² - 4(1)(5)
16 - 20 = **-4**
Negative discriminant means **NO real solutions**!
</details>

---

## 🌍 Real-World Applications

### Projectiles 🚀
When you throw a ball, its height (h) over time (t) is quadratic!
h = -5t² + 20t + 2

### Business 💰
Profit curves are often quadratic. Finding the maximum point tells you the best price to charge!

### Optimization 📦
Finding the largest area you can enclose with a certain amount of fence.

---

## 📝 Practice Problems

1. Solve by factoring: x² - 8x + 15 = 0
2. Use the quadratic formula: 3x² - 5x - 2 = 0
3. Complete the square: x² + 4x - 1 = 0
4. Find the discriminant of: 2x² + 3x + 5 = 0
5. A ball is thrown upward. Height h = 20t - 5t². When does it hit the ground (h=0)?

**Ready to find some roots? Take the quiz!** 🏅
`,
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
    },
    {
      id: "statistics",
      name: "Statistics and Probability",
      studyMaterials: [
        {
          id: "data-handling",
          title: "Data Handling and Averages",
          content: `# 📊 Data Handling: Making Sense of Numbers

> **"Statistics are like a camera - they help us take a snapshot of reality!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 📉 Calculate the **Mean, Median, Mode, and Range**
- 📋 Interpret frequency tables
- 📊 Create and understand charts (Bar, Pie, Scatter)
- 🔎 Compare different sets of data like a pro

**Estimated Time:** 50 minutes | **Difficulty:** Foundation | **XP Reward:** 200 ⭐

---

## 📚 Chapter 1: The Three M's (And an R!)

These are the "Averages" (and one measure of spread).

### 1. MEAN (The "Mean"est One) 😠
**Add them all up, Divide by how many.**
\`\`\`
Data: 2, 5, 7, 8, 3
Sum: 2 + 5 + 7 + 8 + 3 = 25
Count: 5 numbers
Mean: 25 ÷ 5 = 5 ✨
\`\`\`

### 2. MEDIAN (The Middle One) 🛣️
**Order them first! Then find the middle.**
\`\`\`
Data: 2, 3, 5, 7, 8
Median = 5 (It's right in the middle!)
\`\`\`
*If there are two in the middle, add them and divide by 2.*

### 3. MODE (The Most Popular) 🏆
**The one that appears the MOST.**
\`\`\`
Data: 2, 3, 3, 5, 7
Mode = 3 (It appears twice!)
\`\`\`

### 4. RANGE (The Spread) ↔️
**Biggest - Smallest.**
\`\`\`
Data: 2, 3, 5, 7, 8
Range: 8 - 2 = 6 ✨
\`\`\`

---

## 📚 Chapter 2: Frequency Tables

When you have LOTS of data, we group it!

### Simple Frequency Table
| Score | Frequency (How many people) | Total (Score × Freq) |
| :---: | :---: | :---: |
| 1 | 3 | 1 × 3 = 3 |
| 2 | 5 | 2 × 5 = 10 |
| 3 | 7 | 3 × 7 = 21 |
| 4 | 2 | 4 × 2 = 8 |
| **Total** | **17 people** | **42 points** |

**Mean Calculation:**
Total Points ÷ Total People
42 ÷ 17 = **2.47** ✨

### 🎮 Quick Check
**If 5 people score 10, what is the total for that row?**
- A) 15
- B) 50
- C) 10

<details>
<summary>💡 Show Answer</summary>

**B) 50** - Because 5 people × 10 points each = 50.
</details>

---

## 📚 Chapter 3: Grouped Data

When data is continuous (like height), we use groups!

| Height (cm) | Frequency | Midpoint | Calculation |
| :---: | :---: | :---: | :---: |
| 150 - 160 | 5 | 155 | 5 × 155 = 775 |
| 160 - 170 | 8 | 165 | 8 × 165 = 1320 |
| 170 - 180 | 3 | 175 | 3 × 175 = 525 |

**The Trick:** We don't know exact heights, so use the **MIDPOINT**!
Total Estimate = 775 + 1320 + 525 = 2620
Mean Estimate = 2620 ÷ 16 = **163.75 cm** ✨

---

## 📚 Chapter 4: Charts and Graphs

A picture paints a thousand numbers! 🎨

### 📊 Bar Charts
- Best for: **Categories** (e.g., Favourite Colour)
- Rule: Gaps between bars!

### 📈 Histograms
- Best for: **Continuous Data** (e.g., Height, Time)
- Rule: NO gaps between bars! Area represents frequency.

### 🥧 Pie Charts
- Best for: **Proportions** (Parts of a whole)
- Full circle = 360°
- Formula: (Frequency ÷ Total) × 360°

### 📉 Scatter Graphs
- Best for: **Relationships** (Correlation)
- Positive Correlation: Both go UP ↗️
- Negative Correlation: One UP, one DOWN ↘️

---

## 🎯 Key Takeaways

✅ **Mean:** Add and Divide
✅ **Median:** Order and Find Middle
✅ **Mode:** Most Common
✅ **Range:** Biggest - Smallest
✅ **Frequency Tables:** Multiply Score × Frequency first!
✅ **Correlation:** Describes the relationship between two things

---

## 📝 Practice Problems

1. Find the mean, median, mode, and range of: 4, 7, 2, 9, 5, 7, 3
2. Calculate the mean from a frequency table where total frequency is 20 and total score is 140.
3. Determine the midpoint of the group 20 < x ≤ 30.
4. If a pie chart sector is 90°, what fraction of the data is that?
5. Describe the correlation: As temperature goes UP, ice cream sales go UP.

**Ready to analyze some data? Take the quiz!** 🏅
`,
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
          content: `# 🔢 Place Value: The DNA of Numbers

> **"Every digit has a place, and every place has a value!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🏠 Understand **Place Value** in whole numbers and decimals
- 📏 **Order** numbers from smallest to largest
- 🎯 **Round** numbers to the nearest 10, 100, or decimal place
- 🌍 Use place value to solve **money and measurement** problems

**Estimated Time:** 30 minutes | **Difficulty:** Foundation | **XP Reward:** 100 ⭐

---

## 📚 Chapter 1: The Place Value Chart

Every position is 10x bigger than the one to its right!

| Thousands | Hundreds | Tens | Units | . | Tenths | Hundredths | Thousandths |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1000 | 100 | 10 | 1 | . | 0.1 | 0.01 | 0.001 |
| **3** | **4** | **2** | **7** | . | **5** | **8** | **6** |

### What is it worth?
- The **4** is worth **400**
- The **2** is worth **20**
- The **8** is worth **0.08** (8 hundredths)

### 🎮 Quick Check
**What is the value of the 5 in 12.53?**
- A) 50
- B) 5
- C) 0.5

<details>
<summary>💡 Show Answer</summary>

**C) 0.5** (or 5 tenths) - It's the first digit after the decimal point!
</details>

---

## 📚 Chapter 2: Ordering Numbers

**Rule of Thumb:** Compare columns from Left to Right!

### Example: Compare 3.42 and 3.45
1. **Units:** Both are 3 (Match)
2. **Tenths:** Both are 4 (Match)
3. **Hundredths:** 2 vs 5... **5 is bigger!**

So: **3.45 > 3.42** ✨

### ⚠️ Common Trap!
Which is bigger: **0.5** or **0.35**?
- Add a zero to match lengths: 0.50 vs 0.35
- 50 is bigger than 35!
- So **0.5 > 0.35** ✅

---

## 📚 Chapter 3: Rounding Numbers

**The Magic Rule:**
- **5 or more?** Let it SOAR! 📈 (Round Up)
- **4 or less?** Let it REST! 📉 (Stay same)

### Example 1: Round 45.67 to 1 decimal place
1. Look at the **1st decimal digit** (6).
2. Look at the neighbor to the right (7).
3. 7 is "5 or more", so **Round UP**.
4. 6 becomes 7.

Answer: **45.7** ✨

### Example 2: Round 342 to the nearest 10
1. Look at **Tens** digit (4).
2. Look at neighbor (2).
3. 2 is "4 or less", so **Stay Same**.
4. Replace units with zero.

Answer: **340** ✨

---

## 🌍 Real-World Applications

### 💰 Money
- **£12.50** means 1 ten, 2 pounds, and 50 pence
- Comparing prices: £1.50 is MORE than £1.05

### 📏 Measurement
- **1.5m** = 150cm
- Precision matters when building bridges!

---

## 🎯 Key Takeaways

✅ **Place Value:** Columns get 10x smaller as you go right
✅ **Comparing:** Start from the left-most column
✅ **Decimals:** 0.5 is BIGGER than 0.35
✅ **Rounding:** "5 or more, let it soar!"

---

## 📝 Practice Problems

1. Write the value of the 7 in 372.
2. Order these: 0.5, 0.05, 0.55
3. Round 12.85 to 1 decimal place.
4. Round 549 to the nearest 100.
5. Which is cheaper: £1.25 or £1.20?

**Ready to know your place? Take the quiz!** 🏅
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
          content: `# ➕ The Four Operations: Maths Superpowers

> **"Add, Subtract, Multiply, Divide - the foundation of everything!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- ➕ Add and Subtract decimals perfectly using column methods
- ✖️ Multiply large numbers confidently
- ➗ Divide like a pro (Bus Stop method!)
- 🔢 Master the **Order of Operations (BIDMAS)**

**Estimated Time:** 40 minutes | **Difficulty:** Foundation | **XP Reward:** 150 ⭐

---

## 📚 Chapter 1: Addition & Subtraction

**GOLDEN RULE: LiNE UP THE DOTS!** ⚫

### Example: 12.5 + 3.75
\`\`\`
   1 2 . 5 0  <-- Add a 'ghost zero'
+  0 3 . 7 5
-------------
   1 6 . 2 5 ✨
\`\`\`

### Example: 5 - 1.2
\`\`\`
   4      1
   5 . 0  <-- Borrow from the 5
-  1 . 2
----------
   3 . 8 ✨
\`\`\`

---

## 📚 Chapter 2: Multiplication

**Grid Method or Column Method? Both work!**

### Example: 23 × 4
\`\`\`
   2 3
×    4
-------
   1 2  (3 × 4)
   8 0  (20 × 4)
-------
   9 2 ✨
\`\`\`

**Tip:** If multiplying decimals (e.g., 0.2 × 0.3), ignore the decimals first (2×3=6), then count the decimal places! (0.06)

---

## 📚 Chapter 3: Division

**All aboard the Bus Stop!** 🚌

### Example: 96 ÷ 3
\`\`\`
     3 2
   ┌─────
 3 │ 9 6

Step 1: How many 3s in 9? (3)
Step 2: How many 3s in 6? (2)

Answer: 32 ✨
\`\`\`

### Example: 75 ÷ 5
\`\`\`
     1 5
   ┌─────
 5 │ 7 5

1. 3s in 7? (1, remainder 2)
2. Carry the 2 to make 25.
3. 3s in 25? (5)

Answer: 15 ✨
\`\`\`

---

## 📚 Chapter 4: BIDMAS (Order of Operations)

Don't just go left-to-right! Follow the code!

1. **B**rackets ( )
2. **I**ndices (Powers x²)
3. **D**ivision ÷
4. **M**ultiplication ×
5. **A**ddition +
6. **S**ubtraction -

### Example: 3 + 4 × 2
❌ Wrong: 3+4=7, 7×2= **14**
✅ Right: Multiply first! 4×2=8. Then add. 3+8= **11**

### 🎮 Quick Check
**Calculate: 10 - 2 × 3**

<details>
<summary>💡 Show Answer</summary>

Multiplication first!
2 × 3 = 6
10 - 6 = **4** ✅
</details>

---

## 🎯 Key Takeaways

✅ **Add/Sub:** Line up the decimal points
✅ **Multiply:** Use grid or column, check magnitude
✅ **Divide:** Use bus stop, carry remainders
✅ **BIDMAS:** Multiplication before Addition!

---

## 📝 Practice Problems

1. Calculate: 145.6 + 67.25
2. Calculate: 54 - 28.5
3. Calculate: 12 × 15
4. Calculate: 108 ÷ 4
5. Calculate: 5 + 2 × (3 + 1)

**Ready to calculate? Take the quiz!** 🏅
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
