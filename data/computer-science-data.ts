
import { Subject } from "@/types/curriculum";

export const year10ComputerScienceJ277: Subject = {
    id: "computer-science-j277",
    name: "Computer Science (J277)",
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
                    id: "cpu-architecture",
                    title: "The CPU and Von Neumann Architecture",
                    content: `# 🧠 1.1 Systems Architecture: Brain of the Computer
3
> [!NOTE]
> **Mission Objective:** By the end of this chapter, you will be able to explain exactly how a lump of silicon "thinks" by mastering the Fetch-Decode-Execute cycle.

---

## 🏛️ The Central Processing Unit (CPU)

The **CPU** is the "brain" of the computer. Its job is to process data by following instructions.

### 🔑 Key Performance Factors
Not all CPUs are equal. Three main factors determine how fast a CPU can process instructions:

1. **Clock Speed:** The number of cycles per second (measured in **Hertz**). 
   * *Example:* A 3.5 GHz CPU performs 3.5 billion cycles every single second!
2. **Cores:** A core is an independent processor. 
   * **Dual-Core:** Two brains.
   * **Quad-Core:** Four brains. More cores allow for better "Parallel Processing".
3. **Cache Size:** Super-fast memory located *directly on the CPU chip*. It stores instructions that are used frequently so the CPU doesn't have to wait for the slow RAM.

---

## 🏛️ Von Neumann Architecture

In 1945, John von Neumann designed the standard model for computers we still use today. The key idea: **Data and instructions are stored in the same memory (RAM).**

### 📦 The Registers (Tiny, Fast Memory)
Registers are special-purpose memory locations inside the CPU that hold data being processed *right now*.

| Register | Name | Key Responsibility |
| :--- | :--- | :--- |
| **PC** | Program Counter | Holds the **Address** of the *NEXT* instruction. |
| **MAR** | Memory Address Register | Holds the **Address** of where data is being fetched *FROM*. |
| **MDR** | Memory Data Register | Holds the **ACTUAL DATA** that was just fetched. |
| **ACC** | Accumulator | Stores the **RESULT** of calculations. |

---

## 🔄 The Fetch-Decode-Execute Cycle

This cycle is the continuous process that every CPU performs billions of times per second.

### 1. FETCH 🚚
* The address in the **PC** is copied to the **MAR**.
* The CPU looks at that address in RAM and copies the instruction into the **MDR**.
* The **Program Counter** increments by 1.

### 2. DECODE 🧩
* The **Control Unit (CU)** translates the binary instruction into something the CPU can actually do.

### 3. EXECUTE 🚀
* The instruction is carried out (e.g., adding two numbers in the **ALU**).
* The result is stored in the **Accumulator**.

---

## 🤖 Embedded Systems

An **Embedded System** is a computer with a **dedicated, single purpose** built into a larger mechanical or electrical system.

### 💡 Common Examples:
- **Domestic:** Washing machines, Microwaves, Dishwashers.
- **Industrial:** Factory robots, Traffic lights.
- **Automotive:** Engine Management Systems (EMS), ABS brakes.

### 🛠️ Why use them?
They are designed to be **reliable**, **low-power**, and **low-cost**. They usually don't have a screen or keyboard and run on simple "firmware".

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
                    title: "Memory, Storage and Data",
                    content: `# 💾 1.2 Memory, Storage & Data Representation

> **"Memory is transient, Storage is forever (mostly)."**

---

## 🎯 Learning Objectives
- ⚡ **Primary Storage:** RAM vs ROM.
- 👻 Explain **Virtual Memory**.
- 💿 **Secondary Storage:** Magnetic vs Optical vs Solid State.
- 🔢 **Data:** Units, Numbers, Images, Sound, Compression.

**XP Reward:** 250 ⭐ | **Time:** 60 mins

---

## 📚 Chapter 1: Primary Storage (Main Memory)
Primary storage is memory that the CPU can access **directly**.

### 1. RAM (Random Access Memory) 💭
*   **Volatile:** Data is LOST when power is turned off.
*   **Read/Write:** The CPU can read data from it and write data to it.
*   **Purpose:** Stores the Operating System, running programs, and data currently in use.
*   **Size:** Typically 8GB - 32GB.

### 2. ROM (Read Only Memory) 🗿
*   **Non-Volatile:** Data is KEPT when power is turned off.
*   **Read-Only:** The CPU can only read; it cannot easily write new data.
*   **Purpose:** Stores the **BIOS / Bootstrap Loader** (Start-up instructions).
*   **Size:** Very small (e.g., 4-8 MB).

---

## 📚 Chapter 2: Secondary Storage
Long-term, non-volatile storage. The CPU cannot access it directly; data must be loaded into RAM first.

### Types of Storage
| Type | Technology | Examples | Pros | Cons |
| :--- | :--- | :--- | :--- | :--- |
| **Magnetic** | Moving platters, magnetic read/write head. | HDD (Hard Drive), Tape | High capacity, Cheap per GB | Moving parts (fragile), Slow(er), Noisy |
| **Optical** | Lasers burn pits and lands. | CD, DVD, Blu-Ray | Cheap, Portable | Slowest, Easily Scratched, Low Capacity |
| **Solid State** | Flash memory (floating gate transistors). No moving parts. | SSD, USB Pen, SD Card | Super Fast, Durable, Silent | Expensive per GB, Finite write cycles |

### ⚠️ Capacity vs Speed vs Cost
*   **SSD:** Fastest, Most Expensive.
*   **HDD:** Good balance of speed/cost for large storage.
*   **Tape:** Slowest access (sequential), but huge capacity for cheap (used for archives).

---

## 📚 Chapter 3: Units of Data 📏

| Unit | Value | Example size |
| :--- | :--- | :--- |
| **Bit (b)** | A single 1 or 0 | On/Off switch |
| **Nibble** | 4 bits | Half a byte |
| **Byte (B)** | 8 bits | One character of text |
| **Kilobyte (KB)** | 1000 Bytes | A text file |
| **Megabyte (MB)** | 1000 KB | An MP3 song |
| **Gigabyte (GB)** | 1000 MB | A Movie |
| **Terabyte (TB)** | 1000 GB | A Hard Drive |
| **Petabyte (PB)** | 1000 TB | Google's Servers |

---

## 📚 Chapter 4: Data Representation

### 🖼️ Images
*   **Pixel:** Picture Element. The smallest dot of colour.
*   **Colour Depth:** Number of bits used to represent the colour of each pixel. (Higher depth = More colours = Larger file).
*   **Resolution:** Width x Height in pixels.

### 🎵 Sound
*   **Sampling:** Converting analogue sound waves into digital binary.
*   **Sample Rate:** How many times per second we measure the wave (Hz). (Higher rate = Better quality = Larger file).
*   **Bit Depth:** How accurate each sample is.

### 📦 Compression
Reducing file size.
1.  **Lossy:** Removes data PERMANENTLY. Quality is reduced. (e.g., JPG, MP3).
2.  **Lossless:** Shrinks file but KEEPS perfectly original quality. (e.g., ZIP, PNG).

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 60,
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
                            question: "Which storage has no moving parts?",
                            type: "multiple-choice",
                            options: ["Optical", "Magnetic", "Solid State", "Cloud"],
                            correctAnswer: "Solid State",
                            explanation: "Solid State uses flash memory circuits, making it durable and fast.",
                            marks: 1,
                            topic: "Storage"
                        },
                        {
                            id: "mq4",
                            question: "Which compression type loses quality?",
                            type: "multiple-choice",
                            options: ["Lossless", "Lossy", "Archive", "Encrypt"],
                            correctAnswer: "Lossy",
                            explanation: "Lossy removes data permanently to save space.",
                            marks: 1,
                            topic: "Compression"
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
                    id: "networks-deep-dive",
                    title: "Networks, Protocols and The Internet",
                    content: `# 🌐 1.3 Networks: Deep Dive

## 🎯 Objectives
- 🌍 **LAN vs WAN.**
- 🌟 **Topologies:** Star and Mesh.
- 📡 **Protocols:** TCP/IP, HTTP, FTP, IMAP, SMTP.
- 🍰 **Layers:** The 4-Layer TCP/IP Model.

---

## 📚 Chapter 1: Network Types

### LAN (Local Area Network) 🏠
*   **Area:** Small (School, Home).
*   **Hardware:** Owned by you.
*   **Tech:** Ethernet, Wi-Fi.

### WAN (Wide Area Network) 🌍
*   **Area:** Large (The Internet, Connecting branch offices).
*   **Hardware:** Leased from Telecom companies (BT, Virgin) because you can't lay cables across the ocean!
*   **Tech:** Fiber Optics, Satellite.

---

## 📚 Chapter 2: Hardware & Topologies

### 📦 Hardware
*   **NIC (Network Interface Controller):** Allows device to connect.
*   **Switch:** Connects devices on a LAN. Intelligent (sends data ONLY to intended recipient).
*   **Router:** Connects different networks (e.g., LAN to WAN). Routes packets.
*   **WAP:** Wireless Access Point.

### 🌟 Star Topology
*   All nodes connect to a central **Switch**.
*   ✅ Fast, Reliable (one cable break doesn't kill network).
*   ❌ Expensive cabling, Switch is single point of failure.

### 🕸️ Mesh Topology
*   All nodes connect to many others.
*   ✅ No single point of failure, Self-healing.
*   ❌ Very expensive to wire (Full mesh).

---

## 📚 Chapter 3: Client-Server vs P2P

| Feature | Client-Server | Peer-to-Peer (P2P) |
| :--- | :--- | :--- |
| **Control** | Central Server controls access/security. | No central control. All peers equal. |
| **Backups** | Done centrally (Easy). | Done individually on each PC (Risky). |
| **Cost** | Expensive (Server + Expert staff). | Cheap (Just cables/Wi-Fi). |
| **Use Case** | Schools, Offices. | Home networks. |

---

## 📚 Chapter 4: Protocols 📜
A **Protocol** is a set of rules for how computers communicate.

| Protocol | Full Name | Use |
| :--- | :--- | :--- |
| **TCP/IP** | Transmission Control Protocol / Internet Protocol | The dictating rules of the internet. TCP bursts data into packets; IP addresses them. |
| **HTTP(S)** | HyperText Transfer Protocol (Secure) | Viewing webpages. (S = Encrypted). |
| **FTP** | File Transfer Protocol | Uploading/Downloading files to a server. |
| **SMTP** | Simple Mail Transfer Protocol | **Sending** emails. |
| **IMAP** | Internet Message Access Protocol | **Retrieving** emails. |
| **POP** | Post Office Protocol | Older way to retrieve emails (deletes from server). |

### 🍰 The 4 Layers (TCP/IP Model)
1.  **Application:** The app you are using (Browser, Email). (HTTP, FTP, SMTP).
2.  **Transport:** Splits data into packets. (TCP).
3.  **Internet:** Adds IP addresses to packets. (IP).
4.  **Link:** Physical cables/Wi-Fi. (Ethernet).

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 60,
                    learningObjectives: ["Define LAN/WAN", "Compare Star and Mesh", "Explain Protocols"]
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
                            question: "Who owns the infrastructure of a WAN?",
                            type: "multiple-choice",
                            options: ["Telecoms Companies", "The User", "Amazon", "Microsoft"],
                            correctAnswer: "Telecoms Companies",
                            explanation: "WANs lease lines from external providers.",
                            marks: 1,
                            topic: "Networks"
                        },
                        {
                            id: "nq2",
                            question: "Which protocol is used for SENDING email?",
                            type: "multiple-choice",
                            options: ["IMAP", "POP", "SMTP", "HTTP"],
                            correctAnswer: "SMTP",
                            explanation: "Simple Mail Transfer Protocol is for sending.",
                            marks: 1,
                            topic: "Protocols"
                        },
                        {
                            id: "nq3",
                            question: "Which topology uses a central switch?",
                            type: "multiple-choice",
                            options: ["Bus", "Ring", "Star", "Mesh"],
                            correctAnswer: "Star",
                            explanation: "Star topology connects everything to a central point.",
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
                    id: "security-threats",
                    title: "Threats and Prevention",
                    content: `# 🛡️ 1.4 Network Security

## 🎯 Objectives
- 🦠 **Threats:** Malware, Phishing, SQL Injection, DDOS.
- 💂‍♂️ **Prevention:** Firewalls, Anti-malware, Encryption.

---

## 📚 Chapter 1: The Threats 🦠

### Malware (Malicious Software)
1.  **Virus:** Needs a host file. Replicates. Damages data.
2.  **Worm:** Standalone. Replicates through networks. Eats bandwidth.
3.  **Trojan:** Disguised as something good. Opens backdoors.
4.  **Ransomware:** Encrypts files. Demands bitcoin.
5.  **Spyware:** Keyloggers steal passwords.

### Hacking Methods
*   **Social Engineering:** Manipulating **people** (Phishing calls/emails).
*   **Brute Force:** Trying every password combination.
*   **DDOS:** Flooding a server with traffic to crash it.
*   **SQL Injection:** Typing SQL code into a web box to break the database.
    *   *Prevention:* Input Sanitization.

---

## 📚 Chapter 2: The Defences 🛡️

| Method | How it works |
| :--- | :--- |
| **Penetration Testing** | Hiring "White Hat" hackers to find bugs *before* bad guys do. |
| **Anti-Malware** | Scans filesystem for signatures of known viruses. |
| **Firewall** | Can be Hardware or Software. Inspects packets. Blocks unauthorized ports. |
| **User Access Levels** | "Least Privilege". Only give staff access to files they *need*. |
| **Encryption** | Scrambling data using an algorithm and a key. |
| **Physical Security** | Locks, Biometrics, CCTV. |

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
                            options: ["Worms are bigger", "Worms do not need a host file", "Viruses are safe", "There is no difference"],
                            correctAnswer: "Worms do not need a host file",
                            explanation: "Worms are standalone programs that self-replicate.",
                            marks: 1,
                            topic: "Malware"
                        },
                        {
                            id: "sq2",
                            question: "Which attack inserts code into a database input?",
                            type: "multiple-choice",
                            options: ["Phishing", "SQL Injection", "DDOS", "Brute Force"],
                            correctAnswer: "SQL Injection",
                            explanation: "Structured Query Language Injection exploits un-sanitized inputs.",
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
