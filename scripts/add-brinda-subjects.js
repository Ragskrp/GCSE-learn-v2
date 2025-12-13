// scripts/add-brinda-subjects.js
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, getDoc, setDoc } = require("firebase/firestore");
const { config } = require("dotenv");
const path = require("path");

// Load environment variables from .env.local or .env
config({ path: path.resolve(__dirname, '../.env.local') });
if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    config({ path: path.resolve(__dirname, '../.env') });
}

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function main() {
    const userId = "Brinda"; // document ID in the `users` collection
    const userRef = doc(db, "users", userId);

    console.log(`Checking user: ${userId}...`);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
        console.error(`User ${userId} does not exist in Firestore. Creating basic profile...`);
        // Create a basic profile if it doesn't exist
        await setDoc(userRef, {
            username: "Brinda",
            pin: "1234",
            yearGroup: 10,
            subjects: [],
            profile: { subjects: [] }
        });
        console.log("Created basic user profile for Brinda.");
    } else {
        console.log(`User ${userId} exists.`);
    }

    // Define the default subjects
    const defaultSubjects = [
        { id: "maths", name: "Mathematics", xp: 0 },
        { id: "english", name: "English", xp: 0 },
        { id: "science", name: "Science", xp: 0 },
        { id: "history", name: "History", xp: 0 },
        { id: "geography", name: "Geography", xp: 0 },
        { id: "art", name: "Art & Design", xp: 0 },
    ];

    // Fetch fresh data
    const currentSnap = await getDoc(userRef);
    const currentData = currentSnap.data();

    // Merge with any existing data
    const updated = {
        ...currentData,
        subjects: defaultSubjects,
        profile: {
            ...(currentData.profile || {}),
            subjects: defaultSubjects,
        },
    };

    await setDoc(userRef, updated);
    console.log(`✅ Updated ${userId} with ${defaultSubjects.length} subjects:`, defaultSubjects.map(s => s.name).join(", "));
}

main().catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
});
