// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXffOK3-7rnu_I1tJ0JJ6sYmIjegSRJqI",
  authDomain: "ecommers-62d51.firebaseapp.com",
  projectId: "ecommers-62d51",
  storageBucket: "ecommers-62d51.appspot.com",
  messagingSenderId: "1079859207262",
  appId: "1:1079859207262:web:0ce87527f6477c8488e8cf",
  measurementId: "G-P36J7JXER0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
