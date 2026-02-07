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
        { id: "maths-10", name: "Mathematics", xp: 0, maxXp: 20000, color: "from-blue-600 to-cyan-500", icon: "📐", unlocked: true },
        { id: "science-10", name: "Combined Science (Trilogy)", xp: 0, maxXp: 5000, color: "from-teal-400 to-green-600", icon: "🧪", unlocked: true },
        { id: "english-lit-10", name: "English Literature", xp: 0, maxXp: 600, color: "from-amber-400 to-amber-600", icon: "📚", unlocked: true },
        { id: "history-10", name: "History", xp: 0, maxXp: 5000, color: "from-rose-500 to-red-700", icon: "⚔️", unlocked: true },
        { id: "computer-science-j277", name: "Computer Science (J277)", xp: 0, maxXp: 2000, color: "from-purple-400 to-fuchsia-500", icon: "💻", unlocked: true },
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
