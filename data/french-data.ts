
import { Subject } from "@/types/curriculum";

export const year10French: Subject = {
    id: "french-10",
    name: "AQA: French",
    duration: 120,
    questions: 150,
    color: "from-blue-400 via-white to-red-400",
    icon: "🇫🇷",
    level: 1,
    xp: 0,
    maxXp: 2000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Francophone",
    timeLimit: 120,
    topics: [
        {
            id: "french-family",
            name: "Me, my family and friends",
            completed: false,
            studyMaterials: [
                {
                    id: "french-family-vocab",
                    title: "Family Vocabulary",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 25,
                    learningObjectives: ["Master family member nouns", "Use possessive adjectives", "Describe relationships"],
                    content: `# 🇫🇷 Ma Famille: Family & Relationships

> [!TIP]
> **Key Tip:** In French, nouns have gender (Masculine/Feminine). Make sure your adjectives match the gender of the person you are describing!

---

## 🏛️ Les Membres de la Famille

| Français | Anglais |
| :--- | :--- |
| Mon père | My father |
| Ma mère | My mother |
| Mon frère | My brother |
| Ma sœur | My sister |
| Mon grand-père | My grandfather |
| Ma grand-mère | My grandmother |

---

## 🏛️ Les Adjectifs Possessifs (Possessive Adjectives)

| Person | Masculine | Feminine | Plural |
| :--- | :--- | :--- | :--- |
| **I (My)** | Mon | Ma | Mes |
| **You (Your - informal)** | Ton | Ta | Tes |
| **He/She (His/Her)** | Son | Sa | Ses |

---

## 🏛️ Phrases Clés

*   **Je m'entends bien avec...** (I get on well with...)
*   **Je me dispute avec...** (I argue with...)
*   **Il est agaçant.** (He is annoying.)
*   **Elle est sympa.** (She is nice.)
`
                }
            ],
            quizzes: [
                {
                    id: "french-family-quiz",
                    title: "Family & Friends Quiz",
                    difficulty: "higher",
                    passingScore: 80,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "fq1",
                            question: "How do you say 'My sister' in French?",
                            type: "multiple-choice",
                            options: ["Mon frère", "Ma sœur", "Mon père", "Ma mère"],
                            correctAnswer: "Ma sœur",
                            explanation: "'Sœur' is feminine, so we use 'Ma'.",
                            marks: 1,
                            topic: "Vocabulary"
                        }
                    ]
                }
            ]
        }
    ]
};
