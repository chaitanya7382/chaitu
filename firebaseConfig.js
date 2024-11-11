// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjI7_I4V_XZpFNQx_Gqt3wRa2KfQThQvs",
  authDomain: "react-login-page-f6d5b.firebaseapp.com",
  projectId: "react-login-page-f6d5b",
  storageBucket: "react-login-page-f6d5b.firebasestorage.app",
  messagingSenderId: "1051473502028",
  appId: "1:1051473502028:web:78701ffd9503014ba3f9e9",
  measurementId: "G-DNK8FSW5WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore and export as `db`
const db = getFirestore(app);

export { auth, googleProvider, db };
