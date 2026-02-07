
import { Subject } from "@/types/curriculum";

export const year10EnglishLanguage: Subject = {
    id: "english-lang-10",
    name: "AQA: English Language",
    duration: 120,
    questions: 40,
    color: "from-pink-500 to-rose-600",
    icon: "🖋️",
    level: 1,
    xp: 0,
    maxXp: 2000,
    coins: 0,
    unlocked: true,
    conquestTitle: "Literary Legend",
    timeLimit: 120,
    topics: [
        {
            id: "paper1-sectionA",
            name: "Paper 1: Reading",
            completed: false,
            studyMaterials: [
                {
                    id: "p1-q2-language",
                    title: "Question 2: Analysing Language",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 35,
                    learningObjectives: ["Identify language features", "Explain the effect on the reader", "Use the P.E.E.L structure"],
                    content: `# 🖋️ Paper 1, Question 2: Analysing Language

> [!IMPORTANT]
> **The Goal:** You need to explain *how* the writer uses language to achieve specific effects. Do not just list techniques!

---

## 🏛️ What to look for?

When reading the extract, look for:
1.  **Words and Phrases:** Adjectives, powerful verbs, abstract nouns.
2.  **Language Features:** Similes, metaphors, personification, hyperbole.
3.  **Sentence Forms:** Short sentences for impact, complex sentences for detail.

---

## 🏛️ The P.E.E.L Structure

*   📍 **Point:** What is the writer doing?
*   🔎 **Evidence:** Use a short, embedded quote.
*   🧠 **Explanation:** How does this word/technique make the reader feel? What does it suggest?
*   🔗 **Link:** Relate it back to the focus of the question.

---

## 🏛️ Example Analysis

*Quote: "The wind howled like a wounded animal."*
*Analysis: The writer uses a **simile** to personify the wind. The word "howled" suggests a sense of pain and uncontrolled power, while "wounded animal" evokes a feeling of danger and unpredictability in the atmosphere.*
`
                }
            ],
            quizzes: [
                {
                    id: "english-lang-q2-quiz",
                    title: "Language Analysis Quiz",
                    difficulty: "higher",
                    passingScore: 80,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "elq1",
                            question: "Which technique is: 'The stars were diamonds in the sky'?",
                            type: "multiple-choice",
                            options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
                            correctAnswer: "Metaphor",
                            explanation: "A metaphor says something IS something else, not 'like' something else.",
                            marks: 1,
                            topic: "Techniques"
                        }
                    ]
                }
            ]
        }
    ]
};
