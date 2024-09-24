// src/firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5mOPL2Ezh2Eq46Q-HD1TLebNTRra8lQc",
  authDomain: "lptb-solutions.firebaseapp.com",
  projectId: "lptb-solutions",
  storageBucket: "lptb-solutions.appspot.com",
  messagingSenderId: "243491545982",
  appId: "1:243491545982:web:bf5f191c466f1d3c34492f",
  measurementId: "G-BWFZCE3K41"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
