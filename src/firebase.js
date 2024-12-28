// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELT9m2Z2Ts09HTpqAeKtG9LGfY7WvRXs",
  authDomain: "lou-paperie-website.firebaseapp.com",
  projectId: "lou-paperie-website",
  storageBucket: "lou-paperie-website.firebasestorage.app",
  messagingSenderId: "663904521567",
  appId: "1:663904521567:web:797375f7a01d50596abaea",
  measurementId: "G-LE5HFBXJ6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }