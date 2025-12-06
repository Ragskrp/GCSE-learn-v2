import { User, UserProfile } from '@/types/user';

export const users: User[] = [
  {
    username: 'Brinda',
    password: '1234',
    yearGroup: 10,
    profile: {
      level: 1,
      xp: 0,
      maxXp: 500,
      coins: 0,
      avatarUrl: '/cute-girl-avatar.png',
      totalQuestsCompleted: 0,
      subjects: []
    }
  },
  {
    username: 'Suppu',
    password: '9654',
    yearGroup: 10,
    profile: {
      level: 1,
      xp: 0,
      maxXp: 500,
      coins: 0,
      avatarUrl: '/cute-girl-avatar.png',
      totalQuestsCompleted: 0,
      subjects: []
    }
  },
];

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserProgress = (username: string): User | null => {
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
  return user || null;
};

export const updateUserProgress = (username: string, profile: UserProfile): void => {
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
  if (user) {
    user.profile = profile;
  }
};
