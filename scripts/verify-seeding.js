
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
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

async function verifySeeding() {
    console.log('🕵️‍♀️ Verifying Seeding...');

    try {
        const querySnapshot = await getDocs(collection(db, "subjects"));

        if (querySnapshot.empty) {
            console.log('❌ No subjects found!');
            return;
        }

        console.log(`✅ Found ${querySnapshot.size} subjects:`);

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(`\n📌 ${doc.id}`);
            console.log(`   Name: ${data.name}`);
            console.log(`   Topics: ${data.topics ? data.topics.length : 0}`);
            if (data.topics) {
                data.topics.forEach(t => console.log(`     - ${t.name} (${t.studyMaterials?.length || 0} lessons)`));
            }
        });

    } catch (error) {
        console.error('❌ Version check failed:', error);
    }
}

verifySeeding();
