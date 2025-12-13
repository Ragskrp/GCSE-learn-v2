
import { Subject } from "@/types/curriculum";

export const year10History: Subject = {
    id: "history",
    name: "History",
    duration: 120,
    questions: 30,
    color: "from-rose-500 to-red-700",
    icon: "⚔️",
    level: 1,
    xp: 0,
    maxXp: 1000,
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
                    id: "weimar-problems",
                    title: "The Problems of Weimar",
                    content: `# 🇩🇪 Weimar Germany (1918-1933)

> **"A Republic born in defeat."**

---

## 🎯 Objectives
- 📉 Explain the **Treaty of Versailles**.
- 💸 Understand **Hyperinflation (1923)**.
- 👨‍✈️ Munich Putsch and Rise of Hitler.

---

## 📚 Chapter 1: The Treaty of Versailles (1919)
The "Diktat" (Dictated Peace).
1.  **Land:** Lost 13% of land (e.g., Alsace-Lorraine).
2.  **Army:** Reduced to 100,000 men. No air force.
3.  **Money:** £6.6 Billion reparations.
4.  **Blame:** Article 231 (War Guilt Clause).

## 📚 Chapter 2: The Year of Crisis (1923)
1.  **Invasion of the Ruhr:** France invaded to take coal instead of money.
2.  **Passive Resistance:** German workers went on strike.
3.  **Hyperinflation:** Government printed money to pay strikers.
    *   Bread cost 200 Billion marks.
    *   Savings became worthless.

## 📚 Chapter 3: The Golden Years (1924-29)
Recover under **Gustav Stresemann**.
*   **Dawes Plan:** US Loans.
*   **Locarno Pact:** Agreed borders.
*   **League of Nations:** Joined in 1926.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["List terms of Versailles", "Explain Hyperinflation"]
                }
            ],
            quizzes: [
                {
                    id: "weimar-exit-test",
                    title: "End of Topic Test: Weimar",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "hist-1",
                            question: "What was Article 231?",
                            type: "multiple-choice",
                            options: ["Reparations", "War Guilt Clause", "League of Nations", "Army reduction"],
                            correctAnswer: "War Guilt Clause",
                            explanation: "Germany had to accept total blame for the war.",
                            marks: 1,
                            topic: "Versailles"
                        },
                        {
                            id: "hist-2",
                            question: "Who was chancellor during the 'Golden Years'?",
                            type: "multiple-choice",
                            options: ["Hitler", "Ebert", "Stresemann", "Kaiser Wilhelm"],
                            correctAnswer: "Stresemann",
                            explanation: "Gustav Stresemann stabilized the economy.",
                            marks: 1,
                            topic: "Recovery"
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
                    id: "liz-government",
                    title: "Queen, Government & Religion",
                    content: `# 👑 Elizabethan England

## 🎯 Objectives
- 🏛️ Structure of **Government**.
- ⛪ The **Religious Settlement**.
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Mary Queen of Scots.

---

## 📚 Chapter 1: The Government
1.  **The Court:** Nobles who lived with the Queen. Power = access to her.
2.  **The Privy Council:** ~19 men who ran the country daily. (William Cecil, Francis Walsingham).
3.  **Parliament:** Only called 13 times. Granted taxes.

## 📚 Chapter 2: Religion
Elizabeth was Protestant but wanted a "Middle Way".
*   **Act of Supremacy:** She became "Supreme Governor" (not Head) of the Church.
*   **Act of Uniformity:** Everyone had to go to church. Services in English.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Explain the Middle Way", "List government parts"]
                }
            ],
            quizzes: [
                {
                    id: "liz-exit-test",
                    title: "End of Topic Test: Elizabeth",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "liz-1",
                            question: "What was Elizabeth's title in the Church?",
                            type: "multiple-choice",
                            options: ["Supreme Head", "Supreme Governor", "Pope", "Archbishop"],
                            correctAnswer: "Supreme Governor",
                            explanation: "She chose 'Governor' to please Catholics who saw the Pope as Head.",
                            marks: 1,
                            topic: "Religion"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "medicine",
            name: "Medicine Through Time",
            completed: false,
            studyMaterials: [
                {
                    id: "medicine-medieval",
                    title: "Medieval Medicine (1250-1500)",
                    content: `# ⚕️ Medieval Medicine

## 🎯 Causes of Disease
They did not know about Germs.
1.  **God:** Punishment for sin.
2.  **Miasma:** Bad air.
3.  **Four Humours:** Imbalance of Blood, Phlegm, Yellow Bile, Black Bile. (Hippocrates/Galen).

## Thereatments
*   **Prayer / Flagellation:** To appease God.
*   **Bloodletting / Purging:** To balance Humours.
*   **Herbal Remedies:** Passed down by women/monks.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 35,
                    learningObjectives: ["List 4 Humours", "Explain Miasma"]
                }
            ],
            quizzes: [
                {
                    id: "med-exit-test",
                    title: "End of Topic Test: Medicine",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "med-1",
                            question: "Who created the Theory of the Four Humours?",
                            type: "multiple-choice",
                            options: ["Pasteur", "Hippocrates", "Galen", "Vesalius"],
                            correctAnswer: "Hippocrates",
                            explanation: "Ancient Greek doctor Hippocrates thought of it; Galen developed it.",
                            marks: 1,
                            topic: "Ancient Medicine"
                        }
                    ]
                }
            ],
            tests: []
        },
        {
            id: "cold-war",
            name: "The Cold War",
            completed: false,
            studyMaterials: [
                {
                    id: "cold-war-origins",
                    title: "Origins of the Cold War",
                    content: `# 🧊 The Cold War (1945-1991)

## 🎯 Ideologies
*   **USA (Capitalist):** Democracy, Free trade, Individual rights.
*   **USSR (Communist):** Dictatorship, State ownership, Equality.

## 🎯 Key Events
*   **Yalta & Potsdam Conferences (1945):** Agreements break down.
*   **Iron Curtain (1946):** Europe divided.
*   **Truman Doctrine (1947):** USA policy to "Contain" communism.
*   **Berlin Blockade (1948):** Stalin blocked West Berlin. USA airlifted supplies.

`,
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 40,
                    learningObjectives: ["Compare ideologies", "Explain Truman Doctrine"]
                }
            ],
            quizzes: [
                {
                    id: "cold-exit-test",
                    title: "End of Topic Test: Cold War",
                    difficulty: "higher",
                    passingScore: 90,
                    xpReward: 200,
                    coinReward: 50,
                    timeLimit: 20,
                    questions: [
                        {
                            id: "cw-1",
                            question: "What was the Truman Doctrine?",
                            type: "multiple-choice",
                            options: ["To destroy Russia", "To contain Communism", "To build a wall", "To leave Europe"],
                            correctAnswer: "To contain Communism",
                            explanation: "The USA promised to help any country threatened by communism.",
                            marks: 1,
                            topic: "Origins"
                        }
                    ]
                }
            ],
            tests: []
        }
    ]
};
