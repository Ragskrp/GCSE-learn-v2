
import { Subject } from "@/types/curriculum";

export const year10History: Subject = {
    id: "history-10",
    name: "History",
    duration: 180,
    questions: 200,
    color: "from-rose-500 to-red-700",
    icon: "⚔️",
    level: 1,
    xp: 0,
    maxXp: 5000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Time Traveller",
    timeLimit: 120,
    topics: [
        // --- 1. PERIOD STUDIES ---
        {
            id: "period-usa-1840",
            name: "Period: America 1840-1895",
            completed: false,
            studyMaterials: [
                {
                    id: "usa-expansion",
                    title: "Expansion: Manifest Destiny & The West",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Explain Manifest Destiny", "Describe the 1849 Gold Rush", "Explain the impact of the Railroad"],
                    content: `# 🦅 America: Expansion Westward (1840-1895)

> [!NOTE]
> **Key Concept:** Between 1840 and 1895, the USA transformed from a collection of states on the East Coast into a continental superpower. This growth was driven by the idea of "Manifest Destiny".

---

## 🏛️ Manifest Destiny

In the 1840s, many Americans believed it was their **God-given right** to occupy and "civilize" the entire North American continent from the Atlantic to the Pacific.

### Why move West?
*   **Economic Opportunity:** Cheap land for farming.
*   **Religious Freedom:** Groups like the Mormons fled persecution.
*   **Crowding:** Eastern cities were becoming overpopulated.
*   **The "Pioneer Spirit":** A desire for adventure and a new life.

---

## 💰 The 1849 Gold Rush

In 1848, gold was discovered at Sutter's Mill in California. This triggered a massive migration of "Forty-Niners".

*   **Impact:** California's population exploded from 15,000 to over 250,000 in just a few years.
*   **Consequence:** Thousands of Native Americans were displaced, and lawlessness became a major issue in "Boom Towns".

---

## 🚂 The Transcontinental Railroad (1869)

The completion of the railroad at Promontory Point changed everything.

1.  **Speed:** The journey West dropped from 6 months (by wagon) to just **6 days**.
2.  **Trade:** Goods could be shipped across the country, boosting the economy.
3.  **Settlement:** It encouraged millions of homesteaders to move into the Great Plains.
`
                },
                {
                    id: "plains-indians-culture",
                    title: "Culture of the Plains Indians",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 35,
                    learningObjectives: ["Describe the importance of the Buffalo", "Explain beliefs about land ownership"],
                    content: `# 🏹 The Way of the Plains Indians

To understand the conflict of the 19th century, we must first understand the unique culture of the tribes like the Sioux, Cheyenne, and Apache.

---

## 🦬 The Buffalo: Lifeblood of the Tribes

For many Plains Indians, the buffalo was essential for survival. They used almost every part of the animal:

*   **Flesh:** Eaten raw, cooked, or dried.
*   **Skin:** Used for clothing and **Tipis**.
*   **Bones:** Fashioned into tools and weapons.
*   **Dung:** Burnt as fuel for fires.

---

## 🗺️ Beliefs About Land

The biggest clash between settlers and Native Americans was over **land ownership**.

*   **Native View:** Land cannot be owned. It is a gift from the Great Spirit to be shared by all.
*   **Settler View:** Land should be fenced, farmed, and owned as private property.

> [!WARNING]
> This fundamental disagreement led to decades of broken treaties and "The Indian Wars".
`
                }
            ],
            quizzes: [
                {
                    id: "usa1-quiz",
                    title: "Test: America 1840-95",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-usa1-1", question: "What was 'Manifest Destiny'?", type: "multiple-choice", options: ["God's will to expand", "A law", "A railroad", "A war"], correctAnswer: "God's will to expand", marks: 1, topic: "Expansion" }
                    ]
                }
            ]
        },
        {
            id: "period-germany",
            name: "Period: Germany 1890-1945",
            completed: false,
            studyMaterials: [
                {
                    id: "weimar-nazi",
                    title: "Democracy and Dictatorship",
                    content: `# 🇩🇪 Germany 1890-1945

## 📚 Kaiser Wilhelm II
- **Weltpolitik:** Aims for a global empire/navy.
- **WW1:** Defeat, Revolution, Abdication.

## 📚 Weimar Republic (1918-1933)
- **Crises:** Versailles, Hyperinflation (1923), Munich Putsch.
- **Recovery:** Stresemann era (1924-29).
- **Collapse:** Wall St Crash (1929) -> Rise of Nazis.

## 📚 Nazi Dictatorship (1933-1945)
- **Control:** Terror (Gestapo), Propaganda (Goebbels).
- **Life:** Women (KKK), Youth (Hitler Youth), Economy (Rearmament).
- **Persecution:** The Holocaust.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 50,
                    learningObjectives: ["Explain the rise of Hitler", "Describe life in Nazi Germany"]
                }
            ],
            quizzes: [
                {
                    id: "ger-quiz",
                    title: "Test: Germany 1890-1945",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 15,
                    questions: [
                        { id: "q-ger-1", question: "Who was the Minister of Propaganda?", type: "multiple-choice", options: ["Goebbels", "Goering", "Himmler", "Speer"], correctAnswer: "Goebbels", marks: 1, topic: "Control" }
                    ]
                }
            ]
        },
        {
            id: "period-russia",
            name: "Period: Russia 1894-1945",
            completed: false,
            studyMaterials: [
                {
                    id: "tsar-communism",
                    title: "Tsardom and Communism",
                    content: `# ☭ Russia 1894-1945

## 📚 The End of Tsardom
- **Nicholas II:** Autocracy, 1905 Revolution.
- **WW1:** Military failures, Rasputin, Hunger.
- **1917 Revolutions:** February (Tsar abdicates) & October (Bolsheviks seize power).

## 📚 Lenin & The Civil War
- **Order No 1.**
- **Reds vs Whites.**
- **War Communism vs NEP.**

## 📚 Stalin's Rule
- **Dictatorship:** Purges, Show Trials, Cult of Personality.
- **Economy:** Collectivisation (Famines), Five Year Plans (Industrialisation).
- **WW2:** The Great Patriotic War.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Compare Lenin and Stalin", "Explain 1917 Revolutions"]
                }
            ],
            quizzes: [
                {
                    id: "rus-quiz",
                    title: "Test: Russia 1894-1945",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-rus-1", question: "What was Stalin's plan for agriculture called?", type: "multiple-choice", options: ["Collectivisation", "Industrialisation", "Russification", "Capitalism"], correctAnswer: "Collectivisation", marks: 1, topic: "Stalin" }
                    ]
                }
            ]
        },
        {
            id: "period-usa-1920",
            name: "Period: America 1920-1973",
            completed: false,
            studyMaterials: [
                {
                    id: "usa-opportunity",
                    title: "Opportunity and Inequality",
                    content: `# 🗽 America 1920-1973

## 📚 The Roaring 20s
- **Boom:** Cars (Ford), Cinema, Jazz.
- **Bust:** Wall St Crash (1929) -> Great Depression.

## 📚 The New Deal (FDR)
- **Alphabet Agencies:** TVA, AAA, NRA to solve unemployment.

## 📚 Post-War America
- **Consumerism:** The American Dream.
- **Civil Rights:** MLK vs Malcolm X, Brown vs Topeka, Civil Rights Acts.
- **Great Society:** LBJ's reforms.
- **Feminism:** NOW, Roe vs Wade.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Explain the New Deal", "List Civil Rights events"]
                }
            ],
            quizzes: [
                {
                    id: "usa2-quiz",
                    title: "Test: America 1920-73",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-usa2-1", question: "Which President introduced the New Deal?", type: "multiple-choice", options: ["Roosevelt (FDR)", "Hoover", "Truman", "Kennedy"], correctAnswer: "Roosevelt (FDR)", marks: 1, topic: "New Deal" }
                    ]
                }
            ]
        },

        // --- 2. THEMATIC STUDIES ---
        {
            id: "theme-health",
            name: "Theme: Health & The People",
            completed: false,
            studyMaterials: [
                {
                    id: "med-time",
                    title: "Medicine c1000-Present",
                    content: `# ⚕️ Health and the People

## 📚 Medieval (c1000-1450)
- **God & Miasma.**
- **Galen & Hippocrates** (4 Humours).
- **Black Death (1348).**

## 📚 Renaissance (c1450-1800)
- **Vesalius (Anatomy), Pare (Surgery), Harvey (Blood).**
- **Jenner (Vaccination).**

## 📚 19th Century (1800-1900)
- **Germ Theory (Pasteur/Koch).**
- **Anaesthetics (Simpson) & Antiseptics (Lister).**
- **Public Health Acts.**

## 📚 Modern (1900-Present)
- **Penicillin (Fleming/Florey/Chain).**
- **NHS (Beveridge/Bevan).**
- **DNA & High-tech Surgery.**
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 50,
                    learningObjectives: ["Order medical eras", "Explain Germ Theory"]
                }
            ],
            quizzes: [
                {
                    id: "med-quiz",
                    title: "Test: Health Theme",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-med-1", question: "Who discovered Penicillin?", type: "multiple-choice", options: ["Fleming", "Pasteur", "Lister", "Galen"], correctAnswer: "Fleming", marks: 1, topic: "Modern Medicine" }
                    ]
                }
            ]
        },
        {
            id: "theme-power",
            name: "Theme: Power & The People",
            completed: false,
            studyMaterials: [
                {
                    id: "power-people",
                    title: "Power c1170-Present",
                    content: `# ⚖️ Power and the People

## 📚 Medieval
- **Magna Carta (1215):** Limiting King John's power.
- **Simon de Montfort:** First Parliament.
- **Peasants Revolt (1381).**

## 📚 Early Modern
- **English Civil War:** Charles I executed.
- **Glorious Revolution.**

## 📚 19th/20th Century
- **The Vote:** Great Reform Act (1832), Chartists, Suffragettes.
- **Users' Rights:** Trade Unions, Strikes (General Strike 1926).
- **Minority Rights:** Brixton Riots.
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Explain Magna Carta", "Describe Suffragettes"]
                }
            ],
            quizzes: [
                {
                    id: "pow-quiz",
                    title: "Test: Power Theme",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-pow-1", question: "Which document limited King John's power in 1215?", type: "multiple-choice", options: ["Magna Carta", "Bill of Rights", "Domesday Book", "The Great Charter"], correctAnswer: "Magna Carta", marks: 1, topic: "Medieval Power" }
                    ]
                }
            ]
        },
        {
            id: "theme-migration",
            name: "Theme: Migration & Empires",
            completed: false,
            studyMaterials: [
                {
                    id: "migration-empire",
                    title: "Migration c790-Present",
                    content: `# 🚢 Migration, Empires & People

## 🎯 Key Topics
- **Conquest:** Vikings, Normans (1066).
- **Expansion:** Hundred Years War, Discovery of New World.
- **Empire:** Colonisation of America, India (East India Company), Africa (Scramble).
- **Slavery:** Triangle Trade, Abolition.
- **Modern:** Windrush Generation, EU migration, Multiculturalism.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["List migrant groups", "Explain reasons for Empire"]
                }
            ],
            quizzes: [
                {
                    id: "mig-quiz",
                    title: "Test: Migration Theme",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-mig-1", question: "When did the Empire Windrush arrive?", type: "multiple-choice", options: ["1948", "1958", "1939", "1960"], correctAnswer: "1948", marks: 1, topic: "Modern Migration" }
                    ]
                }
            ]
        },

        // --- 3. WIDER WORLD DEPTH STUDIES ---
        {
            id: "depth-ww1",
            name: "Depth: WW1 1894-1918",
            completed: false,
            studyMaterials: [
                {
                    id: "ww1-causes",
                    title: "Conflict and Tension: The M.A.I.N Causes",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Explain M.A.I.N. causes", "Explain the Archduke's assassination"],
                    content: `# 💣 WW1: The Global Explosion (1894-1918)

Why did the world go to war in 1914? Historians use the acronym **M.A.I.N.** to remember the long-term causes.

---

## 🏗️ The M.A.I.N. Causes

1.  **Militarism:** Countries like Germany and Britain raced to build the largest armies and navies (**Dreadnoughts**).
2.  **Alliances:** Europe was divided into two armed camps: The **Triple Entente** (Britain, France, Russia) and the **Triple Alliance** (Germany, Austria-Hungary, Italy).
3.  **Imperialism:** Nations competed for colonies and resources in Africa and Asia.
4.  **Nationalism:** An intense pride in one's own country and a desire for independence (especially in the Balkans).

---

## 🔫 The Trigger: Sarajevo, 1914

On June 28, 1914, **Archduke Franz Ferdinand** (the heir to the Austro-Hungarian throne) was assassinated in Sarajevo by Gavrilo Princip, a member of the **Black Hand** Serbian nationalist group.

> [!IMPORTANT]
> This single event triggered a chain reaction of alliances that dragged all the major powers into war within weeks.
`
                },
                {
                    id: "trench-warfare-life",
                    title: "Life in the Trenches",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Identify trench features", "Describe conditions for soldiers"],
                    content: `# 🕳️ Life in the Trenches

By 1914, the war had reached a **stalemate** on the Western Front. Soldiers dug a vast network of trenches stretching for hundreds of miles.

---

## 🏛️ Anatomy of a Trench

![Cross-section Diagram of a WWI Trench](C:/Users/Dell/.gemini/antigravity/brain/f02c14d8-3f2c-460b-b24d-0d903850ce9d/trench_warfare_diagram_1770481478106.png)

### Key Features:
*   **Parapet:** Protective front wall banked with sandbags.
*   **Fire Step:** Used to look over the parapet and fire towards the enemy.
*   **Duckboards:** Planks on the floor to keep soldiers' feet out of the mud and water.
*   **No Man's Land:** The dangerous area of craters and barbed wire between the two front lines.

---

## 🦠 Living Conditions

Life was a cycle of boredom, terror, and disease.

1.  **Trench Foot:** A painful condition caused by feet being constantly wet/cold.
2.  **Lice & Rats:** Vermin infested the trenches, spreading diseases like Trench Fever.
3.  **Shell Shock:** The psychological trauma caused by constant bombardment.

> [!WARNING]
> Going "Over the Top" meant climbing out of the trench into a hail of machine-gun fire to attack the enemy line.
`
                }
            ],
            quizzes: [
                {
                    id: "ww1-quiz",
                    title: "Test: WW1 Depth",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-ww1-1", question: "Who was assassinated in 1914?", type: "multiple-choice", options: ["Franz Ferdinand", "Kaiser Wilhelm", "Gavrilo Princip", "Tsar Nicholas"], correctAnswer: "Franz Ferdinand", marks: 1, topic: "Causes" }
                    ]
                }
            ]
        },
        {
            id: "depth-interwar",
            name: "Depth: Inter-war 1918-1939",
            completed: false,
            studyMaterials: [
                {
                    id: "interwar-conflict",
                    title: "Conflict and Tension: 1918-1939",
                    content: `# ☮️ Inter-war Years

## 📚 Peacemaking
- **Treaty of Versailles (1919):** Harsh on Germany.
- **League of Nations:** Aims, Successes (Aaland Islands), Failures (Manchuria, Abyssinia).

## 📚 Road to WWII
- **Hitler's Foreign Policy:** Rearmament, Rhineland, Anschluss, Sudetenland.
- **Appeasement:** Chamberlain's policy.
- **Nazi-Soviet Pact.**
- **Invasion of Poland (1939).**
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Assess the League of Nations", "Explain Appeasement"]
                }
            ],
            quizzes: [
                {
                    id: "int-quiz",
                    title: "Test: Inter-war Depth",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-int-1", question: "Which crisis destroyed the League's reputation?", type: "multiple-choice", options: ["Abyssinia", "Corfu", "Bulgaria", "Aaland Islands"], correctAnswer: "Abyssinia", marks: 1, topic: "League of Nations" }
                    ]
                }
            ]
        },
        {
            id: "depth-coldwar",
            name: "Depth: East vs West 1945-1972",
            completed: false,
            studyMaterials: [
                {
                    id: "east-west-conflict",
                    title: "Conflict and Tension: Cold War",
                    content: `# 🧊 East vs West 1945-1972

## 📚 Origins
- Yalta/Potsdam, Iron Curtain, Truman Doctrine, Berlin Blockade.

## 📚 Development
- **Arms Race:** Atomic Bomb, H-Bomb, ICBMs.
- **Alliances:** NATO vs Warsaw Pact.
- **Hungary (1956):** Uprising crushed.
- **Berlin Wall (1961).**

## 📚 Crises
- **Cuban Missile Crisis (1962):** Closest to nuclear war.
- **Czechoslovakia (1968):** Prague Spring.
- **Détente:** Thawing of tension (SALT 1).
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 50,
                    learningObjectives: ["Explain the Berlin Blockade", "Describe the Cuban Missile Crisis"]
                }
            ],
            quizzes: [
                {
                    id: "ew-quiz",
                    title: "Test: East vs West",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-ew-1", question: "When was the Berlin Wall built?", type: "multiple-choice", options: ["1961", "1948", "1989", "1956"], correctAnswer: "1961", marks: 1, topic: "Berlin" }
                    ]
                }
            ]
        },
        {
            id: "depth-asia",
            name: "Depth: Asia 1950-1975",
            completed: false,
            studyMaterials: [
                {
                    id: "asia-conflict",
                    title: "Conflict in Asia",
                    content: `# 🌏 Asia 1950-1975

## 📚 Korean War (1950-53)
- North (Communist) vs South (Capitalist).
- UN intervention.
- Stalemate at 38th Parallel.

## 📚 Vietnam War
- **French Defeat (Dien Bien Phu).**
- **US Involvement:** Domino Theory, Gulf of Tonkin.
- **Tactics:** Guerilla (Vietcong) vs Search & Destroy/Napalm (USA).
- **Tet Offensive & My Lai.**
- **Withdrawal:** Vietnamisation, Fall of Saigon.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Explain Domino Theory", "Compare Korean and Vietnam wars"]
                }
            ],
            quizzes: [
                {
                    id: "asia-quiz",
                    title: "Test: Asia Depth",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-asia-1", question: "What was the 'Domino Theory'?", type: "multiple-choice", options: ["If one country falls to communism, others will", "Asian countries play dominance", "US tactic", "Vietcong tactic"], correctAnswer: "If one country falls to communism, others will", marks: 1, topic: "Vietnam" }
                    ]
                }
            ]
        },
        {
            id: "depth-gulf",
            name: "Depth: Gulf & Afghanistan 1990-2009",
            completed: false,
            studyMaterials: [
                {
                    id: "gulf-conflict",
                    title: "Gulf and Afghanistan",
                    content: `# 🏜️ Gulf & Afghanistan

## 📚 Gulf War (1990)
- Saddam Hussein invades Kuwait.
- Operation Desert Storm (US/Coalition).
- Liberation of Kuwait.

## 📚 9/11 and Afghanistan
- **Al-Qaeda:** 9/11 Attacks.
- **Invasion (2001):** To remove Taliban and find Bin Laden.
- **Conflict:** Insurgency, reconstruction attempts.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Explain causes of Gulf War", "Describe 9/11 impact"]
                }
            ],
            quizzes: [
                {
                    id: "gulf-quiz",
                    title: "Test: Gulf Depth",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-gulf-1", question: "Who was the leader of Iraq in 1990?", type: "multiple-choice", options: ["Saddam Hussein", "Osama Bin Laden", "Gaddafi", "Assad"], correctAnswer: "Saddam Hussein", marks: 1, topic: "Gulf War" }
                    ]
                }
            ]
        },

        // --- 4. BRITISH DEPTH STUDIES ---
        {
            id: "british-norman",
            name: "British: Norman England c1066-1100",
            completed: false,
            studyMaterials: [
                {
                    id: "norman-conquest",
                    title: "Norman England",
                    content: `# 🏰 Norman England

## 📚 Conquest
- **1066:** Hastings (William vs Harold).
- **Control:** Motte and Bailey Castles, Harrying of the North.
- **Feudal System:** King -> Barons -> Knights -> Peasants.

## 📚 Church & Society
- **Domesday Book.**
- **William II and the Church.**
- **Monasteries.**

## 📚 Historic Environment (Example)
- **Durham Cathedral / Pevensey Castle.**
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Explain Feudal System", "Describe Castle building"]
                }
            ],
            quizzes: [
                {
                    id: "norm-quiz",
                    title: "Test: Norman England",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-norm-1", question: "Which battle took place in 1066?", type: "multiple-choice", options: ["Hastings", "Stamford Bridge", "Agincourt", "Bosworth"], correctAnswer: "Hastings", marks: 1, topic: "Conquest" }
                    ]
                }
            ]
        },
        {
            id: "british-medieval",
            name: "British: Edward I 1272-1307",
            completed: false,
            studyMaterials: [
                {
                    id: "edward-reign",
                    title: "Reign of Edward I",
                    content: `# 👑 Edward I (1272-1307)

## 📚 Government
- **Statutes:** Changing laws (Gloucester, Winchester).
- **Parliament:** Model Parliament (1295).

## 📚 War
- **Wales:** Castles (Caernarfon), Conquest.
- **Scotland:** Hammer of the Scots, William Wallace, Stone of Destiny.

## 📚 Economy
- **Wool Trade.**
- **Coinage.**
`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Explain Model Parliament", "Describe Welsh Castles"]
                }
            ],
            quizzes: [
                {
                    id: "ed-quiz",
                    title: "Test: Edward I",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-ed-1", question: "Who was the 'Hammer of the Scots'?", type: "multiple-choice", options: ["Edward I", "Edward II", "William Wallace", "Robert the Bruce"], correctAnswer: "Edward I", marks: 1, topic: "Scotland" }
                    ]
                }
            ]
        },
        {
            id: "british-elizabeth",
            name: "British: Elizabeth c1568-1603",
            completed: false,
            studyMaterials: [
                {
                    id: "liz-depth",
                    title: "Elizabethan England",
                    content: `# 👑 Elizabethan England

## 📚 Court & Parliament
- Privy Council, Patronage, Spy Network (Walsingham).
- Essex Rebellion.

## 📚 Life
- **Golden Age:** Theatre (Globe), Education, Exploration (Drake/Raleigh).
- **Poverty:** Poor Laws.

## 📚 Troubles
- **Religion:** Catholics, Puritans, Mary Queen of Scots.
- **Conflict:** War with Spain (Armada 1588).
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 45,
                    learningObjectives: ["Explain the Armada", "Describe the Theatre"]
                }
            ],
            quizzes: [
                {
                    id: "liz2-quiz",
                    title: "Test: Elizabethan",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-liz2-1", question: "Who was Elizabeth's spymaster?", type: "multiple-choice", options: ["Walsingham", "Cecil", "Drake", "Dudley"], correctAnswer: "Walsingham", marks: 1, topic: "Government" }
                    ]
                }
            ]
        },
        {
            id: "british-restoration",
            name: "British: Restoration 1660-1685",
            completed: false,
            studyMaterials: [
                {
                    id: "restoration-england",
                    title: "Restoration England",
                    content: `# 🎭 Restoration England

## 📚 The King Returns
- **Charles II:** The "Merry Monarch". Return from exile.
- **The Court:** Fashion, Arts, Science (Royal Society).

## 📚 Disasters
- **Great Plague (1665).**
- **Great Fire of London (1666).**

## 📚 Politics
- **Clarendon Code:** Religious laws.
- **Popish Plot.**
- **Exclusion Crisis.**
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Describe the Great Fire", "Explain the Restoration"]
                }
            ],
            quizzes: [
                {
                    id: "rest-quiz",
                    title: "Test: Restoration",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        { id: "q-rest-1", question: "Who was the 'Merry Monarch'?", type: "multiple-choice", options: ["Charles II", "Charles I", "James II", "Cromwell"], correctAnswer: "Charles II", marks: 1, topic: "Monarchy" }
                    ]
                }
            ]
        }
    ]
};
