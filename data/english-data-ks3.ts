import { Subject } from "@/types/curriculum";

export const year7English: Subject = {
    id: "english-7",
    name: "KS3 English (Year 7)",
    duration: 120,
    questions: 100,
    color: "from-amber-400 to-orange-600",
    icon: "📚",
    level: 1,
    xp: 0,
    maxXp: 3000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Wordsmith",
    timeLimit: 60,
    topics: [
        {
            id: "en-ks3-shakespeare",
            name: "Introduction to Shakespeare",
            completed: false,
            studyMaterials: [
                {
                    id: "shakespeare-intro",
                    title: "Who Was William Shakespeare?",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 🎭 William Shakespeare
> The Bard of Avon (1564 - 1616)

## Famous Works
*   **Tragedies:** Romeo & Juliet, Macbeth, Hamlet.
*   **Comedies:** A Midsummer Night's Dream, Much Ado About Nothing.
*   **Histories:** Henry V.

## Language
*   He wrote in **Early Modern English**.
*   Invented over 1700 words (e.g., 'Eyeball', 'Assassination').
`,
                    learningObjectives: ["Identify Shakespeare's plays", "Understand his impact"]
                }
            ],
            quizzes: [
                {
                    id: "qz-shak-1",
                    title: "Shakespeare Intro Quiz",
                    difficulty: "foundation",
                    passingScore: 60,
                    xpReward: 100,
                    coinReward: 10,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "q1",
                            question: "When was Shakespeare born?",
                            type: "multiple-choice",
                            options: ["1564", "1616", "1492"],
                            correctAnswer: "1564",
                            marks: 1,
                            topic: "Context"
                        }
                    ]
                }
            ]
        },
        {
            id: "en-ks3-novel",
            name: "Novel Study: Wonder",
            completed: false,
            studyMaterials: [
                {
                    id: "wonder-intro",
                    title: "Reading 'Wonder'",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# 📖 Wonder by R.J. Palacio
> "When given the choice between being right and being kind, choose kind."

## Themes
*   **Identity:** Looking different.
*   **Kindness:** The impact of small acts.
*   **Friendship:** True vs fake friends.

## Characters
*   **Auggie:** Main character with facial difference.
*   **Jack Will:** His friend.
*   **Julian:** The bully.
`,
                    learningObjectives: ["Identify themes", "Describe characters"]
                }
            ],
            quizzes: []
        },
        {
            id: "en-ks3-writing",
            name: "Creative Writing",
            completed: false,
            studyMaterials: [
                {
                    id: "desc-writing",
                    title: "Writing Descriptions",
                    type: "lesson",
                    difficulty: "foundation",
                    estimatedTime: 30,
                    content: `# ✍️ Descriptive Writing
Use the senses!

## The 5 Senses
1.  **Sight:** Colours, shapes, movement.
2.  **Sound:** Loud, soft, rustling.
3.  **Smell:** Sweet, acrid, damp.
4.  **Touch:** Rough, smooth, cold.
5.  **Taste:** Bitter, sweet, metallic.

## Techniques
*   **Simile:** Like or as (Quiet _as_ a mouse).
*   **Metaphor:** Is (He _is_ a lion).
*   **Personification:** Giving human traits to objects (The wind _howled_).
`,
                    learningObjectives: ["Use similes and metaphors"]
                }
            ],
            quizzes: []
        }
    ]
};
