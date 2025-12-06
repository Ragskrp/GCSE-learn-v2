
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

const year10CombinedScience = {
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
                    content: `# 🔬 Cell Structure: The Building Blocks of Life

> **"You are made of 37.2 TRILLION cells. Let's meet them!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🏰 Identify the main parts of **Animal and Plant cells**
- ⚙️ Explain the **function** of each organelle
- 🦠 Compare **Prokaryotic** (bacteria) and **Eukaryotic** cells
- 📐 Use **microscopy calculations** like a pro

**Estimated Time:** 50 minutes | **Difficulty:** Foundation | **XP Reward:** 150 ⭐

---

## 📚 Chapter 1: Animal Cells 🦁

Animal cells are **Eukaryotic** (they have a nucleus). They have 5 main parts:

### The Fab 5 Organelles
1. **Nucleus** 🧠
   - **Job:** The "Brain". Controls the cell and holds DNA.
2. **Cytoplasm** 💧
   - **Job:** The "Jelly". Where chemical reactions happen.
3. **Cell Membrane** 🛡️
   - **Job:** The "Gatekeeper". Controls what goes in and out.
4. **Mitochondria** ⚡
   - **Job:** The "Powerhouse". Where energy is released (respiration).
5. **Ribosomes** 🏗️
   - **Job:** The "Factory". Where proteins are made.

### 🎮 Quick Check
**Which organelle releases energy?**
- A) Nucleus
- B) Mitochondria
- C) Ribosome

<details>
<summary>💡 Show Answer</summary>

**B) Mitochondria** - The Powerhouse! ⚡
</details>

---

## 📚 Chapter 2: Plant Cells 🌿

Plant cells have everything animal cells have, **PLUS 3 Extras!**

### The "Plant-Only" Trio
1. **Cell Wall** 🧱
   - **Job:** Support. Made of cellulose (strong fiber).
2. **Chloroplasts** ☀️
   - **Job:** Photosynthesis. Green blobs that make food from light.
3. **Permanent Vacuole** 🕳️
   - **Job:** Storage. Filled with cell sap to keep the cell firm.

### ⚡ Visual Memory Aid
**"Plants need Wall-to-wall Vacuoles and Chloride!"** (Wall, Vacuole, Chloroplast)

---

## 📚 Chapter 3: Eukaryotic vs Prokaryotic

### Eukaryotic (You, Plants, Fungi) 🐘
- **Has a Nucleus?** YES ✅
- **Size:** Large (10-100 μm)
- **Complex?** Very.

### Prokaryotic (Bacteria) 🦠
- **Has a Nucleus?** NO ❌ (DNA floats freely)
- **Size:** Tiny (1-5 μm)
- **Plasmids:** Small rings of extra DNA
- **Flagellum:** Tail for swimming

### 🎮 Quick Check
**Is a bacteria cell Prokaryotic or Eukaryotic?**

<details>
<summary>💡 Show Answer</summary>

**Prokaryotic** ("Pro" rhymes with "No" - No nucleus!)
</details>

---

## 📚 Chapter 4: Microscopy Math

**The Magic Triangle:**
\`\`\`
      I
    -----
    A × M
\`\`\`
- **I** = Image Size (what you measure with a ruler)
- **A** = Actual Size (real size)
- **M** = Magnification

### Example Calculation
An image of a cell is **50mm** wide. The magnification is **x500**.
What is the real size?

\`\`\`
Formula: A = I ÷ M
Calculation: 50 ÷ 500 = 0.1 mm ✨
\`\`\`

### Unit Conversion
- 1 mm = 1000 μm (micrometers)
- 0.1 mm = 100 μm

---

## 🌍 Cell Specialization

Cells adapt for their jobs!

| Cell | Adaptation | Function |
| :--- | :--- | :--- |
| **Sperm** 🏎️ | Tail & lots of mitochondria | Swim to egg |
| **Nerve** ⚡ | Long axon | Carry signals far |
| **Muscle** 💪 | Proteins slide over each other | Contraction |
| **Root Hair** 🌱 | Large surface area | Absorb water |

---

## 🎯 Key Takeaways

✅ **Animal:** Nucleus, Cytoplasm, Membrane, Mitochondria, Ribosomes
✅ **Plant:** ALL above + Wall, Vacuole, Chloroplasts
✅ **Prokaryotic:** No nucleus (Bacteria)
✅ **Magnification:** I = A × M

---

## 📝 Practice Questions

1. Name three organelles found in plant cells but not animal cells.
2. Calculate magnification if actual size is 0.05mm and image size is 25mm.
3. Explain why plant cells have cell walls but animal cells don't.
4. What is the function of a ribosome?
5. Convert 3mm into micrometers (μm).

**Ready to get under the microscope? Take the quiz!** 🏅
`,
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
                    content: `# 🧬 Cell Division & Genetics: The Code of Life

> **"You started as one cell. Now you are trillions. How?"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🔄 Understand the **Cell Cycle** and **Mitosis**
- 🎲 Explain **Meiosis** (making sex cells)
- 🧬 Describe **DNA structure** (Double Helix)
- 👪 Predict traits using **Genetic Crosses**

**Estimated Time:** 60 minutes | **Difficulty:** Higher | **XP Reward:** 250 ⭐

---

## 📚 Chapter 1: Mitosis (Cloning) 👯

**Purpose:** Growth and Repair.
**Result:** Two IDENTICAL cells.

### The Stages (PMAT)
1. **Prophase:** Chromosomes fatten up and become visible.
2. **Metaphase:** Chromosomes line up in the **M**iddle.
3. **Anaphase:** Chromosomes are pulled **A**part.
4. **Telophase:** **T**wo new nuclei form.

Then the cell splits (Cytokinesis).

---

## 📚 Chapter 2: Meiosis (Mixing) 🎲

**Purpose:** Making Gametes (Sperm & Egg).
**Result:** Four DIFFERENT cells (Haploid - half DNA).

### Key Differences
| Mitosis | Meiosis |
| :--- | :--- |
| **1** Division | **2** Divisions |
| **2** Cells made | **4** Cells made |
| **Identical** (Clones) | **Different** (Variation) |
| Diploid (46) | Haploid (23) |

### 🎮 Quick Check
**Which process heals a cut on your finger?**
- A) Mitosis
- B) Meiosis

<details>
<summary>💡 Show Answer</summary>

**A) Mitosis** - Repairing body cells requires identical copies!
</details>

---

## 📚 Chapter 3: DNA Structure 🧬

DNA is a polymer made of two strands twisted into a **Double Helix**.

### The Alphabet of Life
Four bases pair up perfectly:
- **A** pairs with **T** (Apple in the Tree)
- **C** pairs with **G** (Car in the Garage)

### Gene vs Chromosome
- **Gene:** A small section of DNA (codes for 1 protein)
- **Chromosome:** A long coiled molecule of DNA
- **Genome:** ALL the genetic material of an organism

---

## 📚 Chapter 4: Inheritance 👪

We have two copies of every gene (one from Mum, one from Dad).

### Key Terms
- **Allele:** Different version of a gene (e.g., Blue vs Brown eye allele)
- **Dominant (B):** The boss. Shows up if present.
- **Recessive (b):** The shy one. Only shows if there are TWO.
- **Homozygous:** Same alleles (BB or bb)
- **Heterozygous:** Different alleles (Bb)

### Punnett Squares
**Cross:** Brown eyes (Bb) × Blue eyes (bb)

| | **b** | **b** |
| :---: | :---: | :---: |
| **B** | Bb (Brown) | Bb (Brown) |
| **b** | bb (Blue) | bb (Blue) |

**Result:** 50% Brown, 50% Blue.

---

## 📚 Chapter 5: Genetic Disorders

Sometimes the code has errors.

### Polydactyly (Extra Fingers)
- **Dominant** allele.
- You only need ONE parent to have it to pass it on.

### Cystic Fibrosis
- **Recessive** allele.
- You need TWO carriers (Cc) to have an affected child (cc).

### 🎮 Challenge
**Two carrier parents (Cc) have a child. Chance of Cystic Fibrosis?**

<details>
<summary>💡 Show Answer</summary>

Draw the square!
CC, Cc, Cc, cc
Only 'cc' has it.
**1 in 4 (25%)** chance.
</details>

---

## 🎯 Key Takeaways

✅ **Mitosis:** Growth, Identical, 2 cells
✅ **Meiosis:** Sex cells, Variation, 4 cells
✅ **DNA bases:** A-T and C-G
✅ **Dominant:** Capital letter (B), wins over recessive

---

## 📝 Practice Problems

1. What are the 4 stages of mitosis?
2. If a DNA strand has 20% A, what % is T? (Hint: They are equal!)
3. Explain why siblings don't look exactly identical (unless twins).
4. Draw a Punnett square for two Heterozygous parents (Bb × Bb).
5. Define "Genotype" and "Phenotype".

**Ready to decode your genes? Take the quiz!** 🏅
`,
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
                    content: `# ⚛️ Atomic Structure & The Periodic Table

> **"Everything you see, touch, and breathe is made of atoms. You are stardust!"**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 🏗️ Describe the **structure of an atom** (protons, neutrons, electrons)
- 📊 Understand how the **Periodic Table** is organized
- 🔗 Explain **Ionic, Covalent, and Metallic bonding**
- ⚖️ Calculate **Relative Atomic Mass** like a scientist

**Estimated Time:** 55 minutes | **Difficulty:** Foundation | **XP Reward:** 200 ⭐

---

## 📚 Chapter 1: Inside the Atom 🔬

Atoms are the Lego bricks of the universe. They have a tiny, heavy center (nucleus) and buzzing shells.

### Subatomic Particles Table
| Particle | Charge | Mass | Location |
| :--- | :--- | :--- | :--- |
| **Proton** 🔴 | +1 (Positive) | 1 | Nucleus |
| **Neutron** ⚪ | 0 (Neutral) | 1 | Nucleus |
| **Electron** ⚡ | -1 (Negative) | Very small (1/1840) | Shells |

### Use the PEN method!
For Sodium (Na): Mass = 23, Atomic No. = 11
- **P**rotons = 11 (Atomic No.)
- **E**lectrons = 11 (Same as Protons)
- **N**eutrons = 12 (Mass - Atomic No. -> 23 - 11)

### 🎮 Quick Check
**If an atom gains an electron, what charge does it become?**
- A) Positive
- B) Negative

<details>
<summary>💡 Show Answer</summary>

**B) Negative.** Electrons are negative, so gaining them adds a negative charge!
</details>

---

## 📚 Chapter 2: Electronic Configuration 🐚

Electrons live in shells/orbits. There are strict occupancy limits!

1. **1st Shell:** Max **2** electrons 🏠
2. **2nd Shell:** Max **8** electrons 🏢
3. **3rd Shell:** Max **8** electrons 🏢

### Examples to Draw
- **Carbon (6 electrons):** 2, 4
- **Sodium (11 electrons):** 2, 8, 1
- **Argon (18 electrons):** 2, 8, 8 (Full house! 🏰)

> **Pro Tip:** The number of electrons in the *outer* shell tells you the **Group Number**!

---

## 📚 Chapter 3: The Periodic Table 🗺️

It's not just a list; it's a map!

### The Layout
- **Groups (Columns):** Elements have similar reactions (families).
- **Periods (Rows):** Elements have the same number of shells.

### Meet the Families
1. **Group 1 (Alkali Metals) 💥:** Soft, very reactive with water. Reactivity **increases** down the group.
2. **Group 7 (Halogens) ☠️:** Toxic non-metals. Reactivity **decreases** down the group.
3. **Group 0 (Noble Gases) 👑:** Unreactive gases. They have full outer shells (happy atoms).

---

## 📚 Chapter 4: Chemical Bonding 🤝

Atoms bond to get a full outer shell (stability).

### 1. Ionic Bonding (Give & Take) 🎁
- **Who:** Metal + Non-metal
- **Action:** Metal gives electrons to non-metal.
- **Result:** Charged ions attract strongly.
- **Example:** Salt (NaCl).

### 2. Covalent Bonding (Sharing is Caring) 👐
- **Who:** Non-metal + Non-metal
- **Action:** Atoms share pairs of electrons.
- **Result:** Molecules.
- **Example:** Water (H₂O), Diamond.

### 3. Metallic Bonding (Sea of Electrons) 🌊
- **Who:** Metals only
- **Action:** Electrons float freely ("delocalized").
- **Result:** Conducts electricity and heat well.

---

## 📚 Chapter 5: Relative Atomic Mass (RAM) ⚖️

Some elements have twins (Isotopes) - same protons, different neutrons.
To find the average mass:

\`\`\`
      (Mass 1 × %1) + (Mass 2 × %2)
RAM = -----------------------------
                  100
\`\`\`

**Example:** Chlorine is 75% ³⁵Cl and 25% ³⁷Cl.
\`\`\`
Step 1: (35 × 75) = 2625
Step 2: (37 × 25) = 925
Step 3: 2625 + 925 = 3550
Step 4: 3550 ÷ 100 = 35.5
\`\`\`

---

## 🎯 Key Takeaways

✅ **Protons/Neutrons** in nucleus, **Electrons** in shells.
✅ **Group Number** = electrons in outer shell.
✅ **Ionic** (Transfer), **Covalent** (Share), **Metallic** (Sea).
✅ **Isotopes** have different neutron numbers.

---

## 📝 Practice Problems

1. Draw the electronic structure of Magnesium (12).
2. Why are Group 0 elements unreactive?
3. Calculate the RAM of Copper: 69% ⁶³Cu and 31% ⁶⁵Cu.
4. Describe the difference between Ionic and Covalent bonding.
5. Balance this equation: Fe + Cl₂ → FeCl₃

**Ready to react? Take the quiz!** 🧪
`,
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
                    content: `# 🚀 Forces and Motion: The Physics of Moving

> **"Nothing happens until something moves." - Albert Einstein**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 📏 Calculate **speed, velocity, and acceleration**
- 📈 Interpret **Distance-Time** and **Velocity-Time** graphs
- 🍎 Apply **Newton's Laws of Motion**
- 📉 Use the **Equations of Motion** (suvat)

**Estimated Time:** 60 minutes | **Difficulty:** Foundation | **XP Reward:** 250 ⭐

---

## 📚 Chapter 1: Speed vs Velocity 🏎️

What's the difference? Direction!

| Quantity | Definition | Scalar/Vector? | Unit |
| :--- | :--- | :--- | :--- |
| **Speed** | How fast (Distance / Time) | **Scalar** (Just size) | m/s |
| **Velocity** | Speed in a direction | **Vector** (Size + Direction) | m/s |
| **Acceleration**| Change in velocity / time | **Vector** | m/s² |

### Formulas
1. **Speed** = Distance ÷ Time
2. **Acceleration (a)** = (Final Velocity - Initial Velocity) ÷ Time
   - \`a = (v - u) / t\`

### 🎮 Quick Check
**If a car goes around a roundabout at constant speed, is its velocity changing?**
- A) No
- B) Yes

<details>
<summary>💡 Show Answer</summary>

**B) Yes!** Because the **direction** is changing, the velocity is changing (even if speed stays the same).
</details>

---

## 📚 Chapter 2: The Graphs 📊

### Distance-Time Graphs
- **Flat line:** Stopped 🛑
- **Straight slope:** Constant Speed 🏃
- **Steeper slope:** Faster 🐆
- **Gradient (Slope):** Equals the **Speed**.

### Velocity-Time Graphs
- **Flat line:** Constant Velocity (Cruise Control) 🚗
- **Slope:** Acceleration 📈
- **Down word slope:** Deceleration 📉
- **Area under graph:** Distance travelled.

---

## 📚 Chapter 3: Newton's Laws 🍎

Isaac Newton changed the game.

### Law 1: Inertia 💤
Objects are lazy. They keep doing what they're doing (resting or moving) until a force kicks them.
- **Example:** You fly forward when a car brakes suddenly.

### Law 2: F = ma 💥
Force depends on Mass and Acceleration.
- **F = Mass × Acceleration**
- Bigger mass = harder to move.
- More force = faster acceleration.

### Law 3: Action-Reaction 🔄
"For every action, there is an equal and opposite reaction."
- **Example:** A rocket pushes gas down -> Gas pushes rocket UP.

---

## 📚 Chapter 4: The Equations of Motion (SUVAT) 🧮

When acceleration is constant, use these power tools.

**Variables:**
- **s** = Displacement (distance)
- **u** = Initial velocity
- **v** = Final velocity
- **a** = Acceleration
- **t** = Time

**The Big Three:**
1. \`v = u + at\` (No 's')
2. \`s = ut + ½at²\` (No 'v')
3. \`v² = u² + 2as\` (No 't')

### Worked Example
A car accelerates from rest (**u=0**) at **2 m/s²** for **5 seconds**. How fast is it going?
- u = 0
- a = 2
- t = 5
- v = ?

Use eqn 1: \`v = 0 + (2 × 5) = 10 m/s\` 🏁

---

## 📚 Chapter 5: Forces in Action 🪁

### Terminal Velocity (The Skydiver Story)
1. **Jump:** Only gravity acts. Accelerate fast! ⬇️
2. **Fall:** Air resistance builds up. Acceleration slows. 💨
3. **Terminal Velocity:** Air Resistance = Gravity. Constant speed! ⚖️
4. **Parachute:** Air resistance shoots up. Decelerate to new, safe speed. 🪂

---

## 🎯 Key Takeaways

✅ **Scalar** = Magnitude only; **Vector** = Magnitude + Direction.
✅ **Gradient** of Distance-Time = Speed.
✅ **Area** of Velocity-Time = Distance.
✅ **F = ma** is the golden rule.
✅ **Terminal Velocity** happens when forces are balanced.

---

## 📝 Practice Problems

1. A runner does 100m in 10s. What is their speed?
2. Calculate the force needed to accelerate a 1000kg car at 3 m/s².
3. Explain Newton's 3rd Law using a swimmer as an example.
4. A ball drops (u=0, a=9.8). What is its velocity after 2 seconds?
5. Describe the forces on a skydiver at terminal velocity.

**Ready to accelerate your learning? Take the quiz!** 🏎️
`,
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
};

async function seedScience() {
    console.log('🔥 Starting Science Seeding...');

    try {
        // Write Year 10 Science
        console.log('📝 Seeding Year 10 Combined Science...');
        await setDoc(doc(db, 'subjects', 'science-10'), year10CombinedScience);

        console.log(`✅ Combined Science (Year 10) seeded successfully!`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}

seedScience();
