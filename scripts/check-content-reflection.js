
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

async function checkContent() {
    console.log('🔍 Checking live curriculum content...');
    try {
        const docRef = doc(db, 'subjects', 'maths-10');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            const lesson = data.topics[0].studyMaterials.find(m => m.id === 'primes-hcf-lcm');
            if (lesson) {
                console.log('✅ Found Primes, HCF & LCM lesson.');
                console.log('--- CONTENT SAMPLE ---');
                console.log(lesson.content.substring(0, 500) + '...');
                console.log('-----------------------');
                if (lesson.content.includes('<svg') && lesson.content.includes('$')) {
                    console.log('🚀 SUCCESS: LaTeX ($) and SVG diagrams confirmed in database!');
                } else {
                    console.log('⚠️ WARNING: Missing LaTeX or SVG in database content.');
                }
            }
        } else {
            console.log('❌ Could not find maths-10 subject.');
        }
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

checkContent();
