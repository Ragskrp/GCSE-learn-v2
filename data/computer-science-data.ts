
import { Subject } from "@/types/curriculum";

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
                    content: `# 🧠 1.1 Systems Architecture: The Brain of the Computer

> **"The CPU is the conductor of the digital orchestra."**

---

## 🎯 Learning Objectives
By the end of this quest, you will be able to:
- 🏛️ Describe the **purpose of the CPU**.
- 🧠 Explain the **Von Neumann architecture**.
- 🔄 Describe the **Fetch-Decode-Execute** cycle.
- 💾 Explain the function of common **CPU components** (ALU, CU, Cache).
- 📦 Describe the function of **Registers** (MAR, MDR, PC, ACC).

**XP Reward:** 150 ⭐ | **Time:** 45 mins

---

## 📚 Chapter 1: The Central Processing Unit (CPU)

The **CPU (Central Processing Unit)** is often called the "brain" of the computer. Its job is to **process data** by executing a sequence of instructions (a program).

### 🔑 Key Characteristics
1.  **Clock Speed:** Measured in Hertz (Hz). It represents the number of Fetch-Decode-Execute cycles per second.
    *   *Example:* 3.5 GHz = 3.5 billion cycles per second.
2.  **Cores:** A core is a complete processing unit within the CPU.
    *   **Dual Core:** Two processors in one chip. Can do two things at once!
    *   **Quad Core:** Four processors.
3.  **Cache:** Very fast, expensive memory inside the CPU. It stores frequently used instructions so the CPU doesn't have to wait for RAM.

---

## 📚 Chapter 2: Von Neumann Architecture

In 1945, John von Neumann proposed a revolutionary design where **data and instructions are stored in the same memory (RAM)** in binary form.

### 🏗️ The Main Components

#### 1. The Control Unit (CU) 🎮
- **Controls the flow of data** inside and outside the CPU.
- Sends control signals to other components.
- Manages the Fetch-Decode-Execute cycle.

#### 2. The Arithmetic Logic Unit (ALU) 🧮
- **Arithmetic:** Addition, Subtraction, Multiplication (+, -, *, /).
- **Logic:** Comparisons (Is A > B?), AND, OR, NOT operations.
- The "Calculator" of the CPU.

#### 3. Cache ⚡
- Stores regularly used data.
- **Grades of Cache:**
    - **L1:** Smallest but fastest.
    - **L2:** Larger, slightly slower.
    - **L3:** Largest, slowest (but still faster than RAM).

---

## 📚 Chapter 3: The Registers 📦
Registers are tiny, super-fast memory locations *inside* the CPU. They hold data that is being worked on *right now*.

| Register | Full Name | Function |
| :--- | :--- | :--- |
| **PC** | Program Counter | Holds the **memory address** of the *next* instruction to be fetched. Increments by 1 after each fetch. |
| **MAR** | Memory Address Register | Holds the **address** of the current instruction/data being fetched from memory. |
| **MDR** | Memory Data Register | Holds the **actual data or instruction** that has just been fetched from memory. |
| **ACC** | Accumulator | Stores the **result** of calculations done by the ALU. |

---

## 📚 Chapter 4: The Fetch-Decode-Execute Cycle 🔄
This is the heartbeat of the computer. It happens billions of times a second.

### 1. FETCH 🚚
1.  **Copy Address:** The address in the **PC** is copied to the **MAR**.
2.  **Fetch Data:** The data at that address in RAM is copied into the **MDR**.
3.  **Increment PC:** The **PC** goes up by 1, pointing to the next instruction.

### 2. DECODE 🧩
The **CU** looks at the instruction in the **MDR** and figures out what it means. It translates binary into commands.

### 3. EXECUTE 🚀
The instruction is carried out.
*   *Example:* Load data from memory, Add two numbers, Jump to a different instruction.

---

## 📚 Chapter 5: Embedded Systems 🤖
An **Embedded System** is a computer system built *into* another device. It has a **dedicated purpose**.

### Examples:
- **Washing Machine:** Controls water, spin speed, timer.
- **Microwave:** Controls power, time.
- **Car Engine Management:** Controls fuel injection.
- **Vending Machine:** Processes coins vs item selection.

### Characteristics:
- Low power consumption.
- Small size.
- Rugged/Reliable.
- Low cost.
- Usually no Operating System (just firmware).

---

## 📝 Concept Check
**Q: What happens if the PC is not incremented?**
*A: The computer would execute the same instruction forever (Infinite Loop).*

**Q: Where is the result of 5 + 3 stored?**
*A: In the Accumulator (ACC).*

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
                            question: "Which of these is an example of an Embedded System?",
                            type: "multiple-choice",
                            options: ["Laptop", "Washing Machine", "Desktop PC", "Mainframe"],
                            correctAnswer: "Washing Machine",
                            explanation: "Embedded systems are computers built into other devices with a specific function.",
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
                    content: `# 💾 1.2 Primary Memory: RAM & ROM

> **"Memory is transient, Storage is forever (mostly)."**

---

## 🎯 Quest Objectives
- ⚡ Distinguish between **RAM** and **ROM**.
- 🧠 Explain the concept of **Virtual Memory**.
- 📏 Understand **Primary vs Secondary Storage**.

**XP Reward:** 100 ⭐

---

## 📚 Chapter 1: Primary Storage (Main Memory)
Primary storage is memory that the CPU can access **directly**. It is very fast compared to secondary storage (Hard drives).

### 1. RAM (Random Access Memory) 💭
*   **Volatile:** Data is LOST when power is turned off.
*   **Read/Write:** The CPU can read data from it and write data to it.
*   **Purpose:** Stores the Operating System, running programs, and data currently in use.
*   **Size:** Typically 4GB - 32GB in modern PCs.

### 2. ROM (Read Only Memory) 🗿
*   **Non-Volatile:** Data is KEPT when power is turned off.
*   **Read-Only:** The CPU can only read; it cannot easily write new data.
*   **Purpose:** Stores the **BIOS / Bootstrap Loader** (Instructions to start the computer).
*   **Size:** Very small (e.g., 2-8 MB).

---

## 📚 Chapter 2: Virtual Memory 👻
What happens when you open too many Chrome tabs and your RAM gets full?

The Operating System uses **Virtual Memory**.

1.  The OS moves data that hasn't been used recently from RAM to a specific section of the **Hard Drive** (Secondary Storage).
2.  This frees up space in RAM for new data.
3.  If the CPU needs that old data, it must be moved **back** from the Hard Drive to RAM (called 'swapping').

### ⚠️ The Problem: Disk Thrashing
Virtual Memory is **much slower** than real RAM. If the computer relies on it too much, it becomes very slow and the hard drive works constantly. This is called "Disk Thrashing".

---

## 📚 Chapter 3: Units of Data 📏
Computers work in binary (1s and 0s).

| Unit | Value | Example size |
| :--- | :--- | :--- |
| **Bit (b)** | A single 1 or 0 | On/Off switch |
| **Nibble** | 4 bits | Half a byte |
| **Byte (B)** | 8 bits | One character of text |
| **Kilobyte (KB)** | 1000 Bytes | A small text file |
| **Megabyte (MB)** | 1000 KB | A MP3 song |
| **Gigabyte (GB)** | 1000 MB | A HD Movie |
| **Terabyte (TB)** | 1000 GB | A modern Hard Drive |
| **Petabyte (PB)** | 1000 TB | Google's data servers |

> *Note: Sometimes KB is defined as 1024 bytes (Binary prefix 'Kibi'), but for GCSE, 1000 is often accepted unless specified otherwise.*

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Compare RAM and ROM", "Explain Virtual Memory", "List Data Units"]
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
                            question: "Which type of memory is volatile?",
                            type: "multiple-choice",
                            options: ["RAM", "ROM", "HDD", "SSD"],
                            correctAnswer: "RAM",
                            explanation: "RAM loses its contents when power is lost.",
                            marks: 1,
                            topic: "Memory"
                        },
                        {
                            id: "mq2",
                            question: "What is stored in ROM?",
                            type: "multiple-choice",
                            options: ["User files", "Bootstrap loader / BIOS", "Currently open apps", "Videos"],
                            correctAnswer: "Bootstrap loader / BIOS",
                            explanation: "ROM stores the startup instructions needed to boot the computer.",
                            marks: 1,
                            topic: "Memory"
                        },
                        {
                            id: "mq3",
                            question: "Why is Virtual Memory slower than RAM?",
                            type: "multiple-choice",
                            options: ["It is further away", "It uses Secondary Storage which is slower", "It is smaller", "It is older technology"],
                            correctAnswer: "It uses Secondary Storage which is slower",
                            explanation: "Virtual memory uses the Hard Drive, which has slower read/write speeds than RAM.",
                            marks: 1,
                            topic: "Virtual Memory"
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
                    content: `# 🌐 1.3 Computer Networks: Connecting the World

## 🎯 Quest Objectives
- 🌍 Define **LAN** and **WAN**.
- 🕸️ Understand **Star** and **Mesh** topologies.
- 📡 Differentiate between **Client-Server** and **Peer-to-Peer**.

---

## 📚 Chapter 1: Types of Networks

### LAN (Local Area Network) 🏠
*   **Area:** Small geographical area (e.g., Home, School, Single Office).
*   **Ownership:** Hardware is owned by the organization.
*   **Connection:** fast (Twisted pair copper or Wi-Fi).

### WAN (Wide Area Network) 🌍
*   **Area:** Large geographical area (e.g., The Internet, Bank connecting branches).
*   **Ownership:** Infrastructure is leased from telecoms companies (BT, Virgin).
*   **Connection:** Slower, uses Fiber Optic, Satellite, Phone lines.

---

## 📚 Chapter 2: Network Topologies

### 🌟 Star Topology
All devices connect to a central **Switch** or **Server**.
*   ✅ **Reliable:** If one cable breaks, others connect fine.
*   ✅ **Fast:** Fewer collisions.
*   ❌ **Cost:** Lots of cable needed.
*   ❌ **Reliance:** If the switch fails, the whole network fails.

### 🕸️ Mesh Topology
All devices connect to multiple other devices. No central switch.
*   ✅ **Self-Healing:** If one route is blocked, data finds another way.
*   ❌ **Cost:** EXTREMELY expensive to wire up (Full Mesh).
*   *Note: The Internet is a partial mesh.*

---

## 📚 Chapter 3: Client-Server vs Peer-to-Peer

### Client-Server 🖥️➡️💾
*   **Server:** Powerful computer controlling security, backups, and files.
*   **Client:** Requests data from the server.
*   *Used in:* Schools, Offices.
*   *Pros:* Centralized backups and security.
*   *Cons:* Expensive, server crash kills network.

### Peer-to-Peer (P2P) 💻↔️💻
*   All computers are equal. No central server.
*   *Used in:* Home networks.
*   *Pros:* Cheap, easy to set up.
*   *Cons:* No central backup, security is hard to manage.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Define LAN/WAN", "Compare Star and Mesh", "Explain Client-Server"]
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
                            question: "Who owns the infrastructure of a LAN?",
                            type: "multiple-choice",
                            options: ["Telecoms Companies", "The User / Organization", "The Government", "Microsoft"],
                            correctAnswer: "The User / Organization",
                            explanation: "In a LAN, you own the cables and switches.",
                            marks: 1,
                            topic: "Networks"
                        },
                        {
                            id: "nq2",
                            question: "Which topology relies on a central switch?",
                            type: "multiple-choice",
                            options: ["Mesh", "Bus", "Star", "Ring"],
                            correctAnswer: "Star",
                            explanation: "Star topology connects all nodes to a central point.",
                            marks: 1,
                            topic: "Networks"
                        },
                        {
                            id: "nq3",
                            question: "What is a disadvantage of a Client-Server network?",
                            type: "multiple-choice",
                            options: ["No central backups", "Expert staff needed to manage server", "Cheap to set up", "Files are stored on local PCs"],
                            correctAnswer: "Expert staff needed to manage server",
                            explanation: "Servers are complex and expensive to maintain.",
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
                    content: `# 🛡️ 1.4 Network Security: Attack & Defense

## 🎯 key Objectives
- 🦠 Identify forms of **Malware**.
- 🎣 Explain **Social Engineering** (Phishing).
- 🔓 Understand **Brute Force** and **DDOS**.
- 💂‍♂️ Learn prevention methods (Firewalls, Encryption).

---

## 📚 Chapter 1: Malware (Malicious Software)

### Types of Malware:
1.  **Virus:** Attaches to a file. Replicates when you open the file. Damages data.
2.  **Worm:** A standalone program. Replicates itself to fill up memory/bandwidth. Doesn't need a host file.
3.  **Trojan:** Disguises itself as legitimate software (e.g., a Free Game). When installed, it opens a backdoor for hackers.
4.  **Ransomware:** Encrypts your files and demands payment (Bitcoin) to unlock them.
5.  **Spyware:** Records key presses (Keylogger) to steal passwords.

---

## 📚 Chapter 2: Social Engineering & Hacking

### 🎣 Phishing
sending emails pretending to be a bank or company to trick users into giving up passwords.
*   *Clues:* Bad spelling, urgent tone ("Act Now!"), generic greeting ("Dear Customer").

### 🔨 Brute Force Attack
Trying every possible combination of passwords.
*   *Defense:* Account lockout (3 attempts), Strong passwords, 2-Factor Authentication (2FA).

### 🌊 DDOS (Distributed Denial of Service)
Flooding a web server with millions of requests from hacked computers (Botnet) so it crashes.

---

## 📚 Chapter 3: Defenses

| Method | Function |
| :--- | :--- |
| **Firewall** | Checks incoming/outgoing traffic. Blocks unauthorized access. |
| **Anti-Malware** | Scans for and removes known viruses. |
| **Encryption** | Scrambling data so it cannot be read if intercepted. |
| **User Access Levels** | Giving staff only the permissions they need (e.g., Read-Only). |
| **Penetration Testing** | Employing "White Hat" hackers to find weaknesses. |

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
                            question: "What differentiates a Worm from a Virus?",
                            type: "multiple-choice",
                            options: ["Worms are bigger", "Worms do not need a host file to replicate", "Viruses are safe", "There is no difference"],
                            correctAnswer: "Worms do not need a host file to replicate",
                            explanation: "Worms are standalone programs that self-replicate.",
                            marks: 1,
                            topic: "Malware"
                        },
                        {
                            id: "sq2",
                            question: "Which attack involves flooding a server with traffic?",
                            type: "multiple-choice",
                            options: ["Phishing", "SQL Injection", "DDOS", "Brute Force"],
                            correctAnswer: "DDOS",
                            explanation: "Distributed Denial of Service aims to crash the server by overloading it.",
                            marks: 1,
                            topic: "Threats"
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
                    content: `# 💻 1.5 Operating Systems

## 🎯 Objectives
- ⚙️ Functions of an **Operating System (OS)**.
- 🔧 **Utility Software**.

---

## 📚 Chapter 1: Functions of the OS
The OS (like Windows, macOS, Android) manages the hardware. It is the bridge between the User and the Hardware.

### 1. User Interface (UI)
*   **GUI (Graphical User Interface):** WIMP (Windows, Icons, Menus, Pointers). Easy to use.
*   **CLI (Command Line Interface):** Text based. Harder to use, but powerful for experts.

### 2. Memory Management 🧠
*   Manages RAM.
*   Multitasking: Keeps programs separate in memory so they don't crash each other.
*   Handles Virtual Memory.

### 3. Peripheral Management 🖱️
*   Communicates with hardware (Printers, Mice) using **Drivers**.

### 4. File Management 📁
*   Organizes data into folders and files.
*   Permissions (Read, Write, Execute).

### 5. User Management 👥
*   Logins, Passwords, Access rights.

---

## 📚 Chapter 2: Utility Software
Small programs that maintain the system.

1.  **Defragmentation:** Reorganizes files on a magnetic Hard Drive so they are contiguous. Speeds up read times. (Not needed for SSDs).
2.  **Compression:** Reduces file size (e.g., .zip) to save space or speed up transmission.
3.  **Encryption:** Scrambles data for security.
4.  **Backup:** Copies data to another location in case of failure.

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
                            question: "Which UI is text-based?",
                            type: "multiple-choice",
                            options: ["GUI", "WIMP", "CLI", "Touchscreen"],
                            correctAnswer: "CLI",
                            explanation: "Command Line Interface uses text commands.",
                            marks: 1,
                            topic: "OS"
                        },
                        {
                            id: "oq2",
                            question: "What does Defragmentation do?",
                            type: "multiple-choice",
                            options: ["Deletes viruses", "Groups file parts together on the disk", "Compresses files", "Installs drivers"],
                            correctAnswer: "Groups file parts together on the disk",
                            explanation: "It fixes fragmented files to improve read speed on HDDs.",
                            marks: 1,
                            topic: "Utility"
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
                    content: `# ⚖️ 1.6 Ethics and Law

## 📜 Key Legislation (Laws)

### 1. Data Protection Act (2018) / GDPR 🔒
Controls how your personal data is used.
*   Data must be kept secure.
*   Used fairly and lawfully.
*   Kept for no longer than necessary.

### 2. Computer Misuse Act (1990) ⚔️
Makes Hacking illegal.
1.  Unauthorised access (basic hacking).
2.  Unauthorised access with intent to commit crime (stealing data).
3.  Modification of data (viruses / deleting files).

### 3. Copyright, Designs and Patents Act (1988) ©
Protects Intellectual Property (Music, Books, Software).
*   Illegal to copy or distribute without permission (Piracy).

---

## 🌍 Environmental Issues

### E-Waste 🗑️
Old computers contain toxic chemicals (Lead, Mercury) which leak into the ground in landfill.

### Data Centers ⚡
The internet uses huge amounts of electricity for cooling servers, contributing to carbon emissions.

---

## 🏙️ Cultural Issues

### The Digital Divide 📉
The gap between those who have technology/internet and those who don't.
*   *Causes:* Poverty, Age, Location (Rural areas).
*   *Impact:* People left behind regarding jobs and education.

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
                            question: "Whch Act makes hacking illegal?",
                            type: "multiple-choice",
                            options: ["Data Protection Act", "Computer Misuse Act", "Copyright Act", "Freedom of Info Act"],
                            correctAnswer: "Computer Misuse Act",
                            explanation: "The CMA (1990) specifically criminalizes unauthorized access.",
                            marks: 1,
                            topic: "Legislation"
                        },
                        {
                            id: "eq2",
                            question: "What is the Digital Divide?",
                            type: "multiple-choice",
                            options: ["Separation of RAM and ROM", "Gap between technology haves and have-nots", "Dividing binary numbers", "A firewall setting"],
                            correctAnswer: "Gap between technology haves and have-nots",
                            explanation: "It refers to inequality in access to technology.",
                            marks: 1,
                            topic: "Culture"
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
                    content: `# 🔎 2.1 Searching & Sorting Algorithms

> **"Algorithms are step-by-step instructions to solve a problem."**

---

## 🎯 Objectives
- 🕵️‍♂️ Perform **Linear** and **Binary Searches**.
- 🔢 Perform **Bubble**, **Merge**, and **Insertion Sorts**.
- 📝 Understand **Pseudocode**.

**XP Reward:** 200 ⭐

---

## 📚 Chapter 1: Searching

### 🚶 Linear Search
Check items one by one from the start.
*   *Method:* Look at item 1. Is it the target? If no, move to item 2.
*   **Pros:** Works on **unsorted** lists. Easy to program.
*   **Cons:** Very slow for large lists.

### 🌳 Binary Search
Divide and conquer!
*   **Rule:** List **MUST** be sorted first.
*   **Method:**
    1.  Pick the middle item.
    2.  If it's the target, stop.
    3.  If target is lower, discard the right half.
    4.  If target is higher, discard the left half.
    5.  Repeat with the remaining list.
*   **Pros:** Extremely fast for large lists.

---

## 📚 Chapter 2: Sorting

### 🫧 Bubble Sort
"Bubbles" the largest number to the top.
1.  Compare first pair. Swap if in wrong order.
2.  Move to next pair. Repeat until end of list.
3.  This is 'Pass 1'. Repeat whole process until no swaps are made.
*   *Efficiency:* Slow.

### 📥 Insertion Sort
Like sorting playing cards in your hand.
1.  Take the second card. Compare to the first. Insert in correct place.
2.  Take third card. Compare to previous ones. Insert.
3.  Repeat.

### 🤝 Merge Sort
A recursive "Divide and Conquer" algorithm.
1.  **Divide:** Split the list in half again and again until every sub-list has only 1 item.
2.  **Conquer:** Merge pairs of sub-lists back together, putting items in order as you merge.
*   *Efficiency:* Very fast (n log n).

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
                            question: "If I have 1000 items, and I check them one by one, what search is this?",
                            type: "multiple-choice",
                            options: ["Linear Search", "Binary Search", "Merge Search", "Quick Search"],
                            correctAnswer: "Linear Search",
                            explanation: "Linear search iterates sequentially.",
                            marks: 1,
                            topic: "Searching"
                        },
                        {
                            id: "q_algo2",
                            question: "What is the requirement for Binary Search?",
                            type: "multiple-choice",
                            options: ["List must be uneven", "List must be short", "List must be sorted", "List must be numbers"],
                            correctAnswer: "List must be sorted",
                            explanation: "You cannot eliminate half the data logically if the data is random.",
                            marks: 1,
                            topic: "Searching"
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
                    title: "Variables and Constructs",
                    content: `# ⌨️ 2.2 Programming Fundamentals

## 🧱 The Building Blocks

### 1. Variables
A named location in memory used to store data.
\`\`\`python
score = 10
name = "Alice"
\`\`\`

### 2. Constants
Data that does NOT change during the program run.
\`\`\`python
PI = 3.14159
\`\`\`

---

## 🧶 Data Types

| Type | Description | Example |
| :--- | :--- | :--- |
| **Integer** | Whole number | 5, -10 |
| **Real/Float** | Decimal number | 3.5, -0.99 |
| **Boolean** | Logical | True, False |
| **String** | Text | "Hello World" |
| **Char** | Single character | 'A', '$' |

> **Casting:** Changing data from one type to another. e.g. \`int("5")\` becomes integer 5.

---

## 🚦 Programming Constructs

### Sequence
Code runs line by line, top to bottom.

### Selection (IF Statements)
Making a decision.
\`\`\`python
if age >= 18:
    print("Adult")
else:
    print("Child")
\`\`\`

### Iteration (Loops)
Repeating code.
1.  **Count Controlled (FOR Loop):** Repeat a set number of times.
    \`for i in range(10):\`
2.  **Condition Controlled (WHILE Loop):** Repeat UNTIL a condition is true.
    \`while hungry == True:\`

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
                            question: "What loop would you use to repeat code exactly 10 times?",
                            type: "multiple-choice",
                            options: ["IF statement", "WHILE loop", "FOR loop", "DO loop"],
                            correctAnswer: "FOR loop",
                            explanation: "For loops are count-controlled.",
                            marks: 1,
                            topic: "Iteration"
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
                    content: `# 🛡️ 2.3 Robust Programs

## ⚠️ Defensive Design
 writing code that does not crash, even when the user is stupid or malicious.

### 1. Input Sanitization
Removing unwanted characters from input before processing.
*   *Example:* Removing SQL commands from a password input to prevent SQL Injection.

### 2. Validation
Checking if data matches the rules **before** accepting it.
*   **Range Check:** Is the number within limits? (e.g. Age 0-120).
*   **Type Check:** Is it the right data type? (Number vs String).
*   **Length Check:** Is the password long enough?
*   **Presence Check:** Has data been entered?

---

## 🧪 Testing

### Iterative Testing
Testing **during** development. Line by line.

### Final / Terminal Testing
Testing at the **end** of development.

### Test Data Types
1.  **Normal:** Data that should working. (e.g., Age 25).
2.  **Boundary:** Data on the limit. (e.g., Age 0 or 120).
3.  **Invalid/Erroneous:** Data that should fail. (e.g., Age -5, or "Ten").

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
                            question: "Testing done whilst writing the code is called...?",
                            type: "multiple-choice",
                            options: ["Final Testing", "Iterative Testing", "Beta Testing", "A/B Testing"],
                            correctAnswer: "Iterative Testing",
                            explanation: "Iterative means repeating, happening as part of the cycle.",
                            marks: 1,
                            topic: "Testing"
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
                    content: `# 🔌 2.4 Boolean Logic

## ⚡ The Logic Gates

### AND Gate (D Shape)
*   Output is 1 (True) ONLY if **Input A** AND **Input B** are both 1.
*   Formula: Q = A AND B (or A.B)

### OR Gate (Arrowhead Shape)
*   Output is 1 (True) if **Input A** OR **Input B** (or both) are 1.
*   Formula: Q = A OR B (or A+B)

### NOT Gate (Triangle with bubble)
*   Output is the opposite of the input.
*   Formula: Q = NOT A (or Ā)

---

## 📋 Truth Tables
A table showing every possible combination of inputs and the resulting output.

| A | B | AND | OR |
|---|---|-----|----|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

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
                            question: "Which gate outputs 1 only when both inputs are 1?",
                            type: "multiple-choice",
                            options: ["OR", "NOT", "AND", "XOR"],
                            correctAnswer: "AND",
                            explanation: "AND requires all inputs to be true.",
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
                    content: `# 🛠️ 2.5 IDEs and Languages

## 🗣️ High vs Low Level Languages

### High Level Languages (HLL)
*   **Examples:** Python, Java, C#.
*   **Features:** Close to English, easy to read/write/debug.
*   **Translation:** Must be translated by a Compiler or Interpreter.
*   **Hardware:** Portable (runs on many CPU types).

### Low Level Languages (LLL)
*   **Machine Code:** Binary (10110). Executed directly by CPU.
*   **Assembly Language:** Uses mnemonics (ADD, SUB, MOV). 1-to-1 relationship with machine code.
*   **Use Code:** Embedded systems, device drivers.
*   **Pros:** Very fast, memory efficient.
*   **Cons:** Very hard to write, specific to one CPU type.

---

## 🔧 The IDE (Integrated Development Environment)
Software that helps programmers write code.

### Common Tools:
1.  **Editor:** Write code. Has syntax highlighting (colors) and auto-completion.
2.  **Error Diagnostics:** Highlights syntax errors (wavy red lines) and suggestions.
3.  **Run-Time Environment:** Button to 'Run' the code.
4.  **Debugger:** Allows you to pause execution (breakpoints), step through line-by-line, and inspect variable values.
5.  **Translator:** Compiler or Interpreter built-in.

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
                            question: "Which type of language is Python?",
                            type: "multiple-choice",
                            options: ["High Level", "Low Level", "Machine Code", "Assembly"],
                            correctAnswer: "High Level",
                            explanation: "Python is designed to be readable by humans.",
                            marks: 1,
                            topic: "Languages"
                        },
                        {
                            id: "iq2",
                            question: "Which IDE tool is used to find logic errors by stepping through code?",
                            type: "multiple-choice",
                            options: ["Editor", "Compiler", "Debugger", "Auto-correct"],
                            correctAnswer: "Debugger",
                            explanation: "Debuggers allow inspection of running code.",
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
