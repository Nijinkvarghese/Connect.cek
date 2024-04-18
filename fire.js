// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcqUzqkLvdfdCDAgYe6ugpom5Z3ULfMco",
  authDomain: "connect-cek.firebaseapp.com",
  projectId: "connect-cek",
  storageBucket: "connect-cek.appspot.com",
  messagingSenderId: "21447682775",
  appId: "1:21447682775:web:a280e1e65d64b1b8a69e92",
  measurementId: "G-T09DQQLT9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);