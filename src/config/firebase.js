// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMxL3o7UCk-6yZ8xGqkESq9m2yW1463qc",
  authDomain: "web-solidarite-d99cc.firebaseapp.com",
  projectId: "web-solidarite-d99cc",
  storageBucket: "web-solidarite-d99cc.appspot.com",
  messagingSenderId: "161566198637",
  appId: "1:161566198637:web:632b5c3a7eb0c3115a2864",
  measurementId: "G-D5GXP7XTMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
export const db = getFirestore(app);

export const usersDb = collection(db, 'users')


export default app;