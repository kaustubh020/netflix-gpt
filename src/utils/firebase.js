// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB26QJt47njsMkIL5bxkyxNNG88Kzzoo7Y",
  authDomain: "netflixgpt-53993.firebaseapp.com",
  projectId: "netflixgpt-53993",
  storageBucket: "netflixgpt-53993.appspot.com",
  messagingSenderId: "802665509820",
  appId: "1:802665509820:web:74e80cb7f290eb2ef2f1b9",
  measurementId: "G-2WHH2TGBSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
