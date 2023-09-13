// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZALiGkz5DNS4F8S27FIM445sJvn0IS4",
  authDomain: "websolidariteapp-550c9.firebaseapp.com",
  projectId: "websolidariteapp-550c9",
  storageBucket: "websolidariteapp-550c9.appspot.com",
  messagingSenderId: "254412882996",
  appId: "1:254412882996:web:6811f9734acc0a64af3661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);