# 🚀 Quick Start - Firebase Setup

## ✅ Prerequisites Complete
- ✅ Simple authentication (Name + 4-digit PIN)
- ✅ Firebase SDK installed
- ✅ Code ready for Firebase

## 🎯 Your Task: Configure Firebase

Follow these 8 simple steps to get Firebase running:

---

### **Step 1: Create Firebase Project** (2 minutes)
1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Name it: `gcse-quest-academy`
4. Disable Google Analytics
5. Click "Create project"

---

### **Step 2: Create Firestore Database** (2 minutes)
1. Click "Firestore Database" in sidebar
2. Click "Create database"
3. Select "Start in test mode"
4. Choose location: `europe-west2 (London)` or nearest
5. Click "Enable"

---

### **Step 3: Register Web App** (2 minutes)
1. Go to Project Overview
2. Click "</>" (Web icon)
3. App nickname: `GCSE Quest Web App`
4. Click "Register app"
5. **COPY the firebaseConfig object shown**

---

### **Step 4: Create `.env.local` File** (3 minutes)

In your project root, create `.env.local` with:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=paste-your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

**Replace with YOUR actual values from Step 3!**

---

### **Step 5: Update Security Rules** (2 minutes)
1. In Firestore Database, click "Rules" tab
2. Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /students/{studentName} {
      allow read, write: if request.auth != null || true;
    }
    match /curriculum/{subject} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

3. Click "Publish"

---

### **Step 6: Install Dependencies** (2 minutes)

```bash
npm install
```

---

### **Step 7: Add Test Student** (2 minutes)
1. In Firestore Database, click "Start collection"
2. Collection ID: `students`
3. Document ID: `Brinda`
4. Add fields:
   - `name` (string): Brinda
   - `pin` (string): 1234
   - `yearGroup` (number): 10
   - `level` (number): 1
   - `xp` (number): 0
   - `maxXp` (number): 500
   - `coins` (number): 0
5. Click "Save"

---

### **Step 8: Test!** (2 minutes)

```bash
npm run dev
```

Go to http://localhost:3000

Login with:
- Name: `Brinda`
- PIN: `1234`

---

## ✅ Success Indicators

You'll know it's working when:
- ✅ Login succeeds
- ✅ No errors in browser console (F12)
- ✅ Firestore shows student data updated
- ✅ Progress saves and persists

---

## 🐛 Troubleshooting

**"Firebase app not initialized"**
→ Restart dev server after creating `.env.local`

**"Permission denied"**
→ Check security rules are published

**Can't login**
→ Verify student exists in Firestore with correct PIN

---

## 📚 Full Documentation

For detailed explanations, see `FIREBASE_SETUP.md`

---

**Total Time: ~15 minutes**

Ready? Go to Step 1! 🚀
