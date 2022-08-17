import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDzaWzN8K7Gkp3KmLvl44UCBcF4TkhakEs",
    authDomain: "peliculas-fe5e2.firebaseapp.com",
    projectId: "peliculas-fe5e2",
    storageBucket: "peliculas-fe5e2.appspot.com",
    messagingSenderId: "233676903397",
    appId: "1:233676903397:web:4bdd626567d1bd7397550c"
  };
  
  // Initialize Firebase
  export const credential=initializeApp(firebaseConfig);