
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRkU1fUraRVJNcrKea5INlEUP82zxOlaw",
  authDomain: "fir-auth-89657.firebaseapp.com",
  projectId: "fir-auth-89657",
  storageBucket: "fir-auth-89657.appspot.com",
  messagingSenderId: "181581494134",
  appId: "1:181581494134:web:05d6ded70cbbcecb6fac57",
  measurementId: "G-CMX21HC4ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;