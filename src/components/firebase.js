// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYG1To40OzPp9Oy1h-ZIiadaDtIiDEpiI",
  authDomain: "dragon-project-pass-auth.firebaseapp.com",
  projectId: "dragon-project-pass-auth",
  storageBucket: "dragon-project-pass-auth.firebasestorage.app",
  messagingSenderId: "206765529796",
  appId: "1:206765529796:web:a4a40ca0ac97b3920e8791",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);