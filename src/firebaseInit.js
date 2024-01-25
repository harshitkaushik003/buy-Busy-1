// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV2w8JX108aQDpA6APfr7TZVI5jtxTkRU",
  authDomain: "buybusy-ba782.firebaseapp.com",
  projectId: "buybusy-ba782",
  storageBucket: "buybusy-ba782.appspot.com",
  messagingSenderId: "560304489408",
  appId: "1:560304489408:web:5f8860fe68eed8dbd5fe25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};