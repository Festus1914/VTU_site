// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBjlb2hFh8TtT2Vd961mNdiJ7Srbr7IQoU",
    authDomain: "vtu-webiste.firebaseapp.com",
    projectId: "vtu-webiste",
    storageBucket: "vtu-webiste.appspot.com",
    messagingSenderId: "978932881657",
    appId: "1:978932881657:web:51fdb227a779928e392a28",
    measurementId: "G-J6799S84H6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);