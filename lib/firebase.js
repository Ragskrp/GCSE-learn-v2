
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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

export const login = async (username, pin) => {
  try {
    const userDocRef = doc(db, "users", username);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      if (userData.pin === pin) {
        return { success: true, user: { ...userData, username } };
      } else {
        return { success: false, error: "Invalid PIN." };
      }
    } else {
      return { success: false, error: "Invalid username." };
    }
  } catch (error) {
    console.error("Firebase login error:", error);
    return { success: false, error: "An error occurred during login." };
  }
};
