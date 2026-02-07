
import { Subject } from "@/types/curriculum";

export const year10EnglishLiterature: Subject = {
    id: "english-lit-10",
    name: "English Literature",
    duration: 120,
    questions: 30,
    color: "from-amber-400 to-orange-600",
    icon: "📚",
    level: 1,
    xp: 0,
    maxXp: 1000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Bard of Avon",
    timeLimit: 120,
    topics: [
        {
            id: "macbeth",
            name: "Macbeth",
            completed: false,
            studyMaterials: [
                {
                    id: "macbeth-full",
                    title: "Macbeth: The Scottish Play",
                    content: `# 🎭 Macbeth: Ambition & The Supernatural

> [!NOTE]
> **"Fair is foul, and foul is fair..."**
> Master the tragic descent of a hero into a tyrant in Shakespeare's fastest-paced tragedy.

---

## 🏛️ The Setting & Mood

The play opens in Scotland, an 11th-century landscape of brutal civil war and terrifying supernatural storms.

### 🔑 Pathetic Fallacy
Shakespeare uses weather to reflect the moral decay of characters:
- **Thunder & Lightning:** Signal the presence of the Witches. 🌩️
- **Darkness:** Most defining scenes occur at night, symbolizing Macbeth's "black and deep desires." 🌑

### 🧩 The "Fair is Foul" Paradox
This central theme means **Appearances are Deceiving**. 
- What looks good (Macbeth's bravery) is actually hiding a dark secret.
- What looks bad (The Witches) is actually speaking some truths that tempt Macbeth.

---

## 🏛️ The Main Players

| Character | Role | Key Trait |
| :--- | :--- | :--- |
| **Macbeth** | Tragic Hero | Brave but fatally weak-willed 🐺 |
| **Lady Macbeth** | The Architect | Ruthless, manipulative, and ambitious 🐍 |
| **The Witches** | The Catalyst | Chaotic agents of prophecy 🔮 |
| **King Duncan** | The Just King | Trusting, virtuous, and doomed 👑 |

---

## 🏛️ Summary of Act 1: The Inciting Incidents

1. **The Prophecies:** The Witches greet Macbeth as **Thane of Glamis**, **Thane of Cawdor**, and **King hereafter**.
2. **The First Realisation:** Moments later, Macbeth learns he *has* been named Thane of Cawdor. The "instruments of darkness" have spoken truth.
3. **The Letter:** Lady Macbeth reads of the prophecies and immediately fears her husband is "too full o' the milk of human kindness" to seize the crown.
4. **The Plan:** Duncan arrives at their castle (Inverness). Lady Macbeth invokes spirits to "unsex" her and prepares the murder plot while Duncan sleeps.

---

## 🏛️ Central Themes to Watch

### 1. Ambition (The Hamartia)
Macbeth's "Vaulting Ambition" is his fatal flaw. He knows that his only reason for killing Duncan is his own ego, yet he cannot stop himself.

### 2. Fate vs. Free Will
Did the Witches determine Macbeth's path? Or did they simply plant a seed in a soil that was already fertile with ambition?

### 3. Masculinity
Lady Macbeth links "Manhood" with violence and cruelty. She successfully bullies Macbeth into the murder by questioning his courage.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 50,
                    learningObjectives: ["Summarise the plot", "Analyse key quotes"]
                }
            ],
            quizzes: [
                {
                    id: "macbeth-exit-test",
                    title: "End of Topic Test: Macbeth",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "eng-1",
                            question: "Who becomes King at the end of the play?",
                            type: "multiple-choice",
                            options: ["Macbeth", "Banquo", "Malcolm", "Macduff"],
                            correctAnswer: "Malcolm",
                            explanation: "Duncan's son, Malcolm, is restored to the throne.",
                            marks: 1,
                            topic: "Plot"
                        },
                        {
                            id: "eng-2",
                            question: "What breaks the 'No man of woman born' prophecy?",
                            type: "multiple-choice",
                            options: ["Macduff was adopted", "Macduff was a C-Section birth", "Macduff is a woman", "The witches lied"],
                            correctAnswer: "Macduff was a C-Section birth",
                            explanation: "He was 'untimely ripped' from his mother's womb.",
                            marks: 1,
                            topic: "Context"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "inspector-calls",
            name: "An Inspector Calls",
            completed: false,
            studyMaterials: [
                {
                    id: "inspector-themes",
                    title: "AIC: Themes and Characters",
                    content: `# 🕵️‍♂️ An Inspector Calls: Responsibility & Society

> [!NOTE]
> **Priority Quote:** "We are members of one body. We are responsible for each other."
> Priestley uses a middle-class family to reflect the failures of capitalist society in 1912.

---

## 🏛️ Context: The Conflict of Time

Priestley wrote the play in **1945** (at the end of WWII) but set it in **1912** (just before WWI). 

### 🔑 The Purpose of the Time Gap
- **Dramatic Irony:** The audience in 1945 knows about the wars and the Titanic; when Mr. Birling calls the Titanic "unsinkable," he looks foolish and unreliable.
- **The Message:** Priestley wanted to show that the old ways of thinking (selfishness and greed) led to the horrors of the wars.

---

## 🏛️ The Clash of Generations

The play's biggest conflict is not just between the Birlings and the Inspector, but between the **Old** and the **Young**.

### 👴 The Older Generation (Mr & Mrs Birling)
- **Trait:** Static (They do not change or learn).
- **Philosphy:** "A man has to make his own way—has to look after himself."
- **Response:** They care more about their reputation and avoiding a "public scandal" than about the girl they helped kill.

### 🧒 The Younger Generation (Sheila & Eric)
- **Trait:** Dynamic (They transform during the play).
- **Philosophy:** "It frightens me the way you talk... you're beginning to pretend now that nothing's really happened."
- **Response:** They accept their **Social Responsibility** and are deeply shaken by their actions.

---

## 🏛️ The Inspector: Who is Goole?

Inspector Goole is more than just a policeman; he is a moral force.

- **Appearance:** He creates an impression of "massiveness, solidity and purposefulness."
- **Lighting:** When he arrives, the lighting changes from "pink and intimate" to **"brighter and harder."** It's like an interrogation lamp.
- **Name:** "Goole" sounds like "Ghoul" (ghost). Is he a spirit? A conscience? Or an angel of justice?

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Contrast generations", "Explain Priestley's message"]
                }
            ],
            quizzes: [
                {
                    id: "aic-exit-test",
                    title: "End of Topic Test: AIC",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "aic-1",
                            question: "Which character changes the most?",
                            type: "multiple-choice",
                            options: ["Mr Birling", "Mrs Birling", "Sheila", "Gerald"],
                            correctAnswer: "Sheila",
                            explanation: "Sheila starts as superficial but becomes the inspector's proxy.",
                            marks: 1,
                            topic: "Characters"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "poetry",
            name: "Power and Conflict Poetry",
            completed: false,
            studyMaterials: [
                {
                    id: "ozymandias",
                    title: "Ozymandias & London",
                    content: `# 🗿 Poetry: The Power of Conflict

> [!NOTE]
> **Key Comparison:** How do poets represent the fragility of human power compared to the permanence of nature and time?

---

## 🏛️ Ozymandias (Percy Bysshe Shelley)

A Romantic poet's take on the arrogance of a dictator and the inevitable triumph of time.

### 🔑 The Image of Ruin
The poem describes a "shattered visage" and "two vast and trunkless legs of stone" standing in a lonely desert. 

### 🧩 The Irony 
The pedestal says: *"Look on my works, ye Mighty, and despair!"* 
- **Irony:** There are no works left to see. Just "lone and level sands."
- **Meaning:** Human power is temporary; nature and time are the only true masters.

---

## 🏛️ London (William Blake)

A bleak, angry walk through the streets of Industrial-era London, where everywhere Blake sees misery and "chartered" (owned/restricted) streets.

### 🔑 "Mind-Forged Manacles"
This is the most famous quote. It suggests that people are not just trapped by laws and poverty, but by **their own minds** and the belief that they cannot change their situation.

### 🧩 The "Black'ning Church" & "Palace"
Blake blames the powerful institutions:
- **The Church:** For ignoring the "sweep's" cry.
- **The State (Palace):** For the "hapless soldier's blood" running down its walls.

`,
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 30,
                    learningObjectives: ["Analyse Ozymandias", "Analyse London"]
                }
            ],
            quizzes: [
                {
                    id: "poetry-exit-test",
                    title: "End of Topic Test: Poetry",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "poet-1",
                            question: "Who wrote Ozymandias?",
                            type: "multiple-choice",
                            options: ["William Blake", "Percy Shelley", "Wilfred Owen", "Ted Hughes"],
                            correctAnswer: "Percy Shelley",
                            explanation: "Romantic poet Percy Bysshe Shelley.",
                            marks: 1,
                            topic: "Authors"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};
