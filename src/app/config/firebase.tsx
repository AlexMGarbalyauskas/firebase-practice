// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC_J9qF_dk2erviINn7eMP5zZZ7A3mpDI",
  authDomain: "tutorial-d2768.firebaseapp.com",
  projectId: "tutorial-d2768",
  storageBucket: "tutorial-d2768.appspot.com",
  messagingSenderId: "789947352899",
  appId: "1:789947352899:web:79026e9bf42bc76b4cd1f6",
  measurementId: "G-J6X0XRQSVY"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app); 
export const GoogleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app);