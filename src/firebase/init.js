// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-JbHzp0ldy-BulQPlZObq0L-TT-Ogjc",
  authDomain: "fir-practice-3b10c.firebaseapp.com",
  projectId: "fir-practice-3b10c",
  storageBucket: "fir-practice-3b10c.firebasestorage.app",
  messagingSenderId: "1065776344917",
  appId: "1:1065776344917:web:b8ead91680136635c389dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();