
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
    console.error('Make sure .env.local exists with all Firebase credentials.');
    process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const year10EnglishLiterature = {
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
        }
    ]
};

const year10History = {
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
        }
    ]
};

async function seedHumanities() {
    console.log('🔥 Starting Humanities Seeding...');

    try {
        // Write Year 10 English
        console.log('📝 Seeding Year 10 English Literature...');
        await setDoc(doc(db, 'subjects', 'english-lit-10'), year10EnglishLiterature);

        // Write Year 10 History
        console.log('📝 Seeding Year 10 History...');
        await setDoc(doc(db, 'subjects', 'history-10'), year10History);

        console.log(`✅ Humanities (Year 10 English & History) seeded successfully!`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}

seedHumanities();
