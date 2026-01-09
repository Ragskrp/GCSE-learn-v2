const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, doc, getDoc, updateDoc } = require('firebase/firestore');
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

async function updateUserCurriculum() {
    console.log('🔄 Updating Users with Latest Curriculum...');

    // 1. Fetch Latest Subjects
    const subjects = [];
    try {
        const subjectsRef = collection(db, 'subjects');
        const snapshot = await getDocs(subjectsRef);
        if (snapshot.empty) {
            console.error('❌ No subjects found in DB! Cannot update users.');
            process.exit(1);
        }
        snapshot.forEach(doc => {
            // Create a clean subject object, potentially resetting progress or keeping it?
            // For now, let's just use the fresh content.
            // Ideally we would merge progress, but for this cleanup task, a fresh start for content is safer.
            const data = doc.data();
            // Ensure ID is correct
            data.id = doc.id;
            subjects.push(data);
        });
        console.log(`📚 Loaded ${subjects.length} subjects from master DB.`);
    } catch (error) {
        console.error('❌ Error fetching subjects:', error);
        process.exit(1);
    }

    // 2. Filter for Year 10 (since Brinda is Year 10)
    const year10Subjects = subjects.filter(s => s.id.endsWith('-10') || s.id.includes('j277'));

    // 3. Update Users
    const targetUsers = ['Brinda', 'Suppu'];

    for (const username of targetUsers) {
        try {
            const userRef = doc(db, 'users', username);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                console.warn(`⚠️ User ${username} not found, skipping.`);
                continue;
            }

            const userData = userSnap.data();

            // Preserve existing XP/Coins if possible? 
            // The structure is user.profile.subjects[].
            // We are overhauling content, so the lesson IDs might have changed.
            // It is safer to replace the subjects array to ensure the new lessons appear.
            // We can try to keep global XP.

            // Update the profile's subjects
            await updateDoc(userRef, {
                'profile.subjects': year10Subjects
            });

            console.log(`✅ Updated ${username} with ${year10Subjects.length} fresh subjects.`);

        } catch (error) {
            console.error(`❌ Failed to update ${username}:`, error);
        }
    }

    console.log('✨ Update Complete.');
    process.exit(0);
}

updateUserCurriculum();
