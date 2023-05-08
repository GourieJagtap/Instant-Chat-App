// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkVBe_6zpBDgiLkv8alNOUkQewL5S0XA8",
  authDomain: "instantchat-48c97.firebaseapp.com",
  projectId: "instantchat-48c97",
  storageBucket: "instantchat-48c97.appspot.com",
  messagingSenderId: "1019791034686",
  appId: "1:1019791034686:web:4cadafa0b99d97ac52846f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);