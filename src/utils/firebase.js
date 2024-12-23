// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABseWbMhoKR_Y2GDPqaJBm_vSrDdkbGs0",
  authDomain: "netflix-gpt-18.firebaseapp.com",
  projectId: "netflix-gpt-18",
  storageBucket: "netflix-gpt-18.firebasestorage.app",
  messagingSenderId: "982143508065",
  appId: "1:982143508065:web:ed951a66a60a24cb515420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
