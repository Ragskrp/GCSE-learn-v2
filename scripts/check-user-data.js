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

async function checkUserData() {
    console.log('🔍 Checking user data in Firestore...\n');

    // Check in 'users' collection
    console.log('📂 Checking users collection...');
    const userDocInUsers = await getDoc(doc(db, "users", "Brinda"));
    if (userDocInUsers.exists()) {
        const data = userDocInUsers.data();
        console.log('✅ Found Brinda in "users" collection');
        console.log(`   Subjects: ${data.subjects ? data.subjects.length : 0}`);
        if (data.subjects && data.subjects.length > 0) {
            data.subjects.forEach(s => console.log(`     - ${s.name}`));
        }
    } else {
        console.log('❌ Brinda NOT found in "users" collection');
    }

    console.log('');

    // Check in 'students' collection (old collection name)
    console.log('📂 Checking students collection...');
    const userDocInStudents = await getDoc(doc(db, "students", "Brinda"));
    if (userDocInStudents.exists()) {
        const data = userDocInStudents.data();
        console.log('✅ Found Brinda in "students" collection');
        console.log(`   Subjects: ${data.subjects ? data.subjects.length : 0}`);
        if (data.subjects && data.subjects.length > 0) {
            data.subjects.forEach(s => console.log(`     - ${s.name}`));
        }
    } else {
        console.log('❌ Brinda NOT found in "students" collection');
    }
}

checkUserData();
