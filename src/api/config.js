import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAG708f0Of14jlt25UZCyd75UqxScCDk3c",
  authDomain: "foodtime-386115.firebaseapp.com",
  databaseURL:
    "https://foodtime-386115-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "foodtime-386115",
  storageBucket: "foodtime-386115.appspot.com",
  messagingSenderId: "860953839517",
  appId: "1:860953839517:web:507393b0caebdd6f6a9174",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
