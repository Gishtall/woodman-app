import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';



  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAmUgbwZkeeMG8U_9vfkVXPu-xgyfweQow",
    authDomain: "woodman-app.firebaseapp.com",
    databaseURL: "https://woodman-app.firebaseio.com",
    projectId: "woodman-app",
    storageBucket: "woodman-app.appspot.com",
    messagingSenderId: "866134671771"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
