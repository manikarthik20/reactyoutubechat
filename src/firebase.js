import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",

  apiKey: "AIzaSyB1_tezzjGMLAxrNC2qcpo_e1p4CyuKTaQ",
  authDomain: "insta-cdbdf.firebaseapp.com",
  projectId: "insta-cdbdf",
  storageBucket: "insta-cdbdf.appspot.com",
  messagingSenderId: "239787354863",
  appId: "1:239787354863:web:1d2c318ed39d44cceb491a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
