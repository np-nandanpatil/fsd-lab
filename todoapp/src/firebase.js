// // src/firebase.js
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




import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD695PhPhLydW4fMwy0AXnJPULgsDBEXFw",
  authDomain: "todo-app1-c7b49.firebaseapp.com",
  projectId: "todo-app1-c7b49",
  storageBucket: "todo-app1-c7b49.firebasestorage.app",
  messagingSenderId: "977029686447",
  appId: "1:977029686447:web:fe446338afb464dfe8a05a",
  measurementId: "G-Y3HT1K7VKF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export default db;
