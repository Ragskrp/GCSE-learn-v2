
import { Subject } from "@/types/curriculum";

export const year10ComputerScienceJ277: Subject = {
    id: "computer-science-j277",
    name: "OCR: Computer Science",
    duration: 120,
    questions: 50,
    color: "from-purple-400 to-fuchsia-500",
    icon: "💻",
    level: 1,
    xp: 0,
    maxXp: 2000,
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
                    id: "cpu-architecture-1",
                    title: "CPU Components & Architecture",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Explain CPU purpose", "Identify CU, ALU and Cache functions", "Describe Von Neumann architecture"],
                    content: `# 🧠 1.1 Systems Architecture: Part 1

> [!NOTE]
> **Core Purpose:** The CPU (Central Processing Unit) is the "brain" of the computer. Its primary job is to **Process Data** by following instructions.

---

## 🏛️ The Inner Workings of the CPU

The CPU is made of three main internal components:

1.  **Control Unit (CU):**
    *   Coordinates all CPU activities.
    *   Manages the Fetch-Decode-Execute cycle.
    *   Controls the flow of data inside and outside the CPU.
2.  **Arithmetic Logic Unit (ALU):**
    *   Performs all calculations (Addition, Subtraction, etc.).
    *   Performs logical operations (AND, OR, NOT) and comparisons (<, >, ==).
3.  **Cache:**
    *   Extremely fast memory located directly on the CPU.
    *   Stores frequently used instructions and data.
    *   **Rule:** Larger cache = Faster processing (less time spent fetching from slow RAM).

---

## 🏛️ Von Neumann Architecture

John von Neumann proposed the "Stored Program" concept where both **instructions and data** are stored in the same memory (RAM).

### The Registers (Tiny, High-Speed Storage)
Registers are special-purpose memory locations inside the CPU:

| Register | Name | Role |
| :--- | :--- | :--- |
| **PC** | Program Counter | Holds the **memory address** of the *next* instruction. |
| **MAR** | Memory Address Register | Holds the address of the data/instruction being fetched. |
| **MDR** | Memory Data Register | Holds the *actual data* or instruction just fetched. |
| **ACC** | Accumulator | Stores the results of calculations performed by the ALU. |
`
                },
                {
                    id: "cpu-fde-performance",
                    title: "The FDE Cycle & Performance",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Master the Fetch-Decode-Execute cycle", "Explain factors affecting performance", "Identify embedded systems"],
                    content: `# 🔄 Fetch-Decode-Execute: The Heartland Cycle

Every second, your CPU performs billions of cycles. This is the rhythmic "heartbeat" of the machine.

---

## 🏛️ Step-by-Step FDE Cycle

1.  **FETCH:**
    *   The address in the **PC** is copied to the **MAR**.
    *   The CPU sends a signal to RAM to fetch the instruction at that address.
    *   The instruction is copied into the **MDR**.
    *   The **PC** increments by 1.
2.  **DECODE:**
    *   The **Control Unit (CU)** decodes the instruction to see what needs to be done.
3.  **EXECUTE:**
    *   The instruction is carried out (e.g., ALU does a sum or data is moved).

---

## 🏛️ Performance Factors (The "Big Three")

Why is one computer faster than another?

1.  **Clock Speed:** Number of cycles per second (Gigahertz - GHz). 
2.  **Number of Cores:** More cores allow for "Parallel Processing" (doing multiple tasks at once).
3.  **Cache Size:** More cache means fewer trips to the slow RAM.

---

## 🤖 Embedded Systems

An **Embedded System** is a computer with a **dedicated, single purpose** built into a larger device.

*   **Traits:** Low power, low cost, highly reliable, robust.
*   **Examples:** Microwaves, ABS brakes, Washing machines, Smart bulbs.

> [!WARNING]
> General-purpose computers (like your laptop) are **NOT** embedded systems because they can perform many different tasks.
`
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
                    id: "primary-memory-ram",
                    title: "Primary Memory & RAM",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Contrast RAM and ROM", "Explain Virtual Memory", "Identify Flash memory traits"],
                    content: `# 💾 Primary Memory: RAM vs ROM

> [!NOTE]
> **Primary Storage** is memory that the CPU can access **directly**. It is much faster than secondary storage.

---

## 🏛️ RAM (Random Access Memory) 💭

RAM is the "temporary workspace" of your computer.
*   **Volatile:** Data is **LOST** instantly if the power goes out.
*   **Read/Write:** The CPU can both read from and write to it.
*   **Role:** Holds the Operating System, open applications, and data being processed *right now*.
*   **Performance:** Adding more RAM allows more programs to run simultaneously without slowing down.

---

## 🏛️ ROM (Read Only Memory) 🗿

ROM is the "unforgettable" memory.
*   **Non-Volatile:** Data is **KEPT** even without power.
*   **Read-Only:** Under normal circumstances, you cannot change the contents.
*   **Role:** Holds the **BIOS** (Basic Input/Output System) or "Bootstrap Loader" — instructions needed to start the computer.

---

## 🏛️ Virtual Memory (The Ghost RAM) 👻

What happens when your RAM is full?
1.  The CPU uses a section of the **Hard Drive** as if it were RAM.
2.  Data that hasn't been used recently is "paged" out to the disk.
3.  **The Catch:** Virtual memory is much **slower** than real RAM. If the CPU is constantly swapping data back and forth, it causes **Disk Thrashing**.
`
                },
                {
                    id: "secondary-storage-devices",
                    title: "Secondary Storage Devices",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Compare Magnetic, Optical, and Solid State", "List characteristics (6 markers)", "Choose the right storage for a scenario"],
                    content: `# 💿 Secondary Storage: Long-Term Memory

Secondary storage is **Non-Volatile** storage used to save data (files, photos, OS) permanently. The CPU cannot access it directly.

---

## 🏛️ The Three Main Technologies

| Type | Physical Method | Examples | Pros | Cons |
| :--- | :--- | :--- | :--- | :--- |
| **Magnetic** | Magnetic platters & heads. | HDD (Hard Drive) | Cheap, High Capacity | Moving parts, fragile. |
| **Optical** | Lasers reading pits/lands. | DVD, Blu-Ray | Cheap, Portable | Slow, Easily damaged. |
| **Solid State** | Electrical charges in flash. | SSD, USB stick | Super Fast, Robust | Expensive, Limited life. |

---

## 🏛️ Measuring Storage (The 6 Factors)

When choosing storage, you evaluate these 6 traits:
1.  **Capacity:** How much data can it hold?
2.  **Speed:** How fast can data be read/written?
3.  **Portability:** Can it be moved easily?
4.  **Durability:** How well does it handle being dropped/knocked?
5.  **Reliability:** How long will it last before failing?
6.  **Cost:** What is the cost per Gigabyte?

> [!TIP]
> **Scenario:** A photographer needs to give photos to a client. 
> *   **Choice:** USB Stick or Optical Disc (Cheap/Portable).
> **Scenario:** A data center backing up terabytes of video.
> *   **Choice:** Magnetic Tape (High Capacity/Low Cost).
`
                },
                {
                    id: "data-binary-hex",
                    title: "Data: Bits, Binary & Hex",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Convert Binary to Denary", "Convert Denary to Hex", "Identify units of storage"],
                    content: `# 🔢 Data Representation: The Language of Computers

Computers only understand **Binary** (Base 2) because they are made of billions of tiny transistors that can either be ON (1) or OFF (0).

---

## 🏛️ The Units of Storage

| Unit | Size |
| :--- | :--- |
| **Bit (b)** | A single 0 or 1. |
| **Nibble** | 4 bits. |
| **Byte (B)** | 8 bits (one character). |
| **Kilobyte (KB)** | 1,000 bytes. |
| **Megabyte (MB)** | 1,000 KB. |
| **Gigabyte (GB)** | 1,000 MB. |
| **Terabyte (TB)** | 1,000 GB. |

---

## 🏛️ Binary & Hexadecimal

*   **Binary (Base 2):** 0, 1
*   **Denary (Base 10):** 0-9 (Human numbers)
*   **Hexadecimal (Base 16):** 0-9 and **A-F**. 
    *   *A=10, B=11, C=12, D=13, E=14, F=15*

### Why use Hex?
Hex is easier for humans to read than long strings of binary. It is also more compact.
**One Hex digit equals exactly 4 binary bits (one nibble).**

> [!IMPORTANT]
> **Calculation Check:** 
> Binary \`1010\` is \`10\` in Denary, which is \`A\` in Hex.
`
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
                            id: "m1",
                            question: "Which of these is volatile memory?",
                            type: "multiple-choice",
                            options: ["RAM", "ROM", "SSD", "Hard Drive"],
                            correctAnswer: "RAM",
                            explanation: "RAM loses its contents when power is removed.",
                            marks: 1,
                            topic: "Memory"
                        },
                        {
                            id: "m2",
                            question: "Where is the BIOS / Bootstrap loader stored?",
                            type: "multiple-choice",
                            options: ["RAM", "ROM", "Virtual Memory", "Cache"],
                            correctAnswer: "ROM",
                            explanation: "ROM stores non-volatile startup instructions.",
                            marks: 1,
                            topic: "Memory"
                        },
                        {
                            id: "m3",
                            question: "What is Virtual Memory?",
                            type: "multiple-choice",
                            options: [
                                "Extra RAM chips",
                                "Temporary file on secondary storage used as RAM",
                                "Cloud storage",
                                "Fast cache memory"
                            ],
                            correctAnswer: "Temporary file on secondary storage used as RAM",
                            explanation: "Virtual memory helps when physical RAM is full.",
                            marks: 1,
                            topic: "Memory"
                        },
                        {
                            id: "m4",
                            question: "Which storage technology has no moving parts?",
                            type: "multiple-choice",
                            options: ["Magnetic", "Optical", "Solid State", "Tape"],
                            correctAnswer: "Solid State",
                            explanation: "SSD uses flash memory with zero moving parts.",
                            marks: 1,
                            topic: "Storage"
                        },
                        {
                            id: "m5",
                            question: "How many bits are in a Kilobyte in GCSE (simplified)?",
                            type: "multiple-choice",
                            options: ["1024", "1000", "8000", "8"],
                            correctAnswer: "8000",
                            explanation: "1000 bytes = 1 KB. Since 1 byte = 8 bits, 1000 x 8 = 8000.",
                            marks: 1,
                            topic: "Units"
                        },
                        {
                            id: "m6",
                            question: "What is the denary value of the binary number 1001?",
                            type: "multiple-choice",
                            options: ["5", "9", "7", "10"],
                            correctAnswer: "9",
                            explanation: "8 + 0 + 0 + 1 = 9.",
                            marks: 1,
                            topic: "Data"
                        },
                        {
                            id: "m7",
                            question: "Which storage is best for archiving terabytes of data cheaply?",
                            type: "multiple-choice",
                            options: ["SSD", "USB Pen", "Magnetic Tape", "Cloud"],
                            correctAnswer: "Magnetic Tape",
                            explanation: "Tape has the lowest cost per Gigabyte for huge backups.",
                            marks: 1,
                            topic: "Storage"
                        },
                        {
                            id: "m8",
                            question: "What Hex digit represents the denary number 13?",
                            type: "multiple-choice",
                            options: ["C", "D", "E", "F"],
                            correctAnswer: "D",
                            explanation: "A=10, B=11, C=12, D=13.",
                            marks: 1,
                            topic: "Data"
                        },
                        {
                            id: "m9",
                            question: "Which factor refers to how well storage handles drops?",
                            type: "multiple-choice",
                            options: ["Capacity", "Durability", "Portability", "Reliability"],
                            correctAnswer: "Durability",
                            explanation: "Durability describes the physical robustness.",
                            marks: 1,
                            topic: "Storage"
                        },
                        {
                            id: "m10",
                            question: "Why is ROM non-volatile?",
                            type: "multiple-choice",
                            options: [
                                "It keeps data without power",
                                "It is very fast",
                                "It can be written to easily",
                                "It uses lasers"
                            ],
                            correctAnswer: "It keeps data without power",
                            explanation: "Non-volatile means the data is permanent.",
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
                    id: "networks-types-topologies",
                    title: "Network Types & Topologies",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Contrast LAN and WAN", "Identify network hardware", "Compare Star and Mesh topologies"],
                    content: `# 🌐 1.3 Networks: Types & Topologies

> [!NOTE]
> **What is a Network?** Simply two or more computers connected together to share resources (files, internet, printers).

---

## 🏛️ LAN vs WAN: The Scale of Networks

### 🏠 LAN (Local Area Network)
*   **Scale:** Small geographical area (Home, School, Single Office).
*   **Infrastructure:** Owned by the organization.
*   **Speed:** Very high.

### 🌍 WAN (Wide Area Network)
*   **Scale:** Large geographical area (Multiple cities, countries).
*   **Infrastructure:** Leased from Telecom companies (Fiber optics, satellites).
*   **The Internet** is the largest WAN in existence.

---

## 🏛️ Network Hardware

1.  **NIC (Network Interface Controller):** The hardware inside a device that allows it to connect to a network.
2.  **Switch:** Connects devices on a LAN. It is **intelligent**: it only sends data to the specific device that needs it.
3.  **Router:** Connects different networks together (e.g., your home LAN to the Internet WAN).
4.  **WAP (Wireless Access Point):** Connects wireless devices to the wired network.

---

## 🏛️ Network Topologies

### 🌟 Star Topology
All devices connect to a central **Switch**. 
*   **Pros:** If one cable breaks, only that device is affected. Easy to add new devices.
*   **Cons:** If the central switch fails, the whole network goes down.

### 🕸️ Mesh Topology
Every device is connected to every other device (directly or indirectly).
*   **Pros:** Highly resilient with no single point of failure (Self-healing).
*   **Cons:** Very expensive to install due to the amount of cabling/hardware required.
`
                },
                {
                    id: "protocols-layers-internet",
                    title: "Protocols & Layers",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Master TCP/IP model layers", "Describe common protocols", "Explain the concept of Packet Switching"],
                    content: `# 📜 Protocols & The 4-Layer Model

A **Protocol** is simply a set of rules for how computers communicate. Without them, computers would be speaking different languages.

---

## 🏛️ Common Protocols

| Protocol | Name | Use Case |
| :--- | :--- | :--- |
| **HTTP/S** | HyperText Transfer Protocol | Browsing webpages. **S** stands for Secure (Encrypted). |
| **FTP** | File Transfer Protocol | Sending files across a network. |
| **SMTP** | Simple Mail Transfer Protocol | **Sending** emails to a server. |
| **IMAP** | Internet Message Access Protocol | **Retrieving** (viewing) emails. |
| **TCP** | Transmission Control Protocol | Breaks data into **packets** and ensures they arrive safely. |
| **IP** | Internet Protocol | Directs packets to the correct destination using **IP Addresses**. |

---

## 🏛️ The 4-Layer TCP/IP Model 🍰

Why use layers? Layers allow developers to focus on one area (like the app) without worrying about how the physical cables work.

1.  **Application Layer:** Where the user interacts with the network (e.g., Chrome, Outlook).
2.  **Transport Layer:** Breaks data into packets and numbers them (TCP).
3.  **Internet Layer:** Addresses and routes the packets (IP).
4.  **Link Layer:** The physical hardware (Cables, NIC, Wi-Fi).

---

## 🏛️ IP vs MAC Addresses

*   **MAC Address:** A unique, **permanent** ID assigned to every network card in the factory. It cannot be changed.
*   **IP Address:** A **temporary** address assigned to a device when it joins a network. It changes depending on where you are.
`
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
                            id: "n1",
                            question: "Which of these is a large-scale network covering a country?",
                            type: "multiple-choice",
                            options: ["LAN", "WAN", "PAN", "WAP"],
                            correctAnswer: "WAN",
                            explanation: "Wide Area Networks cover large geographical areas.",
                            marks: 1,
                            topic: "Network Types"
                        },
                        {
                            id: "n2",
                            question: "Which protocol is used to retrieve emails?",
                            type: "multiple-choice",
                            options: ["SMTP", "FTP", "IMAP", "HTTP"],
                            correctAnswer: "IMAP",
                            explanation: "IMAP (and POP) are used for retrieving mail.",
                            marks: 1,
                            topic: "Protocols"
                        },
                        {
                            id: "n3",
                            question: "What is the function of a Router?",
                            type: "multiple-choice",
                            options: [
                                "Connecting devices on a LAN",
                                "Connecting different networks together",
                                "Providing wireless signals",
                                "Storing webpage files"
                            ],
                            correctAnswer: "Connecting different networks together",
                            explanation: "Routers forward packets between networks (e.g. LAN to WAN).",
                            marks: 1,
                            topic: "Hardware"
                        },
                        {
                            id: "n4",
                            question: "Which topology is the most resilient to cable failure?",
                            type: "multiple-choice",
                            options: ["Star", "Mesh", "Bus", "Ring"],
                            correctAnswer: "Mesh",
                            explanation: "Mesh networks have multiple paths for data.",
                            marks: 1,
                            topic: "Topologies"
                        },
                        {
                            id: "n5",
                            question: "In the 4-layer model, what is the layer closest to the user?",
                            type: "multiple-choice",
                            options: ["Transport", "Internet", "Application", "Link"],
                            correctAnswer: "Application",
                            explanation: "Application layer is where user software operates.",
                            marks: 1,
                            topic: "Layers"
                        },
                        {
                            id: "n6",
                            question: "What does the 'S' in HTTPS stand for?",
                            type: "multiple-choice",
                            options: ["Simple", "Secure", "Special", "System"],
                            correctAnswer: "Secure",
                            explanation: "HTTPS uses SSL/TLS encryption for security.",
                            marks: 1,
                            topic: "Protocols"
                        },
                        {
                            id: "n7",
                            question: "Which address is permanent and assigned in the factory?",
                            type: "multiple-choice",
                            options: ["IP Address", "MAC Address", "Web Address", "Postcode"],
                            correctAnswer: "MAC Address",
                            explanation: "Media Access Control addresses are fixed to the NIC.",
                            marks: 1,
                            topic: "Addressing"
                        },
                        {
                            id: "n8",
                            question: "What is the primary role of a Switch?",
                            type: "multiple-choice",
                            options: [
                                "To connect individual devices on a LAN",
                                "To connect a LAN to the Internet",
                                "To host websites",
                                "To encrypt files"
                            ],
                            correctAnswer: "To connect individual devices on a LAN",
                            explanation: "Switches connect devices within a single local network.",
                            marks: 1,
                            topic: "Hardware"
                        },
                        {
                            id: "n9",
                            question: "Which protocol breaks data into packets and manages their delivery?",
                            type: "multiple-choice",
                            options: ["IP", "TCP", "HTTP", "FTP"],
                            correctAnswer: "TCP",
                            explanation: "Transmission Control Protocol manages packet assembly/ordering.",
                            marks: 1,
                            topic: "Protocols"
                        },
                        {
                            id: "n10",
                            question: "What is a major disadvantage of Star topology?",
                            type: "multiple-choice",
                            options: [
                                "One broken cable kills the whole network",
                                "The central switch is a single point of failure",
                                "It is very slow",
                                "It cannot be used for Wi-Fi"
                            ],
                            correctAnswer: "The central switch is a single point of failure",
                            explanation: "If the hub/switch dies, no device can communicate.",
                            marks: 1,
                            topic: "Topologies"
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
                    id: "security-threats-malware",
                    title: "Threats & Malware",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Identify types of malware", "Explain Social Engineering", "Describe DDOS and SQL Injection"],
                    content: `# 🦠 1.4 Network Security: The Threats

In the digital world, threats come from many directions. Some are automated (Malware), while others target human psychology (Social Engineering).

---

## 🏛️ Malware (Malicious Software)

| Malware Type | Description |
| :--- | :--- |
| **Virus** | Needs a host file to run. It replicates and damages/deletes data. |
| **Worm** | Standalone program. Replicates across networks, often slowing them down. |
| **Trojan** | Disguised as legitimate software. Opens a "backdoor" for hackers. |
| **Ransomware** | Encrypts your files and demands money (usually Bitcoin) for the key. |
| **Spyware** | Secretly records your actions (e.g., Keyloggers recording passwords). |

---

## 🏛️ Human & Technical Attacks

### 🎭 Social Engineering
Targeting the "weakest link" in security: **People**.
*   **Phishing:** Sending fake emails that look like they're from a bank to steal login details.
*   **Shouldering:** Looking over someone's shoulder while they type their PIN.

### 💻 Technical Attacks
*   **Brute Force:** Using software to try every possible password combination until one works.
*   **DDOS (Distributed Denial of Service):** Flooding a server with so much traffic that it crashes.
*   **SQL Injection:** Typing SQL commands into a website's input box (like a search bar) to steal data from the database.
`
                },
                {
                    id: "security-prevention-defences",
                    title: "Prevention & Defences",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Explain the role of Firewalls", "Identify 'White Hat' hacking", "Describe internal security measures"],
                    content: `# 🛡️ Defending the Network

Having identified the threats, how do we stop them? Real security uses **Layers of Defence**.

---

## 🏛️ The Great Wall: Firewalls

A **Firewall** acts as a barrier between your internal network and the outside world (the Internet).
*   It monitors all incoming and outgoing **packets**.
*   It blocks unauthorized traffic based on a set of rules.

---

## 🏛️ Proactive Defence: Penetration Testing

Organizations hire "White Hat" (ethical) hackers to perform **Penetration Testing**.
*   They try to hack the system to find bugs.
*   They report these bugs so they can be fixed *before* a real "Black Hat" hacker finds them.

---

## 🏛️ Internal Security Measures

1.  **Anti-Malware:** Software that scans your computer for known malware signatures and deletes them.
2.  **User Access Levels:** Ensures users only have access to files they *need* for their job (Least Privilege).
3.  **Passwords:** Using strong, complex passwords that are changed regularly.
4.  **Encryption:** Scrambling data so that even if it's stolen, it's unreadable without a secret "key".
5.  **Physical Security:** Using locks, biometrics (fingerprints), and CCTV to protect server rooms.
`
                }
            ],
            quizzes: [
                {
                    id: "security-exit-test",
                    title: "End of Topic Test: Network Security",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "s1",
                            question: "Which type of malware replicates itself across a network without a host file?",
                            type: "multiple-choice",
                            options: ["Virus", "Worm", "Trojan", "Spyware"],
                            correctAnswer: "Worm",
                            explanation: "Worms are standalone and self-replicating.",
                            marks: 1,
                            topic: "Malware"
                        },
                        {
                            id: "s2",
                            question: "What is the primary purpose of a Firewall?",
                            type: "multiple-choice",
                            options: [
                                "To speed up the internet",
                                "To monitor and filter packet traffic",
                                "To back up files",
                                "To encrypt emails"
                            ],
                            correctAnswer: "To monitor and filter packet traffic",
                            explanation: "Firewalls block unauthorized access based on traffic rules.",
                            marks: 1,
                            topic: "Defences"
                        },
                        {
                            id: "s3",
                            question: "Which attack floods a server with traffic to make it crash?",
                            type: "multiple-choice",
                            options: ["Phishing", "DDOS", "SQL Injection", "Brute Force"],
                            correctAnswer: "DDOS",
                            explanation: "Distributed Denial of Service aims to overwhelm a server.",
                            marks: 1,
                            topic: "Threats"
                        },
                        {
                            id: "s4",
                            question: "What does 'Social Engineering' target?",
                            type: "multiple-choice",
                            options: ["The Firewall", "The Database", "The User (Humans)", "The Router"],
                            correctAnswer: "The User (Humans)",
                            explanation: "Social engineering manipulates people into giving away secrets.",
                            marks: 1,
                            topic: "Threats"
                        },
                        {
                            id: "s5",
                            question: "What is an Ethical (White Hat) hacker hired to do?",
                            type: "multiple-choice",
                            options: [
                                "Steal competitor data",
                                "Perform Penetration Testing",
                                "Create ransomware",
                                "Install spyware"
                            ],
                            correctAnswer: "Perform Penetration Testing",
                            explanation: "They find vulnerabilities so they can be patched.",
                            marks: 1,
                            topic: "Defences"
                        },
                        {
                            id: "s6",
                            question: "Which threat encrypts data and demands payment for the key?",
                            type: "multiple-choice",
                            options: ["Trojan", "Ransomware", "Worm", "Adware"],
                            correctAnswer: "Ransomware",
                            explanation: "Ransomware holds data 'hostage' until a ransom is paid.",
                            marks: 1,
                            topic: "Malware"
                        },
                        {
                            id: "s7",
                            question: "What is SQL Injection used for?",
                            type: "multiple-choice",
                            options: [
                                "Crashing the CPU",
                                "Bypassing website inputs to access databases",
                                "Blocking emails",
                                "Deleting files from the hard drive"
                            ],
                            correctAnswer: "Bypassing website inputs to access databases",
                            explanation: "It uses malicious SQL code in input fields.",
                            marks: 1,
                            topic: "Threats"
                        },
                        {
                            id: "s8",
                            question: "Which defence principle gives users the absolute minimum access they need?",
                            type: "multiple-choice",
                            options: ["Strong Passwords", "Encryption", "Least Privilege", "Biometrics"],
                            correctAnswer: "Least Privilege",
                            explanation: "User access levels should be restricted to only necessary files.",
                            marks: 1,
                            topic: "Defences"
                        },
                        {
                            id: "s9",
                            question: "What is a 'Brute Force' attack?",
                            type: "multiple-choice",
                            options: [
                                "Physically breaking a server",
                                "Trying every possible password combination",
                                "Sending fake emails",
                                "Using a magnet to erase data"
                            ],
                            correctAnswer: "Trying every possible password combination",
                            explanation: "It systematically tries all combinations until one works.",
                            marks: 1,
                            topic: "Threats"
                        },
                        {
                            id: "s10",
                            question: "What does Anti-Malware software look for when scanning?",
                            type: "multiple-choice",
                            options: ["Large files", "Malware signatures", "Browser history", "Empty folders"],
                            correctAnswer: "Malware signatures",
                            explanation: "It matches file patterns against a database of known threats.",
                            marks: 1,
                            topic: "Defences"
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
                    title: "Operating Systems & Utility Software",
                    content: `# 💻 1.5 Systems Software

## 🎯 Objectives
- ⚙️ **OS Functions:** Interface, Memory, Multi-tasking, Peripherals, Files, Users.
- 🔧 **Utility Software:** Defrag, Encryption, Compression, Backup.

---

## 📚 Chapter 1: The Operating System (OS)
The OS manages the hardware and provides a platform for apps.
*   *Examples:* Windows, macOS, Linux, iOS, Android.

### Key Functions
1.  **User Interface (UI):**
    *   **GUI:** Windows, Icons, Menus, Pointers (WIMP). Visual.
    *   **CLI:** Command Line (Text). Powerful, resource light.
2.  **Memory Management:** Moves data between RAM and Virtual Memory. Ensures apps don't overwrite each other.
3.  **Multi-tasking:** The OS schedules the CPU to switch between tasks rapidly.
4.  **Peripheral Management:** Uses **Drivers** to talk to printers, mice, cameras.
5.  **User Management:** Accounts, Passwords, Permissions.

---

## 📚 Chapter 2: Utility Software
Small programs that maintain the system.

| Utility | Purpose |
| :--- | :--- |
| **Defragmentation** | Reorders files on a HDD so they are contiguous. Reduces read/write head movement -> Faster. (DO NOT use on SSDs!). |
| **Compression** | Reduces file size (Zip). |
| **Encryption** | Scrambles confidential data. |
| **Backup** | Full (everything) or Incremental (only changes since last backup). |

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
                            question: "Why should you NOT defragment an SSD?",
                            type: "multiple-choice",
                            options: ["It explodes", "It wears out the limited write cycles", "It makes it too fast", "It deletes data"],
                            correctAnswer: "It wears out the limited write cycles",
                            explanation: "SSDs have no moving parts so defragging gives no speed boost, only damage.",
                            marks: 1,
                            topic: "Utility"
                        },
                        {
                            id: "oq2",
                            question: "Which software translates hardware signals for the OS?",
                            type: "multiple-choice",
                            options: ["Translator", "Compiler", "Driver", "App"],
                            correctAnswer: "Driver",
                            explanation: "Device drivers act as a bridge between OS and hardware.",
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
            name: "1.6 Ethics, Laws & Environment",
            completed: false,
            studyMaterials: [
                {
                    id: "laws-ethics",
                    title: "Impacts of Technology",
                    content: `# ⚖️ 1.6 Ethics and Law

## 📜 Key Legislation (Laws)

### 1. Data Protection Act (2018) / GDPR 🔒
Controls how companies use your personal data.
*   Data must be used **fairly**, **lawfully**, and **transparently**.
*   Used for **specified purposes**.
*   **Accurate** and kept up to date.
*   Kept for **no longer than necessary**.
*   Kept **secure**.

### 2. Computer Misuse Act (1990) ⚔️
Makes Hacking illegal.
1.  **Unauthorised access** (basic hacking).
2.  **Unauthorised access with intent** (to steal/destroy).
3.  **Unauthorised modification** (viruses / deleting files).

### 3. Copyright, Designs and Patents Act (1988) ©
Protects Intellectual Property (Music, Code, Images).
*   Illegal to copy/distribute without permission (Piracy).
*   **Open Source:** Code is free to share/edit (Linux).
*   **Proprietary:** Code is closed/sold (Windows).

---

## 🌍 Environmental Issues
*   **E-Waste:** Toxic chemicals (lead, mercury) in landfill.
*   **Energy:** Data centers and mining crypto consume vast electricity -> Carbon footprint.

## 🏙️ Cultural Issues
*   **Digital Divide:** Rich vs Poor, Urban vs Rural access to tech.
*   **Censorship:** Governments controlling what you see.
*   **Privacy:** Surveillance state.

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
                            question: "Which Act covers hacking?",
                            type: "multiple-choice",
                            options: ["Data Protection Act", "Computer Misuse Act", "Copyright Act", "Freedom of Info Act"],
                            correctAnswer: "Computer Misuse Act",
                            explanation: "The CMA (1990) specifically criminalizes unauthorized access.",
                            marks: 1,
                            topic: "Legislation"
                        },
                        {
                            id: "eq2",
                            question: "Which software license allows you to edit the source code?",
                            type: "multiple-choice",
                            options: ["Proprietary", "Open Source", "Copyrighted", "Closed Source"],
                            correctAnswer: "Open Source",
                            explanation: "Open Source grants users the right to study and change the code.",
                            marks: 1,
                            topic: "Licenses"
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
                    content: `# 🔎 2.1 Searching & Sorting

## 🎯 Objectives
- 🧠 **Computational Thinking:** Abstraction, Decomposition.
- 🕵️‍♂️ **Search:** Linear vs Binary.
- 🔢 **Sort:** Bubble, Merge, Insertion.

---

## 📚 Chapter 1: Searching

### 🚶 Linear Search
Check items one by one from start to end.
*   **Pros:** Works on ANY list. Easy to code.
*   **Cons:** Very slow for large lists.
*   *Complexity:* O(n)

### 🌳 Binary Search
"Divide and Conquer".
1.  **Requirement:** List MUST be sorted.
2.  Find Middle. If Middle == Target, Stop.
3.  If Target < Middle, discard right half.
4.  If Target > Middle, discard left half.
5.  Repeat.
*   *Complexity:* O(log n) - Super fast.

---

## 📚 Chapter 2: Sorting

### 🫧 Bubble Sort
*   Compare pairs. Swap if wrong order.
*   Repeat until no swaps needed.
*   *Verdict:* Slow, simple.

### 📥 Insertion Sort
*   Take each item and place it in the correct relative position in the sorted part (like sorting cards in hand).
*   *Verdict:* Good for small lists.

### 🤝 Merge Sort
*   **Split:** Divide list in half repeatedly until lists are size 1.
*   **Merge:** Combine sub-lists in order.
*   *Verdict:* Very fast, but uses more memory.

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
                            question: "Which search requires a sorted list?",
                            type: "multiple-choice",
                            options: ["Linear Search", "Binary Search", "Random Search", "Google Search"],
                            correctAnswer: "Binary Search",
                            explanation: "Binary search relies on logical elimination which needs order.",
                            marks: 1,
                            topic: "Searching"
                        },
                        {
                            id: "q_algo2",
                            question: "Which sorting algorithm splits lists into size 1?",
                            type: "multiple-choice",
                            options: ["Bubble", "Insertion", "Merge", "Quick"],
                            correctAnswer: "Merge",
                            explanation: "Merge sort uses the divide and conquer strategy.",
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
                    title: "Variables and Constructs",
                    content: `# ⌨️ 2.2 Programming

## 🧱 Key Concepts

### 1. Variables & Constants
*   **Variable:** \`score = 10\` (Can change).
*   **Constant:** \`const PI = 3.14\` (Cannot change).

### 2. Data Types
*   **Integer:** \`5\`
*   **Float/Real:** \`5.5\`
*   **String:** \`"Hello"\`
*   **Boolean:** \`True\` / \`False\`
*   **Casting:** Converting types. \`int("5")\`

### 3. Constructs
*   **Sequence:** Line by line.
*   **Selection:** \`if ... elif ... else\`
*   **Iteration:**
    *   **Count-controlled:** \`for i in range(10):\`
    *   **Condition-controlled:** \`while running == True:\`

---

## 🛡️ Robust Programming
*   **Input Sanitisation:** Cleaning input (e.g. trimming spaces).
*   **Validation:** Checking if input is allowed.
    *   *Range Check:* Age > 0 and Age < 120.
    *   *Type Check:* Is it a number?
    *   *Length Check:* Is password > 8 chars?

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
                            question: "What is a Float?",
                            type: "multiple-choice",
                            options: ["A whole number", "A decimal number", "Text", "True/False"],
                            correctAnswer: "A decimal number",
                            explanation: "Floating point numbers contain decimals.",
                            marks: 1,
                            topic: "Data Types"
                        },
                        {
                            id: "pq2",
                            question: "Which check ensures an age is not -5?",
                            type: "multiple-choice",
                            options: ["Type Check", "Length Check", "Range Check", "Format Check"],
                            correctAnswer: "Range Check",
                            explanation: "Range checks verify numbers fall within boundaries.",
                            marks: 1,
                            topic: "Validation"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "2.3-logic",
            name: "2.3 Boolean Logic",
            completed: false,
            studyMaterials: [
                {
                    id: "logic-gates",
                    title: "Logic Gates & Truth Tables",
                    content: `# 🔌 2.3 Boolean Logic

## ⚡ The Logic Gates

### AND Gate (D Shape)
*   Output is 1 ONLY if **A** AND **B** are 1.
*   \`Q = A . B\`

### OR Gate (Arrowhead)
*   Output is 1 if **A** OR **B** (or both) are 1.
*   \`Q = A + B\`

### NOT Gate (Triangle)
*   Output is opposite.
*   \`Q = !A\`

---

## 📋 Truth Tables

A | B | A AND B
--|---|--------
0 | 0 | 0
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1

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
                            question: "Which gate looks like a 'D'?",
                            type: "multiple-choice",
                            options: ["OR", "NOT", "AND", "XOR"],
                            correctAnswer: "AND",
                            explanation: "The AND gate is shaped like a D.",
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
            name: "2.5 IDEs & Translators",
            completed: false,
            studyMaterials: [
                {
                    id: "ide-lesson",
                    title: "The IDE & Translators",
                    content: `# 🛠️ 2.5 IDEs

## 🗣️ High vs Low Level
*   **High Level:** Python/Java. Human readable. Portable. Slow.
*   **Low Level:** Machine Code / Assembly. Binary. Specific to CPU. Fast.

## 🗣️ Translators
*   **Compiler:** Translates WHOLE code at once. Creates EXE. Fast execution. Hard to debug.
*   **Interpreter:** Translates LINE BY LINE. Good for debugging. Slower execution.
*   **Assembler:** Assembly -> Machine Code.

## 🔧 IDE Tools
*   **Editor:** Write code (colors, auto-complete).
*   **Debugger:** Step through code interactively.
*   **Run-time Environment:** Run code.
*   **Error Diagnostics:** Finds syntax errors.

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
                            question: "Which translator creates an EXE file?",
                            type: "multiple-choice",
                            options: ["Interpreter", "Compiler", "Assembler", "Editor"],
                            correctAnswer: "Compiler",
                            explanation: "Compilers build a standalone executable.",
                            marks: 1,
                            topic: "Translators"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};
