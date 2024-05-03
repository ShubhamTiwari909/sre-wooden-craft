// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByAftQoHnAW_LvfBLY0FzbWnhDkM1Sa7Q",
  authDomain: "sre-wooden-craft.firebaseapp.com",
  projectId: "sre-wooden-craft",
  storageBucket: "sre-wooden-craft.appspot.com",
  messagingSenderId: "155029198872",
  appId: "1:155029198872:web:d83815c75f4d03f4a8cb6d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
