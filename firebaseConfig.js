// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics ,isSupported} from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEMkAgbJz-MibsecTySu0FpfjTarvVC7Y",
  authDomain: "edcp-499c4.firebaseapp.com",
  projectId: "edcp-499c4",
  storageBucket: "edcp-499c4.appspot.com",
  messagingSenderId: "167602443280",
  appId: "1:167602443280:web:a969344322d12cb598a695",
  measurementId: "G-2KR5CRF3YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

const db= getFirestore(app);

export {db};