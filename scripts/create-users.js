const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, getDoc } = require('firebase/firestore');
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

async function fetchCurriculumForYear(yearGroup) {
    console.log(`📚 Fetching curriculum for Year ${yearGroup}...`);
    const subjects = [];

    const subjectIds = yearGroup === 10
        ? ['maths-10', 'science-10', 'english-lit-10', 'history-10']
        : ['maths-7'];

    for (const docId of subjectIds) {
        const docRef = doc(db, "subjects", docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            subjects.push(docSnap.data());
            console.log(`   ✅ Loaded ${docSnap.data().name}`);
        }
    }

    return subjects;
}

async function createUsersWithSubjects() {
    console.log('🔥 Creating users in Firestore with subjects...\n');

    const users = [
        { username: 'Brinda', pin: '1234', yearGroup: 10 },
        { username: 'Suppu', pin: '9654', yearGroup: 10 }
    ];

    for (const user of users) {
        console.log(`\n👤 Processing ${user.username}...`);

        // Fetch subjects for this year group
        const subjects = await fetchCurriculumForYear(user.yearGroup);

        const profile = {
            level: 1,
            xp: 0,
            maxXp: 500,
            coins: 0,
            avatarUrl: "/cute-girl-avatar.png",
            totalQuestsCompleted: 0,
            subjects: subjects
        };

        const userData = {
            name: user.username,
            username: user.username,
            pin: user.pin,
            password: user.pin,
            yearGroup: user.yearGroup,
            level: 1,
            xp: 0,
            maxXp: 500,
            coins: 0,
            avatarUrl: "/cute-girl-avatar.png",
            totalQuestsCompleted: 0,
            subjects: subjects,
            profile: profile,
            createdAt: new Date().toISOString()
        };

        await setDoc(doc(db, "users", user.username), userData);
        console.log(`   ✅ Created ${user.username} with ${subjects.length} subjects`);
    }

    console.log('\n✨ All users created successfully!');
}

createUsersWithSubjects();
