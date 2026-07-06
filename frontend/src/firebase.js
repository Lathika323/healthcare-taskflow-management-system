import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHbae3Tylrn08QYf60cMDp8J6NvZuqsz0",
  authDomain: "healthcare-taskflow.firebaseapp.com",
  projectId: "healthcare-taskflow",
  storageBucket: "healthcare-taskflow.firebasestorage.app",
  messagingSenderId: "913259781669",
  appId: "1:913259781669:web:324a76438431718f0569cc",
  measurementId: "G-6ZB52WY8XB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
