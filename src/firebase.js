// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA7xj9NpG_Fu_DzxmrNgr9L4y1wmXtaPc",
  authDomain: "sparta-prac-48d37.firebaseapp.com",
  projectId: "sparta-prac-48d37",
  storageBucket: "sparta-prac-48d37.appspot.com",
  messagingSenderId: "683053974563",
  appId: "1:683053974563:web:43753696704f3a08881d96"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);