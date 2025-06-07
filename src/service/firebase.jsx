// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIrK-QTArTHgGqjOGm0DCBLPkESySB15U",
  authDomain: "entrega-comision69605.firebaseapp.com",
  projectId: "entrega-comision69605",
  storageBucket: "entrega-comision69605.firebasestorage.app",
  messagingSenderId: "685467823708",
  appId: "1:685467823708:web:90e33ea2405e6892fa8099",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
