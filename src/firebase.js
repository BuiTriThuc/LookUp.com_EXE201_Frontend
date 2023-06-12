// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add 

const firebaseConfig = {
  apiKey: "AIzaSyBbwPIwxbTyaAw40HoBV2L2PdKohMj-FKo",
  authDomain: "chat-d284c.firebaseapp.com",
  projectId: "chat-d284c",
  storageBucket: "chat-d284c.appspot.com",
  messagingSenderId: "64402143494",
  appId: "1:64402143494:web:33292ea879a3ec47ffc687",
  measurementId: "G-5ZBCFQCPWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);