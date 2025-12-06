import type { User } from "@/types/user"
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  orderBy,
  updateDoc
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const STORAGE_KEY = "gcse-quest-progress"

export interface StoredProgress {
  users: User[]
  lastUpdated: string
}

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    typeof db !== 'undefined'
  );
};

export class ProgressStorage {
  /**
   * Save user progress (Firebase + LocalStorage)
   */
  static async saveProgress(users: User[]): Promise<void> {
    if (typeof window === 'undefined') return

    // Always save to LocalStorage as backup
    try {
      const progressData: StoredProgress = {
        users,
        lastUpdated: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData))
    } catch (error) {
      console.error("Failed to save progress to LocalStorage:", error)
    }

    // Also save to Firebase if configured
    if (isFirebaseConfigured()) {
      try {
        for (const user of users) {
          await setDoc(doc(db, "users", user.username), user);
        }
      } catch (error) {
        console.error("Failed to save progress to Firebase:", error)
      }
    }
  }

  /**
   * Load user progress (Firebase first, then LocalStorage)
   */
  static async loadProgress(): Promise<User[] | null> {
    if (typeof window === 'undefined') return null

    // Try Firebase first
    if (isFirebaseConfigured()) {
      try {
        const usersSnapshot = await getDocs(collection(db, "users"));
        if (!usersSnapshot.empty) {
          const users = usersSnapshot.docs.map(doc => doc.data() as User);

          // Also cache in LocalStorage
          this.saveToLocalStorageOnly(users);

          return users;
        }
      } catch (error) {
        console.error("Failed to load progress from Firebase:", error)
        // Fall through to LocalStorage
      }
    }

    // Fallback to LocalStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return null

      const progressData: StoredProgress = JSON.parse(stored)
      return progressData.users
    } catch (error) {
      console.error("Failed to load progress from LocalStorage:", error)
      return null
    }
  }

  /**
   * Save only to LocalStorage (used for caching)
   */
  private static saveToLocalStorageOnly(users: User[]): void {
    if (typeof window === 'undefined') return

    try {
      const progressData: StoredProgress = {
        users,
        lastUpdated: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData))
    } catch (error) {
      console.error("Failed to save to LocalStorage:", error)
    }
  }

  /**
   * Update specific user's progress
   */
  static async updateUserProgress(username: string, updatedProfile: User["profile"]): Promise<void> {
    if (typeof window === 'undefined') return

    // Update in Firebase
    if (isFirebaseConfigured()) {
      try {
        const userRef = doc(db, "users", username);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          await updateDoc(userRef, {
            profile: updatedProfile
          });
        }
      } catch (error) {
        console.error("Failed to update user in Firebase:", error)
      }
    }

    // Also update LocalStorage
    try {
      const stored = await this.loadProgress()
      if (!stored) return

      const userIndex = stored.findIndex((user) => user.username === username)
      if (userIndex !== -1) {
        stored[userIndex].profile = updatedProfile
        this.saveToLocalStorageOnly(stored)
      }
    } catch (error) {
      console.error("Failed to update user progress:", error)
    }
  }

  /**
   * Complete a quiz and update progress
   */
  static async completeQuiz(
    username: string,
    subjectId: string,
    topicId: string,
    quizId: string,
    score: number,
    earnedXp: number,
    earnedCoins: number,
  ): Promise<void> {
    if (typeof window === 'undefined') return

    try {
      const stored = await this.loadProgress()
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
        user.profile.maxXp = Math.floor(user.profile.maxXp * 1.2)
      }

      await this.saveProgress(stored)
    } catch (error) {
      console.error("Failed to complete quiz:", error)
    }
  }

  /**
   * Complete a test and update progress
   */
  static async completeTest(
    username: string,
    subjectId: string,
    topicId: string,
    testId: string,
    score: number,
    earnedXp: number,
    earnedCoins: number,
  ): Promise<void> {
    if (typeof window === 'undefined') return

    try {
      const stored = await this.loadProgress()
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

      await this.saveProgress(stored)
    } catch (error) {
      console.error("Failed to complete test:", error)
    }
  }

  /**
   * Get leaderboard sorted by XP
   */
  static async getLeaderboard(): Promise<User[]> {
    if (typeof window === 'undefined') return []

    try {
      const stored = await this.loadProgress()
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

  /**
   * Reset all progress (use with caution!)
   */
  static async resetProgress(): Promise<void> {
    if (typeof window === 'undefined') return

    try {
      localStorage.removeItem(STORAGE_KEY)

      // Note: We don't delete Firebase data automatically for safety
      // Admin should manually delete from Firebase console if needed
    } catch (error) {
      console.error("Failed to reset progress:", error)
    }
  }

  /**
   * Export progress as JSON
   */
  static async exportProgress(): Promise<string> {
    if (typeof window === 'undefined') return ""

    try {
      const stored = await this.loadProgress()
      return JSON.stringify(stored, null, 2)
    } catch (error) {
      console.error("Failed to export progress:", error)
      return ""
    }
  }

  /**
   * Import progress from JSON
   */
  static async importProgress(progressData: string): Promise<boolean> {
    if (typeof window === 'undefined') return false

    try {
      const parsed = JSON.parse(progressData)
      if (Array.isArray(parsed)) {
        await this.saveProgress(parsed)
        return true
      }
      if (parsed.users && Array.isArray(parsed.users)) {
        await this.saveProgress(parsed.users)
        return true
      }
      return false
    } catch (error) {
      console.error("Failed to import progress:", error)
      return false
    }
  }
}
