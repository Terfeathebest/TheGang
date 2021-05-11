import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

var config = {
    apiKey: "AIzaSyBLGSxY8kgGCy6iRcB-gtfU82ThFbcu_KQ",
    authDomain: "thegangbook.firebaseapp.com",
    projectId: "thegangbook",
    storageBucket: "thegangbook.appspot.com",
    messagingSenderId: "603111247639",
    appId: "1:603111247639:web:48778cd3a30952d9c0b152",
    measurementId: "G-1BJ7LM6S99"
};
// Initialize Firebase
firebase.initializeApp(config);
export const db = firebase.database();
export const fs = firebase.firestore();
export const auth = firebase.auth;
export const storage = firebase.storage;
// firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
