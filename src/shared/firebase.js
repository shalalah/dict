import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
// fb 연결
import { getFirestore } from "firebase/firestore";
// 이미지 업로드 storage연결
import { getStorage } from 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVpE5t_DJJ4MzMrSlYljABJ7u7ctUnTdo",
    authDomain: "authex-79d0b.firebaseapp.com",
    projectId: "authex-79d0b",
    storageBucket: "authex-79d0b.appspot.com",
    messagingSenderId: "674460485335",
    appId: "1:674460485335:web:6e05a06a31466643031292"
};
// fb 기초설정(초기화)
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
// 이미지 storage
export const storage = getStorage(app);
export default app;
