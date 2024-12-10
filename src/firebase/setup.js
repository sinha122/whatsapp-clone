import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM04lTqvIOnjMxduSji_Y6tWK7deQYtHo",
  authDomain: "whatsapp-clone-a2d45.firebaseapp.com",
  projectId: "whatsapp-clone-a2d45",
  storageBucket: "whatsapp-clone-a2d45.firebasestorage.app",
  messagingSenderId: "458642372297",
  appId: "1:458642372297:web:e43a78e151403c146f3f18"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleProvider= new GoogleAuthProvider(app);
export const database=getFirestore(app);