
import { Subject } from "./curriculum-database";

export const year10ComputerScienceJ277: Subject = {
    id: "computer-science-j277",
    name: "Computer Science (J277)",
    duration: 90,
    questions: 50,
    color: "from-purple-400 to-fuchsia-500",
    icon: "💻",
    level: 1,
    xp: 0,
    maxXp: 1000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Binary Baron",
    timeLimit: 90,
    topics: [
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
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Define CPU functions", "Explain Von Neumann architecture", "Describe the F-D-E cycle"]
                }
            ],
            quizzes: [
                {
                    id: "cpu-exit-test",
                    title: "End of Topic Test: Systems Architecture",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "q1",
                            question: "Which register stores the address of the next instruction to be fetched?",
                            type: "multiple-choice",
                            options: ["MAR", "MDR", "PC", "ACC"],
                            correctAnswer: "PC",
                            explanation: "The Program Counter (PC) always points to the next instruction.",
                            marks: 1,
                            topic: "Registers"
                        },
                        {
                            id: "q2",
                            question: "What stands for ALU?",
                            type: "multiple-choice",
                            options: ["Arithmetic Logic Unit", "Advanced Learning Unit", "Address Logic Unit", "Automatic Logic User"],
                            correctAnswer: "Arithmetic Logic Unit",
                            explanation: "ALU performs arithmetic and logical operations.",
                            marks: 1,
                            topic: "Components"
                        },
                        {
                            id: "q3",
                            question: "Which component coordinates all the activities of the CPU?",
                            type: "multiple-choice",
                            options: ["ALU", "Cache", "CU", "Registers"],
                            correctAnswer: "CU",
                            explanation: "The Control Unit (CU) directs the operation of the processor.",
                            marks: 1,
                            topic: "Components"
                        },
                        {
                            id: "q4",
                            question: "What affects CPU performance?",
                            type: "multiple-choice",
                            options: ["Color of case", "Clock speed, Cache size, Number of Cores", "Keyboard layout", "Monitor size"],
                            correctAnswer: "Clock speed, Cache size, Number of Cores",
                            explanation: "These are the three main factors affecting performance.",
                            marks: 1,
                            topic: "Performance"
                        },
                        {
                            id: "q5",
                            question: "What is an embedded system?",
                            type: "multiple-choice",
                            options: ["A general purpose computer", "A computer system built into another device", "A laptop", "A server"],
                            correctAnswer: "A computer system built into another device",
                            explanation: "Embedded systems have a dedicated function.",
                            marks: 1,
                            topic: "Embedded Systems"
                        }
                    ]
                }
            ],
            tests: []
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
            quizzes: [
                {
                    id: "memory-exit-test",
                    title: "End of Topic Test: Memory & Storage",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "mq1",
                            question: "Which is volatile?",
                            type: "multiple-choice",
                            options: ["RAM", "ROM", "HDD", "SSD"],
                            correctAnswer: "RAM",
                            explanation: "RAM loses its contents when power is lost.",
                            marks: 1,
                            topic: "Memory"
                        },
                        {
                            id: "mq2",
                            question: "What does ROM store?",
                            type: "multiple-choice",
                            options: ["User files", "Bootstrap loader / BIOS", "Currently open apps", "Videos"],
                            correctAnswer: "Bootstrap loader / BIOS",
                            explanation: "ROM stores the startup instructions.",
                            marks: 1,
                            topic: "Memory"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "1.3-networks",
            name: "1.3 Computer Networks",
            completed: false,
            studyMaterials: [
                {
                    id: "networks-intro",
                    title: "LAN, WAN and Network Topologies",
                    content: `# 🌐 Computer Networks connection zones

## 🎯 Quest Objectives
- Define LAN and WAN
- Understand Star and Mesh topologies
- Explore Wired vs Wireless

## 📚 Content
A **LAN (Local Area Network)** is a network over a small geographical area (e.g. home, school).
A **WAN (Wide Area Network)** connects LANs over a large area (e.g. The Internet).

### Topologies
1. **Star:** All devices connect to a central switch. Reliable but depends on the switch.
2. **Mesh:** Devices connect to multiple other devices. Self-healing but expensive cabling.

## 🧠 Protocol Stack (TCP/IP)
- Application Layer
- Transport Layer
- Rayner Layer (Internet)
- Link Layer
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Define LAN/WAN", "Compare Star and Mesh"]
                }
            ],
            quizzes: [
                {
                    id: "networks-exit-test",
                    title: "End of Topic Test: Networks",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "nq1",
                            question: "Which covers a small geographical area?",
                            type: "multiple-choice",
                            options: ["LAN", "WAN", "PAN", "SAN"],
                            correctAnswer: "LAN",
                            explanation: "LAN stands for Local Area Network.",
                            marks: 1,
                            topic: "Networks"
                        },
                        {
                            id: "nq2",
                            question: "In which topology does every device connect to a central switch?",
                            type: "multiple-choice",
                            options: ["Mesh", "Bus", "Star", "Ring"],
                            correctAnswer: "Star",
                            explanation: "Star topology uses a central node.",
                            marks: 1,
                            topic: "Networks"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "1.4-network-security",
            name: "1.4 Network Security",
            completed: false,
            studyMaterials: [
                {
                    id: "security-threats",
                    title: "Threats to Computer Systems",
                    content: `# 🛡️ Network Security Threats

## 🎯 key Threats
1. **Malware:** Viruses, worms, trojans, ransomware.
2. **Phishing:** Fake emails trying to steal info.
3. **Brute Force:** Guessing passwords.
4. **DDOS:** Flooding a server with traffic.

## 🛡️ Defenses
- Firewalls
- Anti-malware
- Encryption
- Strong Passwords
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["Identify security threats", "Explain prevention methods"]
                }
            ],
            quizzes: [
                {
                    id: "security-exit-test",
                    title: "End of Topic Test: Security",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "sq1",
                            question: "What is Phishing?",
                            type: "multiple-choice",
                            options: ["Catching fish", "Sending fake emails to steal data", "Guessing passwords", "Blocking access"],
                            correctAnswer: "Sending fake emails to steal data",
                            explanation: "Phishing is a social engineering attack via email.",
                            marks: 1,
                            topic: "Security"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "1.5-system-software",
            name: "1.5 Systems Software",
            completed: false,
            studyMaterials: [
                {
                    id: "os-functions",
                    title: "Operating Systems",
                    content: `# 💻 The Operating System (OS)

## Functions of an OS
1. **User Interface:** CLI or GUI.
2. **Memory Management:** Paging and multitasking.
3. **File Management:** Organizing data.
4. **Peripheral Management:** Drivers for hardware.
5. **User Management:** Accounts and security.

### Utility Software
- Defragmentation
- Encryption
- Compression
- Backup
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Describe OS functions", "Explain utility software"]
                }
            ],
            quizzes: [
                {
                    id: "os-exit-test",
                    title: "End of Topic Test: Systems Software",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "oq1",
                            question: "Which of these is NOT an OS function?",
                            type: "multiple-choice",
                            options: ["Multi-tasking", "Virus Scanning", "Memory Management", "File Management"],
                            correctAnswer: "Virus Scanning",
                            explanation: "Virus scanning is usually utility software, not a core kernel function, though often bundled.",
                            marks: 1,
                            topic: "OS"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "1.6-ethics",
            name: "1.6 Ethical, Legal, Cultural & Environmental",
            completed: false,
            studyMaterials: [
                {
                    id: "laws-ethics",
                    title: "Impacts of Technology",
                    content: `# ⚖️ Ethics and Law

## 📜 Key Legislation
1. **Data Protection Act (2018):** Controls personal data.
2. **Computer Misuse Act (1990):** Hacking and viruses.
3. **Copyright Designs and Patents Act (1988):** Intellectual property.

## 🌍 Environmental Issues
- E-Waste
- Energy consumption of data centers.

## 🏙️ Cultural Issues
- Digital Divide
- Privacy concerns
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Identify key laws", "Discuss environmental impact"]
                }
            ],
            quizzes: [
                {
                    id: "ethics-exit-test",
                    title: "End of Topic Test: Ethics & Laws",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "eq1",
                            question: "Which law criminalizes hacking?",
                            type: "multiple-choice",
                            options: ["Data Protection Act", "Computer Misuse Act", "Copyright Act", "Freedom of Info Act"],
                            correctAnswer: "Computer Misuse Act",
                            explanation: "Passed in 1990 to deal with unauthorized access.",
                            marks: 1,
                            topic: "Legislation"
                        }
                    ]
                }
            ],
            tests: []
        },
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
                    id: "algo-exit-test",
                    title: "End of Topic Test: Algorithms",
                    passingScore: 90,
                    xpReward: 60,
                    coinReward: 25,
                    timeLimit: 15,
                    difficulty: "higher",
                    questions: [
                        {
                            id: "q_algo1",
                            question: "Which search algorithm requires the list to be sorted?",
                            type: "multiple-choice",
                            options: ["Linear Search", "Binary Search", "Random Search", "Bubble Search"],
                            correctAnswer: "Binary Search",
                            explanation: "Binary search relies on eliminating half the list, which only works if it's order.",
                            marks: 1,
                            topic: "Searching"
                        },
                        {
                            id: "q_algo2",
                            question: "Which sorting algorithm is a 'Divide and Conquer' method?",
                            type: "multiple-choice",
                            options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
                            correctAnswer: "Merge Sort",
                            explanation: "Merge sort divides the list recursively.",
                            marks: 1,
                            topic: "Sorting"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "2.2-programming",
            name: "2.2 Programming Fundamentals",
            completed: false,
            studyMaterials: [
                {
                    id: "prog-basics",
                    title: "Variables, Sequence, Selection, Iteration",
                    content: `# ⌨️ Coding Basics

## 🧱 The Building Blocks
1. **Variables:** Named storage locations (e.g. \`score = 10\`).
2. **Sequence:** Instructions running one after another.
3. **Selection:** IF/ELSE statements.
4. **Iteration:** Loops (FOR, WHILE).

## 🧶 Data Types
- **Integer:** Whole number
- **Real/Float:** Decimal number
- **Boolean:** True/False
- **String:** Text
- **Char:** Single character
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 50,
                    learningObjectives: ["Identify data types", "Use selection and iteration"]
                }
            ],
            quizzes: [
                {
                    id: "prog-exit-test",
                    title: "End of Topic Test: Programming",
                    passingScore: 90,
                    xpReward: 60,
                    coinReward: 25,
                    timeLimit: 15,
                    difficulty: "higher",
                    questions: [
                        {
                            id: "pq1",
                            question: "What holds a single character?",
                            type: "multiple-choice",
                            options: ["String", "Integer", "Char", "Float"],
                            correctAnswer: "Char",
                            explanation: "A Char data type holds one character.",
                            marks: 1,
                            topic: "Data Types"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "2.3-robust-programs",
            name: "2.3 Robust Programs",
            completed: false,
            studyMaterials: [
                {
                    id: "defensive-design",
                    title: "Defensive Design & Testing",
                    content: `# 🛡️ Robust Programs

## ⚠️ Defensive Design
- **Input Sanitization:** Removing unwanted characters.
- **Validation:** Checking data is reasonable (Range check, Type check).
- **Authentication:** Passwords.

## 🧪 Testing
- **Iterative Testing:** During development.
- **Terminal Testing:** At the end.
- **Test Data:** Normal, Boundary, Erroneous.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["Explain validation types", "Create test plans"]
                }
            ],
            quizzes: [
                {
                    id: "robust-exit-test",
                    title: "End of Topic Test: Robustness",
                    passingScore: 90,
                    xpReward: 60,
                    coinReward: 25,
                    timeLimit: 15,
                    difficulty: "higher",
                    questions: [
                        {
                            id: "rq1",
                            question: "Checking if an age input is between 0 and 120 is what type of check?",
                            type: "multiple-choice",
                            options: ["Type Check", "Range Check", "Length Check", "Format Check"],
                            correctAnswer: "Range Check",
                            explanation: "It checks the range of the number.",
                            marks: 1,
                            topic: "Validation"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "2.4-logic",
            name: "2.4 Boolean Logic",
            completed: false,
            studyMaterials: [
                {
                    id: "logic-gates",
                    title: "Logic Gates & Truth Tables",
                    content: `# 🔌 Logic Gates

## ⚡ The Gates
1. **AND:** Output is 1 only if BOTH inputs are 1. (D shape)
2. **OR:** Output is 1 if EITHER input is 1. (Arrowhead shape)
3. **NOT:** Flips the input. (Triangle with dot)

## 📋 Truth Tables
Show every possible combination of inputs and outputs.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Draw truth tables", "Identify logic gates"]
                }
            ],
            quizzes: [
                {
                    id: "logic-exit-test",
                    title: "End of Topic Test: Logic",
                    passingScore: 90,
                    xpReward: 60,
                    coinReward: 25,
                    timeLimit: 15,
                    difficulty: "higher",
                    questions: [
                        {
                            id: "lq1",
                            question: "If A=1 and B=0, what is A AND B?",
                            type: "multiple-choice",
                            options: ["0", "1"],
                            correctAnswer: "0",
                            explanation: "AND requires both to be 1.",
                            marks: 1,
                            topic: "Logic"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "2.5-ide",
            name: "2.5 IDEs & Languages",
            completed: false,
            studyMaterials: [
                {
                    id: "ide-lesson",
                    title: "Integrated Development Environments",
                    content: `# 🛠️ IDEs

An **IDE** helps programmers write code.

## Key Features
1. **Editor:** Color coding, auto-complete.
2. **Compiler/Interpreter:** Translates code.
3. **Debugger:** Helps find errors (Trace tables, breakpoints).
4. **Run-time Environment:** Lets you run code.

## High vs Low Level Languages
- **High Level:** Python, Java (Human readable).
- **Low Level:** Assembly, Machine Code (Hard for humans, fast for CPUs).
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Features of an IDE", "High vs Low level languages"]
                }
            ],
            quizzes: [
                {
                    id: "ide-exit-test",
                    title: "End of Topic Test: IDEs",
                    passingScore: 90,
                    xpReward: 60,
                    coinReward: 25,
                    timeLimit: 15,
                    difficulty: "higher",
                    questions: [
                        {
                            id: "iq1",
                            question: "Which feature helps you step through code line by line?",
                            type: "multiple-choice",
                            options: ["Editor", "Debugger", "Compiler", "Linker"],
                            correctAnswer: "Debugger",
                            explanation: "Debuggers allow stepping and breakpoints.",
                            marks: 1,
                            topic: "IDE"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};
