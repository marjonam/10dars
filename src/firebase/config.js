// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVRYbTv6zqv6sD8VVPuDPIF0VGGq-qcFQ",
  authDomain: "apps-b4118.firebaseapp.com",
  projectId: "apps-b4118",
  storageBucket: "apps-b4118.firebasestorage.app",
  messagingSenderId: "432309270563",
  appId: "1:432309270563:web:669fe87ed0e9b912e15996",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
