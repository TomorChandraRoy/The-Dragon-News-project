// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-UQaz6qbWRr56J5DSm4WfpoXDCHf7DQ",
  authDomain: "the-dragon-news-c115b.firebaseapp.com",
  projectId: "the-dragon-news-c115b",
  storageBucket: "the-dragon-news-c115b.appspot.com",
  messagingSenderId: "201188627258",
  appId: "1:201188627258:web:8a8b46a3ba49b16cbe7603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;