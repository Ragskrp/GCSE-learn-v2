
import { Subject } from "@/types/curriculum";

export const year10ReligiousStudies: Subject = {
    id: "re-10",
    name: "AQA: RE",
    duration: 120,
    questions: 80,
    color: "from-yellow-400 to-orange-500",
    icon: "⚖️",
    level: 1,
    xp: 0,
    maxXp: 2000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Philosopher",
    timeLimit: 120,
    topics: [
        {
            id: "christianity-beliefs",
            name: "Christianity: Beliefs & Teachings",
            completed: false,
            studyMaterials: [
                {
                    id: "nature-of-god",
                    title: "The Nature of God",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 30,
                    learningObjectives: ["Define Omnipotence/Benevolence", "Explain the Holy Trinity", "Discuss the Problem of Evil"],
                    content: `# ⚖️ Christianity: The Nature of God

> [!NOTE]
> **Core Belief:** Christians believe in One God (Monotheism) who is the creator and sustainer of all life.

---

## 🏛️ Key Characteristics of God

1.  **Omnipotent:** All-powerful. God can do anything.
2.  **Omnibenevolent:** All-loving. God loves everyone unconditionally.
3.  **Just:** God is the ultimate judge and is always fair.

---

## 🏛️ The Holy Trinity

God exists in three persons, but as one being:
*   🕊️ **The Father:** Creator of the world.
*   ✝️ **The Son:** Jesus Christ, God incarnate on Earth.
*   ✨ **The Holy Spirit:** The unseen power of God that guides people.

---

## 🏛️ The Problem of Evil

If God is all-powerful and all-loving, why is there suffering in the world?
*   **Theodicy:** Attempts to justify God's actions.
*   **Free Will:** Some argue evil exists because humans have the freedom to choose wrong.
`
                }
            ],
            quizzes: [
                {
                    id: "christian-beliefs-quiz",
                    title: "Christian Beliefs Quiz",
                    difficulty: "higher",
                    passingScore: 80,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "req1",
                            question: "What does 'Omnibenevolent' mean?",
                            type: "multiple-choice",
                            options: ["All-knowing", "All-powerful", "All-loving", "Everywhere"],
                            correctAnswer: "All-loving",
                            explanation: "'Omni' means all and 'Benevolent' means kind/loving.",
                            marks: 1,
                            topic: "Nature of God"
                        }
                    ]
                }
            ]
        }
    ]
};
