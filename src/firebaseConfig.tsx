// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgmGJ45X4zHh4e4e0tXKt5igwmtsFku1E",
  authDomain: "iitbbs-erp-6ac1d.firebaseapp.com",
  projectId: "iitbbs-erp-6ac1d",
  storageBucket: "iitbbs-erp-6ac1d.appspot.com",
  messagingSenderId: "730385308725",
  appId: "1:730385308725:web:8240b53bca711d1778a57c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const studentsCollection = collection(db, "students");
export const facultyCollection = collection(db, "faculty");
export const subjectsCollection = collection(db, "subjects");
