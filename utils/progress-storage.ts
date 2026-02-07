import type { User } from "@/types/user"
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ACHIEVEMENTS } from "@/data/achievements";

const STORAGE_KEY = "gcse-quest-progress"

export interface StoredProgress {
  users: User[]
  lastUpdated: string
}

const isFirebaseConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    typeof db !== 'undefined'
  );
};

export class ProgressStorage {
  static async saveProgress(users: User[]): Promise<void> {
    if (typeof window === 'undefined') return

    try {
      const progressData: StoredProgress = {
        users,
        lastUpdated: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData))
    } catch (error) {
      console.error("Failed to save progress to LocalStorage:", error)
    }

    if (isFirebaseConfigured()) {
      try {
        for (const user of users) {
          // Remove circular references or complex objects if necessary, but User type should be clean
          await setDoc(doc(db as any, "users", user.username), user);
        }
      } catch (error) {
        console.error("Failed to save progress to Firebase:", error)
      }
    }
  }

  static async loadProgress(): Promise<User[] | null> {
    if (typeof window === 'undefined') return null

    if (isFirebaseConfigured()) {
      try {
        const usersSnapshot = await getDocs(collection(db as any, "users"));
        if (!usersSnapshot.empty) {
          const users = usersSnapshot.docs.map(doc => doc.data() as User);
          this.saveToLocalStorageOnly(users);
          return users;
        }
      } catch (error) {
        console.error("Failed to load progress from Firebase:", error)
      }
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return null
      const progressData: StoredProgress = JSON.parse(stored)
      return progressData.users
    } catch (error) {
      return null
    }
  }

  private static saveToLocalStorageOnly(users: User[]): void {
    if (typeof window === 'undefined') return
    try {
      const progressData: StoredProgress = {
        users,
        lastUpdated: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData))
    } catch (error) { }
  }

  static async updateUserProgress(username: string, updatedProfile: User["profile"]): Promise<void> {
    if (typeof window === 'undefined') return

    if (isFirebaseConfigured()) {
      try {
        const userRef = doc(db as any, "users", username);
        await updateDoc(userRef, { profile: updatedProfile });
      } catch (error) { }
    }

    try {
      const stored = await this.loadProgress()
      if (!stored) return
      const userIndex = stored.findIndex((user) => user.username === username)
      if (userIndex !== -1) {
        stored[userIndex].profile = updatedProfile
        this.saveToLocalStorageOnly(stored)
      }
    } catch (error) { }
  }

  // Check and unlock achievements
  static checkAchievements(user: User, context: { score?: number, type?: 'quiz' | 'mock' }): string[] {
    const unlockedNow: string[] = []
    const currentAchievements = new Set(user.profile.achievements || [])

    ACHIEVEMENTS.forEach(ach => {
      if (currentAchievements.has(ach.id)) return;

      let unlock = false;

      switch (ach.id) {
        case 'first-steps':
          if (user.profile.totalQuestsCompleted >= 1) unlock = true;
          break;
        case 'quiz-whiz':
          if (context.type === 'quiz' && context.score === 100) unlock = true;
          break;
        case 'mock-survivor':
          if (context.type === 'mock') unlock = true;
          break;
        case 'coin-collector':
          if (user.profile.coins >= 1000) unlock = true;
          break;
        case 'scholar':
          if (user.profile.level >= 2) unlock = true;
          break;
        case 'dedication':
          if (user.profile.totalQuestsCompleted >= 5) unlock = true;
          break;
      }

      if (unlock) {
        user.profile.achievements.push(ach.id)
        user.profile.xp += ach.xpReward
        unlockedNow.push(ach.title)
      }
    })

    return unlockedNow
  }

  static async completeQuiz(
    username: string,
    subjectId: string,
    topicId: string,
    quizId: string,
    score: number,
    earnedXp: number,
    earnedCoins: number,
  ): Promise<string[]> {
    if (typeof window === 'undefined') return []

    try {
      const stored = await this.loadProgress()
      if (!stored) return []

      const user = stored.find((u) => u.username === username)
      if (!user) return []

      // Link check
      const subject = user.profile.subjects.find((s) => s.id === subjectId)
      // If subject not found (e.g. data mismatch), try to fetch purely for profile update? No, just skip subject update then.

      if (subject) {
        const topic = subject.topics.find((t) => t.id === topicId)
        if (topic) {
          // Handle completions
          if (score >= 70) topic.completed = true
          subject.xp += earnedXp
          subject.coins += earnedCoins
        }
      }

      // Update User
      user.profile.xp += earnedXp
      user.profile.coins += earnedCoins
      user.profile.totalQuestsCompleted += 1

      // Level Up
      if (user.profile.xp >= user.profile.maxXp) {
        user.profile.level += 1
        user.profile.xp = user.profile.xp - user.profile.maxXp
        user.profile.maxXp = Math.floor(user.profile.maxXp * 1.2)
      }

      // Achievements
      const newAchievements = this.checkAchievements(user, { score, type: 'quiz' })

      await this.saveProgress(stored)
      return newAchievements
    } catch (error) {
      console.error("Failed to complete quiz:", error)
      return []
    }
  }

  static async completeMockTest(
    username: string,
    subjectId: string,
    score: number,
    earnedXp: number,
    earnedCoins: number
  ): Promise<string[]> {
    if (typeof window === 'undefined') return []

    try {
      const stored = await this.loadProgress()
      if (!stored) return []

      const user = stored.find((u) => u.username === username)
      if (!user) return []

      // Update User
      user.profile.xp += earnedXp
      user.profile.coins += earnedCoins
      user.profile.totalQuestsCompleted += 1 // Mocks count as quests? Sure.

      // Level Up
      if (user.profile.xp >= user.profile.maxXp) {
        user.profile.level += 1
        user.profile.xp = user.profile.xp - user.profile.maxXp
        user.profile.maxXp = Math.floor(user.profile.maxXp * 1.2)
      }

      // Achievements
      const newAchievements = this.checkAchievements(user, { score, type: 'mock' })

      await this.saveProgress(stored)
      return newAchievements
    } catch (error) {
      console.error("Failed to complete mock test:", error)
      return []
    }
  }

  static async getLeaderboard(): Promise<User[]> {
    const stored = await this.loadProgress()
    if (!stored) return []
    return stored.sort((a, b) => b.profile.xp - a.profile.xp)
  }
}
