import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCESKu_ROCD9rHOrnzead84Jr22fMDeSBw",
  authDomain: "a10-brandshop.firebaseapp.com",
  projectId: "a10-brandshop",
  storageBucket: "a10-brandshop.appspot.com",
  messagingSenderId: "8016749182",
  appId: "1:8016749182:web:8b1d8fcf67bb8ce9ba6e2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
