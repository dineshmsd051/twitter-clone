import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMNq5sPKiBJKNU96GqiuR4vQ4B7dYnGso",
  authDomain: "twitter-clone-27269.firebaseapp.com",
  projectId: "twitter-clone-27269",
  storageBucket: "twitter-clone-27269.appspot.com",
  messagingSenderId: "389701250250",
  appId: "1:389701250250:web:a055318d28f2476592d833",
  measurementId: "G-BSZK9638D3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;