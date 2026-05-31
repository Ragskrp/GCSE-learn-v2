
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

// Add check for API key before initializing
if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    require('dotenv').config({ path: '.env' });
}

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

// --- DATA DEFINITIONS ---

const year7Mathematics = {
    id: "maths-7",
    name: "KS3 Maths (Year 7)",
    duration: 120,
    questions: 100,
    color: "from-blue-400 to-indigo-600",
    icon: "📐",
    level: 1,
    xp: 0,
    maxXp: 3000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Number Novice",
    timeLimit: 60,
    topics: [
        {
            id: "ks3-number",
            name: "7N: Number",
            completed: false,
            studyMaterials: [
                {
                    id: "place-value",
                    title: "Place Value",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🔢 Number\n*   **Integers:** Whole numbers.\n*   **Decimals:** Parts of whole.\n*   **Rounding:** Nearest 10, 100, 1000.\n\n## Operations\n*   **Addition:** Column method.\n*   **Subtraction:** Column method.\n*   **Multiplication:** Grid or Column.\n*   **Division:** Bus stop.\n`,
                    learningObjectives: ["Order decimals", "Round numbers"]
                }
            ],
            quizzes: [
                {
                    id: "qz-ks3-num",
                    title: "Number Quiz",
                    difficulty: "foundation",
                    passingScore: 60,
                    xpReward: 100,
                    coinReward: 10,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "q1",
                            question: "Round 456 to nearest 10",
                            type: "multiple-choice",
                            options: ["450", "460", "400"],
                            correctAnswer: "460",
                            marks: 1,
                            topic: "Rounding"
                        }
                    ]
                }
            ]
        },
        {
            id: "ks3-algebra",
            name: "7A: Algebra",
            completed: false,
            studyMaterials: [
                {
                    id: "alg-intro",
                    title: "Introduction to Algebra",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 📦 Algebra\n*   **Variable:** A letter representing a number (x, y).\n*   **Term:** 3x, 4y.\n*   **Expression:** 3x + 4y (no equals sign).\n*   **Equation:** 3x + 4 = 10 (has equals sign).\n\n## Simplify\n*   Add like terms: 2a + 3a = 5a.\n*   Multiply: 2 * 3a = 6a.\n`,
                    learningObjectives: ["Collect like terms"]
                }
            ],
            quizzes: []
        },
        {
            id: "ks3-geom",
            name: "7G: Geometry",
            completed: false,
            studyMaterials: [
                {
                    id: "angles",
                    title: "Angles",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 📐 Angles\n*   **Acute:** < 90\n*   **Right:** = 90\n*   **Obtuse:** > 90 and < 180\n*   **Reflex:** > 180\n\n## Rules\n*   Angles on a straight line add to **180**.\n*   Angles around a point add to **360**.\n*   Angles in a triangle add to **180**.\n`,
                    learningObjectives: ["Measure angles", "Classify angles"]
                }
            ],
            quizzes: []
        }
    ]
};

const year7Science = {
    id: "science-7",
    name: "KS3 Science (Year 7)",
    duration: 120,
    questions: 100,
    color: "from-green-400 to-emerald-600",
    icon: "🔬",
    level: 1,
    xp: 0,
    maxXp: 3000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Science Explorer",
    timeLimit: 60,
    topics: [
        {
            id: "ks3-bio-cells",
            name: "7A: Cells & Tissues",
            completed: false,
            studyMaterials: [
                {
                    id: "intro-cells",
                    title: "Introduction to Cells",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🔬 Cells: The Building Blocks\n> All living things are made of cells.\n\n## Animal Cells\n*   **Nucleus:** Control centre. Contains DNA.\n*   **Cytoplasm:** Jelly-like substance where reactions happen.\n*   **Cell Membrane:** Controls what goes in and out.\n*   **Mitochondria:** For respiration (energy).\n\n## Plant Cells\n*   Everything above PLUS:\n*   **Cell Wall:** Made of cellulose for support.\n*   **Chloroplasts:** Green bits for photosynthesis.\n*   **Vacuole:** Contains cell sap.\n`,
                    learningObjectives: ["Identify label animal and plant cells", "Use a microscope"]
                },
                {
                    id: "tissues-organs",
                    title: "Tissues, Organs & Systems",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🧱 Organisation\n1.  **Cell:** Muscle cell.\n2.  **Tissue:** Muscle tissue (group of similar cells).\n3.  **Organ:** Heart (group of tissues working together).\n4.  **System:** Circulatory system (group of organs).\n5.  **Organism:** Human.\n`,
                    learningObjectives: ["Define tissue, organ, system"]
                }
            ],
            quizzes: [
                {
                    id: "qz-ks3-cells",
                    title: "Cells Quiz",
                    difficulty: "foundation",
                    passingScore: 60,
                    xpReward: 100,
                    coinReward: 10,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "q1",
                            question: "Which part controls the cell?",
                            type: "multiple-choice",
                            options: ["Nucleus", "Cytoplasm", "Wall"],
                            correctAnswer: "Nucleus",
                            marks: 1,
                            topic: "Cells"
                        },
                        {
                            id: "q2",
                            question: "Which is ONLY in plant cells?",
                            type: "multiple-choice",
                            options: ["Nucleus", "Startch", "Chloroplast"],
                            correctAnswer: "Chloroplast",
                            marks: 1,
                            topic: "Cells"
                        }
                    ]
                }
            ]
        },
        {
            id: "ks3-chem-particles",
            name: "7E: Mixtures & Separation",
            completed: false,
            studyMaterials: [
                {
                    id: "states-matter",
                    title: "Solids, Liquids & Gases",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🧊💧💨 States of Matter\n*   **Solid:** Particles vibrate in fixed position. Strong forces.\n*   **Liquid:** Particles move around each other. Medium forces.\n*   **Gas:** Particles move fast and random. Weak forces.\n\n## Changes of State\n*   Melting: Solid -> Liquid\n*   Boiling: Liquid -> Gas\n*   Condensing: Gas -> Liquid\n*   Freezing: Liquid -> Solid\n`,
                    learningObjectives: ["Describe states of matter", "Draw particle diagrams"]
                }
            ],
            quizzes: []
        },
        {
            id: "ks3-phys-forces",
            name: "7K: Forces",
            completed: false,
            studyMaterials: [
                {
                    id: "forces-intro",
                    title: "Introduction to Forces",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🚀 Forces\nA force can be a **push** or a **pull**.\n\n## Types\n*   **Contact:** Friction, Air Resistance, Tension.\n*   **Non-Contact:** Gravity, Magnetism, Electrostatic.\n\n## Measuring Forces\n*   Measured in **Newtons (N)** using a Newton Meter.\n`,
                    learningObjectives: ["Identify contact vs non-contact forces"]
                }
            ],
            quizzes: []
        }
    ]
};

const year7English = {
    id: "english-7",
    name: "KS3 English (Year 7)",
    duration: 120,
    questions: 100,
    color: "from-amber-400 to-orange-600",
    icon: "📚",
    level: 1,
    xp: 0,
    maxXp: 3000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Wordsmith",
    timeLimit: 60,
    topics: [
        {
            id: "en-ks3-shakespeare",
            name: "Introduction to Shakespeare",
            completed: false,
            studyMaterials: [
                {
                    id: "shakespeare-intro",
                    title: "Who Was William Shakespeare?",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🎭 William Shakespeare\n> The Bard of Avon (1564 - 1616)\n\n## Famous Works\n*   **Tragedies:** Romeo & Juliet, Macbeth, Hamlet.\n*   **Comedies:** A Midsummer Night's Dream, Much Ado About Nothing.\n*   **Histories:** Henry V.\n\n## Language\n*   He wrote in **Early Modern English**.\n*   Invented over 1700 words (e.g., 'Eyeball', 'Assassination').\n`,
                    learningObjectives: ["Identify Shakespeare's plays", "Understand his impact"]
                }
            ],
            quizzes: [
                {
                    id: "qz-shak-1",
                    title: "Shakespeare Intro Quiz",
                    difficulty: "foundation",
                    passingScore: 60,
                    xpReward: 100,
                    coinReward: 10,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "q1",
                            question: "When was Shakespeare born?",
                            type: "multiple-choice",
                            options: ["1564", "1616", "1492"],
                            correctAnswer: "1564",
                            marks: 1,
                            topic: "Context"
                        }
                    ]
                }
            ]
        },
        {
            id: "en-ks3-novel",
            name: "Novel Study: Wonder",
            completed: false,
            studyMaterials: [
                {
                    id: "wonder-intro",
                    title: "Reading 'Wonder'",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 📖 Wonder by R.J. Palacio\n> "When given the choice between being right and being kind, choose kind."\n\n## Themes\n*   **Identity:** Looking different.\n*   **Kindness:** The impact of small acts.\n*   **Friendship:** True vs fake friends.\n\n## Characters\n*   **Auggie:** Main character with facial difference.\n*   **Jack Will:** His friend.\n*   **Julian:** The bully.\n`,
                    learningObjectives: ["Identify themes", "Describe characters"]
                }
            ],
            quizzes: []
        },
        {
            id: "en-ks3-writing",
            name: "Creative Writing",
            completed: false,
            studyMaterials: [
                {
                    id: "desc-writing",
                    title: "Writing Descriptions",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# ✍️ Descriptive Writing\nUse the senses!\n\n## The 5 Senses\n1.  **Sight:** Colours, shapes, movement.\n2.  **Sound:** Loud, soft, rustling.\n3.  **Smell:** Sweet, acrid, damp.\n4.  **Touch:** Rough, smooth, cold.\n5.  **Taste:** Bitter, sweet, metallic.\n\n## Techniques\n*   **Simile:** Like or as (Quiet _as_ a mouse).\n*   **Metaphor:** Is (He _is_ a lion).\n*   **Personification:** Giving human traits to objects (The wind _howled_).\n`,
                    learningObjectives: ["Use similes and metaphors"]
                }
            ],
            quizzes: []
        }
    ]
};

async function seedYear7() {
    console.log('🚀 Starting Year 7 Curriculum Seeding...');
    try {

        // Seed Maths
        console.log('📐 Seeding Maths (Year 7)...');
        await setDoc(doc(db, 'subjects', year7Mathematics.id), year7Mathematics);
        console.log('✅ Maths (Year 7) seeded!');

        // Seed Science
        console.log('🔬 Seeding Science (Year 7)...');
        await setDoc(doc(db, 'subjects', year7Science.id), year7Science);
        console.log('✅ Science (Year 7) seeded!');

        // Seed English
        console.log('📚 Seeding English (Year 7)...');
        await setDoc(doc(db, 'subjects', year7English.id), year7English);
        console.log('✅ English (Year 7) seeded!');

        console.log('\n🎉 ALL Year 7 Subjects Seeded Successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}

seedYear7();
