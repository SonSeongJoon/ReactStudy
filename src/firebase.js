// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPjg5Cy-SKQWiNF2862TMxi-BBUley6mI",
    authDomain: "ceo-community.firebaseapp.com",
    projectId: "ceo-community",
    storageBucket: "ceo-community.appspot.com",
    messagingSenderId: "530726376010",
    appId: "1:530726376010:web:4c5e59b40a38da615accb3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;