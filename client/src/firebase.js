// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2d825.firebaseapp.com",
  projectId: "mern-estate-2d825",
  storageBucket: "mern-estate-2d825.appspot.com",
  messagingSenderId: "74087482380",
  appId: "1:74087482380:web:b38e03fd8820bc83b55a29",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
