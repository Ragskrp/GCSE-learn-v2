
// A temporary script to add users to Firestore.

const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1nXb_LanaCtdTNBQMqNJrF5c2pPgQ9f4",
  authDomain: "gcse-learn-v2.firebaseapp.com",
  projectId: "gcse-learn-v2",
  storageBucket: "gcse-learn-v2.appspot.com",
  messagingSenderId: "149501279628",
  appId: "1:149501279628:web:b2a7950c4b46b7c88eeaa9",
  measurementId: "G-R2BC54VHXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addUsers() {
  console.log("Connecting to Firestore and adding users...");

  try {
    // User 1: Brinda
    const brindaRef = doc(db, "users", "brinda");
    await setDoc(brindaRef, {
      name: "Brinda",
      pin: "1234"
    });
    console.log("Successfully added: Brinda");

    // User 2: Suppu
    const suppuRef = doc(db, "users", "suppu");
    await setDoc(suppuRef, {
      name: "Suppu",
      pin: "9654"
    });
    console.log("Successfully added: Suppu");

    console.log("\nUsers created successfully!");
    console.log("You can now log in with these credentials.");

  } catch (error) {
    console.error("Error adding users to Firestore:", error);
    console.log("\nPlease ensure your Firebase project's Firestore security rules allow writes.");
  } finally {
      // The Firebase client SDK keeps the process alive.
      // We need to explicitly exit the script.
      process.exit(0);
  }
}

addUsers();
