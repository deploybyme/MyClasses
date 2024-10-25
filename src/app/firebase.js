// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV4_ueB2Ahd9Y8o_i2dPwUjx2aYqIqIyw",
  authDomain: "student-management-syste-eee8e.firebaseapp.com",
  projectId: "student-management-syste-eee8e",
  storageBucket: "student-management-syste-eee8e.appspot.com",
  messagingSenderId: "26854688677",
  appId: "1:26854688677:web:a9f878032a9ccc5e5aca4c",
  measurementId: "G-R4TH38QHSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth};