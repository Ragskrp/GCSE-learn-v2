# 🗺️ GCSE Quest Academy - Available Routes

## ✅ Working Routes

### **Public Routes**
- `/` - Redirects to `/login`
- `/login` - Student login page (Name + 4-digit PIN)

### **Protected Routes** (Requires Login)
- `/dashboard` - Main dashboard with stats and progress
- `/subjects` - List of all available subjects
- `/subjects/[subjectId]` - Subject details and topics
  - Example: `/subjects/maths`
  - Example: `/subjects/science`
- `/learn/[lessonId]` - Lesson viewer with Markdown content
  - Example: `/learn/number-1`
- `/quiz/[quizId]` - Interactive quiz interface
  - Example: `/quiz/number-quiz-1`

---

## 🔐 Test Login Credentials

### Student 1: Brinda (Year 10 GCSE)
- **Name**: `Brinda`
- **PIN**: `1234`
- **Subjects**: 6 GCSE subjects (Maths, Science, English, etc.)

### Student 2: Supratik (Year 7)
- **Name**: `Supratik`
- **PIN**: `5678`
- **Subjects**: 1 subject (Year 7 Maths)

---

## 🚀 How to Test

1. **Start the server** (if not running):
   ```bash
   npm run dev
   ```

2. **Open browser**: http://localhost:3000

3. **Login flow**:
   - You'll be redirected to `/login`
   - Enter name: `Brinda`
   - Enter PIN: `1234`
   - Click "Start Your Adventure"
   - You'll be redirected to `/dashboard`

4. **Navigate**:
   - From dashboard, click "View All Subjects"
   - Click on a subject (e.g., Mathematics)
   - Click on a topic to see lessons and quizzes
   - Click "Start Learning" to view a lesson
   - Click "Take Quiz" to start a quiz

---

## 🐛 Common 404 Errors & Fixes

### Issue: "404 - This page could not be found"

**Possible Causes:**

1. **Trying to access protected route without login**
   - **Fix**: Login first at `/login`

2. **Invalid subject/lesson/quiz ID**
   - **Fix**: Use valid IDs from the data
   - Valid subject IDs: `maths`, `science`, `english`, `history`, `geography`, `french`

3. **Server not running**
   - **Fix**: Run `npm run dev`

4. **Browser cache**
   - **Fix**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📊 Route Structure

```
/
├── login (public)
└── dashboard (protected)
    ├── subjects
    │   └── [subjectId]
    ├── learn
    │   └── [lessonId]
    └── quiz
        └── [quizId]
```

---

## ✅ Verification Checklist

- [ ] Server is running (`npm run dev`)
- [ ] Can access http://localhost:3000 (redirects to `/login`)
- [ ] Can login with Brinda/1234
- [ ] Dashboard loads successfully
- [ ] Can view subjects list
- [ ] Can click into a subject
- [ ] Can view a lesson
- [ ] Can take a quiz

---

## 🔍 Debugging Tips

### Check Server Logs
Look for compilation errors in the terminal where `npm run dev` is running.

### Check Browser Console
Press F12 and look for JavaScript errors in the Console tab.

### Check Network Tab
Press F12 → Network tab to see which requests are failing.

### Clear Cache
Sometimes Next.js cache causes issues:
```bash
rm -rf .next
npm run dev
```

---

**Current Status**: All routes are properly configured! ✅

If you're still seeing 404 errors, please share:
1. The exact URL that's showing 404
2. Any error messages in the browser console
3. Any error messages in the terminal
