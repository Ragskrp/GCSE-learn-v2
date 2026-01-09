const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc, updateDoc } = require('firebase/firestore');
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

async function sanitizeUsers() {
    const users = ['Brinda', 'Suppu'];
    const subjectsToFetch = ['maths-10', 'science-10', 'english-lit-10', 'history-10', 'computer-science-j277'];

    console.log('🧹 Sanitizing users...');

    // 1. Fetch fresh master subjects with IDs
    const masterSubjects = [];
    for (const id of subjectsToFetch) {
        const snap = await getDoc(doc(db, 'subjects', id));
        if (snap.exists()) {
            masterSubjects.push({ ...snap.data(), id: snap.id });
        }
    }

    for (const username of users) {
        const userRef = doc(db, 'users', username);
        console.log(`Updating ${username}...`);
        await updateDoc(userRef, {
            'profile.subjects': masterSubjects,
            'subjects': masterSubjects // Legacy field support
        });
    }
    console.log('✨ Sanitization complete.');
    process.exit(0);
}

sanitizeUsers();
