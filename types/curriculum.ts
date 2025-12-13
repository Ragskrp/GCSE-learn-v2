
export interface QuizQuestion {
    id: string
    question: string
    type: "multiple-choice" | "text" | "boolean"
    options?: string[]
    correctAnswer: string | boolean
    explanation?: string
    marks: number
    topic: string
}

export interface Quiz {
    id: string
    title: string
    questions: QuizQuestion[]
    timeLimit: number // in minutes
    difficulty: "foundation" | "higher" | "medium" | "easy" // Keeping legacy types for safety
    passingScore: number
    xpReward: number
    coinReward: number
}

export interface StudyMaterial {
    id: string
    title: string
    content: string
    type: "lesson" | "video" | "interactive" | "worksheet"
    difficulty: "foundation" | "higher" | "intermediate" // Keeping legacy
    estimatedTime: number // in minutes
    prerequisites?: string[]
    learningObjectives: string[]
}

export interface Topic {
    id: string
    name: string
    completed: boolean
    studyMaterials: StudyMaterial[]
    quizzes?: Quiz[]
    tests?: Quiz[] // Legacy support
}

export interface Subject {
    id: string
    name: string
    duration: number // Total estimated hours
    questions: number // Total questions available
    color: string // Tailwind gradient classes
    icon: string | any // Check if ReactNode issues arise, for now string/any
    level: number
    xp: number
    maxXp: number
    coins: number
    unlocked: boolean
    conquestTitle: string
    timeLimit: number
    topics: Topic[]
}
