
import { Subject } from "@/types/curriculum";

export const year10CombinedScience: Subject = {
    id: "science-10",
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
                    title: "Cell Structure & Specialisation",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Compare eukaryotic and prokaryotic cells", "Identify organelles", "Explain cell specialisation"],
                    content: `# 🔬 B1: The Building Blocks of Life

> [!TIP]
> **Core Concept:** Every living organism, from the largest whale to the smallest bacterium, is composed of cells. Understanding their architecture is the key to all biology.

---

## 🏛️ Cell Classification

Biologists classify all life into two main categories based on their internal structure.

### 🦠 Eukaryotic vs Prokaryotic

| Feature | Eukaryotic (Animal/Plant) | Prokaryotic (Bacteria) |
| :--- | :--- | :--- |
| **Nucleus** | DNA is enclosed in a nuclear membrane. | DNA floats freely in a single loop. |
| **Organelles** | Complex (Mitochondria, Chloroplasts). | Simple (Ribosomes only). |
| **Plasmids** | No. | Yes (small rings of extra DNA). |
| **Scale** | Larger (10-100 µm). | Tiny (0.1-5 µm). |

---

## 🧬 Anatomy of a Cell

Cells contain specialized structures called **organelles**. Think of them as tiny "organs" within the cell.

![Animal and Plant Cell AnatomySide-by-Side Comparison](C:/Users/Dell/.gemini/antigravity/brain/f02c14d8-3f2c-460b-b24d-0d903850ce9d/animal_vs_plant_cell_diagram_1770481231995.png)

### The "Must-Know" Organelles:
*   **Nucleus:** The control center containing genetic material.
*   **Cytoplasm:** Jelly-like substance where chemical reactions occur.
*   **Cell Membrane:** Controls what enters and leaves the cell.
*   **Mitochondria:** Where aerobic respiration happens (energy release).
*   **Ribosomes:** Sites of protein synthesis.

---

## 🌿 Plants: The Specialists

Plant cells have three additional structures that animal cells lack:

1.  **Chloroplasts:** Contain chlorophyll for photosynthesis.
2.  **Permanent Vacuole:** Filled with cell sap to keep the cell turgid (firm).
3.  **Cell Wall:** Made of cellulose for strength and support.

> [!IMPORTANT]
> **Exam Trick:** Bacteria have cell walls too, but they are **NOT** made of cellulose!

---

## 🏹 Cell Specialisation (Differentiation)

As cells mature, they develop specific shapes and structures to perform particular jobs.

*   **Sperm Cells:** Have a tail (flagellum) for swimming and many mitochondria for energy.
*   **Nerve Cells:** Long axons to carry electrical impulses over distances.
*   **Root Hair Cells:** Large surface area to absorb water and minerals efficiently.
*   **Xylem/Phloem:** Specialized for transport within plants.
`
                },
                {
                    id: "microscopy-practical",
                    title: "Required Practical: Microscopy",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 30,
                    learningObjectives: ["Prepare a slide", "Operate a light microscope", "Calculate total magnification"],
                    content: `# 🔦 Required Practical: Microscopy

How do we actually see these tiny structures? We use microscopes to magnify samples.

---

## 🧫 Preparing an onion cell slide

1.  Use tweezers to peel a thin layer of **epidermal tissue** from an onion.
2.  Place the tissue onto a clean glass slide.
3.  Add a drop of **Iodine solution** (the stain) to make structures visible.
4.  Carefully lower a **coverslip** onto the tissue. Avoid creating air bubbles!

---

## 🔬 Using the microscope

Follow these steps to get a clear image:

1.  Clip the slide onto the **stage**.
2.  Select the **lowest power** objective lens.
3.  Use the **coarse adjustment knob** to move the stage up to just below the lens.
4.  Look through the eyepiece and use the **fine adjustment knob** until the cells are in focus.

---

## 📏 Calculations for the exam

You must be able to calculate magnification and size using the **IAM triangle**:

*   **I = A x M**
*   **Image Size:** How big it looks on the paper.
*   **Actual Size:** The real size of the object.
*   **Magnification:** How many times bigger the image is.

> [!WARNING]
> Always ensure your units match! Convert mm to µm (micrometres) by multiplying by **1,000**.
`
                },
                {
                    id: "cell-transport",
                    title: "Diffusion, Osmosis & Active Transport",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Explain Diffusion and Osmosis", "Compare Active Transport", "Calculate surface area to volume ratio"],
                    content: `# 💨 Moving In and Out: Cell Transport

Cells aren't closed systems. They must exchange gases, nutrients, and waste to survive.

---

## 🏛️ Transport Mechanisms

![Diffusion and Osmosis Diagram](C:/Users/Dell/.gemini/antigravity/brain/f02c14d8-3f2c-460b-b24d-0d903850ce9d/diffusion_osmosis_diagram_1770481252081.png)

### 1. Diffusion 💨
*   **What:** Movement of particles from **High to Low** concentration.
*   **Energy:** Passive (Automatic).
*   **Factors:** Temperature, Surface Area, and Concentration Gradient.

### 2. Osmosis 🌊
*   **What:** The diffusion of **Water** across a partially permeable membrane.
*   **Direction:** From a dilute solution to a concentrated solution.

---

## 🔋 Active Transport

Sometimes cells need to move things against the "flow" (from **Low to High** concentration).

*   **Energy:** Requires energy (ATP) from respiration.
*   **Examples:** Root hair cells absorbing minerals; Sugar absorption in the gut.

---

## 📦 Surface Area to Volume Ratio

As an organism gets larger, its **Surface Area to Volume (SA:V) ratio** decreases.

*   Single-celled organisms have a **huge** SA:V ratio, so they can rely on simple diffusion.
*   Multi-cellular organisms (like humans) have a **small** SA:V ratio and need specialized exchange surfaces (like lungs and gills).
`
                }
            ],
            quizzes: [
                {
                    id: "cells-quiz",
                    title: "End of Topic Test: Cell Biology (Expanded)",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
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
                        },
                        {
                            id: "b1-3",
                            question: "What is the function of the ribosome?",
                            type: "multiple-choice",
                            options: ["Respiration", "Protein Synthesis", "Cell Division", "Photosynthesis"],
                            correctAnswer: "Protein Synthesis",
                            explanation: "Ribosomes are the site where proteins are made in the cell.",
                            marks: 1,
                            topic: "Organelles"
                        },
                        {
                            id: "b1-4",
                            question: "Which organelle provides energy for the cell through respiration?",
                            type: "multiple-choice",
                            options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
                            correctAnswer: "Mitochondria",
                            explanation: "Mitochondria are the powerhouse of the cell, where aerobic respiration occurs.",
                            marks: 1,
                            topic: "Organelles"
                        },
                        {
                            id: "b1-5",
                            question: "What defines Osmosis?",
                            type: "multiple-choice",
                            options: [
                                "Movement of glucose from high to low concentration",
                                "Diffusion of water across a partially permeable membrane",
                                "Active uptake of minerals by root hair cells",
                                "Movement of gas particles in air"
                            ],
                            correctAnswer: "Diffusion of water across a partially permeable membrane",
                            explanation: "Osmosis is specifically the movement of water molecules.",
                            marks: 1,
                            topic: "Transport"
                        },
                        {
                            id: "b1-6",
                            question: "How do you calculate total magnification?",
                            type: "multiple-choice",
                            options: [
                                "Eyepiece + Objective",
                                "Eyepiece x Objective",
                                "Objective / Eyepiece",
                                "Eyepiece - Objective"
                            ],
                            correctAnswer: "Eyepiece x Objective",
                            explanation: "You multiply the magnification of the two lenses to get the total.",
                            marks: 1,
                            topic: "Microscopy"
                        },
                        {
                            id: "b1-7",
                            question: "Which cell is specialized for absorbing water and minerals from soil?",
                            type: "multiple-choice",
                            options: ["Sperm Cell", "Nerve Cell", "Root Hair Cell", "Muscle Cell"],
                            correctAnswer: "Root Hair Cell",
                            explanation: "Root hair cells have a large surface area for efficient absorption.",
                            marks: 1,
                            topic: "Specialisation"
                        },
                        {
                            id: "b1-8",
                            question: "What is the role of the cell membrane?",
                            type: "multiple-choice",
                            options: [
                                "Contains genetic material",
                                "Controls what enters and leaves the cell",
                                "Site of chemical reactions",
                                "Provides support and strength"
                            ],
                            correctAnswer: "Controls what enters and leaves the cell",
                            explanation: "The membrane is partially permeable and controls the movement of substances.",
                            marks: 1,
                            topic: "Organelles"
                        },
                        {
                            id: "b1-9",
                            question: "Which of these is ONLY found in plant cells?",
                            type: "multiple-choice",
                            options: ["Cell Membrane", "Mitochondria", "Nucleus", "Chloroplasts"],
                            correctAnswer: "Chloroplasts",
                            explanation: "Chloroplasts are needed for photosynthesis, which only plants do.",
                            marks: 1,
                            topic: "Cell Types"
                        },
                        {
                            id: "b1-10",
                            question: "What happens to the SA:V ratio as cell size increases?",
                            type: "multiple-choice",
                            options: ["Increases", "Decreases", "Stays the same", "Doubles"],
                            correctAnswer: "Decreases",
                            explanation: "As an object grows, its volume increases faster than its surface area.",
                            marks: 1,
                            topic: "Transport"
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
                    id: "dna-structure-genetics",
                    title: "DNA & The Genome",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Describe the structure of DNA", "Define the term Genome", "Explain the role of genes"],
                    content: `# 🧬 DNA: The Blueprint of Life

> [!TIP]
> **Core Concept:** Your DNA is a monstrously large instruction manual that tells your cells how to build **you**. Almost every cell in your body contains the exact same copy of this manual.

---

## 🏛️ The Double Helix

DNA is a polymer made from two strands which are twisted into a **Double Helix**.

*   **Chromosomes:** Long, coiled molecules of DNA found in the nucleus. Humans have **46** (23 pairs).
*   **Genes:** A small section of DNA that codes for a specific sequence of amino acids to make a protein.
*   **The Genome:** The entire genetic material of an organism.

---

## 🏛️ Why study the Genome?

1.  **Medicine:** Searching for genes linked to diseases (like Cancer or Alzheimer's).
2.  **History:** Tracking human migration patterns through time.
3.  **Treatment:** Helping us understand and treat inherited disorders.

---

## 🏛️ Protein Synthesis (Higher Only)

The order of bases in a gene determines the order of amino acids in a protein. A change (mutation) in this sequence can change the shape and function of the protein (e.g., an enzyme's active site).
`
                },
                {
                    id: "genetic-inheritance-crosses",
                    title: "Genetic Inheritance",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Use Punnett Squares", "Define dominant and recessive alleles", "Explain sex determination"],
                    content: `# 👪 Genetic Inheritance

How do we inherit traits from our parents? It all comes down to **Alleles** (different versions of a gene).

---

## 🏛️ Key Vocabulary

*   **Genotype:** The collection of alleles you have (e.g., *Bb*).
*   **Phenotype:** The physical characteristic shown (e.g., *Brown eyes*).
*   **Homozygous:** Having two of the **same** alleles (e.g., *BB* or *bb*).
*   **Heterozygous:** Having two **different** alleles (e.g., *Bb*).

---

## 🏛️ Punnett Squares

Predict the probability of offspring traits. 

*   **Dominant Allele (B):** Only one copy is needed for the trait to show.
*   **Recessive Allele (b):** Two copies are needed for the trait to show.

### Example: Eye Colour
If both parents are heterozygous (*Bb*), what is the chance of a blue-eyed child (*bb*)?
**Answer: 25%**

---

## 🏛️ Sex Determination

Of the 23 pairs of chromosomes, one pair decides your biological sex.
*   **Females:** XX
*   **Males:** XY

> [!IMPORTANT]
> Since every egg is X and half of sperm are X and half are Y, there is always a **50%** chance of a boy or girl.
`
                },
                {
                    id: "evolution-selection",
                    title: "Evolution & Natural Selection",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Explain Charles Darwin's theory", "Describe the process of speciation"],
                    content: `# 🐒 Evolution: Survival of the Fittest

Evolution is the gradual change in the inherited characteristics of a population over time. This can lead to the formation of new species (**Speciation**).

---

## 🏛️ Charles Darwin's Theory

Darwin proposed **Natural Selection** after his voyage on the HMS Beagle.

### The Steps of Natural Selection:
1.  **Variation:** Individuals in a population show different phenotypes (caused by mutations).
2.  **Competition:** There is a struggle for survival (limited food, predators, disease).
3.  **Survival:** Those with the best-adapted features survive (**Selection Pressure**).
4.  **Reproduction:** The survivors breed and pass on their advantageous alleles.
5.  **Time:** Over many generations, the characteristic becomes more common.

---

## 🏛️ Evidence for Evolution

*   **Fossils:** Remains of organisms from millions of years ago.
*   **Antibiotic Resistance:** Bacteria evolving to "beat" our drugs.
*   **DNA Analysis:** Comparing how similar our genes are to other species (we share 98% with Chimpanzees!).

> [!WARNING]
> **Extinction** occurs when a species cannot adapt fast enough to a change in their environment.
`
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
                    id: "atoms-subatomic",
                    title: "Atoms & Subatomic Particles",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Identify subatomic particles", "Define mass and atomic number", "Explain Isotopes"],
                    content: `# ⚛️ Atoms: The Building Blocks

> [!TIP]
> **Core Concept:** Atoms are so small that a single grain of sand contains about 2.3 quintillion of them. Everything you see, touch, or smell is made of atoms.

---

## 🏛️ The Structure of the Atom

An atom consists of a tiny central **nucleus** surrounded by **electrons** in shells.

| Particle | Charge | Relative Mass | Location |
| :--- | :--- | :--- | :--- |
| **Proton** | +1 | 1 | Nucleus |
| **Neutron** | 0 | 1 | Nucleus |
| **Electron** | -1 | Almost 0 | Shells |

---

## 🏛️ Numbers to Know

*   **Atomic Number:** The number of **protons**. Each element has a unique number.
*   **Mass Number:** The total sum of **protons + neutrons**.
*   **Isotopes:** Atoms of the same element (same protons) but with a different number of **neutrons**.
    *   *Example:* Carbon-12 vs Carbon-14. Both have 6 protons, but C-14 has 8 neutrons.

---

## 🏛️ Electron Shells

Electrons are arranged in shells around the nucleus.
*   **Rule:** 2, 8, 8...
*   The first shell holds up to **2** electrons.
*   The second and third shells hold up to **8** each.
`
                },
                {
                    id: "periodic-table-trends",
                    title: "The Periodic Table & Groups",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Explain Mendeleev's table", "Describe trends in Group 1, 7 and 0", "List separation techniques"],
                    content: `# 📜 The Periodic Table: Mapping the Elements

In 1869, **Dmitri Mendeleev** created the first successful periodic table. He famously left **gaps** for elements that hadn't been discovered yet!

---

## 🏛️ The Key Groups

### 🟢 Group 1: Alkali Metals
*   **Traits:** Soft, highly reactive, low density.
*   **Trend:** Reactivity **increases** as you go DOWN the group.
*   **Why?** The outer electron is further from the nucleus, so it’s more easily lost.

### 🔴 Group 7: Halogens
*   **Traits:** Toxic non-metals, exist as pairs (e.g., Cl₂).
*   **Trend:** Reactivity **decreases** as you go DOWN the group.
*   **Why?** It’s harder to attract an electron into the outer shell as it gets further from the nucleus.

### ⚪ Group 0: Noble Gases
*   **Traits:** Colorless, very unreactive.
*   **Why?** They have a **full outer shell** (stable electronic structure).

---

## 🏛️ Separation Techniques

Sometimes we need to separate mixtures based on physical properties:

1.  **Filtration:** Separates an insoluble solid from a liquid.
2.  **Crystallisation:** Separates a soluble solid from a liquid.
3.  **Simple Distillation:** Separates a liquid from a solution (using boiling points).
4.  **Fractional Distillation:** Separates a mixture of liquids (like Crude Oil).
5.  **Chromatography:** Separates different dyes based on solubility.
`
                }
            ],
            quizzes: [
                {
                    id: "c1-exit",
                    title: "End of Topic Test: Atomic Structure",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "c1-1",
                            question: "Which particle is found in the nucleus and has no charge?",
                            type: "multiple-choice",
                            options: ["Proton", "Neutron", "Electron", "Nucleus"],
                            correctAnswer: "Neutron",
                            explanation: "Neutrons are neutral (charge 0) and located in the nucleus.",
                            marks: 1,
                            topic: "Atom"
                        },
                        {
                            id: "c1-2",
                            question: "What is the mass number of an atom?",
                            type: "multiple-choice",
                            options: ["Protons only", "Protons + Neutrons", "Protons + Electrons", "Electrons only"],
                            correctAnswer: "Protons + Neutrons",
                            explanation: "Mass number = sum of the heavy particles in the nucleus.",
                            marks: 1,
                            topic: "Atom"
                        },
                        {
                            id: "c1-3",
                            question: "Why did Mendeleev leave gaps in his periodic table?",
                            type: "multiple-choice",
                            options: ["He ran out of paper", "For undiscovered elements", "So it looked neater", "He didn't like some elements"],
                            correctAnswer: "For undiscovered elements",
                            explanation: "He predicted the properties of elements that hadn't been found yet.",
                            marks: 1,
                            topic: "Periodic Table"
                        },
                        {
                            id: "c1-4",
                            question: "What happens to reactivity in Group 1 as you go DOWN the group?",
                            type: "multiple-choice",
                            options: ["Increases", "Decreases", "Stays the same", "Stops"],
                            correctAnswer: "Increases",
                            explanation: "The outer electron is further away and more easily lost.",
                            marks: 1,
                            topic: "Trends"
                        },
                        {
                            id: "c1-5",
                            question: "Which of these is a Noble Gas?",
                            type: "multiple-choice",
                            options: ["Fluorine", "Helium", "Hydrogen", "Lithium"],
                            correctAnswer: "Helium",
                            explanation: "Helium is in Group 0 and has a full outer shell.",
                            marks: 1,
                            topic: "Periodic Table"
                        },
                        {
                            id: "c1-6",
                            question: "Define 'Isotope'.",
                            type: "multiple-choice",
                            options: [
                                "Same protons, different neutrons",
                                "Same neutrons, different protons",
                                "Same electrons, different protons",
                                "Different protons and neutrons"
                            ],
                            correctAnswer: "Same protons, different neutrons",
                            explanation: "Isotopes are varieties of the same element.",
                            marks: 1,
                            topic: "Atom"
                        },
                        {
                            id: "c1-7",
                            question: "Which technique separates liquids with different boiling points?",
                            type: "multiple-choice",
                            options: ["Filtration", "Distillation", "Crystallisation", "Chromatography"],
                            correctAnswer: "Distillation",
                            explanation: "Distillation evaporates the liquid with the lower boiling point first.",
                            marks: 1,
                            topic: "Separation"
                        },
                        {
                            id: "c1-8",
                            question: "How many electrons can the first shell hold?",
                            type: "multiple-choice",
                            options: ["1", "2", "8", "18"],
                            correctAnswer: "2",
                            explanation: "The innermost shell is small and only fits 2 electrons.",
                            marks: 1,
                            topic: "Atom"
                        },
                        {
                            id: "c1-9",
                            question: "Which group is known as the Halogens?",
                            type: "multiple-choice",
                            options: ["Group 1", "Group 7", "Group 0", "Group 2"],
                            correctAnswer: "Group 7",
                            explanation: "Group 7 consists of reactive non-metals like Fluorine and Chlorine.",
                            marks: 1,
                            topic: "Periodic Table"
                        },
                        {
                            id: "c1-10",
                            question: "Why do atoms have no overall charge?",
                            type: "multiple-choice",
                            options: [
                                "They contain only neutrons",
                                "Protons equal electrons",
                                "Protons equal neutrons",
                                "They have no particles"
                            ],
                            correctAnswer: "Protons equal electrons",
                            explanation: "The +1 from protons cancels out the -1 from electrons.",
                            marks: 1,
                            topic: "Atom"
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
                    id: "ionic-covalent-bonding",
                    title: "Ionic & Covalent Bonding",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Explain Ionic bonding", "Draw Dot and Cross diagrams", "Explain Covalent bonding"],
                    content: `# 🔗 Chemical Bonding: Ionic & Covalent

> [!NOTE]
> **Key Concept:** Why do atoms bond? They want a **full outer shell** (a stable electronic structure). They do this by either **transferring** or **sharing** electrons.

---

## 🏛️ 1. Ionic Bonding (Metal + Non-Metal)

Ionic bonding involves the **transfer** of electrons from a metal atom to a non-metal atom.

*   **Metals:** Lose electrons to become **Positive Ions** (Cations).
*   **Non-Metals:** Gain electrons to become **Negative Ions** (Anions).
*   **The Bond:** Strong electrostatic attraction between oppositely charged ions.

### 🧩 Ionic Compounds (Giant Ionic Lattice)
*   **Melting Point:** Very high (strong bonds).
*   **Conductivity:** Only when **molten or dissolved** (ions are free to move).

---

## 🏛️ 2. Covalent Bonding (Non-Metal + Non-Metal)

Covalent bonding involves the **sharing** of pairs of electrons between two non-metal atoms.

*   **Simple Molecules (e.g., H₂O, CO₂):**
    *   Strong covalent bonds *inside* the molecules.
    *   **Weak Intermolecular Forces** *between* the molecules.
    *   **Properties:** Low melting/boiling points; do not conduct electricity.

> [!IMPORTANT]
> **Exam Tip:** When a simple molecular substance melts, you are breaking the **weak intermolecular forces**, NOT the strong covalent bonds!
`
                },
                {
                    id: "giant-structures-metals",
                    title: "Giant Structures & Metallic Bonding",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Compare Diamond and Graphite", "Explain Fullerenes", "Describe Metallic bonding"],
                    content: `# 💎 Giant Structures & Metals

Some substances don't exist as small molecules but as massive, repeating networks of atoms.

---

## 🏛️ Giant Covalent Structures

### 1. Diamond (Pure Carbon)
*   Each carbon atom forms **4** strong covalent bonds.
*   **Properties:** Extremely hard, very high melting point, does not conduct electricity.

### 2. Graphite (Pure Carbon)
*   Each carbon atom forms **3** covalent bonds in layers.
*   The fourth electron is **delocalised** (free to move).
*   **Properties:** Soft/Slippery (layers slide), conducts electricity and heat.

---

## 🏛️ Fullerenes & Graphene

*   **Graphene:** A single layer of graphite. Incredible conductor and very strong.
*   **Fullerenes:** Molecules of carbon with hollow shapes (e.g., Buckminsterfullerene C₆₀).
*   **Nanotubes:** Cylindrical fullerenes used in electronics and nanotechnology.

---

## 🏛️ 3. Metallic Bonding (Metals Only)

Metals consist of a giant structure of **positive ions** arranged in a regular pattern, surrounded by a "sea" of **delocalised electrons**.

1.  **Conductivity:** Delocalised electrons carry charge/heat through the structure.
2.  **Malleability:** Atoms are arranged in layers that can **slide** over each other.
3.  **Alloys:** Mixtures of metals. The different-sized atoms distort the layers, making it harder for them to slide, which makes alloys **harder** than pure metals.
`
                }
            ],
            quizzes: [
                {
                    id: "c2-exit",
                    title: "End of Topic Test: Bonding",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "c2-1",
                            question: "What type of bonding involves the sharing of electrons?",
                            type: "multiple-choice",
                            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
                            correctAnswer: "Covalent",
                            explanation: "Covalent bonding is the sharing of electron pairs between non-metals.",
                            marks: 1,
                            topic: "Bonding"
                        },
                        {
                            id: "c2-2",
                            question: "Why does Graphite conduct electricity?",
                            type: "multiple-choice",
                            options: ["It is a metal", "It has delocalised electrons", "It has ions", "It is soft"],
                            correctAnswer: "It has delocalised electrons",
                            explanation: "Each carbon only forms 3 bonds, leaving one electron free to move.",
                            marks: 1,
                            topic: "Structure"
                        },
                        {
                            id: "c2-3",
                            question: "Which of these has a giant covalent structure?",
                            type: "multiple-choice",
                            options: ["Water", "Carbon Dioxide", "Diamond", "Methane"],
                            correctAnswer: "Diamond",
                            explanation: "Diamond is a huge network of carbon atoms.",
                            marks: 1,
                            topic: "Structure"
                        },
                        {
                            id: "c2-4",
                            question: "What happens to the electrons in an ionic bond between Sodium and Chlorine?",
                            type: "multiple-choice",
                            options: [
                                "Shared equally",
                                "Sodium gives one to Chlorine",
                                "Chlorine gives one to Sodium",
                                "They stay where they are"
                            ],
                            correctAnswer: "Sodium gives one to Chlorine",
                            explanation: "The metal (Na) transfers its outer electron to the non-metal (Cl).",
                            marks: 1,
                            topic: "Ionic"
                        },
                        {
                            id: "c2-5",
                            question: "Why are Alloys harder than pure metals?",
                            type: "multiple-choice",
                            options: [
                                "They have more bonds",
                                "Different sized atoms distort layers",
                                "They are colder",
                                "They contain glue"
                            ],
                            correctAnswer: "Different sized atoms distort layers",
                            explanation: "This prevents layers from sliding over each other easily.",
                            marks: 1,
                            topic: "Metals"
                        },
                        {
                            id: "c2-6",
                            question: "Which property is typical of simple molecular substances?",
                            type: "multiple-choice",
                            options: ["High melting point", "Low boiling point", "Conducts as solid", "Hard"],
                            correctAnswer: "Low boiling point",
                            explanation: "They have weak intermolecular forces.",
                            marks: 1,
                            topic: "Covalent"
                        },
                        {
                            id: "c2-7",
                            question: "What is an anion?",
                            type: "multiple-choice",
                            options: ["Positive ion", "Negative ion", "Neutral atom", "Isotope"],
                            correctAnswer: "Negative ion",
                            explanation: "Anions are negative (remember 'A Negative ION').",
                            marks: 1,
                            topic: "Ionic"
                        },
                        {
                            id: "c2-8",
                            question: "How many bonds does carbon form in Diamond?",
                            type: "multiple-choice",
                            options: ["2", "3", "4", "5"],
                            correctAnswer: "4",
                            explanation: "Carbon forms 4 covalent bonds in the rigid diamond structure.",
                            marks: 1,
                            topic: "Structure"
                        },
                        {
                            id: "c2-9",
                            question: "Can ionic compounds conduct electricity when solid?",
                            type: "multiple-choice",
                            options: ["Yes", "No", "Sometimes", "Only if pure"],
                            correctAnswer: "No",
                            explanation: "In a solid, the ions are fixed in a lattice and cannot move.",
                            marks: 1,
                            topic: "Ionic"
                        },
                        {
                            id: "c2-10",
                            question: "What is Graphene?",
                            type: "multiple-choice",
                            options: [
                                "A type of plastic",
                                "Fullerene sphere",
                                "A single layer of graphite",
                                "A liquid metal"
                            ],
                            correctAnswer: "A single layer of graphite",
                            explanation: "Graphene is a 2D sheet of carbon atoms.",
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
