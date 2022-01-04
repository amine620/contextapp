// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYvh_MIe2wanrdvh4ugmLymU8UbRxpJ-U",
  authDomain: "blog-5a445.firebaseapp.com",
  projectId: "blog-5a445",
  storageBucket: "blog-5a445.appspot.com",
  messagingSenderId: "180620138382",
  appId: "1:180620138382:web:72236189f41e7d4d9cf6df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)