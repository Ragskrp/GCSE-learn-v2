# 🔥 Firebase Integration Guide

## Overview

This guide will walk you through connecting your GCSE Quest Academy to Firebase for production-ready cloud sync and authentication.

## 📋 Prerequisites

- Firebase account (free tier is sufficient)
- Node.js 18+ installed
- Access to Firebase Console

## 🚀 Step-by-Step Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"** or select existing project
3. Enter project name: `gcse-quest-academy` (or your preferred name)
4. **(Optional)** Enable Google Analytics
5. Click **"Create project"**

### Step 2: Enable Authentication

1. In Firebase Console, click **"Authentication"** in left sidebar
2. Click **"Get started"**
3. Click **"Sign-in method"** tab
4. Enable **"Email/Password"** provider
5. Click **"Save"**

### Step 3: Create Firestore Database

1. In Firebase Console, click **"Firestore Database"** inleft sidebar
2. Click **"Create database"**
3. Select **"Start in test mode"** (for development)
   - **IMPORTANT**: For production, you'll need to configure security rules
4. Choose Cloud Firestore location (pick nearest to your users)
5. Click **"Enable"**

### Step 4: Get Firebase Config

1. In Firebase Console, click **Project Overview** (gear icon)
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** `</>`
5. Enter app nickname: `GCSE Quest Web`
6. **(Optional)** Check "Also set up Firebase Hosting"
7. Click **"Register app"**
8. Copy the `firebaseConfig` object

### Step 5: Configure Environment Variables

1. In your project root, create `.env.local` file:

```bash
# Copy from env.template
cp env.template .env.local
```

2. Edit `.env.local` and paste your Firebase config:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

### Step 6: Install Dependencies

```bash
npm install

# Or if using pnpm
pnpm install
```

This will install:
- `firebase` (v11.0.2) - Firebase client SDK
- `react-markdown` (v9.0.1) - For lesson content

###Step 7: Set Up Firestore Security Rules

1. In Firebase Console, go to **Firestore Database**
2. Click **"Rules"** tab
3. Replace with these rules:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - read/write only their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.token.email.endsWith('@gcsequest.local');
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Curriculum - read-only for all authenticated users
    match /curriculum/{subjectId} {
      allow read: if request.auth != null;
      allow write: if false; // Only admins can write (via Firebase Console)
    }
  }
}
```

4. Click **"Publish"**

### Step 8: Migrate Existing Data (Optional)

If you have existing users in LocalStorage, migrate them to Firebase:

```bash
# First, ensure you have the service account key (Step 9 below)
# Then run:
node scripts/upload-to-firebase.js
```

### Step 9: Get Service Account Key (For Admin SDK)

**Only needed if you want to run server-side operations or migration scripts.**

1. In Firebase Console, go to **Project Settings**
2. Click **"Service accounts"** tab
3. Click **"Generate new private key"**
4. Download the JSON file
5. Rename it to match the script:
   ```
   nexus-academy-jjz35-firebase-adminsdk-fbsvc-5461f59076.json
   ```
6. Move it to `scripts/` directory
7. **NEVER commit this file to git!** (Already in `.gitignore`)

## ✅ Verification

### Test Firebase Connection

1. Start the development server:

```bash
npm run dev
```

2. Open browser to `http://localhost:3000`

3. Check browser console for:
   ```
   Firebase initialized successfully
   ```
   (You can add a console.log in `lib/firebase.ts` to verify)

### Test Authentication

1. Go to login page
2. Try logging in with existing credentials:
   - Username: `Brinda`
   - Password: `Brinda`

3. **Important**: The login will use LocalStorage if Firebase is not configured. To force Firebase:
   - Create a test user in Firebase Authentication
   - Email: `brinda@gcsequest.local`
   - Password: `Brinda`

### Test Firestore

1. Complete a quiz
2. Check Firebase Console > Firestore Database
3. Verify user progress was saved

## 🔄 How It Works

### Graceful Fallback

The app is designed with **smart fallback**:

```
1. Try Firebase first
2. If Firebase not configured → use LocalStorage
3. If Firebase fails → fallback to LocalStorage
```

This means your app will work even if Firebase is down!

### Data Sync

- **Login**: Checks Firebase, falls back to LocalStorage
- **Progress Save**: Saves to both Firebase AND LocalStorage
- **Progress Load**: Loads from Firebase, caches in LocalStorage

## 📊 Firebase Collections Structure

### `users` Collection

```
users/
  ├── brinda/
  │   ├── username: "Brinda"
  │   ├── yearGroup: 10
  │   └── profile:
  │       ├── level: 15
  │       ├── xp: 2500
  │       ├── coins: 1200
  │       └── subjects: [...]
  └── supratik/
      └── ...
```

### `curriculum` Collection (Optional)

```
curriculum/
  ├── mathematics/
  │   ├── id: "maths"
  │   ├── name: "Mathematics"
  │   └── topics: [...]
  └── science/
      └── ...
```

## 🔐 Security Best Practices

### For Development

1. Use **Test Mode** in Firestore
2. Use fake emails (`@gcsequest.local`)
3. Keep credentials in `.env.local` (never `.env`)

### For Production

1. Update Firestore rules to be more restrictive
2. Enable App Check for DDoS protection
3. Set up proper user roles and permissions
4. Use environment-specific Firebase projects:
   - `gcse-quest-dev` for development
   - `gcse-quest-prod` for production

## 🐛 Troubleshooting

### Issue: "Firebase not configured"

**Solution**: Check `.env.local` has all variables and starts with `NEXT_PUBLIC_`

### Issue: "Permission denied" in Firestore

**Solution**: Update Firestore security rules (see Step 7)

### Issue: Login fails with Firebase

**Solution**: 
1. Check Firebase Authentication is enabled
2. Verify Email/Password provider is enabled
3. Create test user in Firebase Console

### Issue: "App not initialized"

**Solution**: Ensure you restart dev server after adding `.env.local`

```bash
# Stop server (Ctrl+C)
# Restart
npm run dev
```

### Issue: Dependencies not installing

**Solution**: Clear cache and reinstall

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📈 Next Steps

After Firebase is connected:

1. **Add More Authentication Methods**:
   - Google Sign-In
   - GitHub Sign-In
   - Phone authentication

2. **Implement Real-Time Features**:
   - Live leaderboard updates
   - Multiplayer quizzes
   - Study groups

3. **Add Cloud Functions**:
   - Automated email notifications
   - Score calculations
   - Analytics

4. **Set Up Firebase Hosting**:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   npm run build
   firebase deploy
   ```

## 📚 Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Next.js with Firebase](https://firebase.google.com/docs/web/setup)

## 🎉 You're Done!

Your GCSE Quest Academy is now connected to Firebase! 🚀

Users can:
- ✅ Create accounts from any device
- ✅ Sync progress across devices
- ✅ Access data even if logged out (LocalStorage cache)
- ✅ Compete on real-time leaderboards

---

**Need help?** Check the troubleshooting section or create an issue.
