# GCSE Quest Academy - Technical Documentation

## 📋 Project Overview

**GCSE Quest Academy** is a professional, gamified learning platform built with Next.js 14, designed specifically for GCSE students (Years 7-10). The platform offers an engaging educational experience with a focus on Mathematics, Science, English, Computer Science, and French.

## 🏗️ Architecture Overview

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI (Radix Primitives)
- **State Management**: React Hooks (Client-side)
- **Data Persistence**: LocalStorage (with planned Firebase migration)
- **Package Manager**: npm / pnpm

### Project Structure

```
GCSE-learn-v2/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx           # Login page
│   ├── (dashboard)/
│   │   ├── layout.tsx             # Dashboard layout with sidebar
│   │   ├── dashboard/
│   │   │   └── page.tsx           # Main dashboard
│   │   ├── subjects/
│   │   │   ├── page.tsx           # All subjects listing
│   │   │   └── [subjectId]/
│   │   │       └── page.tsx       # Subject details
│   │   ├── learn/
│   │   │   └── [lessonId]/
│   │   │       └── page.tsx       # Lesson viewer
│   │   └── quiz/
│   │       └── [quizId]/
│   │           └── page.tsx       # Quiz interface
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Root redirect
│   └── globals.css                # Global styles
├── components/
│   ├── ui/                        # Shadcn UI components
│   └── [legacy-components].tsx    # Original gamified components
├── services/
│   ├── auth-service.ts            # Authentication logic
│   └── content-service.ts         # Content retrieval
├── data/
│   ├── curriculum-database.ts     # GCSE curriculum content
│   └── users.ts                   # User data & initial seed
├── utils/
│   └── progress-storage.ts        # LocalStorage utilities
├── types/
│   └── user.ts                    # TypeScript interfaces
└── lib/
    └── utils.ts                   # Utility functions
```

## 🎯 Key Features

### 1. **Modular Architecture**
- **Service Layer**: Separated business logic from UI components
  - `AuthService`: Handles authentication, login, logout, session management
  - `ContentService`: Manages content retrieval (subjects, topics, lessons, quizzes)
  
### 2. **Route-Based Navigation**
- Uses Next.js App Router with route groups
- Protected routes (dashboard) require authentication
- Clean URLs: `/dashboard`, `/subjects/maths`, `/learn/lesson-id`, `/quiz/quiz-id`

### 3. **Data Separation**
- **Content**: Stored in `curriculum-database.ts` (immutable)
- **User Progress**: Managed via `progress-storage.ts` (mutable)
- **Benefits**: Easy content updates without affecting user data

### 4. **Component Isolation**
- Dashboard layout is reusable across all protected routes
- Each page is self-contained and follows Single Responsibility Principle
- Legacy components preserved for backward compatibility

## 📦 Core Modules

### Authentication Service (`services/auth-service.ts`)

```typescript
class AuthService {
  static login(username: string): User | null
  static logout(): void
  static getCurrentUser(): User | null
  static getAllUsers(): User[]
  static updateUser(user: User): void
}
```

### Content Service (`services/content-service.ts`)

```typescript
class ContentService {
  static getSubjectsForYear(yearGroup: number): Subject[]
  static getSubject(subjectId: string, yearGroup: number): Subject | undefined
  static getTopic(subjectId: string, topicId: string, yearGroup: number): Topic | undefined
  static getLesson(lessonId: string): StudyMaterial | undefined
  static getQuiz(quizId: string): Quiz | undefined
}
```

### Progress Storage (`utils/progress-storage.ts`)

```typescript
class ProgressStorage {
  static saveProgress(users: User[]): void
  static loadProgress(): User[] | null
  static updateUserProgress(username: string, updatedProfile: Profile): void
  static completeQuiz(username, subjectId, topicId, quizId, score, xp, coins): void
  static completeTest(username, subjectId, topicId, testId, score, xp, coins): void
  static getLeaderboard(): User[]
  static exportProgress(): string
  static importProgress(data: string): boolean
}
```

## 🔥 Firebase Integration Status

### Current State
- **NOT CURRENTLY CONNECTED** to Firebase
- A script exists: `scripts/upload-to-firebase.js` but requires configuration
- Firebase Admin SDK is installed as a dev dependency

### Migration Steps (Pending)

1. **Setup Firebase Project**
   ```bash
   # Create project at https://console.firebase.google.com
   # Download service account key
   # Place in scripts/nexus-academy-jjz35-firebase-adminsdk-fbsvc-5461f59076.json
   ```

2. **Update Environment Variables**
   ```bash
   # Create .env.local
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   ```

3. **Replace LocalStorage with Firestore**
   - Update `ProgressStorage` to use Firestore SDK
   - Implement real-time listeners for progress updates
   - Add server-side authentication with Firebase Auth

## 🚀 Development Workflow

### Prerequisites
```bash
node >= 18
npm or pnpm
```

### Installation
```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development Server
```bash
npm run dev
# or
pnpm dev
```

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📚 Content Management

### Adding New Subjects

1. **Define Subject Data** in `data/curriculum-database.ts`:
```typescript
export const year10Geography: Subject = {
  id: "geography",
  name: "Geography",
  // ... other properties
  topics: [
    {
      id: "topic-id",
      name: "Topic Name",
      studyMaterials: [...],
      quizzes: [...],
      tests: [...]
    }
  ]
}
```

2. **Register in Database**:
```typescript
export const curriculumDatabase: Record<number, Subject[]> = {
  10: [year10Mathematics, year10CombinedScience, year10Geography],
}
```

3. **No UI changes needed** - routing is dynamic!

### Adding Lessons

Lessons support:
- **Markdown content** for rich formatting
- **Learning objectives** for clear goals
- **Difficulty levels**: foundation, higher
- **Estimated time** for planning

### Adding Quizzes

Quizzes include:
- **Multiple question types**: multiple-choice, true-false, short-answer, calculation
- **Timer functionality**
- **Explanations** for each answer
- **Marks/Points** for grading
- **XP and Coin rewards**

## 🎨 UI/UX Design Principles

### Current Aesthetic
- **Gamified**: Vibrant colors, animations, rewards
- **Youthful**: Suitable for 11-16 year olds
- **Engaging**: Progress bars, badges, party mode

### Planned Professional Upgrade
1. **Glassmorphism**: Modern, sleek card designs
2. **Premium Typography**: Inter/Outfit fonts
3. **Subtle Animations**: Framer Motion micro-interactions
4. **Dark Mode**: System preference detection
5. **Accessibility**: WCAG 2.1 AA compliance

## 🔐 Security Considerations

### Current Limitations
⚠️ **WARNING**: Current implementation is NOT production-ready:
- Passwords stored in plain text
- No server-side validation
- No encryption
- Client-side only authentication

### Production Requirements
- [ ] Implement Firebase Authentication
- [ ] Server-side session management
- [ ] Password hashing (bcrypt)
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Input sanitization

## 🧪 Testing Strategy (To Implement)

### Unit Tests
- Service layer functions
- Utility functions
- Component logic

### Integration Tests
- Authentication flow
- Quiz completion flow
- Progress saving

### E2E Tests
- User journey: Login → Study → Quiz → Results
- Cross-browser compatibility
- Mobile responsiveness

## 📊 Data Models

### User Interface
```typescript
interface User {
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
    subjects: Subject[]
  }
}
```

### Subject Interface
```typescript
interface Subject {
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
```

## 🛠️ Troubleshooting

### Common Issues

**Issue**: App redirects to login constantly
- **Solution**: Check browser cookies/localStorage aren't blocked

**Issue**: Lesson content not displaying
- **Solution**: Ensure `lessonId` matches exactly in `curriculum-database.ts`

**Issue**: Quiz not saving progress
- **Solution**: Check browser console for localStorage errors

## 📈 Future Enhancements

### Short-term
- [ ] Add react-markdown for lesson content rendering
- [ ] Implement leaderboard page
- [ ] Add profile customization page
- [ ] Create study planner integration

### Medium-term
- [ ] Firebase integration
- [ ] Real-time multiplayer quizzes
- [ ] AI-powered study recommendations
- [ ] Video lesson support
- [ ] Offline mode with service workers

### Long-term
- [ ] Mobile app (React Native)
- [ ] Teacher dashboard for progress monitoring
- [ ] Custom quiz creation by teachers
- [ ] Peer-to-peer study groups
- [ ] Integration with exam boards (AQA, Edexcel, OCR)

## 🤝 Contributing

This is a private educational project. For feature requests or bug reports, contact the development team.

## 📄 License

Proprietary - All rights reserved.

---

**Last Updated**: November 2025  
**Version**: 2.0.0  
**Maintained by**: Development Team
