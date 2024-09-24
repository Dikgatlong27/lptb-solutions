// src/firebase.js
import { initializeApp } from "firebase/app"; // Named import for app
import { getAuth } from "firebase/auth"; // Named import for auth
import { getFirestore } from "firebase/firestore"; // Named import for Firestore

const firebaseConfig = {
  apiKey: "AIzaSyC5mOPL2Ezh2Eq46Q-HD1TLebNTRra8lQc",
  authDomain: "lptb-solutions.firebaseapp.com",
  projectId: "lptb-solutions",
  storageBucket: "lptb-solutions.appspot.com",
  messagingSenderId: "243491545982",
  appId: "1:243491545982:web:bf5f191c466f1d3c34492f",
  measurementId: "G-BWFZCE3K41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
