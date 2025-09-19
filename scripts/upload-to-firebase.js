
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Download this from your Firebase project settings

const { users } = require('../data/users');
const { curriculum } = require('../data/curriculum-database');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const uploadData = async () => {
  console.log('Uploading users...');
  for (const user of users) {
    await db.collection('users').doc(user.username).set(user);
  }
  console.log('Users uploaded successfully.');

  console.log('Uploading curriculum...');
  for (const subject of curriculum) {
    await db.collection('curriculum').doc(subject.id).set(subject);
  }
  console.log('Curriculum uploaded successfully.');
};

uploadData();
