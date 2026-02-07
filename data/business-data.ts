
import { Subject } from "@/types/curriculum";

export const year10Business: Subject = {
    id: "business-10",
    name: "AQA: Business",
    duration: 120,
    questions: 100,
    color: "from-blue-500 to-indigo-600",
    icon: "💼",
    level: 1,
    xp: 0,
    maxXp: 2000,
    coins: 0,
    unlocked: true,
    conquestTitle: "CEO in Training",
    timeLimit: 120,
    topics: [
        {
            id: "business-ownership",
            name: "Business Ownership",
            completed: false,
            studyMaterials: [
                {
                    id: "sole-traders-partnerships",
                    title: "Sole Traders & Partnerships",
                    type: "lesson",
                    difficulty: "higher",
                    estimatedTime: 30,
                    learningObjectives: ["Define Sole Trader", "Explain unlimited liability", "Contrast with Partnerships"],
                    content: `# 💼 Business Ownership: Sole Traders & Partnerships

> [!NOTE]
> **What is a Sole Trader?** A business owned and operated by one person. It is the simplest form of business structure.

---

## 🏛️ Sole Traders

A sole trader has **Unlimited Liability**. This means the owner is personally responsible for all business debts. If the business fails, the owner could lose their personal assets (like their house).

### Pros & Cons
*   ✅ **Pros:** Easy to set up, you keep all profit, complete control.
*   ❌ **Cons:** Unlimited liability, hard to raise money, heavy workload.

---

## 🏛️ Partnerships

A partnership is owned by 2 to 20 people.

### Pros & Cons
*   ✅ **Pros:** Shared responsibility, more capital available, more skills.
*   ❌ **Cons:** Unlimited liability (usually), potential for arguments, profit is shared.
`
                }
            ],
            quizzes: [
                {
                    id: "business-intro-quiz",
                    title: "Introduction to Business Quiz",
                    difficulty: "higher",
                    passingScore: 80,
                    xpReward: 100,
                    coinReward: 20,
                    timeLimit: 10,
                    questions: [
                        {
                            id: "bq1",
                            question: "What does 'unlimited liability' mean?",
                            type: "multiple-choice",
                            options: [
                                "The owner is only responsible for what they invested",
                                "The owner is personally responsible for all business debts",
                                "The business has no debts",
                                "The owner cannot be sued"
                            ],
                            correctAnswer: "The owner is personally responsible for all business debts",
                            explanation: "Unlimited liability means there is no legal distinction between the owner and the business.",
                            marks: 1,
                            topic: "Ownership"
                        }
                    ]
                }
            ]
        }
    ]
};
