// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7e0d6.firebaseapp.com",
  projectId: "mern-estate-7e0d6",
  storageBucket: "mern-estate-7e0d6.appspot.com",
  messagingSenderId: "376180793077",
  appId: "1:376180793077:web:e4df8ad266a8f869f02fbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);