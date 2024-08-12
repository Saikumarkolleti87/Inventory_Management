// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfeTTMYLt3yjd6cxSvkeJn1gc-nBI0NLM",
  authDomain: "inventory-management-dca37.firebaseapp.com",
  projectId: "inventory-management-dca37",
  storageBucket: "inventory-management-dca37.appspot.com",
  messagingSenderId: "914796813233",
  appId: "1:914796813233:web:d00eea4c25659414913b90",
  measurementId: "G-7FX2P5PSYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}