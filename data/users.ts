import type { User } from "@/types/user"
import { ProgressStorage } from "@/utils/progress-storage"
import { year10Mathematics, year7Mathematics } from "@/data/curriculum-database"

const initialUsers: User[] = [
  {
    username: "Brinda",
    password: "1234",
    yearGroup: 10,
    profile: {
      level: 1,
      xp: 0,
      maxXp: 500,
      coins: 0,
      avatarUrl: "/cute-girl-avatar.png",
      totalQuestsCompleted: 0,
      subjects: [year10Mathematics],
    },
  },
  {
    username: "Supratik",
    password: "5678",
    yearGroup: 7,
    profile: {
      level: 1,
      xp: 0,
      maxXp: 400,
      coins: 0,
      avatarUrl: "/cute-girl-avatar.png",
      totalQuestsCompleted: 0,
      subjects: [year7Mathematics],
    },
  },
]

// Initialize users from storage or use initial data
let cachedUsers: User[] | null = null;

// Load users synchronously from localStorage cache
export function getUsersSync(): User[] {
  if (cachedUsers) return cachedUsers;

  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('gcse-quest-progress');
      if (stored) {
        const data = JSON.parse(stored);
        cachedUsers = data.users || initialUsers;
        return cachedUsers;
      }
    } catch (error) {
      console.error('Error loading cached users:', error);
    }
  }

  cachedUsers = initialUsers;
  return cachedUsers;
}

// Initialize storage with initial users if empty
if (typeof window !== 'undefined') {
  ProgressStorage.loadProgress().then(users => {
    if (!users) {
      ProgressStorage.saveProgress(initialUsers);
      cachedUsers = initialUsers;
    } else {
      cachedUsers = users;
    }
  });
}

export const users: User[] = getUsersSync();

export function findUser(username: string, password: string): User | null {
  const currentUsers = getUsersSync();
  return currentUsers.find((user) => user.username === username && user.password === password) || null;
}

export function getUserProgress(username: string): User | null {
  const currentUsers = getUsersSync();
  return currentUsers.find((user) => user.username === username) || null;
}

export function updateUserProgress(username: string, updatedProfile: User["profile"]): void {
  ProgressStorage.updateUserProgress(username, updatedProfile);
  // Update cache
  const currentUsers = getUsersSync();
  const userIndex = currentUsers.findIndex(u => u.username === username);
  if (userIndex !== -1) {
    currentUsers[userIndex].profile = updatedProfile;
    cachedUsers = currentUsers;
  }
}

export function completeQuiz(
  username: string,
  subjectId: string,
  topicId: string,
  quizId: string,
  score: number,
  earnedXp: number,
  earnedCoins: number,
): void {
  ProgressStorage.completeQuiz(username, subjectId, topicId, quizId, score, earnedXp, earnedCoins);
}

export function completeTest(
  username: string,
  subjectId: string,
  topicId: string,
  testId: string,
  score: number,
  earnedXp: number,
  earnedCoins: number,
): void {
  ProgressStorage.completeTest(username, subjectId, topicId, testId, score, earnedXp, earnedCoins);
}

export function getAllUsers(): User[] {
  return getUsersSync();
}
