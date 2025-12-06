# 🎓 GCSE Quest Academy

A professional, gamified learning platform for GCSE students (Years 7-10) built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎯 **Subject-Based Learning**: Mathematics, Science, English, Computer Science, French
- 📚 **Interactive Lessons**: Markdown-formatted content with learning objectives
- 🎮 **Gamified Quizzes**: Timed assessments with instant feedback
- 📊 **Progress Tracking**: XP, levels, coins, and achievement system
- 🏆 **Leaderboard**: Compete with peers
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Built with Shadcn UI components

## 🏗️ Architecture

This project follows a **modular, service-oriented architecture**:

```
app/
├── (auth)/login           # Authentication
├── (dashboard)/           # Protected routes
│   ├── dashboard          # Overview
│   ├── subjects           # Subject browsing
│   ├── learn/[lessonId]   # Lesson viewer
│   └── quiz/[quizId]      # Quiz interface
services/
├── auth-service.ts        # Authentication logic
└── content-service.ts     # Content retrieval
data/
├── curriculum-database.ts # GCSE curriculum
└── users.ts               # User data
```

**Key Benefits**:
- ✅ Separation of concerns
- ✅ Easy to maintain and extend
- ✅ Database-agnostic (ready for Firebase)
- ✅ Type-safe with TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Default Login Credentials

- **Year 10 Student**: Username: `Brinda`, Password: `Brinda`
- **Year 7 Student**: Username: `Supratik`, Password: `Supratik`

## 📖 Documentation

- **[Technical Documentation](./TECHNICAL_DOCUMENTATION.md)**: Architecture, services, data models
- **[Refactoring Summary](./REFACTORING_SUMMARY.md)**: Recent changes and migration guide

## 🔥 Firebase Integration

**Current Status**: ❌ Not connected (using LocalStorage)

The app is ready for Firebase migration:
- Firebase Admin SDK installed
- Migration script available (`scripts/upload-to-firebase.js`)
- Service layer designed for easy database swap

To enable Firebase, see [Technical Documentation](./TECHNICAL_DOCUMENTATION.md#firebase-integration-status).

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI (Radix Primitives)
- **Icons**: Lucide React
- **Data**: LocalStorage (Firebase-ready)

## 📚 Adding Content

### Add a New Subject

1. Edit `data/curriculum-database.ts`
2. Define your subject with topics, lessons, and quizzes
3. Register in `curriculumDatabase`
4. That's it! Routing is automatic.

### Add a New Lesson

```typescript
{
  id: "lesson-id",
  title: "Lesson Title",
  content: `# Markdown content here`,
  type: "lesson",
  difficulty: "foundation" | "higher",
  estimatedTime: 45,
  learningObjectives: ["Objective 1", "Objective 2"]
}
```

## 🧪 Testing

```bash
# Lint
npm run lint

# Build
npm run build

# Start production server
npm start
```

## 🛠️ Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## 📦 Project Structure

```
├── app/              # Next.js pages and layouts
├── components/       # React components
│   └── ui/          # Shadcn UI components
├── services/        # Business logic layer
├── data/            # Static data and database
├── utils/           # Utility functions
├── types/           # TypeScript types
├── lib/             # Shared libraries
├── public/          # Static assets
└── styles/          # Global styles
```

## 🎯 Roadmap

- [ ] Firebase integration (Firestore + Auth)
- [ ] Study planner with calendar
- [ ] AI-powered study recommendations
- [ ] Dark mode support
- [ ] Teacher dashboard
- [ ] Mobile app (React Native)

## 🤝 Contributing

This is a private educational project. For feature requests or questions, contact the development team.

## 📄 License

Proprietary - All rights reserved.

---

**Built with ❤️ for GCSE students**
