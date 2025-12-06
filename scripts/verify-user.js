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

async function verifyUserData() {
    console.log('🔍 Verifying Brinda\'s data in Firestore...\n');

    const userDoc = await getDoc(doc(db, "users", "Brinda"));

    if (userDoc.exists()) {
        const data = userDoc.data();
        console.log('✅ User found in Firestore');
        console.log(`📊 User Details:`);
        console.log(`   Name: ${data.name}`);
        console.log(`   Year Group: ${data.yearGroup}`);
        console.log(`   Subjects (top-level): ${data.subjects ? data.subjects.length : 0}`);

        if (data.subjects && data.subjects.length > 0) {
            console.log('\n📚 Subjects:');
            data.subjects.forEach((s, idx) => {
                console.log(`   ${idx + 1}. ${s.name} (${s.icon})`);
                console.log(`      - ID: ${s.id}`);
                console.log(`      - Topics: ${s.topics ? s.topics.length : 0}`);
            });
        } else {
            console.log('   ❌ NO SUBJECTS FOUND');
        }

        if (data.profile) {
            console.log(`\n📋 Profile.subjects: ${data.profile.subjects ? data.profile.subjects.length : 0}`);
        }
    } else {
        console.log('❌ User NOT found in Firestore');
    }
}

verifyUserData();
