# 🚀 GCSE Quest Academy - Feature Pipeline & Implementation Plan

This document outlines the systematic roadmap for completing the GCSE Quest Academy platform.

## 📦 Phase 1: Core Infrastructure & Firebase Integration (Essential)
**Goal:** Persist data and enable real user accounts.

1.  **Firebase & Environment Setup**
    *   [ ] Create `lib/firebase.ts` and initialize Firebase app.
    *   [ ] Update `ContentService` to fetch from Firestore (with generic type safety).
    *   [ ] Update `AuthService` to use Firebase Auth.
    *   [ ] Refactor `scripts/seed-maths.js` to ensure it works with the new service structure.
    *   [ ] **Action:** Create `scripts/seed-history.js` using the existing `data/history-data.ts`.

2.  **User Persistence Layer**
    *   [ ] Create Firestore schema for User Profile: `{ uid, xp, coins, level, completedLessons: [], completedQuizzes: [] }`.
    *   [ ] Update `LessonPage` to save progress to Firestore on completion.
    *   [ ] Update `StudyMaterialViewer` to reflect "Completed" state from Firestore.

## 🎯 Phase 2: Mock Test Module (User Request)
**Goal:** Enable timed, randomized 20-question assessments.

1.  **Backend Logic**
    *   [ ] Create `MockTestService`:
        *   `generateMockTest(subjectId)`: Randomly select 20 questions from all topics in that subject.
    *   [ ] Define `MockTest` data interface.

2.  **Frontend UI**
    *   [ ] Create route `app/(dashboard)/mock-test/[subjectId]/page.tsx`.
    *   [ ] Build `MockTestInterface` component:
        *   Timer (countdown).
        *   Progress bar (Question X of 20).
        *   "Submit" functionality.
    *   [ ] Build `MockTestResult` component:
        *   Score breakdown.
        *   XP/Coin animation.
        *   "Review Answers" section.

## 🎨 Phase 3: Visual Polish & "Wow" Factor
**Goal:** Elevate the design to a premium, modern standard.

1.  **Theming & Aesthetics**
    *   [ ] Implement `ThemeProvider` for Light/Dark mode toggling.
    *   [ ] Refine Color Palette: Use tailored HSL values for "Science Blue", "Maths Red", etc.
    *   [ ] Add "Glassmorphism" backdrops to cards and sidebars.

2.  **Animations (Framer Motion)**
    *   [ ] Add entry animations for page loads.
    *   [ ] Add hover effects for Subject Cards (scale up, glow).
    *   [ ] Micro-interactions for buttons (click press effect).
    *   [ ] Number counting animation for XP/Coins on dashboard.

## 🏆 Phase 4: Gamification & Social
**Goal:** Increase engagement through competition.

1.  **Leaderboard**
    *   [ ] Create `LeaderboardService` to query top users by XP.
    *   [ ] Build `LeaderboardWidget` for the Dashboard.

2.  **Achievements**
    *   [ ] Define Achievement types (e.g., "Maths Master", "7 Day Streak").
    *   [ ] Create simple checks on lesson completion to award badges.

## 🛠 Phase 5: Optimization & Launch Prep
**Goal:** Production readiness.

1.  **Performance**
    *   [ ] Implement proper loading skeletons for all data-fetching pages.
    *   [ ] Add `next/image` optimization for any assets.

2.  **Final Review**
    *   [ ] Comprehensive manual testing of all flows.
    *   [ ] Code cleanup (remove `console.log`, unused imports).

---

**Next Steps:**
Please review this pipeline. Once approved, I will begin with **Phase 1: Core Infrastructure & Firebase Integration**.
