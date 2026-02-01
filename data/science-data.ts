
import { Subject } from "@/types/curriculum";

export const year10CombinedScience: Subject = {
    id: "science",
    name: "Combined Science (Trilogy)",
    duration: 180,
    questions: 300,
    color: "from-teal-400 to-green-600",
    icon: "🧪",
    level: 1,
    xp: 0,
    maxXp: 5000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Lab Legend",
    timeLimit: 120,
    topics: [
        // --- BIOLOGY ---
        {
            id: "bio-cells",
            name: "B1: Cell Biology",
            completed: false,
            studyMaterials: [
                {
                    id: "cell-structure-transport",
                    title: "Cells & Transport",
                    content: `# 🔬 B1: Cell Structure & Transport
3
> [!NOTE]
> **Essential Concept:** Every living organism is built from cells—the fundamental units of life. Master these structures to understand how everything from bacteria to blue whales functions.

---

## 🏛️ Cell Classification

The world of cells is divided into two major "kingdoms" based on how they store their genetic blueprints.

### 🦠 Eukaryotic vs Prokaryotic
| Feature | Eukaryotic (Animal/Plant) | Prokaryotic (Bacteria) |
| :--- | :--- | :--- |
| **Nucleus** | Yes - DNA is safely enclosed. | No - DNA floats freely in a loop. |
| **Scale** | Larger and complex (10-100 µm). | Tiny and simple (0.1 - 5 µm). |
| **Organelles** | Has mitochondria and chloroplasts. | None - very basic internal structure. |
| **Plasmids** | No. | Yes - extra rings of DNA. |

---

## 🏛️ Cell Transport Mechanisms

Cells are not sealed boxes; they constanty swap materials with their environment using three main methods:

### 1. Diffusion 💨
* **Mechanism:** Particles move from **High to Low** concentration.
* **Energy:** Passive (No ATP required).
* **Example:** Oxygen diffusing into your bloodstream.

### 2. Osmosis 🌊
* **Mechanism:** The diffusion of **Water** across a partially permeable membrane.
* **Movement:** From a dilute solution (lots of water) to a concentrated one (less water).

### 3. Active Transport 🔋
* **Mechanism:** Particles move **AGAINST** the gradient (Low to High).
* **Energy:** Requires energy from respiration.
* **Example:** Plants absorbing minerals from soil.

---

## 🏛️ Cell Division: The Cell Cycle

For an organism to grow or repair itself, its cells must divide via **Mitosis**.

1. **Interphase:** DNA replicates and organelles (like mitochondria) double.
2. **Mitosis:** The chromosomes are pulled to opposite ends of the cell and the nucleus divides.
3. **Cytokinesis:** The cytoplasm and cell membrane split, creating **two identical daughter cells**.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Label cell diagrams", "Explain Osmosis"]
                }
            ],
            quizzes: [
                {
                    id: "cells-quiz",
                    title: "End of Topic Test: Cells",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "b1-1",
                            question: "Which transport process requires energy from respiration?",
                            type: "multiple-choice",
                            options: ["Diffusion", "Osmosis", "Active Transport", "Evaporation"],
                            correctAnswer: "Active Transport",
                            explanation: "It moves particles against the concentration gradient.",
                            marks: 1,
                            topic: "Transport"
                        },
                        {
                            id: "b1-2",
                            question: "What is a characteristic of Prokaryotic cells?",
                            type: "multiple-choice",
                            options: ["Has a Nucleus", "Has Plasmids", "Has Mitochondria", "Is Large"],
                            correctAnswer: "Has Plasmids",
                            explanation: "Prokaryotes (Bacteria) have small rings of DNA called plasmids.",
                            marks: 1,
                            topic: "Cells"
                        }
                    ]
                }
            ]
        },
        {
            id: "bio-organisation",
            name: "B2: Organisation",
            completed: false,
            studyMaterials: [
                {
                    id: "digestive-circulatory",
                    title: "Digestion & Circulation",
                    content: `# 🫀 B2: Organisation

## 🎯 Objectives
- 🍔 Explain the **Lock and Key** theory of enzymes.
- 🩸 Describe the **Heart** and **Blood Vessels**.
- 🌬️ Understand **Gas Exchange** in lungs.

---

## 📚 Chapter 1: Enzymes
Biological catalysts made of protein.
*   **Active Site:** Specific shape where the substrate fits.
*   **Lock and Key:** Only the correct substrate fits the enzyme.
*   **Denaturing:** High temp or wrong pH changes the active site shape. The enzyme stops working.

| Enzyme | Breaks Down | Into | Produced In |
| :--- | :--- | :--- | :--- |
| **Amylase** | Starch | Sugars | Salivary Glands, Pancreas |
| **Protease** | Protein | Amino Acids | Stomach (Pepsin), Pancreas |
| **Lipase** | Lipids (Fats) | Fatty Acids + Glycerol | Pancreas, Small Intestine |

---

## 📚 Chapter 2: The Heart
A double pump system.
1.  **Vena Cava:** Brings deoxygenated blood from body.
2.  **Right Atrium -> Right Ventricle -> Pulmonary Artery:** To Lungs.
3.  **Pulmonary Vein:** Oxygenated blood from Lungs.
4.  **Left Atrium -> Left Ventricle -> Aorta:** To Body.

*   *Note:* Left ventricle has thicker muscle to pump high pressure.
*   **Pacemaker:** Group of cells in Right Atrium.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["List enzymes", "Label heart diagram"]
                }
            ],
            quizzes: [
                {
                    id: "org-quiz",
                    title: "End of Topic Test: Organisation",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "b2-1",
                            question: "What happens to an enzyme at 100°C?",
                            type: "multiple-choice",
                            options: ["It works faster", "It denatures", "It replicates", "Nothing"],
                            correctAnswer: "It denatures",
                            explanation: "The active site changes shape irreversibly.",
                            marks: 1,
                            topic: "Enzymes"
                        },
                        {
                            id: "b2-2",
                            question: "Which blood vessel carries blood FROM the lungs?",
                            type: "multiple-choice",
                            options: ["Aorta", "Vena Cava", "Pulmonary Artery", "Pulmonary Vein"],
                            correctAnswer: "Pulmonary Vein",
                            explanation: "Veins bring blood IN to the heart. Pulmonary = Lungs.",
                            marks: 1,
                            topic: "Heart"
                        }
                    ]
                }
            ]
        },
        {
            id: "bio-infection",
            name: "B3: Infection & Response",
            completed: false,
            studyMaterials: [
                {
                    id: "disease-immunity",
                    title: "Pathogens & Immunity",
                    content: `# 🦠 B3: Infection

## 🎯 Key Concepts
*   **Pathogens:** Microorganisms that cause disease (Virus, Bacteria, Fungi, Protist).
*   **Bacteria:** Produce toxins that damage cells. (e.g., Salmonella, Gonorrhoea).
*   **Viruses:** Live inside cells and burst them. (e.g., Measles, HIV, TMV).

## 🛡️ Human Defence
*   **Skin:** Barrier and antimicrobial secretions.
*   **Nose/Trachea:** Mucus and Cilia trap pathogens.
*   **Stomach:** Hydrochloric acid kills bacteria.

## 💉 White Blood Cells
1.  **Phagocytosis:** Engulf and digest pathogens.
2.  **Antibodies:** Bind to antigens on pathogens. Specific.
3.  **Antitoxins:** Neutralise bacterial toxins.

## 💉 Vaccination
Injecting a dead/inactive pathogen to stimulate antibody production/memory cells.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Compare viruses/bacteria", "Explain vaccination"]
                }
            ],
            quizzes: [
                {
                    id: "inf-quiz",
                    title: "End of Topic Test: Infection",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "b3-1",
                            question: "Which type of blood cell produces antibodies?",
                            type: "multiple-choice",
                            options: ["Red Blood Cell", "White Blood Cell", "Platelet", "Plasma"],
                            correctAnswer: "White Blood Cell",
                            explanation: "Lymphocytes (a type of WBC) produce antibodies.",
                            marks: 1,
                            topic: "Immunity"
                        },
                        {
                            id: "b3-2",
                            question: "Antibiotics kill which pathogen?",
                            type: "multiple-choice",
                            options: ["Bacteria", "Viruses", "Fungi", "All"],
                            correctAnswer: "Bacteria",
                            explanation: "Antibiotics damage bacterial cell walls. They do NOT kill viruses.",
                            marks: 1,
                            topic: "Medicine"
                        }
                    ]
                }
            ]
        },
        {
            id: "bio-bioenergetics",
            name: "B4: Bioenergetics",
            completed: false,
            studyMaterials: [
                {
                    id: "photo-resp",
                    title: "Photosynthesis & Respiration",
                    content: `# 🌿 B4: Bioenergetics

## ☀️ Photosynthesis (Endothermic)
> **Carbon Dioxide + Water --(Light)--> Glucose + Oxygen**
> 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂

*   **Factors affecting rate:** Light intensity, CO₂ level, Temperature.
*   **Inverse Square Law:** Light intensity ∝ 1/distance².

## 🏃 Respiration (Exothermic)
Releasing energy from glucose.
1.  **Aerobic (with Oxygen):**
    > Glucose + Oxygen -> Carbon Dioxide + Water (+ Energy)
2.  **Anaerobic (No Oxygen) in Muscles:**
    > Glucose -> Lactic Acid (+ Less Energy)
    *   Creates **Oxygen Debt**.
3.  **Anaerobic in Yeast (Fermentation):**
    > Glucose -> Ethanol + Carbon Dioxide

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Write word equations", "Explain limiting factors"]
                }
            ],
            quizzes: [
                {
                    id: "bioen-quiz",
                    title: "End of Topic Test: Bioenergetics",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "b4-1",
                            question: "What is the by-product of anaerobic respiration in muscles?",
                            type: "multiple-choice",
                            options: ["Ethanol", "Lactic Acid", "Carbon Dioxide", "Water"],
                            correctAnswer: "Lactic Acid",
                            explanation: "Lactic acid build-up causes cramp/fatigue.",
                            marks: 1,
                            topic: "Respiration"
                        }
                    ]
                }
            ]
        },
        {
            id: "bio-homeostasis",
            name: "B5: Homeostasis",
            completed: false,
            studyMaterials: [
                {
                    id: "homeostasis-control",
                    title: "Homeostasis & Hormones",
                    content: `# 🌡️ B5: Homeostasis

## 🎯 Objectives
- 🧠 **Nervous System:** Reflex Arc.
- 🩸 **Blood Glucose:** Insulin and Glucagon.
- 🚺 **Reproduction:** Menstrual Cycle.

---

## 📚 Chapter 1: Regulating Conditions
Homeostasis is keeping internal conditions constant (Temp, Water, Sugar).
*   **Receptor:** Detects stimulus.
*   **Coordination Centre:** Brain/Spinal Cord processing.
*   **Effector:** Muscle (contracts) or Gland (secretes hormone).

## 📚 Chapter 2: The Reflex Arc
*   Stimulus -> Receptor -> Sensory Neurone -> Relay Neurone (CNS) -> Motor Neurone -> Effector.
*   *Note:* It is automatic and rapid to protect from harm.

## 📚 Chapter 3: Blood Glucose
Controlled by the **Pancreas**.
*   **Too High?** Pancreas releases **Insulin**. Glucose moves into cells/liver.
*   **Too Low?** Pancreas releases **Glucagon**. Glycogen turns back to Glucose.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Draw Reflex Arc", "Explain Negative Feedback"]
                }
            ],
            quizzes: [
                {
                    id: "b5-quiz",
                    title: "End of Topic Test: Homeostasis",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "b5-1",
                            question: "Which hormone lowers blood glucose?",
                            type: "multiple-choice",
                            options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
                            correctAnswer: "Insulin",
                            explanation: "Insulin causes glucose to be stored as glycogen.",
                            marks: 1,
                            topic: "Glucose Control"
                        }
                    ]
                }
            ]
        },
        {
            id: "bio-inheritance",
            name: "B6: Inheritance & Evolution",
            completed: false,
            studyMaterials: [
                {
                    id: "dna-evolution",
                    title: "DNA, Genetics & Evolution",
                    content: `# 🧬 B6: Inheritance

## 🎯 Objectives
- 🧬 **DNA:** Double Helix, Genes, Chromosomes.
- 👪 **Inheritance:** Punnett Squares (Dominant/Recessive).
- 🐒 **Evolution:** Natural Selection.

---

## 📚 Chapter 1: DNA & Meiosis
*   **DNA:** Polymer made of 4 bases (A, C, G, T).
*   **Gene:** Section of DNA that codes for a protein.
*   **Meiosis:** Makes Gametes (Sperm/Egg). 4 non-identical cells. Half chromosomes (23).

## 📚 Chapter 2: Genetic Terms
*   **Allele:** Different versions of a gene (e.g., Blue eye allele).
*   **Homozygous:** Same alleles (BB or bb).
*   **Heterozygous:** Different alleles (Bb).
*   **Genotype:** The genes (Bb).
*   **Phenotype:** The physical characteristic (Blue eyes).

## 📚 Chapter 3: Evolution (Darwin)
1.  **Variation** exists in a species.
2.  Some features give a **Survival Advantage**.
3.  They reproduce and **Pass on Genes**.
4.  Over time, population changes.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Complete Punnett Square", "Explain Natural Selection"]
                }
            ],
            quizzes: [
                {
                    id: "b6-quiz",
                    title: "End of Topic Test: Genetics",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "b6-1",
                            question: "What is the structure of DNA?",
                            type: "multiple-choice",
                            options: ["Single Helix", "Double Helix", "Triple Helix", "Circle"],
                            correctAnswer: "Double Helix",
                            explanation: "Two distinct strands wind around each other.",
                            marks: 1,
                            topic: "DNA"
                        },
                        {
                            id: "b6-2",
                            question: "If 'B' is dominant (Brown) and 'b' is recessive (Blue), what is Bb?",
                            type: "multiple-choice",
                            options: ["Brown", "Blue", "Green", "Hazel"],
                            correctAnswer: "Brown",
                            explanation: "Dominant allele masks the recessive.",
                            marks: 1,
                            topic: "Inheritance"
                        }
                    ]
                }
            ]
        },
        {
            id: "bio-ecology",
            name: "B7: Ecology",
            completed: false,
            studyMaterials: [
                {
                    id: "ecosystems",
                    title: "Ecosystems & Biodiversity",
                    content: `# 🌍 B7: Ecology

## 🎯 Objectives
- 🦊 **Food Chains:** Producers, Consumers, Predators.
- ♻️ **Cycles:** Carbon and Water Cycles.
- 🏘️ **Biodiversity:** Maintaining variety.

---

## 📚 Chapter 1: Interdependence
*   **Community:** All populations living in a habitat.
*   **Abiotic Factors:** Non-living (Light, Temp, Water).
*   **Biotic Factors:** Living (Food, Predators, Pathogens).
*   **Interdependence:** Species rely on each other (pollination, seed dispersal, food).

## 📚 Chapter 2: The Carbon Cycle
1.  **Photosynthesis:** Removes CO₂ from air.
2.  **Eating:** Carbon moves to animals.
3.  **Respiration:** Returns CO₂ to air.
4.  **Combustion:** Burning fossil fuels releases CO₂.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Draw food webs", "Explain Carbon Cycle"]
                }
            ],
            quizzes: [
                {
                    id: "b7-quiz",
                    title: "End of Topic Test: Ecology",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "b7-1",
                            question: "What is an Abiotic factor?",
                            type: "multiple-choice",
                            options: ["New Predator", "Pathogen", "Temperature", "Competition"],
                            correctAnswer: "Temperature",
                            explanation: "Abiotic means non-living.",
                            marks: 1,
                            topic: "Factors"
                        }
                    ]
                }
            ]
        },

        // --- CHEMISTRY ---
        {
            id: "chem-atomic",
            name: "C1: Atomic Structure",
            completed: false,
            studyMaterials: [
                {
                    id: "atoms-pt",
                    title: "Atoms & Periodic Table",
                    content: `# ⚛️ Chemistry: Atomic Structure

## 📚 Chapter 1: The Atom
*   **Proton:** +1 Charge, Mass 1, Nucleus.
*   **Neutron:** 0 Charge, Mass 1, Nucleus.
*   **Electron:** -1 Charge, Mass 0, Shells.
*   **Isotope:** Same protons, different neutrons.

## 📚 Chapter 2: Periodic Table
*   **Group 1 (Alkali Metals):** Highly reactive. Reactivity increases DOWN group.
*   **Group 7 (Halogens):** Non-metals. Reactivity decreases DOWN group.
*   **Group 0 (Noble Gases):** Unreactive (Full outer shells).

## 📚 Chapter 3: Separation Techniques
*   **Filtration:** Insoluble solid from liquid.
*   **Crystallisation:** Soluble solid from liquid.
*   **Distillation:** Liquids with different boiling points.
*   **Chromatography:** Separating dyes.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Draw electron shells", "Explain trends in groups"]
                }
            ],
            quizzes: [
                {
                    id: "c1-exit",
                    title: "End of Topic Test: Atoms",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c1-1",
                            question: "Why are Group 0 elements unreactive?",
                            type: "multiple-choice",
                            options: ["They are gases", "They have full outer shells", "They have no electrons", "They are metals"],
                            correctAnswer: "They have full outer shells",
                            explanation: "Full shells mean they don't need to lose/gain electrons.",
                            marks: 1,
                            topic: "Periodic Table"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-bonding",
            name: "C2: Bonding & Properties",
            completed: false,
            studyMaterials: [
                {
                    id: "bonding-types",
                    title: "Ionic, Covalent & Metallic",
                    content: `# 🔗 C2: Bonding

## 1. Ionic Bonding (Metal + Non-Metal)
*   Transfer of electrons.
*   Metal becomes **positive ion**, Non-metal becomes **negative ion**.
*   Strong electrostatic forces. High melting points. Conducts electricity when molten/dissolved.

## 2. Covalent Bonding (Non-Metal + Non-Metal)
*   **Sharing** pairs of electrons.
*   **Simple Molecules:** Low MP/BP (Weak forces between molecules). No conduction. (e.g. H₂O).
*   **Giant Covalent:** Diamond (4 bonds), Graphite (3 bonds + delocalised electrons). Very high MP.

## 3. Metallic Bonding (Metals)
*   Positive ions in a "sea" of delocalised electrons.
*   Good conductors (electrons move). Malleable (layers slide).

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Draw dot and cross diagrams", "Compare Diamond/Graphite"]
                }
            ],
            quizzes: [
                {
                    id: "c2-exit",
                    title: "End of Topic Test: Bonding",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c2-1",
                            question: "Why does Graphite conduct electricity?",
                            type: "multiple-choice",
                            options: ["It is a metal", "It has delocalised electrons", "It is ionic", "It is hard"],
                            correctAnswer: "It has delocalised electrons",
                            explanation: "Each carbon atom only bonds 3 times, leaving one free electron per atom.",
                            marks: 1,
                            topic: "Structure"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-quant",
            name: "C3: Quantitative Chemistry",
            completed: false,
            studyMaterials: [
                {
                    id: "moles-mass",
                    title: "Moles and Mass",
                    content: `# ⚖️ C3: Quantitative Chemistry

> **Mass = Moles x Mr**

## Key Concepts
*   **Conservation of Mass:** Mass of reactants = Mass of products (unless gas escapes).
*   **Relative Formula Mass (Mr):** Sum of atomic masses (Ar) in compound.
    *   *Example:* CO₂ = 12 + (16x2) = 44.
*   **The Mole:** 6.02 x 10²³ particles.
*   **Concentration:** Mass / Volume (g/dm³).

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Calculate Mr", "Use Mass=Moles*Mr"]
                }
            ],
            quizzes: [
                {
                    id: "c3-exit",
                    title: "End of Topic Test: Quantitative",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c3-1",
                            question: "What is the Mr of H₂O? (H=1, O=16)",
                            type: "multiple-choice",
                            options: ["17", "18", "16", "32"],
                            correctAnswer: "18",
                            explanation: "(1x2) + 16 = 18.",
                            marks: 1,
                            topic: "Moles"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-changes",
            name: "C4: Chemical Changes",
            completed: false,
            studyMaterials: [
                {
                    id: "acids-electrolysis",
                    title: "Acids, Alkalis & Electrolysis",
                    content: `# 🧪 C4: Chemical Changes

## 🎯 Objectives
- 🔋 **Reactivity Series.** 
- 🍋 **Acids & Alkalis (pH).**
- ⚡ **Electrolysis.**

---

## 📚 Chapter 1: Reactivity
*   **Metals + Oxygen -> Metal Oxides.** (Oxidation).
*   **Reactivity Series:** Potassium > Sodium > ... > Copper > Gold.
*   **Displacement:** More reactive metal kicks out less reactive one.
    *   Mg + CuSO₄ -> MgSO₄ + Cu

## 📚 Chapter 2: Acids & Alkalis
*   **Acid:** pH < 7. Produces H⁺ ions.
*   **Alkali:** pH > 7. Produces OH⁻ ions.
*   **Neutralisation:** H⁺ + OH⁻ -> H₂O.
*   **Acid + Metal -> Salt + Hydrogen:** (Mash).
*   **Acid + Base -> Salt + Water:** (Bash).
*   **Acid + Carbonate -> Salt + Water + Carbon Dioxide:** (Cash-cow).

## 📚 Chapter 3: Electrolysis
Breaking down ionic compounds using electricity.
*   **PANIC:** Positive Anode, Negative Is Cathode.
*   **Molten:** Lead Bromide -> Lead (Cathode) + Bromine (Anode).
*   **Aqueous:** Hydrogen often produced at Cathode unless metal is less reactive.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 55,
                    learningObjectives: ["Predict electrolysis products", "Write ionic equations"]
                }
            ],
            quizzes: [
                {
                    id: "c4-exit",
                    title: "End of Topic Test: Chemical Changes",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c4-1",
                            question: "Ionic Equation for Neutralisation?",
                            type: "multiple-choice",
                            options: ["H⁺ + OH⁻ -> H₂O", "H₂ + O₂ -> H₂O", "Na + Cl -> NaCl", "Acid + Base -> Salt"],
                            correctAnswer: "H⁺ + OH⁻ -> H₂O",
                            explanation: "Hydrogen ions react with Hydroxie ions to make water.",
                            marks: 1,
                            topic: "Neutralisation"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-energy",
            name: "C5: Energy Changes",
            completed: false,
            studyMaterials: [
                {
                    id: "exo-endo",
                    title: "Exothermic & Endothermic",
                    content: `# 🔥 C5: Energy Changes

## 🎯 Key Concepts
*   **Exothermic:** Releases energy to surroundings. Temp rises. (e.g., Combustion, Neutralisation).
*   **Endothermic:** Takes energy from surroundings. Temp falls. (e.g., Photosynthesis).

## 📚 Reaction Profiles
*   **Activation Energy:** Minimum energy to start reaction.
*   **Bond Breaking:** Endothermic (Requires energy).
*   **Bond Making:** Exothermic (Releases energy).
*   **Energy Change = Bonds Broken - Bonds Made.**

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["Draw reaction profiles", "Calculate bond energy"]
                }
            ],
            quizzes: [
                {
                    id: "c5-exit",
                    title: "End of Topic Test: Energy Changes",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c5-1",
                            question: "If Energy Change is negative, the reaction is...",
                            type: "multiple-choice",
                            options: ["Endothermic", "Exothermic", "Neutral", "Explosive"],
                            correctAnswer: "Exothermic",
                            explanation: "More energy released than taken in implies a negative change in internal energy.",
                            marks: 1,
                            topic: "Calculations"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-rates",
            name: "C6: Rates of Reaction",
            completed: false,
            studyMaterials: [
                {
                    id: "rates-factors",
                    title: "Collision Theory & Factors",
                    content: `# ⏱️ C6: Rates of Reaction

## Collision Theory 💥
For a reaction to happen, particles must collide with enough energy (**Activation Energy**).

## Factors Increasing Rate
1.  **Temperature:** Particles move faster -> More collisions + More energy.
2.  **Concentration/Pressure:** More particles in same space -> More frequent collisions.
3.  **Surface Area:** (Powder vs Lumps). More area for collisions.
4.  **Catalyst:** Lowers activation energy. Not used up.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["Explain Collision Theory", "Interpret Rate Graphs"]
                }
            ],
            quizzes: [
                {
                    id: "c6-exit",
                    title: "End of Topic Test: Rates",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c6-1",
                            question: "How does a catalyst work?",
                            type: "multiple-choice",
                            options: ["Increases temperature", "Lowers activation energy", "Increases concentration", "It burns"],
                            correctAnswer: "Lowers activation energy",
                            explanation: "It provides an alternative reaction pathway.",
                            marks: 1,
                            topic: "Catalysts"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-organic",
            name: "C7: Organic Chemistry",
            completed: false,
            studyMaterials: [
                {
                    id: "crude-oil",
                    title: "Crude Oil & Hydrocarbons",
                    content: `# ⛽ C7: Organic Chemistry

## 🎯 Objectives
*   **Alkanes:** Single bonds (CnH2n+2). Saturated. Methane, Ethane, Propane, Butane.
*   **Fractional Distillation:** Separating crude oil by boiling point.
*   **Cracking:** Breaking long chains into short alkanes and **Alkenes** (C=C double bond).

## 📚 Properties of Hydrocarbons
*   **Short Chain:** Running, Volatile (Flammable), Low Boiling Point.
*   **Long Chain:** Viscous (Thick), High Boiling Point.

## 📚 Alkenes
*   Have C=C double bond. Unsaturated.
*   Test: **Bromine Water** turns from Orange to Colourless.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Draw alkanes", "Explain cracking"]
                }
            ],
            quizzes: [
                {
                    id: "c7-exit",
                    title: "End of Topic Test: Organic Chem",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c7-1",
                            question: "What is the general formula for Alkanes?",
                            type: "multiple-choice",
                            options: ["CnH2n", "CnH2n+2", "CnH2n-2", "C2n+2"],
                            correctAnswer: "CnH2n+2",
                            explanation: "Standard formula for saturated hydrocarbons.",
                            marks: 1,
                            topic: "Alkanes"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-analysis",
            name: "C8: Chemical Analysis",
            completed: false,
            studyMaterials: [
                {
                    id: "purity-tests",
                    title: "Purity & Gas Tests",
                    content: `# 🕵️‍♂️ C8: Analysis

## 🎯 Objectives
*   **Pure Substances:** Specific MP/BP.
*   **Chromatography:** Rf Value = Distance Spot / Distance Solvent.
*   **Gas Tests.**

## 🧪 Gas Tests
1.  **Hydrogen:** Squeaky Pop with lit splint.
2.  **Oxygen:** Relights glowing splint.
3.  **Carbon Dioxide:** Turns Limewater cloudy.
4.  **Chlorine:** Bleaches damp litmus paper white.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Calculate Rf value", "Recall gas tests"]
                }
            ],
            quizzes: [
                {
                    id: "c8-exit",
                    title: "End of Topic Test: Analysis",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c8-1",
                            question: "Which gas turns limewater cloudy?",
                            type: "multiple-choice",
                            options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Chlorine"],
                            correctAnswer: "Carbon Dioxide",
                            explanation: "CO₂ reacts with calcium hydroxide to form precipitate.",
                            marks: 1,
                            topic: "Gas Tests"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-atmosphere",
            name: "C9: Atmosphere",
            completed: false,
            studyMaterials: [
                {
                    id: "climate-change",
                    title: "Atmosphere & Pollution",
                    content: `# 🌍 C9: Atmosphere

## 📚 Evolution of Atmosphere
1.  **Early Earth:** Volcanoes released CO₂, Water Vapour, Nitrogen.
2.  **Oceans Formed:** Water condensed. CO₂ dissolved.
3.  **Life:** Algae/Plants evolved photosynthesis -> Increased O₂, Decreased CO₂.
4.  **Today:** 78% Nitrogen, 21% Oxygen, 0.04% CO₂.

## 📚 Pollution
*   **Greenhouse Effect:** CO₂/Methane trap heat. Global Warming.
*   **Carbon Footprint:** Total greenhouse gas emissions of an item/person.
*   **Pollutants:**
    *   **SO₂/NOx:** Acid Rain.
    *   **Particulates:** Global Dimming / Health issues.
    *   **CO:** Toxic gas.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Explain greenhouse effect", "List pollutants"]
                }
            ],
            quizzes: [
                {
                    id: "c9-exit",
                    title: "End of Topic Test: Atmosphere",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c9-1",
                            question: "What is the most abundant gas in today's atmosphere?",
                            type: "multiple-choice",
                            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                            correctAnswer: "Nitrogen",
                            explanation: "Nitrogen makes up roughly 80% (78%).",
                            marks: 1,
                            topic: "Atmosphere"
                        }
                    ]
                }
            ]
        },
        {
            id: "chem-resources",
            name: "C10: Using Resources",
            completed: false,
            studyMaterials: [
                {
                    id: "lca-water",
                    title: "Sustainability & Water",
                    content: `# ♻️ C10: Resources

## 🎯 Objectives
*   **Finite Resources:** Will run out (Fossil fuels, Metals).
*   **Sustainable:** Meets needs without compromising future.
*   **Potable Water:** Safe to drink. (Filtered and Sterilised).

## 📚 Life Cycle Assessment (LCA)
Assessing environmental impact at stages:
1.  Extraction.
2.  Manufacturing.
3.  Use.
4.  Disposal.

## 📚 Reduce, Reuse, Recycle
Saves energy and finite resources.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["Interpret LCAs", "Explain Potable Water"]
                }
            ],
            quizzes: [
                {
                    id: "c10-exit",
                    title: "End of Topic Test: Resources",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "c10-1",
                            question: "What is Potable Water?",
                            type: "multiple-choice",
                            options: ["Pure Water", "Salty Water", "Drinking Water", "Rain Water"],
                            correctAnswer: "Drinking Water",
                            explanation: "It is not chemically pure (has dissolved minerals) but safe to drink.",
                            marks: 1,
                            topic: "Water"
                        }
                    ]
                }
            ]
        },

        // --- PHYSICS ---
        {
            id: "phys-energy",
            name: "P1: Energy",
            completed: false,
            studyMaterials: [
                {
                    id: "energy-resources",
                    title: "Energy Stores and Resources",
                    content: `# ⚡ P1: Energy

## 📚 Chapter 1: The 8 Stores (KG CEMENT)
1.  **K**inetic
2.  **G**ravitational
3.  **C**hemical
4.  **E**lastic
5.  **M**agnetic
6.  **E**lectrostatic
7.  **N**uclear
8.  **T**hermal

## 📚 Chapter 2: Equations
*   **Ek = 0.5mv²**
*   **Ep = mgh**
*   **Power (Watts) = Energy / Time**
*   **Efficiency = (Useful Out / Total In) x 100**

## 📚 Chapter 3: Energy Resources
*   **Renewable:** Sun, Wind, Wave, Hydro, Geothermal, Biofuel. (Won't run out).
*   **Non-Renewable:** Coal, Oil, Gas (Fossil Fuels), Nuclear. (Will run out).

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Calculate Ek and Ep", "Compare renewables"]
                }
            ],
            quizzes: [
                {
                    id: "p1-exit",
                    title: "End of Topic Test: Energy",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "p1-1",
                            question: "What is the unit for Power?",
                            type: "multiple-choice",
                            options: ["Joules", "Newtons", "Watts", "Amps"],
                            correctAnswer: "Watts",
                            explanation: "Power is energy transferred per second (J/s), which is Watts.",
                            marks: 1,
                            topic: "Units"
                        }
                    ]
                }
            ]
        },
        {
            id: "phys-electricity",
            name: "P2: Electricity",
            completed: false,
            studyMaterials: [
                {
                    id: "circuits-mains",
                    title: "Circuits & Mains",
                    content: `# 💡 P2: Electricity

## ⚡ Current, Voltage, Resistance
*   **Current (I):** Flow of charge. (Amps).
*   **Potential Difference (V):** Pushes current. (Volts).
*   **Resistance (R):** Slows current. (Ohms).
*   **Ohm's Law:** V = I x R

## 🔌 Circuits
*   **Series:** Current same everywhere. Voltage shared.
*   **Parallel:** Voltage same across branches. Current splits.

## 🏠 Mains Electricity
*   **AC (Alternating Current):** 230V, 50Hz.
*   **Live Wire (Brown):** Carries voltage.
*   **Neutral Wire (Blue):** Completes circuit.
*   **Earth Wire (Green/Yellow):** Safety.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Apply V=IR", "Draw IV characteristics"]
                }
            ],
            quizzes: [
                {
                    id: "p2-exit",
                    title: "End of Topic Test: Electricity",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "p2-1",
                            question: "What is the colour of the Live wire?",
                            type: "multiple-choice",
                            options: ["Blue", "Green/Yellow", "Brown", "Black"],
                            correctAnswer: "Brown",
                            explanation: "Live is Brown, Neutral is Blue, Earth is Striped.",
                            marks: 1,
                            topic: "Mains"
                        }
                    ]
                }
            ]
        },
        {
            id: "phys-particle",
            name: "P3: Particle Model",
            completed: false,
            studyMaterials: [
                {
                    id: "density-states",
                    title: "Density & States of Matter",
                    content: `# 🧊 P3: Particle Model

## 🧬 States of Matter
1.  **Solid:** Regular pattern, vibrate in fixed positions.
2.  **Liquid:** Random arrangement, flow past each other.
3.  **Gas:** Random, move quickly, far apart.

## ⚖️ Density
> **Density (ρ) = Mass (m) / Volume (V)**

*   **Internal Energy:** Kinetic Energy + Potential Energy of particles.
*   **Specific Latent Heat:** Energy to change state (melt/boil) without changing temp.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["Calculate Density", "Explain Internal Energy"]
                }
            ],
            quizzes: [
                {
                    id: "p3-exit",
                    title: "End of Topic Test: Particle Model",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "p3-1",
                            question: "During a state change (e.g. melting), what happens to temperature?",
                            type: "multiple-choice",
                            options: ["Increases", "Decreases", "Stays the same", "Fluctuates"],
                            correctAnswer: "Stays the same",
                            explanation: "Energy is used to break bonds (Latent Heat), not increase kinetic energy.",
                            marks: 1,
                            topic: "Latent Heat"
                        }
                    ]
                }
            ]
        },
        {
            id: "phys-atomic",
            name: "P4: Atomic Physics",
            completed: false,
            studyMaterials: [
                {
                    id: "radiation",
                    title: "Radioactivity",
                    content: `# ☢️ P4: Atomic Structure

## ☢️ Radiation Types
1.  **Alpha (α):** Helium Nucleus (2p, 2n). Strongly ionising. Stopped by paper.
2.  **Beta (β):** Fast electron. Moderately ionising. Stopped by Aluminium.
3.  **Gamma (γ):** EM Wave. Weakly ionising. Stopped by Lead.

## ⌛ Half-Life
The time it takes for the number of radioactive nuclei to halve.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["Compare Alpha/Beta/Gamma", "Calculate Half-Life"]
                }
            ],
            quizzes: [
                {
                    id: "p4-exit",
                    title: "End of Topic Test: Radiation",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "p4-1",
                            question: "Which radiation is the most ionising?",
                            type: "multiple-choice",
                            options: ["Alpha", "Beta", "Gamma", "X-Ray"],
                            correctAnswer: "Alpha",
                            explanation: "Alpha particles are large and charged, so they hit atoms easily.",
                            marks: 1,
                            topic: "Radiation"
                        }
                    ]
                }
            ]
        },
        {
            id: "phys-forces",
            name: "P5: Forces",
            completed: false,
            studyMaterials: [
                {
                    id: "newton-laws",
                    title: "Newton's Laws & Motion",
                    content: `# 🍎 P5: Forces

## 📏 Vector vs Scalar
*   **Vector:** Magnitude + Direction (Velocity, Force, Displacement).
*   **Scalar:** Magnitude only (Speed, Distance, Mass).

## 🍎 Newton's Laws
1.  **First Law:** Objects stay still or constant velocity unless a Resultant Force acts.
2.  **Second Law:** **F = ma**. (Force = Mass x Acceleration).
3.  **Third Law:** Every action has an equal and opposite reaction.

## 🏎️ Motion Equations
*   Speed = Distance / Time.
*   Acceleration = Change in Velocity / Time.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Apply F=ma", "Distinguish Vector/Scalar"]
                }
            ],
            quizzes: [
                {
                    id: "p5-exit",
                    title: "End of Topic Test: Forces",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "p5-1",
                            question: "If mass increases but force stays same, what happens to acceleration?",
                            type: "multiple-choice",
                            options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
                            correctAnswer: "Decreases",
                            explanation: "F=ma. If m goes up, a must go down.",
                            marks: 1,
                            topic: "Newtons Laws"
                        }
                    ]
                }
            ]
        },
        {
            id: "phys-waves",
            name: "P6: Waves",
            completed: false,
            studyMaterials: [
                {
                    id: "waves-properties",
                    title: "Types & Properties of Waves",
                    content: `# 🌊 P6: Waves

## 🌊 Types
*   **Transverse:** Vibrate perpendicular to direction (e.g. Light, Water).
*   **Longitudinal:** Vibrate parallel to direction (e.g. Sound).

## 📏 Wave Equation
> **Wave Speed (v) = Frequency (f) x Wavelength (λ)**

## 🌈 EM Spectrum (Rich Men In Vegas Use X-ray Glasses)
Radio -> Micro -> Infrared -> Visible -> UV -> X-ray -> Gamma.
*(Long Wavelength, Low Freq) -> (Short Wavelength, High Freq)*.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Use v=fλ", "List EM spectrum"]
                }
            ],
            quizzes: [
                {
                    id: "p6-exit",
                    title: "End of Topic Test: Waves",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "p6-1",
                            question: "Which EM wave has the highest frequency?",
                            type: "multiple-choice",
                            options: ["Radio", "Visible Light", "Gamma", "Microwave"],
                            correctAnswer: "Gamma",
                            explanation: "Gamma rays have the shortest wavelength and highest energy/frequency.",
                            marks: 1,
                            topic: "EM Spectrum"
                        }
                    ]
                }
            ]
        },
        {
            id: "phys-magnetism",
            name: "P7: Magnetism",
            completed: false,
            studyMaterials: [
                {
                    id: "magnets-motor",
                    title: "Magnetism & Electromagnetism",
                    content: `# 🧲 P7: Magnetism

## 🧲 Magnets
*   **Poles:** North repsels North. North attracts South.
*   **Field:** Lines go North to South.

## 🔌 Electromagnetism
*   A current in a wire creates a magnetic field.
*   **Solenoid:** A coil of wire. Stronger field inside.
*   **Electromagnet:** Solenoid with iron core. Can turn on/off.

## 🏎️ Motor Effect
A current carrying wire in a magnetic field experiences a FORCE.
*   **Fleming's Left Hand Rule:**
    *   Thumb = Motion (Force).
    *   First Finger = Field (N->S).
    *   Second Finger = Current (+ -> -).

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Draw magnetic fields", "Use Left Hand Rule"]
                }
            ],
            quizzes: [
                {
                    id: "p7-exit",
                    title: "End of Topic Test: Magnetism",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 40,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "p7-1",
                            question: "In Flemmings Left Hand Rule, what does the Thumb represent?",
                            type: "multiple-choice",
                            options: ["Current", "Field", "Motion/Force", "Voltage"],
                            correctAnswer: "Motion/Force",
                            explanation: "Thumb = Thrust (Motion). First = Field. SeCond = Current.",
                            marks: 1,
                            topic: "Motor Effect"
                        }
                    ]
                }
            ]
        }
    ]
};
