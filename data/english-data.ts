
import { Subject } from "@/types/curriculum";

export const year10EnglishLiterature: Subject = {
    id: "english-lit",
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
                    content: `# 🎭 Macbeth

> **"By the pricking of my thumbs, something wicked this way comes."**

---

## 🎯 Objectives
- 🏰 Describe the **Plot** Act by Act.
- 🧑‍🤝‍🧑 Analyze key **Characters** (Macbeth, Lady Macbeth).
- 👻 Explore **Themes** (Ambition, Guilt, Supernatural).

---

## 📚 Chapter 1: Plot Summary

### Act 1: The Prophecy
Macbeth and Banquo meet three Witches. They predict:
1.  Macbeth will be Thane of Cawdor.
2.  Macbeth will be King.
3.  Banquo's children will be Kings.
King Duncan makes Macbeth Thane of Cawdor. Lady Macbeth reads a letter and decides Duncan must die.

### Act 2: The Murder 🗡️
Macbeth sees a floating dagger. He kills Duncan. Lady Macbeth plants the daggers on the guards. Macbeth is shaken ("Macbeth does murder sleep").

### Act 3: The Banquo Ghost 👻
Macbeth is King but paranoid. He has Banquo killed, but Fleance escapes. At a feast, Macbeth sees Banquo's ghost and panics.

### Act 4: The Apparitions 🔮
Macbeth visits the witches again. They show:
1.  Beware Macduff.
2.  None of woman born shall harm Macbeth.
3.  Safe until Birnam Wood moves to Dunsinane.
Macbeth has Macduff's family killed.

### Act 5: The Downfall 🩸
Lady Macbeth goes mad (sleepwalking) and dies. Macduff (born by Caesarean, not "natural birth") kills Macbeth. Malcolm becomes King.

---

## 📚 Chapter 2: Key Quotes

| Who | Quote | Meaning |
| :--- | :--- | :--- |
| **Witches** | "Fair is foul, and foul is fair." | Appearance vs Reality. Chaos. |
| **L. Macbeth** | "Look like the innocent flower, but be the serpent under't." | Deception. |
| **Macbeth** | "Is this a dagger which I see before me?" | Hallucination. Guilt. |
| **L. Macbeth** | "Out, damned spot!" | Guilt driving her mad. |

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
                    content: `# 🕵️‍♂️ An Inspector Calls

## 🎯 Context
- Written in **1945** (Post-War, Socialism).
- Set in **1912** (Pre-War, Capitalism).
- Priestley asks: "Why did society fail?"

---

## 📚 Chapter 1: The Generations

### Older Generation (Mr & Mrs Birling)
- **Static:** They do not change.
- **Capitalist:** Care about money and status.
- **Refuse Responsibility:** "I can't accept any responsibility."

### Younger Generation (Sheila & Eric)
- **Dynamic:** They change and regret their actions.
- **Socialist:** They care about people.
- **Accept Responsibility:** "It frightens me the way you talk."

---

## 📚 Chapter 2: The Inspector (Goole)
- He is not a normal police officer.
- He knows everything already.
- He controls the time and lighting ("brighter and harder").
- **Message:** "We are members of one body."

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
                    content: `# 🗿 Poetry: Power & Conflict

## 1. Ozymandias (Percy Shelley)
*   **Theme:** Power of Nature vs Power of Humans.
*   **Content:** A ruined statue of a King in the desert.
*   **Key Quote:** "Look on my works, ye Mighty, and despair!"
    *   *Irony:* There is nothing left to look at.

## 2. London (William Blake)
*   **Theme:** Abuse of Power, Suffering.
*   **Content:** Walking through London seeing misery.
*   **Key Quote:** "Mind-forged manacles."
    *   *Meaning:* People are trapped by their own thoughts and society's rules.

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
