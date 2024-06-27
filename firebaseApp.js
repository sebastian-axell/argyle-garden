// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBKCBxW5OhDjg6PW-SYr8wbspyf7cVCG7g",
  authDomain: "argylegarden-90004.firebaseapp.com",
  projectId: "argylegarden-90004",
  storageBucket: "argylegarden-90004.appspot.com",
  messagingSenderId: "796209518134",
  appId: "1:796209518134:web:b91da68e13644b293dea97",
  measurementId: "G-4CBBDZQRPS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

