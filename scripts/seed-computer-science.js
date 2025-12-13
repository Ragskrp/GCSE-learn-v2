
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

const computerScienceCurriculum = {
    id: "computer-science-j277",
    name: "Computer Science (J277)",
    duration: 90, // total hours approx
    questions: 50,
    color: "from-blue-500 to-cyan-500",
    icon: "💻",
    level: 1,
    xp: 0,
    maxXp: 1000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Binary Baron",
    timeLimit: 90,
    topics: [
        // COMPONENT 1: COMPUTER SYSTEMS
        {
            id: "1.1-systems-architecture",
            name: "1.1 Systems Architecture",
            completed: false,
            studyMaterials: [
                {
                    id: "cpu-architecture",
                    title: "The CPU and Van Neumann Architecture",
                    content: `# 🧠 The Brain of the Computer: CPU Architecture

> **"The CPU is the conductor of the digital orchestra."**

---

## 🎯 Quest Objectives
- 🏛️ Understand the purpose of the CPU
- 🔄 Master the Fetch-Execute Cycle
- 🧠 Explore Von Neumann Architecture
- 💾 Learn about registers (MAR, MDR, PC, ACC)

**XP Reward:** 150 ⭐ | **Time:** 45 mins

---

## 📚 Chapter 1: The Central Processing Unit (CPU)
The CPU (**Central Processing Unit**) is the most important component. It processes all data and instructions.

### 🔑 Key Characteristics
- **Clock Speed:** How many cycles per second (Hz). 3GHz = 3 billion cycles/sec!
- **Cores:** Independent processing units (Dual Core, Quad Core).
- **Cache:** Super-fast memory close to the CPU.

---

## 📚 Chapter 2: Von Neumann Architecture
In 1945, John von Neumann proposed a design where **data and instructions are stored in the same memory**.

### 🏗️ Components:
1. **CU (Control Unit):** Manages the flow of data.
2. **ALU (Arithmetic Logic Unit):** The calculator. Does the math (+, -) and logic (AND, OR).
3. **Cache:** Fast access storage.
4. **Registers:** Tiny, fast memory slots inside the CPU.

---

## 📚 Chapter 3: The Registers 📦
Think of registers as the CPU's "hands" holding data right now.

| Register | Name | Purpose |
| :--- | :--- | :--- |
| **PC** | Program Counter | Holds address of *next* instruction |
| **MAR** | Memory Address Register | Holds address of current data being fetched |
| **MDR** | Memory Data Register | Holds actual data fetched from memory |
| **ACC** | Accumulator | Stores results of calculations from ALU |

---

## 📚 Chapter 4: The Fetch-Decode-Execute Cycle 🔄
This is the heartbeat of the computer.

1.  **FETCH:** CPU gets instruction from memory (RAM).
2.  **DECODE:** CU interprets what the instruction means.
3.  **EXECUTE:** The instruction is carried out (e.g., adding a number).

---

## 📝 Practice Quiz
1. What does CPU stand for?
2. Which register holds the address of the next instruction?
3. What happens during the 'Execute' stage?

`,
                    type: "lesson",
                    difficulty: "intermediate",
                    estimatedTime: 45,
                    learningObjectives: ["Define CPU functions", "Explain Von Neumann architecture", "Describe the F-D-E cycle"]
                }
            ],
            quizzes: [
                {
                    id: "cpu-quiz-1",
                    title: "CPU & Architecture Quiz",
                    description: "Test your knowledge of the CPU components and cycle",
                    questions: [
                        {
                            id: "q1",
                            question: "Which register stores the address of the next instruction to be fetched?",
                            options: ["MAR", "MDR", "PC", "ACC"],
                            correctAnswer: "PC",
                            explanation: "The Program Counter (PC) always points to the next instruction."
                        },
                        {
                            id: "q2",
                            question: "What stands for ALU?",
                            options: ["Arithmetic Logic Unit", "Advanced Learning Unit", "Address Logic Unit", "Automatic Logic User"],
                            correctAnswer: "Arithmetic Logic Unit",
                            explanation: "ALU performs arithmetic and logical operations."
                        }
                    ],
                    xpReward: 50,
                    coinReward: 20,
                    timeLimit: 10,
                    difficulty: "easy"
                }
            ]
        },
        {
            id: "1.2-memory-storage",
            name: "1.2 Memory and Storage",
            completed: false,
            studyMaterials: [
                {
                    id: "ram-rom-lesson",
                    title: "Primary Memory: RAM vs ROM",
                    content: `# 💾 Primary Memory: RAM & ROM

> **"Memory is transient, Storage is forever (mostly)."**

---

## 🎯 Quest Objectives
- ⚡ Differences between RAM and ROM
- 🧠 What is Virtual Memory?
- 📼 Intro to Secondary Storage

**XP Reward:** 100 ⭐

---

## 📚 RAM (Random Access Memory)
- **Volatile:** Loses data when power is off.
- **Read/Write:** Can be changed.
- **Purpose:** Stores currently running programs and OS data.

## 📚 ROM (Read Only Memory)
- **Non-Volatile:** Keeps data without power.
- **Read-Only:** Cannot be easily changed.
- **Purpose:** Stores the Bootstrap (startup) instructions.

## 📚 Virtual Memory
When RAM is full, the OS uses part of the Hard Drive as "fake RAM". It is slower because of "disk thrashing".

---
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Compare RAM and ROM", "Explain Virtual Memory"]
                }
            ],
            quizzes: []
        },
        {
            id: "1.3-networks",
            name: "1.3 Networks",
            completed: false,
            studyMaterials: [],
            quizzes: []
        },
        {
            id: "1.4-network-security",
            name: "1.4 Network Security",
            completed: false,
            studyMaterials: [],
            quizzes: []
        },
        {
            id: "1.5-system-software",
            name: "1.5 Systems Software",
            completed: false,
            studyMaterials: [],
            quizzes: []
        },
        {
            id: "1.6-ethics",
            name: "1.6 Ethical & Legal",
            completed: false,
            studyMaterials: [],
            quizzes: []
        },
        // COMPONENT 2: ALGORITHMS & PROGRAMMING
        {
            id: "2.1-algorithms",
            name: "2.1 Algorithms",
            completed: false,
            studyMaterials: [
                {
                    id: "searching-sorting",
                    title: "Searching and Sorting Algorithms",
                    content: `# 🔎 Searching & Sorting Algorithms

> **"Algorithms are just recipes for computers."**

---

## 🎯 Quest Objectives
- 🕵️‍♂️ Linear vs Binary Search
- 🔢 Bubble, Merge, and Insertion Sort
- 📝 Pseudocode basics

**XP Reward:** 200 ⭐

---

## 📚 Chapter 1: Searching

### 🚶 Linear Search
Check items one by one.
- **Pros:** Works on unsorted lists.
- **Cons:** Slow for large lists.

### 🌳 Binary Search
Divide and conquer!
- **Rule:** List MUST be sorted first.
- **Steps:** Check middle item. If target is lower, discard top half. Repeat.
- **Pros:** Super fast.

---

## 📚 Chapter 2: Sorting

### 🫧 Bubble Sort
Compare pairs and swap.
- Slow but simple.

### 📥 Insertion Sort
Build a sorted list one item at a time (like sorting cards).

### 🤝 Merge Sort
Split list into tiny lists, then merge them back together in order.
- Very efficient for large lists!

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 60,
                    learningObjectives: ["Perform linear/binary searches", "Trace sorting algorithms"]
                }
            ],
            quizzes: [
                {
                    id: "algorithms-quiz-1",
                    title: "Algorithms Master",
                    description: "Test your sorting and searching skills",
                    questions: [
                        {
                            id: "q_algo1",
                            question: "Which search algorithm requires the list to be sorted?",
                            options: ["Linear Search", "Binary Search", "Random Search", "Bubble Search"],
                            correctAnswer: "Binary Search",
                            explanation: "Binary search relies on eliminating half the list, which only works if it's order."
                        },
                        {
                            id: "q_algo2",
                            question: "Which sorting algorithm is a 'Divide and Conquer' method?",
                            options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
                            correctAnswer: "Merge Sort",
                            explanation: "Merge sort divides the list recursively."
                        }
                    ],
                    xpReward: 60,
                    coinReward: 25,
                    timeLimit: 15,
                    difficulty: "medium"
                }
            ]
        },
        {
            id: "2.2-programming",
            name: "2.2 Programming Fundamentals",
            completed: false,
            studyMaterials: [],
            quizzes: []
        },
        {
            id: "2.3-robust-programs",
            name: "2.3 Robust Programs",
            completed: false,
            studyMaterials: [],
            quizzes: []
        },
        {
            id: "2.4-logic",
            name: "2.4 Boolean Logic",
            completed: false,
            studyMaterials: [
                {
                    id: "logic-gates",
                    title: "Login Gates & Truth Tables",
                    content: "# 🔌 Logic Gates\n\nAND, OR, NOT operations determine the logic flow of circuits.",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Draw truth tables", "Identify logic gates"]
                }
            ],
            quizzes: []
        },
        {
            id: "2.5-ide",
            name: "2.5 IDEs & Languages",
            completed: false,
            studyMaterials: [],
            quizzes: []
        }
    ]
};

async function seedDatabase() {
    try {
        console.log('🌱 Starting Computer Science curriculum seeding...');

        // 1. Save to "subjects" collection
        await setDoc(doc(db, "subjects", computerScienceCurriculum.id), computerScienceCurriculum);
        console.log(`✅ Saved subject: ${computerScienceCurriculum.name}`);

        // 2. Add to existing users if needed (Optional: usually handled by AuthService self-healing)
        // We strictly define it in the database so AuthService calls fetchCurriculumForYear(10) and finds this new subject id.

        // UPDATE: We need to ensure AuthService knows about 'computer-science-j277'.
        // Currently AuthService has hardcoded IDs like ['maths-10', 'science-10'].
        // We will need to update AuthService separately.

        console.log('🎉 Seeding complete! Remember to update AuthService to include "computer-science-j277" in the Year 10 curriculum list.');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
