import { Subject } from "./curriculum-database";

export const year10EnglishLiterature: Subject = {
    id: "english-lit",
    name: "English Literature",
    duration: 120,
    questions: 30,
    color: "from-amber-400 to-amber-600",
    icon: "📚",
    level: 1,
    xp: 0,
    maxXp: 600,
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
                    title: "Introduction to Macbeth",
                    content: `# 🎭 Macbeth: The Scottish Play

## "Fair is foul, and foul is fair..."

Welcome to the dark and stormy world of Macbeth! This is one of Shakespeare's most famous tragedies, filled with witches, warriors, and a whole lot of ambition.

### 🏰 The Setting
- **Place:** Scotland (mostly)
- **Atmosphere:** Dark, gloomy, supernatural, violent
- **Key Themes:** Ambition, Guilt, Fate vs. Free Will, Kingship

### 👥 Key Characters

| Character | Role | Traits |
|-----------|------|--------|
| **Macbeth** | Tragic Hero | Ambitious, brave warrior, easily manipulated |
| **Lady Macbeth** | His Wife | Ruthless, manipulative, eventually consumed by guilt |
| **The Witches** | Supernatural Agents | Mysterious, prophetic, chaotic |
| **Banquo** | Macbeth's Friend | Loyal, skeptical of the witches |
| **Duncan** | The King | Good, virtuous, trusting |

### 🎬 Act 1 Summary
1.  **The Witches:** Three witches plan to meet Macbeth.
2.  **The Battle:** Macbeth is a hero in battle.
3.  **The Prophecy:** The witches tell Macbeth he will be King. They tell Banquo his children will be kings.
4.  **The Letter:** Lady Macbeth reads about the prophecy and decides Duncan must die.
5.  **The Plan:** Lady Macbeth convinces Macbeth to kill the King while he sleeps.

### 🧠 Think About It
> "Stars, hide your fires; Let not light see my black and deep desires." - Macbeth

**What does this quote tell us about Macbeth's state of mind?**
*He knows what he wants to do is wrong, but he wants it anyway. He is hiding his ambition from the world (and God).*

### 🎥 Interactive Element
Imagine you are directing the opening scene. How would you make the witches look?
- [ ] Scary and old
- [ ] Modern and creepy
- [ ] Invisible voices

*There is no wrong answer! Shakespeare's plays are open to interpretation.*
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 20,
                    learningObjectives: [
                        "Understand the plot of Act 1",
                        "Analyze key characters",
                        "Explore the theme of ambition"
                    ],
                },
            ],
            quizzes: [
                {
                    id: "macbeth-quiz-1",
                    title: "Macbeth Act 1 Quiz",
                    timeLimit: 10,
                    difficulty: "foundation",
                    passingScore: 70,
                    xpReward: 100,
                    coinReward: 50,
                    questions: [
                        {
                            id: "q1",
                            question: "Who says 'Fair is foul, and foul is fair'?",
                            type: "multiple-choice",
                            options: ["Macbeth", "Lady Macbeth", "The Witches", "Duncan"],
                            correctAnswer: "The Witches",
                            explanation: "The Witches say this in the very first scene, setting the theme of moral confusion.",
                            marks: 1,
                            topic: "macbeth"
                        },
                        {
                            id: "q2",
                            question: "What title is Macbeth given after the battle?",
                            type: "multiple-choice",
                            options: ["Thane of Glamis", "Thane of Cawdor", "King of Scotland", "Prince of Cumberland"],
                            correctAnswer: "Thane of Cawdor",
                            explanation: "He is already Thane of Glamis, but King Duncan rewards him with the title Thane of Cawdor for his bravery.",
                            marks: 1,
                            topic: "macbeth"
                        },
                        {
                            id: "q3",
                            question: "How does Lady Macbeth react to the prophecy?",
                            type: "multiple-choice",
                            options: ["She is scared", "She doesn't believe it", "She immediately plans to kill Duncan", "She tells Macbeth to ignore it"],
                            correctAnswer: "She immediately plans to kill Duncan",
                            explanation: "She fears Macbeth is 'too full o' the milk of human kindness' to do what is necessary to become King.",
                            marks: 1,
                            topic: "macbeth"
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
                    id: "inspector-intro",
                    title: "Introduction to An Inspector Calls",
                    content: `# 🕵️‍♂️ An Inspector Calls

## 🏚️ Context: 1912 vs 1945
The play was written in 1945 but set in 1912.
- **1912:** Edwardian era, rigid class system, no welfare state.
- **1945:** Post-WW2, hope for a better society, birth of the Welfare State.

## 🎭 The Birlings
An upper-middle-class family celebrating an engagement.
- **Mr. Birling:** Capitalist, arrogant, "hard-headed businessman".
- **Sybil Birling:** Cold, snobbish, social superior to her husband.
- **Sheila:** Starts naive, but changes the most.
- **Eric:** Insecure, drinks too much.
- **Gerald Croft:** Aristocrat, engaged to Sheila.

## 🚪 The Inspector
- **Goole:** Pun on 'Ghoul'?
- He investigates the suicide of Eva Smith.
- He represents **Social Responsibility**.

> "We are members of one body. We are responsible for each other."
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Understand the social context", "Analyze Mr. Birling vs The Inspector"]
                }
            ],
            quizzes: [
                {
                    id: "inspector-quiz",
                    title: "End of Topic Test: An Inspector Calls",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 50,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "aic1",
                            question: "In what year is the play set?",
                            type: "multiple-choice",
                            options: ["1912", "1914", "1945", "1939"],
                            correctAnswer: "1912",
                            explanation: "Just before the Titanic sinks and WW1 starts.",
                            marks: 1,
                            topic: "Context"
                        },
                        {
                            id: "aic2",
                            question: "Who says 'community and all that nonsense'?",
                            type: "multiple-choice",
                            options: ["Eric", "Inspector Goole", "Mr. Birling", "Gerald"],
                            correctAnswer: "Mr. Birling",
                            explanation: "He dismisses social responsibility immediately before the Inspector arrives.",
                            marks: 1,
                            topic: "Themes"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};

export const year10History: Subject = {
    id: "history",
    name: "History",
    duration: 120,
    questions: 30,
    color: "from-red-700 to-red-900",
    icon: "⚔️",
    level: 1,
    xp: 0,
    maxXp: 600,
    coins: 0,
    unlocked: true,
    conquestTitle: "Time Traveller",
    timeLimit: 120,
    topics: [
        {
            id: "weimar-germany",
            name: "Weimar & Nazi Germany",
            completed: false,
            studyMaterials: [
                {
                    id: "weimar-intro",
                    title: "The Weimar Republic (1918-1929)",
                    content: `# 🇩🇪 The Weimar Republic

## From Empire to Democracy

After World War I, Germany changed from a powerful Empire ruled by the Kaiser to a struggling democracy known as the Weimar Republic.

### 📉 Key Problems (1919-1923)
The new government faced huge challenges:

1.  **Political Instability:** Many Germans hated the new democracy. They blamed it for losing the war.
2.  **The Treaty of Versailles:** Germany was forced to sign this "dictated peace" (Diktat).
    - Lost land 🗺️
    - Military reduced 🔫
    - Huge reparations (fines) 💰
    - War Guilt Clause (Article 231) 📝
3.  **Hyperinflation (1923):** Money became worthless!
    - A loaf of bread cost 200 billion marks! 🍞
    - People burned money for heat because it was cheaper than wood. 🔥

### 📈 The Golden Years (1924-1929)
Under **Gustav Stresemann**, things improved:
- **Dawes Plan (1924):** US loans helped the economy. 🇺🇸
- **Culture:** Berlin became famous for art, cinema, and nightlife. 🎨🎬

### 🧠 Flashcard Check
**Who was the first President of the Weimar Republic?**
- [ ] Friedrich Ebert
- [ ] Paul von Hindenburg
- [ ] Adolf Hitler

*Answer: Friedrich Ebert*

### 🛑 The End
The Wall Street Crash of 1929 destroyed the German economy again, leading to the rise of the Nazi party.
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 25,
                    learningObjectives: [
                        "Understand the problems facing the Weimar Republic",
                        "Analyze the impact of the Treaty of Versailles",
                        "Explain the causes of Hyperinflation"
                    ],
                },
            ],
            quizzes: [
                {
                    id: "weimar-quiz-1",
                    title: "Weimar Republic Quiz",
                    timeLimit: 10,
                    difficulty: "foundation",
                    passingScore: 70,
                    xpReward: 100,
                    coinReward: 50,
                    questions: [
                        {
                            id: "q1",
                            question: "What was the 'Diktat'?",
                            type: "multiple-choice",
                            options: ["The German Constitution", "The Dictated Peace (Treaty of Versailles)", "The German Army", "The new currency"],
                            correctAnswer: "The Dictated Peace (Treaty of Versailles)",
                            explanation: "Germans called the Treaty a 'Diktat' because they were not allowed to negotiate it.",
                            marks: 1,
                            topic: "weimar-germany"
                        },
                        {
                            id: "q2",
                            question: "Which year was the year of Hyperinflation?",
                            type: "multiple-choice",
                            options: ["1919", "1921", "1923", "1929"],
                            correctAnswer: "1923",
                            explanation: "In 1923, the French occupation of the Ruhr led to passive resistance and money printing, causing hyperinflation.",
                            marks: 1,
                            topic: "weimar-germany"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "elizabethan-england",
            name: "Elizabethan England",
            completed: false,
            studyMaterials: [
                {
                    id: "liz-intro",
                    title: "Queen Elizabeth I & Government",
                    content: `# 👑 Elizabethan Government

## 🏛️ The Court
- The centre of power.
- Nobles attended to get power and influence (Patronage).

## 🧐 The Privy Council
- Roughly 19 very powerful men chosen by the Queen.
- They met daily to advise her.
- **William Cecil:** Her most trusted advisor.
- **Francis Walsingham:** Her "spymaster".

## 📜 Parliament
- Could pass laws and grant taxes.
- Elizabeth only called them 13 times in 45 years!
`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    learningObjectives: ["Describe the Privy Council", "Explain Patronage"]
                }
            ],
            quizzes: [
                {
                    id: "liz-quiz",
                    title: "End of Topic Test: Elizabethan England",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 150,
                    coinReward: 50,
                    timeLimit: 15,
                    questions: [
                        {
                            id: "eq1",
                            question: "Who was Elizabeth's Spymaster?",
                            type: "multiple-choice",
                            options: ["William Cecil", "Francis Walsingham", "Robert Dudley", "Earl of Essex"],
                            correctAnswer: "Francis Walsingham",
                            explanation: "He uncovered many plots against her.",
                            marks: 1,
                            topic: "Government"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};
