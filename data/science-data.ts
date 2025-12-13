
import { Subject } from "@/types/curriculum";

export const year10CombinedScience: Subject = {
    id: "science",
    name: "Combined Science",
    duration: 120,
    questions: 50,
    color: "from-teal-400 to-green-600",
    icon: "🧪",
    level: 1,
    xp: 0,
    maxXp: 1200,
    coins: 0,
    unlocked: true,
    conquestTitle: "Lab Legend",
    timeLimit: 120,
    topics: [
        {
            id: "biology-cells",
            name: "Biology: Cells",
            completed: false,
            studyMaterials: [
                {
                    id: "cell-structure",
                    title: "Cell Structure & Transport",
                    content: `# 🔬 Biology: Cell Structure

> **"The cell is the basic unit of life."**

---

## 🎯 Objectives
- 🦠 Compare **Prokaryotic and Eukaryotic** cells.
- 🧱 Describe **organelles** in animal and plant cells.
- 🌊 Understand **Diffusion, Osmosis, and Active Transport**.

---

## 📚 Chapter 1: Eukaryotic vs Prokaryotic

| Feature | Eukaryotic (Animal/Plant) | Prokaryotic (Bacteria) |
| :--- | :--- | :--- |
| **Size** | Larger (10-100 µm) | Tiny (0.1 - 5 µm) |
| **DNA** | Enclosed in a **Nucleus** | Loop of DNA (Plasmid) |
| **Mitochondria** | Yes | No |
| **Cell Wall** | Plants only (Cellulose) | Yes (Peptidoglycan) |

---

## 📚 Chapter 2: Cell Parts (Organelles)

### Animal Cells 🐅
1.  **Nucleus:** Contains DNA. Controls the cell.
2.  **Cytoplasm:** Jelly where chemical reactions happen.
3.  **Cell Membrane:** Controls what goes in/out.
4.  **Mitochondria:** Respiration (Energy release).
5.  **Ribosomes:** Protein synthesis.

### Plant Cells 🌻 (Have all of above, PLUS...)
6.  **Cell Wall:** Strengthens cell.
7.  **Vacuole:** Contains cell sap.
8.  **Chloroplasts:** Photosynthesis (Green).

---

## 📚 Chapter 3: Transport 🚚

### Diffusion
Movement of particles from **High Concentration to Low Concentration**.
*   *Energy needed?* No (Passive).
*   *Example:* Oxygen entering blood.

### Osmosis
Movement of **Water** from dilute (high water) to concentrated (low water) solution through a **partially permeable membrane**.

### Active Transport
Movement from **Low to High** concentration.
*   *Energy needed?* **YES!** (From respiration).
*   *Example:* Root hair cells absorbing minerals.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Label cell diagrams", "Explain Osmosis"]
                }
            ],
            quizzes: [
                {
                    id: "cells-exit-test",
                    title: "End of Topic Test: Cells",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "bio-1",
                            question: "Which organelle is the site of aerobic respiration?",
                            type: "multiple-choice",
                            options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
                            correctAnswer: "Mitochondria",
                            explanation: "Mitochondria release energy via respiration.",
                            marks: 1,
                            topic: "Cell Structure"
                        },
                        {
                            id: "bio-2",
                            question: "Which transport process requires energy?",
                            type: "multiple-choice",
                            options: ["Diffusion", "Osmosis", "Active Transport", "Evaporation"],
                            correctAnswer: "Active Transport",
                            explanation: "It moves particles against the concentration gradient.",
                            marks: 1,
                            topic: "Transport"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "chemistry-atomic",
            name: "Chemistry: Atomic Structure",
            completed: false,
            studyMaterials: [
                {
                    id: "atoms-periodictable",
                    title: "Atoms and Periodic Table",
                    content: `# ⚛️ Chemistry: Atoms

## 🎯 Objectives
- ⚛️ Describe **Protons, Neutrons, Electrons**.
- 📊 Understand **Isotopes**.
- 📜 History of the Atom.

---

## 📚 Chapter 1: Sub-atomic Particles

| Particle | Mass | Charge | Location |
| :--- | :--- | :--- | :--- |
| **Proton** | 1 | +1 (Positive) | Nucleus |
| **Neutron** | 1 | 0 (Neutral) | Nucleus |
| **Electron** | Very small (1/2000) | -1 (Negative) | Shells |

*   **Atomic Number:** Number of Protons. (Defines the element).
*   **Mass Number:** Protons + Neutrons.

---

## 📚 Chapter 2: Electronic Structure
Electrons sit in shells.
*   Shell 1 holds: **2**
*   Shell 2 holds: **8**
*   Shell 3 holds: **8**

*Example:* Sodium (11 electrons) = **2, 8, 1**.

---

## 📚 Chapter 3: Separating Mixtures
1.  **Filtration:** Insoluble solid from liquid (Sand & Water).
2.  **Crystallisation:** Soluble solid from liquid (Salt & Water).
3.  **Distillation:** Separating liquids by boiling point (Ink & Water).
4.  **Chromatography:** Separating dyes.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Draw electron shells", "Calculate protons/neutrons"]
                }
            ],
            quizzes: [
                {
                    id: "atoms-exit-test",
                    title: "End of Topic Test: Atoms",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "chem-1",
                            question: "What is the charge of a Neutron?",
                            type: "multiple-choice",
                            options: ["+1", "-1", "0", "+2"],
                            correctAnswer: "0",
                            explanation: "Neutrons are neutral.",
                            marks: 1,
                            topic: "Structure"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "physics-energy",
            name: "Physics: Energy",
            completed: false,
            studyMaterials: [
                {
                    id: "energy-stores",
                    title: "Energy Stores and Transfers",
                    content: `# ⚡ Physics: Energy

## 🎯 Objectives
- 🔋 List the **8 Energy Stores**.
- 📏 Calculate **Kinetic** and **Gravitational** Energy.
- 🔥 Understand **Efficiency**.

---

## 📚 Chapter 1: The 8 Stores (KG CEMENT)
1.  **K**inetic (Moving objects).
2.  **G**ravitational Potential (High objects).
3.  **C**hemical (Fuel, food, batteries).
4.  **E**lastic Potential (Stretched spring).
5.  **M**agnetic.
6.  **E**lectrostatic.
7.  **N**uclear.
8.  **T**hermal (Heat).

---

## 📚 Chapter 2: Key Formulas

### Kinetic Energy (Ek)
> **Ek = 0.5 × Mass × Speed²**
> (Ek = ½mv²)

### Gravitational Potential (Ep)
> **Ep = Mass × Gravity × Height**
> (Ep = mgh)
> *g on Earth is approx 9.8 N/kg*

---

## 📚 Chapter 3: Power & Efficiency
**Power:** Rate of energy transfer.
> P = Energy ÷ Time (Watts)

**Efficiency:** How good a device is.
> Eff = (Useful Energy Out ÷ Total Energy In) × 100

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Calculate Ek and Ep", "List energy stores"]
                }
            ],
            quizzes: [
                {
                    id: "energy-exit-test",
                    title: "End of Topic Test: Energy",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "phys-1",
                            question: "What is the unit for Energy?",
                            type: "multiple-choice",
                            options: ["Newtons", "Watts", "Joules", "Kilograms"],
                            correctAnswer: "Joules",
                            explanation: "Energy is measured in Joules (J).",
                            marks: 1,
                            topic: "Units"
                        },
                        {
                            id: "phys-2",
                            question: "If a car speeds up, quale store increases?",
                            type: "multiple-choice",
                            options: ["Thermal", "Kinetic", "Gravitational", "Elastic"],
                            correctAnswer: "Kinetic",
                            explanation: "Movement energy is Kinetic.",
                            marks: 1,
                            topic: "Stores"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};
