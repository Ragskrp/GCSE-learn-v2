
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
    process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const computerScienceCurriculum = {
    id: "computer-science-j277",
    name: "Computer Science (OCR J277)",
    duration: 120,
    questions: 200,
    color: "from-purple-500 to-indigo-600",
    icon: "💻",
    level: 1,
    xp: 0,
    maxXp: 4000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Code Crusader",
    timeLimit: 120,
    topics: [
        // --- COMPONENT 1: COMPUTER SYSTEMS ---
        {
            id: "1.1-systems",
            name: "1.1 Systems Architecture",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-cpu", title: "The CPU",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: `# 🧠 The CPU: Central Processing Unit

> [!NOTE]
> **Learning Objectives:** Understand the FDE cycle and identify the key internal components of the "brain" of the computer.

## The CPU Architecture
The CPU is responsible for executing instructions and processing data.

<div class="visual-container">
  <svg width="300" height="200" viewBox="0 0 300 200" class="overflow-visible">
    <!-- CPU Box -->
    <rect x="50" y="20" width="200" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="4" />
    <text x="150" y="50" text-anchor="middle" fill="currentColor" font-weight="bold" font-size="16">CPU</text>
    
    <!-- ALU -->
    <rect x="70" y="70" width="60" height="40" rx="5" fill="rgba(255,105,180,0.1)" stroke="#FF69B4" stroke-width="2" />
    <text x="100" y="95" text-anchor="middle" fill="#FF69B4" font-weight="bold" font-size="12">ALU</text>
    
    <!-- CU -->
    <rect x="170" y="70" width="60" height="40" rx="5" fill="rgba(147,112,219,0.1)" stroke="#9370DB" stroke-width="2" />
    <text x="200" y="95" text-anchor="middle" fill="#9370DB" font-weight="bold" font-size="12">CU</text>
    
    <!-- Cache -->
    <rect x="70" y="130" width="160" height="30" rx="5" fill="rgba(75,0,130,0.1)" stroke="currentColor" stroke-width="2" />
    <text x="150" y="150" text-anchor="middle" fill="currentColor" font-size="12">Cache Memory</text>
  </svg>
</div>

---

# 🏗️ Core Components

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="concept-card">
    <h3 class="text-primary font-bold">➕ ALU</h3>
    <p class="text-xs"><strong>Arithmetic Logic Unit</strong>: Performs all mathematical calculations and logic comparisons.</p>
  </div>
  <div class="concept-card border-purple-500">
    <h3 class="text-purple-600 font-bold">🎮 CU</h3>
    <p class="text-xs"><strong>Control Unit</strong>: Manages the flow of data and decodes instructions.</p>
  </div>
</div>

<div class="exam-tip">
  <h3>🌟 Performance Factors:</h3>
  <p>Remember the "Big 3" that make a CPU faster: <strong>Clock Speed</strong>, <strong>Cores</strong>, and <strong>Cache Size</strong>.</p>
</div>
`,
                    learningObjectives: ["Function of CPU", "Components (ALU, CU, Cache)"]
                },
                {
                    id: "cs-von-neumann", title: "Von Neumann Architecture",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 🏗️ Von Neumann\nStored Program Concept: Data and Instructions stored in same memory.\n## Registers\n* **PC (Program Counter):** Address of NEXT instruction.\n* **MAR (Memory Address Register):** Address of CURRENT data.\n* **MDR (Memory Data Register):** The ACTUAL data.\n* **Accumulator:** Stores ALU results.",
                    learningObjectives: ["Explain Von Neumann", "Describe FDE Cycle"]
                },
                {
                    id: "cs-performance", title: "CPU Performance",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🚀 Performance\nFactors affecting speed:\n1. **Clock Speed:** Hz. Cycles per second.\n2. **Cores:** More cores = Parallel processing.\n3. **Cache Size:** More cache = Less fetching from RAM.\n4. **Embedded Systems:** Single function CPUs (e.g., Washing Machine).",
                    learningObjectives: ["Factors affecting speed", "Define Embedded System"]
                }
            ],
            quizzes: [{ id: "cpu-quiz", title: "Test: Architecture", questions: [{ id: "q1", question: "What stores the address of the next instruction?", options: ["PC", "MAR", "MDR"], correctAnswer: "PC", marks: 1, topic: "Registers" }] }]
        },
        {
            id: "1.2-memory",
            name: "1.2 Memory and Storage",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-memory", title: "Primary Memory (RAM/ROM)",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🧠 Memory\n* **RAM (Random Access Memory):** Volatile. Stores currently running programs. Read/Write.\n* **ROM (Read Only Memory):** Non-Volatile. Stores BIOS/Bootstrap. Read Only.\n* **Virtual Memory:** Part of HDD used as RAM when RAM is full (Slow).",
                    learningObjectives: ["Compare RAM and ROM", "Explain Virtual Memory"]
                },
                {
                    id: "cs-storage", title: "Secondary Storage",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 💾 Storage\nLong term non-volatile storage.\n1. **Magnetic (HDD):** High capacity, cheap, fragile.\n2. **Optical (CD/DVD):** Cheap, portable, low capacity.\n3. **Solid State (SSD):** Fast, durable, expensive.",
                    learningObjectives: ["Compare Storage Types", "Calculate capacity"]
                },
                {
                    id: "cs-units", title: "Units of Data",
                    type: "lesson", difficulty: "higher", estimatedTime: 20,
                    content: "# 📏 Units\nBit (b) -> Nibble (4b) -> Byte (8b) -> KB (1000B) -> MB -> GB -> TB -> PB.\n* Why Binary? Computer circuits are ON (1) or OFF (0).",
                    learningObjectives: ["Convert data units", "Order of magnitude"]
                }
            ],
            quizzes: [{ id: "mem-quiz", title: "Test: Memory", questions: [{ id: "q1", question: "Which is Volatile?", options: ["RAM", "ROM", "HDD"], correctAnswer: "RAM", marks: 1, topic: "Memory Types" }] }]
        },
        {
            id: "1.3-networks",
            name: "1.3 Networks",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-net-types", title: "LAN vs WAN",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🌐 Networks\n* **LAN (Local Area):** Small site (School/Home). Own hardware.\n* **WAN (Wide Area):** Large geo area (Internet). Hired hardware.\n* **Client-Server:** Central server controls security.\n* **Peer-to-Peer:** All devices equal.",
                    learningObjectives: ["Define LAN/WAN", "Compare Client-Server vs P2P"]
                },
                {
                    id: "cs-topologies", title: "Topologies",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🕸️ Topologies\n* **Star:** All nodes connect to central switch. Reliable.\n* **Mesh:** Nodes connect to each other. Self-healing but expensive wifi.",
                    learningObjectives: ["Draw Star/Mesh", "Discuss pros/cons"]
                },
                {
                    id: "cs-protocols", title: "Protocols",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 📜 Protocols\nSet of rules for communication.\n* **TCP/IP:** Layers (Application, Transport, Internet, Link).\n* **HTTP/S:** Web pages.\n* **IMAP/POP/SMTP:** Email.\n* **FTP:** Files.",
                    learningObjectives: ["Define Protocol", "List Layers"]
                }
            ],
            quizzes: [{ id: "net-quiz", title: "Test: Networks", questions: [{ id: "q1", question: "Which protocol sends email?", options: ["SMTP", "POP", "IMAP"], correctAnswer: "SMTP", marks: 1, topic: "Protocols" }] }]
        },
        {
            id: "1.4-security",
            name: "1.4 Network Security",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-threats", title: "Threats",
                    type: "lesson", difficulty: "foundation", estimatedTime: 35,
                    content: "# 🛡️ Threats\n* **Malware:** Viruses, Trojan, Spyware.\n* **Phishing:** Fake emails.\n* **Brute Force:** Guessing passwords.\n* **DDOS:** Flooding server with traffic.\n* **SQL Injection:** Malicious code in database inputs.",
                    learningObjectives: ["List threats", "Define SQL Injection"]
                },
                {
                    id: "cs-prevention", title: "Prevention",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🔒 Prevention\n* **Firewall:** Monitors traffic.\n* **Encryption:** Scrambling data.\n* **Anti-malware:** Scans files.\n* **User Access Levels:** Limit permissions.",
                    learningObjectives: ["Explain Firewalls", "Purpose of Encryption"]
                }
            ],
            quizzes: [{ id: "sec-quiz", title: "Test: Security", questions: [{ id: "q1", question: "What attempts to flood a server?", options: ["DDOS", "Phishing", "Virus"], correctAnswer: "DDOS", marks: 1, topic: "Threats" }] }]
        },
        {
            id: "1.5-software",
            name: "1.5 Systems Software",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-os", title: "Operating Systems",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🖥️ OS Functions\n* **User Interface:** GUI, CLI.\n* **Memory Management:** Paging.\n* **Multitasking:** Giving CPU time slices.\n* **File Management:** Hierarchical folders.\n* **Device Drivers:** Translators for hardware.",
                    learningObjectives: ["List OS functions", "Compare GUI and CLI"]
                },
                {
                    id: "cs-utility", title: "Utility Software",
                    type: "lesson", difficulty: "foundation", estimatedTime: 20,
                    content: "# 🛠️ Utilities\nMaintenance programs.\n* **Defragmentation:** Reorganising file blocks on HDD.\n* **Backup:** Full vs Incremental.\n* **Compression:** Reducing file size.",
                    learningObjectives: ["Explain Defrag", "Why backup?"]
                }
            ],
            quizzes: [{ id: "soft-quiz", title: "Test: Software", questions: [{ id: "q1", question: "Which software reduces file size?", options: ["Compression", "Defrag", "Encryption"], correctAnswer: "Compression", marks: 1, topic: "Utilities" }] }]
        },

        // --- COMPONENT 2: ALGORITHMS & PROGRAMMING ---
        {
            id: "2.1-algorithms",
            name: "2.1 Algorithms",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-search", title: "Searching Algorithms",
                    type: "lesson", difficulty: "foundation", estimatedTime: 40,
                    content: "# 🔍 Searching\n## Linear Search\nCheck items one by one. Works on unsorted data.\n## Binary Search\nFind middle. High or Low? Discard half. Repeat. **Must be sorted.**",
                    learningObjectives: ["Perform Linear Search", "Perform Binary Search"]
                },
                {
                    id: "cs-sort", title: "Sorting Algorithms",
                    type: "lesson", difficulty: "higher", estimatedTime: 45,
                    content: "# 🔢 Sorting\n* **Bubble Sort:** Compare pairs, swap if wrong. Slow.\n* **Merge Sort:** Divide list into 1s, merge pairs in order. Fast.\n* **Insertion Sort:** Take item, insert into correct place in sorted list.",
                    learningObjectives: ["Perform Bubble Sort", "Perform Merge Sort"]
                }
            ],
            quizzes: [{ id: "algo-quiz", title: "Test: Algorithms", questions: [{ id: "q1", question: "Which search requires sorted data?", options: ["Binary", "Linear", "Bubble"], correctAnswer: "Binary", marks: 1, topic: "Searching" }] }]
        },
        {
            id: "2.2-programming",
            name: "2.2 Programming Techniques",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-constructs", title: "Programming Constructs",
                    type: "lesson", difficulty: "foundation", estimatedTime: 40,
                    content: "# 💻 Constructs\n1. **Sequence:** Lines run in order.\n2. **Selection:** IF/ELSE logic.\n3. **Iteration:** Loops (FOR, WHILE).",
                    learningObjectives: ["Write a loop", "Use IF statements"]
                },
                {
                    id: "cs-robust", title: "Robustness",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# 🛡️ Robust Code\n* **Input Sanitisation:** Removing dangerous character.\n* **Validation:** Checking input meets rules (Range check, Length check).\n* **Maintainability:** Comments, Indentation.",
                    learningObjectives: ["Write validation checks", "Explain maintainability"]
                }
            ],
            quizzes: [{ id: "prog-quiz", title: "Test: Programming", questions: [{ id: "q1", question: "Which loop runs a set number of times?", options: ["FOR", "WHILE", "IF"], correctAnswer: "FOR", marks: 1, topic: "Iteration" }] }]
        },
        {
            id: "2.4-logic",
            name: "2.4 Boolean Logic",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-gates", title: "Logic Gates",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 💡 Logic Gates\n* **AND:** Both inputs must be 1.\n* **OR:** At least one input must be 1.\n* **NOT:** Flips the input (1->0).",
                    learningObjectives: ["Draw Truch Tables", "Draw Logic Circuits"]
                }
            ],
            quizzes: [{ id: "logic-quiz", title: "Test: Logic", questions: [{ id: "q1", question: "1 AND 0 = ?", options: ["0", "1"], correctAnswer: "0", marks: 1, topic: "Gates" }] }]
        },
        {
            id: "2.6-data",
            name: "2.6 Data Representation",
            completed: false,
            studyMaterials: [
                {
                    id: "cs-binary-hex", title: "Binary & Hexadecimal",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 0101 Binary\n* **Convert Denary -> Binary** (128 64 32 16 8 4 2 1).\n* **Hexadecimal:** Base 16 (0-9, A-F). 4 bits = 1 Hex digit.\n* **Binary Shifts:** Multiply/Divide by 2.",
                    learningObjectives: ["Convert Binary/Hex", "Perform Shifts"]
                },
                {
                    id: "cs-images-sound", title: "Images & Sound",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 🖼️ Media\n* **Images:** Pixels. Colour Depth (bits per pixel), Resolution.\n* **Sound:** Sampling. Sample Rate (Hz), Bit Depth.\n* **Compression:** Lossy (removes data) vs Lossless (keeps data).",
                    learningObjectives: ["Calculate file size", "Explain colour depth"]
                }
            ],
            quizzes: [{ id: "data-quiz", title: "Test: Data", questions: [{ id: "q1", question: "Hex for 10?", options: ["A", "B", "10"], correctAnswer: "A", marks: 1, topic: "Hex" }] }]
        }
    ]
};

async function seedDatabase() {
    console.log('🔥 Starting Computer Science Seeding...');
    try {
        console.log('📝 Seeding Computer Science (J277)...');
        await setDoc(doc(db, 'subjects', 'computer-science-j277'), computerScienceCurriculum);
        console.log('✅ Computer Science (J277) seeded successfully with EXPANDED content!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}

seedDatabase();
