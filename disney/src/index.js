import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './globalStyles/GlobalStyles';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzaWzN8K7Gkp3KmLvl44UCBcF4TkhakEs",
  authDomain: "peliculas-fe5e2.firebaseapp.com",
  projectId: "peliculas-fe5e2",
  storageBucket: "peliculas-fe5e2.appspot.com",
  messagingSenderId: "233676903397",
  appId: "1:233676903397:web:4bdd626567d1bd7397550c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
