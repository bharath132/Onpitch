// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClC-DEcEAvEZ86oxrBpKt019bmF_0-3c4",
  authDomain: "onpitchin-496dc.firebaseapp.com",
  projectId: "onpitchin-496dc",
  storageBucket: "onpitchin-496dc.firebasestorage.app",
  messagingSenderId: "824719456657",
  appId: "1:824719456657:web:06987d004139b6f8470230",
  measurementId: "G-Z7JRZSFVDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();