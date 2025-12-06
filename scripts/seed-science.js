
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
                    content: `# Cell Structure and Function

## Learning Objectives
- Identify the main parts of animal and plant cells
- Explain the function of each cell organelle
- Compare prokaryotic and eukaryotic cells
- Use microscopy calculations

## Animal Cell Structure

### Key Organelles and Functions:

**1. Nucleus**
- Controls cell activities and contains DNA
- Surrounded by nuclear membrane with pores
- Contains chromosomes made of DNA and proteins

**2. Cytoplasm**
- Jelly-like substance where chemical reactions occur
- Contains dissolved nutrients and waste products
- Site of many metabolic processes

**3. Cell Membrane**
- Controls what enters and leaves the cell
- Selectively permeable barrier
- Made of phospholipids and proteins

**4. Mitochondria**
- Site of aerobic respiration
- Releases energy from glucose
- More numerous in active cells (muscle, nerve)

**5. Ribosomes**
- Site of protein synthesis
- Found free in cytoplasm or attached to ER
- Made of RNA and proteins

## Plant Cell Structure

### Additional organelles in plant cells:

**1. Cell Wall**
- Made of cellulose fibers
- Provides structural support and protection
- Fully permeable to water and dissolved substances

**2. Chloroplasts**
- Contain chlorophyll for photosynthesis
- Convert light energy to chemical energy
- Found mainly in leaf cells

**3. Permanent Vacuole**
- Large fluid-filled space
- Maintains cell shape and stores substances
- Surrounded by tonoplast membrane

## Prokaryotic vs Eukaryotic Cells

### Prokaryotic Cells (Bacteria):
- No nucleus (DNA free in cytoplasm)
- No membrane-bound organelles
- Smaller (1-5 μm)
- Cell wall made of peptidoglycan
- Examples: bacteria, archaea

### Eukaryotic Cells (Animals, Plants, Fungi):
- Nucleus present with nuclear membrane
- Membrane-bound organelles
- Larger (10-100 μm)
- More complex internal structure
- Examples: animal, plant, fungal cells

## Microscopy and Magnification

### Magnification Calculation:
**Magnification = Image size ÷ Actual size**

### Types of Microscopes:
- **Light microscopes:** up to ×2000 magnification, can see living cells
- **Electron microscopes:** up to ×2,000,000 magnification, higher resolution

### Units of Measurement:
- 1 meter = 1000 millimeters (mm)
- 1 mm = 1000 micrometers (μm)
- 1 μm = 1000 nanometers (nm)

## Specialized Cells

### Examples of Cell Specialization:
- **Red blood cells:** no nucleus, biconcave shape for oxygen transport
- **Nerve cells:** long extensions for electrical signal transmission
- **Root hair cells:** increased surface area for water absorption
- **Sperm cells:** tail for swimming, many mitochondria for energy

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
1. **G1 Phase:** Cell grows and organelles duplicate
2. **S Phase:** DNA replication occurs
3. **G2 Phase:** Further growth and protein synthesis
4. **M Phase:** Mitosis and cell division

### Mitosis
Purpose: Growth and repair of tissues

**Stages of Mitosis:**
1. **Prophase:** Chromosomes condense, nuclear membrane breaks down
2. **Metaphase:** Chromosomes line up at cell equator
3. **Anaphase:** Chromosomes separate and move to opposite poles
4. **Telophase:** Nuclear membranes reform, chromosomes uncoil

**Result:** Two identical diploid cells

### Meiosis
Purpose: Production of gametes (sex cells)

**Key Features:**
- Two divisions (meiosis I and II)
- Crossing over creates genetic variation
- Results in four genetically different haploid cells
- Reduces chromosome number by half

## DNA Structure and Function

### DNA Structure:
- Double helix made of two complementary strands
- Made of nucleotides (phosphate, sugar, base)
- Four bases: A, T, G, C
- Base pairing rules: A-T, G-C

### DNA Function:
- Stores genetic information
- Controls protein synthesis
- Passed from parents to offspring

### Genes and Chromosomes:
- Gene: section of DNA coding for a protein
- Chromosome: structure containing many genes
- Humans have 46 chromosomes (23 pairs)

## Inheritance

### Key Terms:
- **Allele:** different versions of a gene
- **Dominant:** allele expressed when present (capital letter)
- **Recessive:** allele only expressed when two copies present (lowercase)
- **Homozygous:** two identical alleles (AA or aa)
- **Heterozygous:** two different alleles (Aa)
- **Genotype:** genetic makeup (e.g., Aa)
- **Phenotype:** observable characteristics (e.g., brown eyes)

### Monohybrid Crosses:
Example: Brown eyes (B) dominant to blue eyes (b)
Bb × Bb cross:
- Offspring: BB, Bb, Bb, bb
- Ratio: 3 brown : 1 blue

## Genetic Disorders

### Examples:
- **Cystic fibrosis:** recessive disorder affecting lungs
- **Huntington's disease:** dominant disorder affecting nervous system
- **Sickle cell anemia:** recessive disorder affecting red blood cells

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
|----------|--------|------|----------|
| Proton   | +1     | 1    | Nucleus  |
| Neutron  | 0      | 1    | Nucleus  |
| Electron | -1     | 1/1840| Shells   |

### Key Terms:
- **Atomic number:** number of protons
- **Mass number:** protons + neutrons
- **Isotopes:** atoms with same protons, different neutrons

### Electronic Configuration:
- First shell: maximum 2 electrons
- Second shell: maximum 8 electrons
- Third shell: maximum 8 electrons (for first 20 elements)

Examples:
- Carbon (6): 2, 4
- Sodium (11): 2, 8, 1
- Chlorine (17): 2, 8, 7

## The Periodic Table

### Organization:
- **Groups:** vertical columns (1-7, 0)
- **Periods:** horizontal rows
- Elements in same group have similar properties

### Group Properties:
**Group 1 (Alkali Metals):**
- One electron in outer shell
- React with water to form hydroxides
- Reactivity increases down the group

**Group 7 (Halogens):**
- Seven electrons in outer shell
- Form salts with metals
- Reactivity decreases down the group

**Group 0 (Noble Gases):**
- Full outer shell (stable)
- Unreactive/inert
- Used in lighting and welding

## Chemical Bonding

### Ionic Bonding:
- Transfer of electrons from metal to non-metal
- Forms ions with opposite charges
- Strong electrostatic attraction
- Example: Na⁺Cl⁻ (sodium chloride)

### Covalent Bonding:
- Sharing of electrons between non-metals
- Forms molecules
- Example: H₂O (water), CO₂ (carbon dioxide)

### Metallic Bonding:
- Sea of delocalized electrons
- Explains conductivity and malleability
- Found in metals and alloys

## Chemical Formulae and Equations

### Writing Formulae:
- Use valency/oxidation states
- Balance charges
- Examples: MgO, CaCl₂, Al₂O₃

### Balancing Equations:
Example: Mg + O₂ → MgO
Balanced: 2Mg + O₂ → 2MgO

## Relative Atomic Mass

### Calculation:
RAM = (mass of isotope 1 × % abundance + mass of isotope 2 × % abundance) ÷ 100

Example: Chlorine has isotopes ³⁵Cl (75%) and ³⁷Cl (25%)
RAM = (35 × 75 + 37 × 25) ÷ 100 = 35.5

## Practice Problems
1. Draw the electronic configuration for oxygen (atomic number 8)
2. Explain why Group 1 metals become more reactive down the group
3. Balance the equation: Al + O₂ → Al₂O₃
4. Calculate the RAM of copper with isotopes ⁶³Cu (69%) and ⁶⁵Cu (31%)`,
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

**Speed:**
- Distance traveled per unit time
- Speed = distance ÷ time
- Units: m/s, km/h
- Scalar quantity (magnitude only)

**Velocity:**
- Displacement per unit time
- Includes direction
- Vector quantity (magnitude and direction)

**Acceleration:**
- Change in velocity per unit time
- a = (v - u) ÷ t
- Units: m/s²
- Can be positive (speeding up) or negative (slowing down)

### Distance-Time Graphs
- Gradient = speed
- Horizontal line = stationary
- Curved line = changing speed

### Velocity-Time Graphs
- Gradient = acceleration
- Area under graph = displacement
- Horizontal line = constant velocity

## Newton's Laws of Motion

### First Law (Law of Inertia):
An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an unbalanced force.

### Second Law:
Force = mass × acceleration
F = ma
- Force in Newtons (N)
- Mass in kilograms (kg)
- Acceleration in m/s²

### Third Law:
For every action, there is an equal and opposite reaction.
Examples:
- Walking: foot pushes back on ground, ground pushes forward on foot
- Rocket propulsion: gases pushed down, rocket pushed up

## Types of Forces

### Contact Forces:
- **Friction:** opposes motion between surfaces
- **Air resistance:** friction with air
- **Normal force:** perpendicular to surface
- **Tension:** force in stretched rope/cable

### Non-contact Forces:
- **Gravitational:** attraction between masses
- **Magnetic:** attraction/repulsion between magnets
- **Electrostatic:** attraction/repulsion between charges

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
- W = mg (g = 9.8 N/kg on Earth)
- Measured in Newtons

## Terminal Velocity

When falling through air:
1. Initially accelerates due to gravity
2. Air resistance increases with speed
3. Eventually air resistance = weight
4. No net force, so constant velocity (terminal velocity)

## Practice Problems
1. A car travels 150m in 10s. Calculate its speed.
2. Calculate the force needed to accelerate a 1200kg car at 2m/s².
3. A ball is dropped from rest. After 3s, what is its velocity? (g = 9.8m/s²)
4. Use v² = u² + 2as to find the stopping distance of a car traveling at 20m/s with deceleration 5m/s².`,
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
