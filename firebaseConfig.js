// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvDoKbJIX3zKe8VWcP6qq_7fdwmm1srss",
  authDomain: "edcweb-62318.firebaseapp.com",
  projectId: "edcweb-62318",
  storageBucket: "edcweb-62318.appspot.com",
  messagingSenderId: "558423456708",
  appId: "1:558423456708:web:30e05ccfc17c87bc1f0291",
  measurementId: "G-2CL4NRBYZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= getFirestore(app);
export {db};
