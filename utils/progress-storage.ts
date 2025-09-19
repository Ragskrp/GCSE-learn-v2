import type { User } from "@/types/user"

const STORAGE_KEY = "gcse-quest-progress"

export interface StoredProgress {
  users: User[]
  lastUpdated: string
}

export class ProgressStorage {
  static saveProgress(users: User[]): void {
    if (typeof window === 'undefined') return
    try {
      const progressData: StoredProgress = {
        users,
        lastUpdated: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData))
    } catch (error) {
      console.error("Failed to save progress:", error)
    }
  }

  static loadProgress(): User[] | null {
    if (typeof window === 'undefined') return null
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return null

      const progressData: StoredProgress = JSON.parse(stored)
      return progressData.users
    } catch (error) {
      console.error("Failed to load progress:", error)
      return null
    }
  }

  static updateUserProgress(username: string, updatedProfile: User["profile"]): void {
    if (typeof window === 'undefined') return
    try {
      const stored = this.loadProgress()
      if (!stored) return

      const userIndex = stored.findIndex((user) => user.username === username)
      if (userIndex !== -1) {
        stored[userIndex].profile = updatedProfile
        this.saveProgress(stored)
      }
    } catch (error) {
      console.error("Failed to update user progress:", error)
    }
  }

  static completeQuiz(
    username: string,
    subjectId: string,
    topicId: string,
    quizId: string,
    score: number,
    earnedXp: number,
    earnedCoins: number,
  ): void {
    if (typeof window === 'undefined') return
    try {
      const stored = this.loadProgress()
      if (!stored) return

      const user = stored.find((u) => u.username === username)
      if (!user) return

      const subject = user.profile.subjects.find((s) => s.id === subjectId)
      if (!subject) return

      const topic = subject.topics.find((t) => t.id === topicId)
      if (!topic) return

      // Update user's overall progress
      user.profile.xp += earnedXp
      user.profile.coins += earnedCoins
      user.profile.totalQuestsCompleted += 1

      // Update subject progress
      subject.xp += earnedXp
      subject.coins += earnedCoins

      // Mark topic as completed if score is high enough
      if (score >= 70) {
        topic.completed = true
      }

      // Level up logic
      if (user.profile.xp >= user.profile.maxXp) {
        user.profile.level += 1
        user.profile.xp = user.profile.xp - user.profile.maxXp
        user.profile.maxXp = Math.floor(user.profile.maxXp * 1.2) // Increase XP requirement by 20%
      }

      this.saveProgress(stored)
    } catch (error) {
      console.error("Failed to complete quiz:", error)
    }
  }

  static completeTest(
    username: string,
    subjectId: string,
    topicId: string,
    testId: string,
    score: number,
    earnedXp: number,
    earnedCoins: number,
  ): void {
    if (typeof window === 'undefined') return
    try {
      const stored = this.loadProgress()
      if (!stored) return

      const user = stored.find((u) => u.username === username)
      if (!user) return

      const subject = user.profile.subjects.find((s) => s.id === subjectId)
      if (!subject) return

      const topic = subject.topics.find((t) => t.id === topicId)
      if (!topic) return

      // Update user's overall progress
      user.profile.xp += earnedXp
      user.profile.coins += earnedCoins
      user.profile.totalQuestsCompleted += 1

      // Update subject progress
      subject.xp += earnedXp
      subject.coins += earnedCoins

      // Mark topic as completed if score is high enough
      if (score >= 60) {
        topic.completed = true
      }

      // Level up logic
      if (user.profile.xp >= user.profile.maxXp) {
        user.profile.level += 1
        user.profile.xp = user.profile.xp - user.profile.maxXp
        user.profile.maxXp = Math.floor(user.profile.maxXp * 1.2)
      }

      this.saveProgress(stored)
    } catch (error) {
      console.error("Failed to complete test:", error)
    }
  }

  static getLeaderboard(): User[] {
    if (typeof window === 'undefined') return []
    try {
      const stored = this.loadProgress()
      if (!stored) return []

      return stored.sort((a, b) => {
        const aTotal = a.profile.subjects.reduce((sum, subject) => sum + subject.xp, 0) + a.profile.xp
        const bTotal = b.profile.subjects.reduce((sum, subject) => sum + subject.xp, 0) + b.profile.xp
        return bTotal - aTotal
      })
    } catch (error) {
      console.error("Failed to get leaderboard:", error)
      return []
    }
  }

  static resetProgress(): void {
    if (typeof window === 'undefined') return
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error("Failed to reset progress:", error)
    }
  }

  static exportProgress(): string {
    if (typeof window === 'undefined') return ""
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored || ""
    } catch (error) {
      console.error("Failed to export progress:", error)
      return ""
    }
  }

  static importProgress(progressData: string): boolean {
    if (typeof window === 'undefined') return false
    try {
      const parsed = JSON.parse(progressData)
      if (parsed.users && Array.isArray(parsed.users)) {
        localStorage.setItem(STORAGE_KEY, progressData)
        return true
      }
      return false
    } catch (error) {
      console.error("Failed to import progress:", error)
      return false
    }
  }
}
