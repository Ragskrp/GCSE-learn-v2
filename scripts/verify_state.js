const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, getDoc } = require('firebase/firestore');
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

async function verifyState() {
    console.log('🔍 Verifying Firestore State...');

    // 1. Check Subjects Collection
    try {
        const subjectsRef = collection(db, 'subjects');
        const snapshot = await getDocs(subjectsRef);
        console.log(`\n📚 Subjects Collection: ${snapshot.size} documents found.`);
        snapshot.forEach(doc => {
            console.log(`   - ${doc.id}: ${doc.data().name} (${doc.data().topics?.length} topics)`);
        });
    } catch (error) {
        console.error('❌ Error reading subjects:', error.message);
    }

    // 2. Check User 'Brinda'
    try {
        const userRef = doc(db, 'users', 'Brinda'); // Username is doc ID in our schema
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const data = userSnap.data();
            console.log(`\n👤 User 'Brinda': Found.`);
            console.log(`   - Subjects Enrolled: ${data.profile?.subjects?.length || 0}`);
        } else {
            console.log(`\n👤 User 'Brinda': NOT Found.`);
        }
    } catch (error) {
        console.error('❌ Error reading user:', error.message);
    }
    process.exit(0);
}

verifyState();
