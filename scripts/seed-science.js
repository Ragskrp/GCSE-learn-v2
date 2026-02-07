
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

// Add check for API key before initializing
if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    require('dotenv').config({ path: '.env' });
}

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('❌ Error: Firebase configuration missing!');
    process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const { year10CombinedScience } = require('../data/science-data.js');

async function seedScience() {
    console.log('🔥 Starting Science Seeding...');
    try {
        console.log('📝 Seeding Year 10 Combined Science...');
        await setDoc(doc(db, 'subjects', 'science-10'), year10CombinedScience);
        console.log('✅ Combined Science (Year 10) seeded successfully with MULTI-SLIDE lessons!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}
seedScience();
