// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbkpC5hHOMm4i0uCEMgswwFFsoQMZjKGs",
  authDomain: "todoapp1-7ed9c.firebaseapp.com",
  projectId: "todoapp1-7ed9c",
  storageBucket: "todoapp1-7ed9c.firebasestorage.app",
  messagingSenderId: "772161775299",
  appId: "1:772161775299:web:0ae7a322fb97b222112476",
  measurementId: "G-SYB8YGTXL4"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
