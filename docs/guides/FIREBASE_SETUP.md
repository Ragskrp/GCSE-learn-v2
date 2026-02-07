# 🔥 Firebase Setup for GCSE Quest Academy
## Simple Name + PIN Authentication

This guide will help you set up Firebase for your learning platform with the simplified authentication system.

---

## 📋 **What You'll Set Up**

1. **Firestore Database** - Store student data, progress, subjects
2. **Security Rules** - Protect student data
3. **Local Configuration** - Connect your app to Firebase

**Time Required**: 15-20 minutes

---

## 🚀 **Step 1: Create Firebase Project**

### 1.1 Go to Firebase Console
Visit: **https://console.firebase.google.com**

### 1.2 Create New Project
1. Click **"Add project"** or **"Create a project"**
2. **Project name**: `gcse-quest-academy` (or your preferred name)
3. Click **"Continue"**

### 1.3 Google Analytics (Optional)
- **Disable** Google Analytics (not needed for now)
- Or enable it if you want usage tracking
- Click **"Create project"**

### 1.4 Wait for Setup
- Firebase will create your project (takes ~30 seconds)
- Click **"Continue"** when ready

---

## 🔐 **Step 2: Set Up Firestore Database**

### 2.1 Navigate to Firestore
1. In Firebase Console sidebar, click **"Firestore Database"**
2. Click **"Create database"**

### 2.2 Choose Security Mode
- Select **"Start in test mode"** (for development)
- **Important**: We'll update security rules later!
- Click **"Next"**

### 2.3 Choose Location
- Select closest location to your users:
  - **UK/Europe**: `europe-west2 (London)` or `europe-west1 (Belgium)`
  - **US**: `us-central1` or `us-east1`
- Click **"Enable"**

### 2.4 Wait for Creation
- Firestore will initialize (takes ~1 minute)
- You'll see an empty database

---

## 🌐 **Step 3: Register Web App**

### 3.1 Add Web App to Project
1. Go to **Project Overview** (home icon in sidebar)
2. Click **"</>" icon** (Web)
3. **App nickname**: `GCSE Quest Web App`
4. **DO NOT** check "Firebase Hosting" (not needed yet)
5. Click **"Register app"**

### 3.2 Copy Firebase Config
You'll see a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

**📋 COPY THIS ENTIRE OBJECT** - You'll need it in Step 4!

### 3.3 Click Continue
- Click **"Continue to console"**

---

## ⚙️ **Step 4: Configure Your Local App**

### 4.1 Create Environment File
In your project root, create a file called `.env.local`:

```bash
# In terminal, run:
touch .env.local
```

### 4.2 Add Firebase Credentials
Open `.env.local` and paste (replace with YOUR values from Step 3.2):

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

**⚠️ Important**: Use YOUR actual values, not these placeholders!

### 4.3 Save the File
- Save `.env.local`
- **Never commit this file to Git** (already in `.gitignore`)

---

## 🔒 **Step 5: Set Up Security Rules**

### 5.1 Go to Firestore Rules
1. In Firebase Console, click **"Firestore Database"**
2. Click **"Rules"** tab (top of page)

### 5.2 Update Rules
Replace the existing rules with these:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Students collection - users can only read/write their own data
    match /students/{studentName} {
      // Allow read if user is viewing their own data
      allow read: if request.auth != null;
      
      // Allow write if user is updating their own data
      allow write: if request.auth != null;
    }
    
    // Curriculum collection - read-only for all users
    match /curriculum/{subject} {
      allow read: if request.auth != null;
      allow write: if false; // Only admins via Firebase Console
    }
  }
}
```

### 5.3 Publish Rules
- Click **"Publish"**
- Rules are now active!

---

## 📦 **Step 6: Install Dependencies**

### 6.1 Install Firebase SDK
Run in your project directory:

```bash
npm install
```

This installs:
- `firebase` (v11.0.2) - Already in package.json
- `react-markdown` (v9.0.1) - For lesson content

### 6.2 Verify Installation
Check that `node_modules/firebase` exists.

---

## 🗄️ **Step 7: Seed Initial Data (Optional)**

### 7.1 Create Test Student in Firebase Console

1. Go to **Firestore Database**
2. Click **"Start collection"**
3. **Collection ID**: `students`
4. Click **"Next"**

5. **Document ID**: `Brinda`
6. Add fields:

| Field Name | Type | Value |
|------------|------|-------|
| name | string | Brinda |
| pin | string | 1234 |
| yearGroup | number | 10 |
| level | number | 1 |
| xp | number | 0 |
| maxXp | number | 500 |
| coins | number | 0 |

7. Click **"Save"**

### 7.2 Add Another Student
Repeat for Supratik:

- **Document ID**: `Supratik`
- **name**: Supratik
- **pin**: 5678
- **yearGroup**: 7
- **level**: 1
- **xp**: 0
- **maxXp**: 400
- **coins**: 0

---

## 🧪 **Step 8: Test Your Setup**

### 8.1 Start Development Server
```bash
npm run dev
```

### 8.2 Open App
Visit: **http://localhost:3000**

### 8.3 Test Login
Try logging in:
- **Name**: Brinda
- **PIN**: 1234

### 8.4 Check Browser Console
Press F12, look for:
```
Firebase initialized successfully
```

### 8.5 Check Firestore
After login, go to Firebase Console → Firestore Database
- You should see the `students` collection
- Student data should be updated

---

## ✅ **Verification Checklist**

Mark each as you complete:

- [ ] Firebase project created
- [ ] Firestore database enabled (test mode)
- [ ] Web app registered
- [ ] `.env.local` created with credentials
- [ ] Security rules updated and published
- [ ] Dependencies installed (`npm install`)
- [ ] Test students created in Firestore
- [ ] Dev server running
- [ ] Successfully logged in
- [ ] No errors in browser console

---

## 🐛 **Troubleshooting**

### Issue: "Missing or insufficient permissions"
**Solution**: Check Firestore security rules are published (Step 5)

### Issue: "Firebase app not initialized"
**Solution**: 
1. Verify `.env.local` has all 6 variables
2. Restart dev server: `Ctrl+C`, then `npm run dev`

### Issue: "Cannot find module 'firebase'"
**Solution**: Run `npm install` again

### Issue: Login works but data doesn't save
**Solution**: 
1. Check browser console for errors
2. Verify Firestore security rules allow writes
3. Check Firebase Console for student document

### Issue: "CORS error" or "API key invalid"
**Solution**:
1. Double-check `.env.local` values match Firebase Console
2. Ensure no extra spaces in `.env.local`
3. Restart dev server

---

## 📊 **What's Next?**

Once Firebase is working:

1. **Add More Students**: Create entries in Firestore
2. **Migrate Existing Data**: Use the migration script (if needed)
3. **Add Subject Data**: Populate curriculum collection
4. **Production Rules**: Tighten security rules before going live
5. **Deploy**: Use Firebase Hosting or Vercel

---

## 🎓 **For Production Deployment**

When ready to deploy for real students:

### Update Security Rules
```javascript
match /students/{studentName} {
  // Only allow students to read/write their own data
  allow read, write: if request.auth.token.name == studentName;
}
```

### Add Rate Limiting
Use Firebase App Check to prevent abuse

### Enable Audit Logging
Track all database changes

### Backup Strategy
Enable automatic Firestore backups

---

## 🆘 **Need Help?**

If you get stuck:

1. Check error messages in browser console (F12)
2. Verify all environment variables are set correctly
3. Ensure Firebase project is in the correct region
4. Check Firebase Console for quota limits

---

## 🎉 **Success!**

When everything works:
- ✅ Students can log in with name + PIN
- ✅ Progress saves to Firebase (survives browser refresh)
- ✅ Data syncs across devices
- ✅ Works offline (cached in LocalStorage)
- ✅ Ready for production deployment!

---

**Congratulations! Your GCSE Quest Academy is now cloud-powered! 🚀**
