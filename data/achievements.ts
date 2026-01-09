import { Achievement } from "@/types/user"

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: "first-steps",
        title: "First Steps",
        description: "Complete your first lesson",
        icon: "👣",
        xpReward: 100
    },
    {
        id: "quiz-whiz",
        title: "Quiz Whiz",
        description: "Score 100% on any quiz",
        icon: "🧠",
        xpReward: 200
    },
    {
        id: "mock-survivor",
        title: "Mock Survivor",
        description: "Complete a full mock exam",
        icon: "🛡️",
        xpReward: 500
    },
    {
        id: "coin-collector",
        title: "Coin Collector",
        description: "Amass 1,000 coins",
        icon: "💰",
        xpReward: 300
    },
    {
        id: "scholar",
        title: "Scholar",
        description: "Reach Level 2",
        icon: "🎓",
        xpReward: 500
    },
    {
        id: "dedication",
        title: "Dedication",
        description: "Complete 5 Quests",
        icon: "🔥",
        xpReward: 250
    }
]
