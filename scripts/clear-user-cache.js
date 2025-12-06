const { initializeApp } = require('firebase/app');
const { getFirestore, doc, updateDoc } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clearUserSubjects() {
    console.log('🗑️ Clearing user subjects to force re-fetch...\n');

    const users = ['Brinda', 'Suppu'];

    for (const username of users) {
        console.log(`Processing ${username}...`);
        const userRef = doc(db, "users", username);

        // Set subjects to empty array so login will re-fetch
        await updateDoc(userRef, {
            subjects: [],
            'profile.subjects': []
        });

        console.log(`✅ Cleared subjects for ${username}`);
    }

    console.log('\n✨ Done! Now when you log in, it will fetch fresh subjects from Firestore.');
}

clearUserSubjects();
