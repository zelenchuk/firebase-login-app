import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzFjiMOL5fpqn3HSXx5KfK8PbwxvzfLSI",
  authDomain: "react-login-app-1cb94.firebaseapp.com",
  projectId: "react-login-app-1cb94",
  storageBucket: "react-login-app-1cb94.appspot.com",
  messagingSenderId: "644438303139",
  appId: "1:644438303139:web:5b0c38304140e21e983a16",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
