// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhn1kCtrbzARz6cev2jxPSftxTW7eMb8M",
  authDomain: "prime-property-2a07e.firebaseapp.com",
  projectId: "prime-property-2a07e",
  storageBucket: "prime-property-2a07e.appspot.com",
  messagingSenderId: "839121029539",
  appId: "1:839121029539:web:f7c69d59f256efb70bf216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);