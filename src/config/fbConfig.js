import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCmStsvyGXkRmDLZ6vOCWEjasBdP9-AUvU",
    authDomain: "marioplan-fbfa2.firebaseapp.com",
    databaseURL: "https://marioplan-fbfa2.firebaseio.com",
    projectId: "marioplan-fbfa2",
    storageBucket: "",
    messagingSenderId: "1033008344761",
    appId: "1:1033008344761:web:130493a99cbda88e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});

  export default firebase;