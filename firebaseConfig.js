// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYd_VMu1PEubFRtAEgaSNhraIqOdAcOiw",
  authDomain: "edcprod-1c923.firebaseapp.com",
  projectId: "edcprod-1c923",
  storageBucket: "edcprod-1c923.appspot.com",
  messagingSenderId: "544032166680",
  appId: "1:544032166680:web:c89b865f8e462ac902046d",
  measurementId: "G-7X4LGKFJJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= getFirestore(app);
export {db};


