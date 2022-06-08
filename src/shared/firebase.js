import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVpE5t_DJJ4MzMrSlYljABJ7u7ctUnTdo",
    authDomain: "authex-79d0b.firebaseapp.com",
    projectId: "authex-79d0b",
    storageBucket: "authex-79d0b.appspot.com",
    messagingSenderId: "674460485335",
    appId: "1:674460485335:web:6e05a06a31466643031292"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;