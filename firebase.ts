// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF7LYd0A-a9y6Y-H3-rQYBOvEXtDnQ-oA",
  authDomain: "netflix-2022.firebaseapp.com",
  projectId: "netflix-2022",
  storageBucket: "netflix-2022.appspot.com",
  messagingSenderId: "825270744496",
  appId: "1:825270744496:web:43eb971d35e2858396d275",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
