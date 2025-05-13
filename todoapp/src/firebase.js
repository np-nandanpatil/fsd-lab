// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";

// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAbkpC5hHOMm4i0uCEMgswwFFsoQMZjKGs",
  authDomain: "todoapp1-7ed9c.firebaseapp.com",
  projectId: "todoapp1-7ed9c",
  storageBucket: "todoapp1-7ed9c.firebasestorage.app",
  messagingSenderId: "772161775299",
  appId: "1:772161775299:web:0ae7a322fb97b222112476",
  measurementId: "G-SYB8YGTXL4"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot };



// src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAbkpC5hHOMm4i0uCEMgswwFFsoQMZjKGs",
//   authDomain: "todoapp1-7ed9c.firebaseapp.com",
//   projectId: "todoapp1-7ed9c",
//   storageBucket: "todoapp1-7ed9c.firebasestorage.app",
//   messagingSenderId: "772161775299",
//   appId: "1:772161775299:web:0ae7a322fb97b222112476",
//   measurementId: "G-SYB8YGTXL4"
// };

// const db = getFirestore(initializeApp(firebaseConfig));
// export default db;