/* Documentaiton: https://firebase.google.com/docs/auth/web/start#web-version-9 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
