// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvamPFNUDn38sHpLva5CpjjbKFnYxIe1o",
  authDomain: "chat-f41ea.firebaseapp.com",
  projectId: "chat-f41ea",
  storageBucket: "chat-f41ea.appspot.com",
  messagingSenderId: "1029131358752",
  appId: "1:1029131358752:web:da6439036d356396f4e245"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);