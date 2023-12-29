// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8sRpnYlgyLznKWeNMVD5YFfp0uEXRNQQ",
  authDomain: "digestapp-80711.firebaseapp.com",
  projectId: "digestapp-80711",
  storageBucket: "digestapp-80711.appspot.com",
  messagingSenderId: "587475806321",
  appId: "1:587475806321:web:da88419c3103d4501f13d0",
  measurementId: "G-XEWSWH00WC"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//const analytics = getAnalytics(app);