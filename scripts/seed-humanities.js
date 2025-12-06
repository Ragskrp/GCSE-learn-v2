
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
                    content: `# 🎭 Macbeth: Ambition & The Supernatural

> **"Fair is foul, and foul is fair..."**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 📜 Summarize the **Plot of Act 1**
- 👥 Analyze the **Key Characters** (Macbeth, Lady M, Witches)
- 🗡️ Explore the fatal theme of **Ambition**
- 🔮 Understand the role of the **Supernatural**

**Estimated Time:** 20 minutes | **Difficulty:** Foundation | **XP Reward:** 150 ⭐

---

## 📚 Chapter 1: The Setting & Mood 🌩️

Scotland. 11th Century. A storm is brewing.

### The Atmosphere
- **Darkness:** Most scenes happen at night 🌑
- **Weather:** Thunder, lightning, rain (Pathetic Fallacy) ⚡
- **Violence:** Civil war and murder ⚔️

### The "Fair is Foul" Paradox
The Witches' famous line means **"Good is Bad, and Bad is Good."**
Nothing is what it seems in this play.

---

## 📚 Chapter 2: Meet the Players 👥

| Character | Role | Key Trait |
| :--- | :--- | :--- |
| **Macbeth** | Tragic Hero | Brave but weak-willed 🐺 |
| **Lady Macbeth** | The Instigator | Ruthless & manipulative 🐍 |
| **The Witches** | The Catalyst | Chaos & Prophecy 🔮 |
| **King Duncan** | The Victim | Trusting & Virtuous 👑 |
| **Banquo** | The Foil | Loyal & Skeptical 🛡️ |

### 🎮 Quick Check
**Who is the first person to suggest killing the King?**
- A) Macbeth
- B) Lady Macbeth
- C) The Witches

<details>
<summary>💡 Show Answer</summary>

**B) Lady Macbeth.** Macbeth wants to be King, but she is the one who plans the murder.
</details>

---

## 📚 Chapter 3: Act 1 Summary 🎬

1. **The Prophecy:** Witches tell Macbeth he will be **Thane of Cawdor** and then **King**. 👑
2. **The Truth:** Macbeth finds out he *is* now Thane of Cawdor. The prophecy is starting! 😲
3. **The Letter:** Lady Macbeth reads about it. She worries Macbeth is "too full of the milk of human kindness." 🥛
4. **The Plan:** She calls on evil spirits to "unsex" her (remove her guilt) and plans Duncan's murder while he sleeps. 🛌

---

## 📚 Chapter 4: Key Themes 🧠

### 1. Ambition (The Fatal Flaw)
Macbeth's "Vaulting Ambition" is what destroys him. He knows it's wrong, but he can't stop.

### 2. Fate vs Free Will
- Did the Witches **make** him do it?
- Or did they just **show** him what he secretly wanted?

### 3. Masculinity & Cruelty
Lady Macbeth connects being a "man" with being cruel. She bullies Macbeth by questioning his manhood.

> **Quote:** "When you durst do it, then you were a man."

---

## 🎯 Key Takeaways

✅ **"Fair is Foul":** Appearances are deceiving.
✅ **Hamartia:** Macbeth's fatal flaw is Ambition.
✅ **Lady Macbeth:** Is the driving force behind Act 1.
✅ **Divine Right of Kings:** Killing a King was a crime against God.

---

## 📝 Practice Questions

1. What are the three titles the Witches greet Macbeth with?
2. How does Lady Macbeth persuade her husband to kill Duncan?
3. What is the significance of the weather in the opening scene?
4. Explain the meaning of "look like the innocent flower, but be the serpent under't".

**Ready to face the Witches? Take the quiz!** 🧙‍♀️
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
                    content: `# 🇩🇪 The Weimar Republic: From Chaos to Culture

> **"A Republic born in defeat, lived in turmoil, and died in tragedy."**

---

## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 📉 Understand the **problems** facing the new German democracy
- 📜 Analyze the hated **Treaty of Versailles**
- 💸 Explain the causes and effects of **Hyperinflation**
- 💃 Describe the **Golden Years** (1924-1929)

**Estimated Time:** 25 minutes | **Difficulty:** Foundation | **XP Reward:** 150 ⭐

---

## 📚 Chapter 1: A Shaky Start (1918-1919) 🚩

Germany lost WWI. The Kaiser ran away.
A new democratic government met in the town of **Weimar** (Berlin was too dangerous!).

### The "Stab in the Back" Myth
Many Germans didn't believe they lost on the battlefield. They believed weak politicians (The "November Criminals") surrendered too early. This was a lie, but people believed it.

---

## 📚 Chapter 2: The Treaty of Versailles (1919) 📝

The winners (Allies) forced Germany to sign a "Diktat" (Dictated Peace).

### The Terms (LAMB)
1.  **L**and: Lost 13% of land (including Alsasce-Lorraine). 🗺️
2.  **A**rmy: Reduced to 100,000 men. No air force. No submarines. 🔫
3.  **M**oney: £6.6 Billion in reparations (fines). 💰
4.  **B**lame: Article 231 said Germany was 100% to blame. 🤬

### 🎮 Quick Check
**Which term of the Treaty did Germans hate the most?**
- A) Lost Land
- B) Blame (Article 231)
- C) Army reduction

<details>
<summary>💡 Show Answer</summary>

**B) Blame.** Accepting full guilt for the war was humiliating and unjustified in their eyes.
</details>

---

## 📚 Chapter 3: Crisis Year (1923) 🚨

Everything went wrong in 1923.

### 1. Invasion of the Ruhr
Germany couldn't pay. France invaded the industrial Ruhr to take coal instead. Workers went on strike.

### 2. Hyperinflation
The government printed money to pay the strikers.
- **Result:** Money became worthless.
- **Price of Bread:**
  - 1922: 163 Marks
  - Nov 1923: 200,000,000,000 Marks! 🍞

> **Fact:** People used money as wallpaper because it was cheaper than actual wallpaper!

---

## 📚 Chapter 4: The Golden Years (1924-1929) ✨

Enter **Gustav Stresemann**. He fixed things (briefly).

### Stresemann's Solutions
1.  **Rentenmark:** A new, stable currency. 💶
2.  **Dawes Plan (1924):** Loans from the USA to jumpstart the economy. 🇺🇸
3.  **League of Nations (1926):** Germany was allowed to join the "World Club" again. 🤝

### Berlin Culture
Berlin became the "Party Capital of Europe".
- Jazz clubs 🎷
- Cinema (Metropolis) 🎥
- Modern Art (Bauhaus) 🎨

---

## 🎯 Key Takeaways

✅ **Weimar Republic:** Germany's first democracy.
✅ **Treaty of Versailles:** Hated by Germans (LAMB).
✅ **Hyperinflation:** Caused by printing money (1923).
✅ **Stresemann:** Saved Germany with US loans (Golden Years).

---

## 📝 Practice Questions

1. Why was the government called the "Weimar" Republic?
2. List three things Germany lost in the Treaty of Versailles.
3. How did the French invasion of the Ruhr lead to Hyperinflation?
4. Who was Gustav Stresemann and what did he do?

**Ready to travel back in time? Take the quiz!** ⏳
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
