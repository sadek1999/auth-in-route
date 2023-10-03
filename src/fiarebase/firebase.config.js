// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBggHbKrxyKflQC3FQCmlu7gETDJmnMo-s",
  authDomain: "auth-in-router.firebaseapp.com",
  projectId: "auth-in-router",
  storageBucket: "auth-in-router.appspot.com",
  messagingSenderId: "951173871478",
  appId: "1:951173871478:web:905ba2c17a88dda340ec57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;