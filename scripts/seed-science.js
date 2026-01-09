
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

const year10CombinedScience = {
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
        // --- BIOLOGY (B1-B7) ---
        {
            id: "b1-cells",
            name: "B1: Cell Biology",
            completed: false,
            studyMaterials: [
                {
                    id: "b1-structure", title: "Cell Structure",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🔬 Cell Structure\n## Eukaryotes vs Prokaryotes\n* **Eukaryotic:** Animal and Plant cells (Has Nucleus).\n* **Prokaryotic:** Bacteria (No Nucleus, Plasmids).\n\n## Organelles\n* **Nucleus:** Controls cell.\n* **Mitochondria:** Respiration.\n* **Ribosomes:** Protein Synthesis.",
                    learningObjectives: ["Compare cell types", "Label organelles"]
                },
                {
                    id: "b1-transport", title: "Transport in Cells",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 🌊 Transport\n## 1. Diffusion\nHigh -> Low concentration. Passive.\n\n## 2. Osmosis\nWater moves High -> Low concentration through semi-permeable membrane.\n\n## 3. Active Transport\nLow -> High concentration. Requires Energy.",
                    learningObjectives: ["Explain Diffusion", "Define Osmosis"]
                },
                {
                    id: "b1-mitosis", title: "Cell Division (Mitosis)",
                    type: "lesson", difficulty: "higher", estimatedTime: 35,
                    content: "# 📉 Mitosis\nUsed for Growth and Repair.\n1. **Replicate:** DNA doubles.\n2. **Mitosis:** Chromosomes pulled apart.\n3. **Divide:** Cytoplasm splits -> Two identical cells.",
                    learningObjectives: ["Describe the cell cycle"]
                }
            ],
            quizzes: [{ id: "b1-quiz", title: "Test: Cells", questions: [{ id: "q1", question: "Where is DNA in a bacteria?", options: ["Nucleus", "Loop/Plasmid", "Mitochondria"], correctAnswer: "Loop/Plasmid", marks: 1, topic: "Prokaryotes" }] }]
        },
        {
            id: "b2-org",
            name: "B2: Organisation",
            completed: false,
            studyMaterials: [
                {
                    id: "b2-digestion", title: "Digestion & Enzymes",
                    type: "lesson", difficulty: "foundation", estimatedTime: 40,
                    content: "# 🍔 Digestion\n## Enzymes\nBiological catalysts (Proteins).\n* **Lock & Key:** Substrate fits Active Site.\n* **Amylase:** Starch -> Sugar.\n* **Protease:** Protein -> Amino Acids.\n* **Lipase:** Lipids -> Fatty Acids.",
                    learningObjectives: ["Explain Lock & Key", "List digestive enzymes"]
                },
                {
                    id: "b2-heart", title: "The Heart & Blood",
                    type: "lesson", difficulty: "foundation", estimatedTime: 40,
                    content: "# 🫀 The Heart\nDouble circulatory system.\n* **Vena Cava -> Right Atrium -> Right Ventricle -> Pulmonary Artery (Lungs)**.\n* **Pulmonary Vein -> Left Atrium -> Left Ventricle -> Aorta (Body)**.\n* **Arteries:** Thick walls, High pressure.\n* **Veins:** Thin walls, Valves.",
                    learningObjectives: ["Label the heart", "Compare blood vessels"]
                },
                {
                    id: "b2-plants", title: "Plant Transport",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# 🌿 Plant Organs\n* **Xylem:** Water (Transpiration stream).\n* **Phloem:** Sugars (Translocation).\n* **Stomata:** Pores for gas exchange.",
                    learningObjectives: ["Compare Xylem and Phloem"]
                }
            ],
            quizzes: [{ id: "b2-quiz", title: "Test: Organisation", questions: [{ id: "q1", question: "Which enzyme breaks down starch?", options: ["Amylase", "Protease", "Lipase"], correctAnswer: "Amylase", marks: 1, topic: "Enzymes" }] }]
        },
        {
            id: "b3-infection",
            name: "B3: Infection & Response",
            completed: false,
            studyMaterials: [
                {
                    id: "b3-pathogens", title: "Pathogens & Disease",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🦠 Pathogens\nMicrobes that cause disease.\n* **Viruses:** HIV, Measles, TMV.\n* **Bacteria:** Salmonella, Gonorrhoea.\n* **Fungi:** Rose Black Spot.\n* **Protist:** Malaria.",
                    learningObjectives: ["List types of pathogens", "Give examples of diseases"]
                },
                {
                    id: "b3-defence", title: "Human Defence",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🛡️ Defence Systems\n## Non-Specific\n* Skin (Barrier).\n* Stomach Acid (Kills bacteria).\n* Cilia (Traps mucus).\n\n## Specific (White Blood Cells)\n* **Phagocytosis:** Engulfing.\n* **Antibodies:** Bind to antigens.\n* **Antitoxins:** Neutralise toxins.",
                    learningObjectives: ["Explain how WBCs work"]
                },
                {
                    id: "b3-treatments", title: "Vaccines & Antibiotics",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# 💉 Treatments\n* **Vaccinaton:** Dead pathogen makes memory cells.\n* **Antibiotics:** Kill bacteria (NOT viruses).\n* **Painkillers:** Treat symptoms only.",
                    learningObjectives: ["Explain herd immunity", "Correct antibiotic usage"]
                }
            ],
            quizzes: [{ id: "b3-quiz", title: "Test: Infection", questions: [{ id: "q1", question: "Do antibiotics kill viruses?", options: ["Yes", "No", "Only strong ones"], correctAnswer: "No", marks: 1, topic: "Treatments" }] }]
        },
        {
            id: "b4-bioenergetics",
            name: "B4: Bioenergetics",
            completed: false,
            studyMaterials: [
                {
                    id: "b4-photo", title: "Photosynthesis",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# ☀️ Photosynthesis\n**Carbon Dioxide + Water -> Glucose + Oxygen**\n* Endothermic reaction.\n* **Limiting Factors:** Light, Temperature, CO2.",
                    learningObjectives: ["State the equation", "Explain limiting factors"]
                },
                {
                    id: "b4-resp", title: "Respiration",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🏃 Respiration\n## Aerobic (With Oxygen)\n**Glucose + Oxygen -> CO2 + Water**\nReleases LOTS of energy.\n\n## Anaerobic (No Oxygen)\n**Glucose -> Lactic Acid**\nCauses cramp/oxygen debt.",
                    learningObjectives: ["Compare Aerobic and Anaerobic"]
                }
            ],
            quizzes: [{ id: "b4-quiz", title: "Test: Bioenergetics", questions: [{ id: "q1", question: "Which reaction is Endothermic?", options: ["Respiration", "Photosynthesis", "Digestion"], correctAnswer: "Photosynthesis", marks: 1, topic: "Reactions" }] }]
        },
        {
            id: "b5-homeostasis",
            name: "B5: Homeostasis",
            completed: false,
            studyMaterials: [
                {
                    id: "b5-nerves", title: "Nervous System",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🧠 The Nervous System\n**Stimulus -> Receptor -> Sensory Neurone -> CNS -> Motor Neurone -> Effector -> Response**\n* **The Synapse:** Gap between neurones (Chemical diffusion).",
                    learningObjectives: ["Describe the reflex arc"]
                },
                {
                    id: "b5-hormones", title: "Hormones",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# 🩸 Hormones\nChemical messengers in blood.\n* **Insulin:** Lowers blood glucose (Glucose -> Glycogen).\n* **Glucagon:** Increases blood glucose.\n* **Correction:** Diabetes Type 1 (No insulin) vs Type 2 (Insulin resistance).",
                    learningObjectives: ["Explain blood glucose control"]
                }
            ],
            quizzes: [{ id: "b5-quiz", title: "Test: Homeostasis", questions: [{ id: "q1", question: "Which hormone lowers blood sugar?", options: ["Insulin", "Glucagon", "Adrenaline"], correctAnswer: "Insulin", marks: 1, topic: "Hormones" }] }]
        },
        {
            id: "b6-genetics",
            name: "B6: Inheritance & Evolution",
            completed: false,
            studyMaterials: [
                {
                    id: "b6-dna", title: "DNA & Meiosis",
                    type: "lesson", difficulty: "higher", estimatedTime: 35,
                    content: "# 🧬 DNA\nDouble Helix polymer.\n* **Gene:** Section of DNA coding for protein.\n* **Meiosis:** Makes gametes (Sperm/Egg). 4 non-identical cells.",
                    learningObjectives: ["Describe DNA structure", "Explain Meiosis"]
                },
                {
                    id: "b6-evolution", title: "Evolution",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🦕 Evolution\n**Natural Selection (Darwin):**\n1. Variation exists.\n2. Best adapted survive.\n3. Pass on genes.\n* **Fossils:** Evidence of early life.",
                    learningObjectives: ["Explain Natural Selection"]
                }
            ],
            quizzes: [{ id: "b6-quiz", title: "Test: Genetics", questions: [{ id: "q1", question: "How many cells does Meiosis produce?", options: ["2", "4", "8"], correctAnswer: "4", marks: 1, topic: "Cell Division" }] }]
        },
        {
            id: "b7-ecology",
            name: "B7: Ecology",
            completed: false,
            studyMaterials: [
                {
                    id: "b7-communities", title: "Ecosystems",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🌍 Communities\n* **Abiotic:** Non-living (Temp, Water).\n* **Biotic:** Living (Predators, Pathogens).\n* **Food Chain:** Producer -> Primary Consumer -> Secondary Consumer.",
                    learningObjectives: ["Identify Abiotic factors", "Draw food chains"]
                },
                {
                    id: "b7-cycles", title: "Cycles & Biodiversity",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# ♻️ Cycles\n* **Carbon Cycle:** Respiration releases CO2, Photosynthesis takes it in.\n* **Water Cycle:** Evaporation -> Condensation -> Precipitation.",
                    learningObjectives: ["Explain the Carbon Cycle"]
                }
            ],
            quizzes: [{ id: "b7-quiz", title: "Test: Ecology", questions: [{ id: "q1", question: "What starts a food chain?", options: ["Producer", "Consumer", "Predator"], correctAnswer: "Producer", marks: 1, topic: "Food Chains" }] }]
        },

        // --- CHEMISTRY (C1-C10) ---
        {
            id: "c1-atomic",
            name: "C1: Atomic Structure",
            completed: false,
            studyMaterials: [
                {
                    id: "c1-atoms", title: "Atoms",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# ⚛️ Apples\n* **Proton:** Mass 1, Charge +1.\n* **Neutron:** Mass 1, Charge 0.\n* **Electron:** Mass tiny, Charge -1.\n* **Isotope:** Same protons, different neutrons.",
                    learningObjectives: ["Draw atomic structure", "Define Isotope"]
                },
                {
                    id: "c1-separating", title: "Separating Mixtures",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🧪 Separation\n* **Filtration:** Insoluble solid from liquid.\n* **Crystallisation:** Soluble solid from liquid.\n* **Distillation:** Separating liquids by boiling point.",
                    learningObjectives: ["Choose separation techniques"]
                }
            ],
            quizzes: [{ id: "c1-quiz", title: "Test: Atoms", questions: [{ id: "q1", question: "Charge of a proton?", options: ["+1", "-1", "0"], correctAnswer: "+1", marks: 1, topic: "Sub-atomic particles" }] }]
        },
        {
            id: "c2-bonding",
            name: "C2: Bonding",
            completed: false,
            studyMaterials: [
                {
                    id: "c2-ionic", title: "Ionic & Covalent",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 🤝 Bonding\n* **Ionic:** Metal + Non-metal. Transfer electrons.\n* **Covalent:** Non-metal + Non-metal. Share electrons.\n* **Metallic:** Sea of delocalised electrons.",
                    learningObjectives: ["Draw dot and cross diagrams"]
                },
                {
                    id: "c2-states", title: "States of Matter",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🧊 States\n* **Solid:** Fixed shape, vibrate.\n* **Liquid:** Flow, random.\n* **Gas:** Fast, random.\n* **Changes:** Melting, Boiling, Condensing, Freezing.",
                    learningObjectives: ["Explain state changes"]
                }
            ],
            quizzes: [{ id: "c2-quiz", title: "Test: Bonding", questions: [{ id: "q1", question: "Bonding between two non-metals?", options: ["Covalent", "Ionic", "Metallic"], correctAnswer: "Covalent", marks: 1, topic: "Bonding Types" }] }]
        },
        {
            id: "c3-quant",
            name: "C3: Quantitative Chemistry",
            completed: false,
            studyMaterials: [
                {
                    id: "c3-moles", title: "The Mole",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# ⚖️ The Mole\n* **Formula Mass (Mr):** Sum of atomic masses.\n* **Moles = Mass / Mr**.\n* **Conservation of Mass:** Atoms start = Atoms end.",
                    learningObjectives: ["Calculate Formula Mass", "Calculate Moles"]
                },
                {
                    id: "c3-conc", title: "Concentration",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# 🧪 Concentration\n* **Conc = Mass / Volume** (g/dm³).\n* 1 dm³ = 1000 cm³.",
                    learningObjectives: ["Calculate concentration"]
                }
            ],
            quizzes: [{ id: "c3-quiz", title: "Test: Moles", questions: [{ id: "q1", question: "Formula for Moles?", options: ["Mass / Mr", "Mass x Mr", "Mr / Mass"], correctAnswer: "Mass / Mr", marks: 1, topic: "Calculations" }] }]
        },
        {
            id: "c4-chem-change",
            name: "C4: Chemical Changes",
            completed: false,
            studyMaterials: [
                {
                    id: "c4-reactivity", title: "Reactivity Series",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 💥 Reactivity\nPotassium > Sodium > ... > Copper > Gold.\n* **Displacement:** More reactive kicks out less reactive.\n* **Acids:** Acid + Metal -> Salt + Hydrogen.",
                    learningObjectives: ["Predict reactions"]
                },
                {
                    id: "c4-electro", title: "Electrolysis",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# ⚡ Electrolysis\nSplitting ionic compounds with electricity.\n* **PANIC:** Positive Anode Negative Is Cathode.\n* **OILRIG:** Oxidation Is Loss, Reduction Is Gain.",
                    learningObjectives: ["Explain Electrolysis of molten salts"]
                }
            ],
            quizzes: [{ id: "c4-quiz", title: "Test: Chem Changes", questions: [{ id: "q1", question: "What moves to the Cathode?", options: ["Positive Ions", "Negative Ions"], correctAnswer: "Positive Ions", marks: 1, topic: "Electrolysis" }] }]
        },
        {
            id: "c5-energy",
            name: "C5: Energy Changes",
            completed: false,
            studyMaterials: [
                {
                    id: "c5-exo-endo", title: "Exothermic & Endothermic",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🔥 Energy Changes\n* **Exothermic:** Gives out heat (Gets hot). e.g., Combustion.\n* **Endothermic:** Takes in heat (Gets cold).\n* **Reaction Profiles:** Show energy level changes.",
                    learningObjectives: ["Compare Exothermic/Endothermic"]
                },
                {
                    id: "c5-bonds", title: "Bond Energies",
                    type: "lesson", difficulty: "higher", estimatedTime: 35,
                    content: "# ⛓️ Bond Energy\n* Breaking bonds = Endothermic.\n* Making bonds = Exothermic.\n* **Energy Change = Break - Make**.",
                    learningObjectives: ["Calculate energy change"]
                }
            ],
            quizzes: [{ id: "c5-quiz", title: "Test: Energy", questions: [{ id: "q1", question: "Reaction that gets hot?", options: ["Exothermic", "Endothermic"], correctAnswer: "Exothermic", marks: 1, topic: "Heat" }] }]
        },
        {
            id: "c6-rate",
            name: "C6: Rate of Reaction",
            completed: false,
            studyMaterials: [
                {
                    id: "c6-factors", title: "Factors Affecting Rate",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# ⏱️ Rates\n* **Temp:** Faster particles, more energetic collisions.\n* **Conc/Pressure:** More particles closer together.\n* **Surface Area:** More exposed particles.\n* **Catalyst:** Lowers Activation Energy.",
                    learningObjectives: ["Explain Collision Theory"]
                },
                {
                    id: "c6-reversible", title: "Reversible Reactions",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# ↔️ Equilibrium\nReaction goes both ways (A + B ⇌ C + D).\n* **Le Chatelier's Principle:** System opposes change.",
                    learningObjectives: ["Apply Le Chatelier's Principle"]
                }
            ],
            quizzes: [{ id: "c6-quiz", title: "Test: Rates", questions: [{ id: "q1", question: "What does a catalyst do?", options: ["Lowers Activation Energy", "Increases Temp", "Used up"], correctAnswer: "Lowers Activation Energy", marks: 1, topic: "Catalysts" }] }]
        },
        {
            id: "c7-organic",
            name: "C7: Organic Chemistry",
            completed: false,
            studyMaterials: [
                {
                    id: "c7-crude", title: "Crude Oil & Alkanes",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🛢️ Crude Oil\nMixture of hydrocarbons.\n* **Alkanes:** Single bonds (CnH2n+2). Methane, Ethane, Propane, Butane.\n* **Fractional Distillation:** Separate by boiling point.",
                    learningObjectives: ["Name first 4 alkanes"]
                },
                {
                    id: "c7-cracking", title: "Cracking & Alkenes",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# 🔨 Cracking\nBreaking long chains into short useful ones.\n* Makes **Alkenes** (Double bond C=C).\n* Test: Bromine water Orange -> Colourless.",
                    learningObjectives: ["Describe cracking process", "Test for Alkenes"]
                }
            ],
            quizzes: [{ id: "c7-quiz", title: "Test: Organic", questions: [{ id: "q1", question: "Formula for Methane?", options: ["CH4", "C2H6", "C3H8"], correctAnswer: "CH4", marks: 1, topic: "Alkanes" }] }]
        },
        {
            id: "c8-analysis",
            name: "C8: Chemical Analysis",
            completed: false,
            studyMaterials: [
                {
                    id: "c8-purity", title: "Purity & Formulations",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 💧 Purity\n* **Pure:** Melts/Boils at exact temp.\n* **Formulation:** Designed mixture (e.g., Paint, Medicine).",
                    learningObjectives: ["Define pure substance"]
                },
                {
                    id: "c8-chroma", title: "Chromatography",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🌈 Chromatography\nSeparating dyes.\n* **Rf Value = Distance moved by spot / Distance moved by solvent**.",
                    learningObjectives: ["Calculate Rf value"]
                },
                {
                    id: "c8-gases", title: "Gas Tests",
                    type: "lesson", difficulty: "foundation", estimatedTime: 20,
                    content: "# 💨 Tests\n* **Oxygen:** Relights glowing splint.\n* **Hydrogen:** Squeaky pop.\n* **Chlorine:** Bleaches litmus.\n* **CO2:** Limewater cloudy.",
                    learningObjectives: ["Recall gas tests"]
                }
            ],
            quizzes: [{ id: "c8-quiz", title: "Test: Analysis", questions: [{ id: "q1", question: "Test for Hydrogen?", options: ["Squeaky Pop", "Relights Splint", "Bleaches"], correctAnswer: "Squeaky Pop", marks: 1, topic: "Gases" }] }]
        },
        {
            id: "c9-atmos",
            name: "C9: Atmosphere",
            completed: false,
            studyMaterials: [
                {
                    id: "c9-history", title: "History of Atmosphere",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🌍 Early Atmosphere\nVolcanoes released CO2, Water Vapour, Nitrogen.\n* Water condensed -> Oceans.\n* Algae evolved -> Photosynthesis (CO2 down, Oxygen up).",
                    learningObjectives: ["Describe atmosphere evolution"]
                },
                {
                    id: "c9-change", title: "Climate Change",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🌡️ Greenhouse Effect\nCO2 and Methane trap heat.\n* **Effects:** Ice melting, Sea levels rising, Extreme weather.",
                    learningObjectives: ["Explain greenhouse effect"]
                }
            ],
            quizzes: [{ id: "c9-quiz", title: "Test: Atmosphere", questions: [{ id: "q1", question: "Which gas caused Oxygen levels to rise?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide"], correctAnswer: "Carbon Dioxide", marks: 0, explanation: "Trick question: Photosynthesis USES CO2 to MAKE Oxygen.", topic: "Evolution" }] }]
        },
        {
            id: "c10-resources",
            name: "C10: Using Resources",
            completed: false,
            studyMaterials: [
                {
                    id: "c10-water", title: "Potable Water",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🚰 Water\nPotable = Safe to drink (low salt/microbes).\n* **Treatment:** Filter beds + Sterilisation (Chlorine/Ozone/UV).\n* **Desalination:** Removing salt (Distillation/Reverse Osmosis).",
                    learningObjectives: ["Explain water treatment"]
                },
                {
                    id: "c10-lca", title: "Life Cycle Assessments",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# ♻️ LCA\nAssessing environmental impact.\n1. Extraction.\n2. Manufacturing.\n3. Use.\n4. Disposal.",
                    learningObjectives: ["List LCA stages"]
                }
            ],
            quizzes: [{ id: "c10-quiz", title: "Test: Resources", questions: [{ id: "q1", question: "What kills bacteria in water?", options: ["Chlorine", "Salt", "Sand"], correctAnswer: "Chlorine", marks: 1, topic: "Water" }] }]
        },

        // --- PHYSICS (P1-P7) ---
        {
            id: "p1-energy",
            name: "P1: Energy",
            completed: false,
            studyMaterials: [
                {
                    id: "p1-stores", title: "Energy Stores",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🔋 Stores\nKinetic, Gravitational, Chemical, Elastic, Thermal, Magnetic, Electrostatic, Nuclear.\n* **Conservation:** Energy cannot be created or destroyed.",
                    learningObjectives: ["List energy stores"]
                },
                {
                    id: "p1-calcs", title: "Energy Equations",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 📐 Equations\n* **Ek = 0.5 mv²**\n* **Ep = mgh**\n* **Power = Energy / Time**",
                    learningObjectives: ["Calculate Kinetic Energy"]
                }
            ],
            quizzes: [{ id: "p1-quiz", title: "Test: Energy", questions: [{ id: "q1", question: "Unit for Energy?", options: ["Joules", "Watts", "Newtons"], correctAnswer: "Joules", marks: 1, topic: "Units" }] }]
        },
        {
            id: "p2-electricity",
            name: "P2: Electricity",
            completed: false,
            studyMaterials: [
                {
                    id: "p2-circuits", title: "Circuits",
                    type: "lesson", difficulty: "foundation", estimatedTime: 40,
                    content: "# 💡 Circuits\n* **Current (I):** Flow of charge. Amps.\n* **Potential Difference (V):** Volts.\n* **Resistance (R):** Ohms.\n* **V = IR**.",
                    learningObjectives: ["Ohm's Law"]
                },
                {
                    id: "p2-mains", title: "Mains Electricity",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🔌 Mains\n* AC (Alternating Current), 230V, 50Hz.\n* **Live (Brown):** Carries voltage.\n* **Neutral (Blue):** Completes circuit.\n* **Earth (Green/Yellow):** Safety.",
                    learningObjectives: ["Identify wire colours"]
                }
            ],
            quizzes: [{ id: "p2-quiz", title: "Test: Electricity", questions: [{ id: "q1", question: "Colour of Live wire?", options: ["Brown", "Blue", "Green/Yellow"], correctAnswer: "Brown", marks: 1, topic: "Mains" }] }]
        },
        {
            id: "p3-particle",
            name: "P3: Particle Model",
            completed: false,
            studyMaterials: [
                {
                    id: "p3-density", title: "Density",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🧱 Density\n**Density = Mass / Volume** (kg/m³).\n* Measure mass (Balance).\n* Measure volume (Ruler or Displacement Can).",
                    learningObjectives: ["Calculate Density"]
                },
                {
                    id: "p3-heat", title: "Internal Energy",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# 🔥 Heat\n* **Internal Energy:** Kinetic + Potential energy of particles.\n* **Specific Heat Capacity:** Energy to raise 1kg by 1°C.\n* **Latent Heat:** Energy to change state.",
                    learningObjectives: ["Define SHC"]
                }
            ],
            quizzes: [{ id: "p3-quiz", title: "Test: Particles", questions: [{ id: "q1", question: "Formula for Density?", options: ["Mass / Volume", "Mass x Volume", "Volume / Mass"], correctAnswer: "Mass / Volume", marks: 1, topic: "Calculations" }] }]
        },
        {
            id: "p4-radiation",
            name: "P4: Atomic Structure",
            completed: false,
            studyMaterials: [
                {
                    id: "p4-model", title: "History of Atom",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# ⚛️ Models\n* **Plum Pudding:** Ball of + charge with electrons.\n* **Rutherford:** Alpha scattering -> Nucleus discovered.\n* **Bohr:** Electron shells.",
                    learningObjectives: ["Describe Alpha Scattering"]
                },
                {
                    id: "p4-decay", title: "Radioactivity",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# ☢️ Decay\n* **Alpha:** Helium nucleus (2p, 2n). Stopped by paper.\n* **Beta:** Fast electron. Stopped by aluminium.\n* **Gamma:** EM wave. Stopped by lead.\n* **Half Life:** Time for count to halve.",
                    learningObjectives: ["Compare radiations"]
                }
            ],
            quizzes: [{ id: "p4-quiz", title: "Test: Radiation", questions: [{ id: "q1", question: "Most ionising radiation?", options: ["Alpha", "Beta", "Gamma"], correctAnswer: "Alpha", marks: 1, topic: "Properties" }] }]
        },
        {
            id: "p5-forces",
            name: "P5: Forces",
            completed: false,
            studyMaterials: [
                {
                    id: "p5-basics", title: "Forces & Elasticity",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🏹 Forces\nVector quantities (Magnitude + Direction).\n* **Hooke's Law:** F = ke (Force = Spring Constant x Extension).",
                    learningObjectives: ["Apply Hooke's Law"]
                },
                {
                    id: "p5-motion", title: "Motion",
                    type: "lesson", difficulty: "higher", estimatedTime: 40,
                    content: "# 🚗 Motion\n* **Speed:** Distance / Time.\n* **Acceleration:** Change in Velocity / Time.\n* **Newton's 2nd Law:** F = ma.",
                    learningObjectives: ["Calculate Acceleration"]
                }
            ],
            quizzes: [{ id: "p5-quiz", title: "Test: Forces", questions: [{ id: "q1", question: "Equation for Force?", options: ["ma", "mv", "1/2mv"], correctAnswer: "ma", marks: 1, topic: "Newton's Laws" }] }]
        },
        {
            id: "p6-waves",
            name: "P6: Waves",
            completed: false,
            studyMaterials: [
                {
                    id: "p6-props", title: "Wave Properties",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🌊 Waves\n* **Transverse:** Oscillations perpendicular (Light).\n* **Longitudinal:** Oscillations parallel (Sound).\n* **v = f λ** (Speed = Freq x Wavelength).",
                    learningObjectives: ["Calculate Wave Speed"]
                },
                {
                    id: "p6-em", title: "EM Spectrum",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🌈 EM Spectrum\nLow Energy -> High Energy:\nRadio, Micro, IR, Visible, UV, X-Ray, Gamma.\n* Use mnemonic: Red Monkeys In Vans Use X-ray Guns.",
                    learningObjectives: ["List EM waves in order"]
                }
            ],
            quizzes: [{ id: "p6-quiz", title: "Test: Waves", questions: [{ id: "q1", question: "Which wave is Longitudinal?", options: ["Sound", "Light", "Water"], correctAnswer: "Sound", marks: 1, topic: "Types" }] }]
        },
        {
            id: "p7-magnetism",
            name: "P7: Magnetism",
            completed: false,
            studyMaterials: [
                {
                    id: "p7-fields", title: "Magnets",
                    type: "lesson", difficulty: "foundation", estimatedTime: 30,
                    content: "# 🧲 Magnets\n* North to South.\n* Like poles repel, opposite poles attract.\n* **Electromagnet:** Coil of wire with current.",
                    learningObjectives: ["Draw field lines"]
                },
                {
                    id: "p7-motor", title: "Motor Effect",
                    type: "lesson", difficulty: "higher", estimatedTime: 30,
                    content: "# ⚙️ Motor Effect\nWire with current in magnetic field experiences a force.\n* **Fleming's Left Hand Rule:** Force (Thumb), Field (First finger), Current (Second).",
                    learningObjectives: ["Use Left Hand Rule"]
                }
            ],
            quizzes: [{ id: "p7-quiz", title: "Test: Magnetism", questions: [{ id: "q1", question: "Field lines go from?", options: ["N to S", "S to N", "East to West"], correctAnswer: "N to S", marks: 1, topic: "Fields" }] }]
        }
    ]
};

async function seedScience() {
    console.log('🔥 Starting Science Seeding...');
    try {
        console.log('📝 Seeding Year 10 Combined Science...');
        await setDoc(doc(db, 'subjects', 'science-10'), year10CombinedScience);
        console.log('✅ Combined Science (Year 10) seeded successfully with MULTI-SLIDE lessons!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}
seedScience();
