
import { Subject } from "@/types/curriculum";

export const year10EnglishLiterature: Subject = {
    id: "english-lit-10",
    name: "AQA: English Literature",
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
                    id: "macbeth-intro",
                    title: "Macbeth: The Tragedy of Ambition",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 45,
                    learningObjectives: ["Analyse the Witches' influence", "Understand the 'Fair is Foul' paradox"],
                    content: `# 🎭 Macbeth: The Architecture of Tragedy

> [!NOTE]
> **"Fair is foul, and foul is fair..."**
> This paradox is the heartbeat of the play. It suggests that appearances are deceiving and the moral order of Scotland is about to be turned upside down.

---

## 🏛️ The Inciting Incident

The play begins in thunder and lightning with three **Witches** (The Weird Sisters). They are the catalysts of the tragedy.

### The Prophecies:
1.  **Thane of Glamis** (Macbeth's current title).
2.  **Thane of Cawdor** (A reward for his bravery in battle).
3.  **King hereafter** (The spark that ignites his ambition).

---

## 🏛️ The Supernatural & Pathetic Fallacy

Shakespeare uses the environment to reflect the internal state of his characters. This is called **Pathetic Fallacy**.

*   **Storms:** Every time the Witches appear, there is a storm. 🌩️
*   **Darkness:** Macbeth's evil deeds always take place at night. He asks the stars to "hide your fires" so they cannot see his "black and deep desires."

---

## 🐍 Lady Macbeth: The Architect

While Macbeth is "too full o' the milk of human kindness," Lady Macbeth is ruthless. She fears his conscience will stop him from seizing the crown.

> *"Unsex me here, and fill me from the crown to the toe top-full of direst cruelty!"*

She successfully manipulates Macbeth by questioning his **masculinity**, essentially bullying him into committing regicide.
`
                },
                {
                    id: "macbeth-key-scenes",
                    title: "Macbeth: Key Scenes & Quotes",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 50,
                    learningObjectives: ["Analyse the Dagger Soliloquy", "Discuss the Banquo's Ghost scene"],
                    content: `# 🗡️ Key Scenes: The Descent into Madness

As Macbeth moves from "Valiant Cousin" to "Dead Butcher," several pivotal scenes mark his psychological collapse.

---

## 🏛️ The Dagger Soliloquy (Act 2, Sc 1)

Just before the murder of Duncan, Macbeth sees a vision of a floating dagger.

> *"Is this a dagger which I see before me, the handle toward my hand?"*

*   **Interpretation:** Is it a supernatural warning? Or a hallucination caused by his extreme guilt and anxiety?
*   **Symbolism:** The "gouts of blood" on the blade foreshadow the bloodbath that follows.

---

## 🏛️ The Ghost of Banquo (Act 3, Sc 4)

After ordering the murder of his friend Banquo, Macbeth sees Banquo's ghost sitting in his seat at a royal banquet.

*   **Effect:** Macbeth loses control in front of his lords, showing that his "fit" is a sign of his crumbling mental state.
*   **Lady Macbeth's Role:** She tries to maintain order, telling the guests it is a "momentary" flaw, but her power is also fading.

---

## 🏛️ Out, Damned Spot! (Act 5, Sc 1)

At the end of the play, the once-ruthless Lady Macbeth is reduced to a sleepwalking shell, trying to "wash" imaginary blood from her hands.

> *"Out, damned spot! out, I say!"*

*   **Contrast:** In Act 2, she said "A little water clears us of this deed." Now, she realizes that "All the perfumes of Arabia will not sweeten this little hand."
`
                },
                {
                    id: "macbeth-themes-context",
                    title: "Macbeth: Context & Grand Themes",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Explain the Divine Right of Kings", "Discuss the theme of Kingship vs Tyranny"],
                    content: `# ⚖️ Context: Kingship, Tyranny & The Divine

Shakespeare wrote *Macbeth* partly to please **King James I**, who had recently survived the Gunpowder Plot.

---

## 🏛️ The Divine Right of Kings

In the 17th century, people believed that Kings were chosen by God. Killing a King (**Regicide**) was not just a crime; it was a sin against God and Nature.

### The Great Chain of Being:
When Macbeth kills Duncan, the "Chain" is broken. This is why we hear reports of:
*   Horses eating each other.
*   An owl killing a falcon.
*   The earth "shaking."

---

## 🏛️ Kingship vs. Tyranny

Through the contrast of Duncan, Macbeth, and Malcolm, Shakespeare explores what makes a good leader.

| Leader | Style | Biblical Parallel |
| :--- | :--- | :--- |
| **Duncan** | Virtuous, holy, and trusting. | The Lamb of God. |
| **Macbeth** | Violent, selfish, and paranoid. | The Devil / Lucifer. |
| **Malcolm** | Diplomatic, cautious, and restorative. | The True Heir. |

---

## 🏛️ The Final Message

Macbeth concludes that life is a "walking shadow" and a "tale told by an idiot, signifying nothing." His ambition led him to a crown, but it cost him his soul and his sanity.
`
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
                    id: "inspector-responsibility",
                    title: "AIC: Social Responsibility",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 40,
                    learningObjectives: ["Analyse the Inspector's final speech", "Explain Priestley's political message"],
                    content: `# 🕵️‍♂️ AIC: The Ghost of Social Responsibility

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

## 🏛️ The Inspector: Who is Goole?

Inspector Goole is more than just a policeman; he is a moral force.

*   **Appearance:** He creates an impression of "massiveness, solidity and purposefulness."
*   **Lighting:** When he arrives, the lighting changes from "pink and intimate" to **"brighter and harder."** It's like an interrogation lamp.
*   **Name:** "Goole" sounds like "Ghoul" (ghost). Is he a spirit? A conscience? Or an angel of justice?
`
                },
                {
                    id: "inspector-generations",
                    title: "AIC: The Clash of Generations",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 35,
                    learningObjectives: ["Contrast the Birling children with their parents", "Discuss the theme of change"],
                    content: `# 🧒 The Generation Gap: Old vs. Young

The play's biggest conflict is not just between the Birlings and the Inspector, but between those who can change and those who cannot.

---

## 🏛️ The Older Generation (Mr & Mrs Birling)

*   **Trait:** Static (They do not change or learn).
*   **Philosophy:** "A man has to make his own way—has to look after himself."
*   **Response:** They care more about their reputation and avoiding a "public scandal" than about the girl they helped kill. By the end of the play, they are relieved to think it might have been a "hoax."

---

## 🏛️ The Younger Generation (Sheila & Eric)

*   **Trait:** Dynamic (They transform during the play).
*   **Philosophy:** "It frightens me the way you talk... you're beginning to pretend now that nothing's really happened."
*   **Response:** They accept their **Social Responsibility**. Sheila becomes the Inspector's "proxy," helping him to expose the truth when he is out of the room.
`
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
