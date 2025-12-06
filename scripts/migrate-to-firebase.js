/**
 * Migration Script: Push Student Profiles to Firebase
 * 
 * This script migrates student data from local storage to Firebase Firestore
 * Run with: node scripts/migrate-to-firebase.js
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, collection } = require('firebase/firestore');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Firebase configuration from environment variables
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Verify configuration
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('❌ Error: Firebase configuration missing!');
    console.error('Make sure .env.local exists with all Firebase credentials.');
    process.exit(1);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Student profiles to migrate
const students = [
    {
        name: 'Brinda',
        pin: '1234',
        yearGroup: 10,
        level: 1,
        xp: 0,
        maxXp: 500,
        coins: 0,
        avatarUrl: '/cute-girl-avatar.png',
        totalQuestsCompleted: 0,
        subjects: [], // Will be populated by AuthService from curriculum database
        createdAt: new Date().toISOString()
    },
    {
        name: 'Supratik',
        pin: '5678',
        yearGroup: 7,
        level: 1,
        xp: 0,
        maxXp: 400,
        coins: 0,
        avatarUrl: '/cute-girl-avatar.png',
        totalQuestsCompleted: 0,
        subjects: [], // Will be populated by AuthService from curriculum database
        createdAt: new Date().toISOString()
    }
];

async function migrateStudents() {
    console.log('🔥 Starting Firebase Migration...\n');
    console.log(`📊 Migrating ${students.length} students to Firestore\n`);

    try {
        for (const student of students) {
            console.log(`📝 Migrating: ${student.name}`);
            console.log(`   PIN: ${student.pin}`);
            console.log(`   Year Group: ${student.yearGroup}`);

            // Create document reference using student name as ID
            const studentRef = doc(db, 'students', student.name);

            // Write to Firestore
            await setDoc(studentRef, student);

            console.log(`✅ ${student.name} migrated successfully!\n`);
        }

        console.log('🎉 Migration Complete!');
        console.log('\n📋 Summary:');
        console.log(`   Total students migrated: ${students.length}`);
        console.log('\n🔐 Login Credentials:');
        students.forEach(s => {
            console.log(`   Name: ${s.name}, PIN: ${s.pin}`);
        });
        console.log('\n✅ You can now login at http://localhost:3000');

        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        console.error('\nTroubleshooting:');
        console.error('1. Check that .env.local has correct Firebase credentials');
        console.error('2. Verify Firestore security rules allow writes');
        console.error('3. Check your internet connection');
        process.exit(1);
    }
}

// Run migration
console.log('🚀 GCSE Quest Academy - Firebase Migration Tool\n');
console.log('Project:', firebaseConfig.projectId);
console.log('Auth Domain:', firebaseConfig.authDomain);
console.log('\n');

migrateStudents();
