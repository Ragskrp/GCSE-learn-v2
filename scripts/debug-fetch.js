
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc } = require('firebase/firestore');
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

async function debugFetch() {
    console.log("Debug Fetching Year 10 subjects...");
    const subjects = [];
    const subjectIds = ['maths-10', 'science-10', 'english-lit-10', 'history-10'];

    for (const docId of subjectIds) {
        console.log(`Fetching ${docId}...`);
        const docRef = doc(db, "subjects", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(`✅ Found ${docId}`);
            subjects.push(docSnap.data());
        } else {
            console.log(`❌ Missing ${docId}`);
        }
    }

    console.log(`Total subjects found: ${subjects.length}`);
    if (subjects.length > 0) {
        console.log("First subject name:", subjects[0].name);
    }
}

debugFetch();
