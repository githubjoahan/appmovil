// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhZEtA4H7ye3aqRqb7U0xfRjDTUB-potI",
  authDomain: "bisceps-95aa8.firebaseapp.com",
  projectId: "bisceps-95aa8",
  storageBucket: "bisceps-95aa8.appspot.com",
  messagingSenderId: "1068608706694",
  appId: "1:1068608706694:web:33c8cd580928e3ca2f9907",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
