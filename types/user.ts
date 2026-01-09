export interface User {
  username: string
  password: string
  yearGroup: 7 | 10
  profile: {
    level: number
    xp: number
    maxXp: number
    coins: number
    avatarUrl: string
    totalQuestsCompleted: number
    achievements: string[]
    subjects: Subject[]
  }
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  xpReward: number
}

export interface Subject {
  id: string
  name: string
  duration: number
  questions: number
  color: string
  icon: string
  level: number
  xp: number
  maxXp: number
  coins: number
  unlocked: boolean
  conquestTitle: string
  topics: Topic[]
}

export interface Topic {
  id: string
  name: string
  completed: boolean
  studyMaterials: StudyMaterial[]
  quizzes: Quiz[]
  tests: Test[]
}

export interface StudyMaterial {
  id: string
  title: string
  content: string
  type: "text" | "video" | "interactive"
}

export interface Quiz {
  id: string
  title: string
  questions: QuizQuestion[]
  timeLimit: number
  xpReward: number
  coinReward: number
}

export interface Test {
  id: string
  title: string
  questions: TestQuestion[]
  timeLimit: number
  xpReward: number
  coinReward: number
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface TestQuestion {
  id: string
  question: string
  type: "multiple-choice" | "short-answer" | "essay"
  options?: string[]
  correctAnswer?: number | string
  points: number
}
