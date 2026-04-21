// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwxbUFxaAJh0UBakrrQaqPxdaf3nBlEGw",
  authDomain: "netflix-gpt-cae9f.firebaseapp.com",
  projectId: "netflix-gpt-cae9f",
  storageBucket: "netflix-gpt-cae9f.firebasestorage.app",
  messagingSenderId: "916885363305",
  appId: "1:916885363305:web:f15bcca74f965368c360f8",
  measurementId: "G-6VHVBN1339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);