import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDwt1-SpOk528Qjc5tn23nXdB3Y7dPOOaY",
    authDomain: "simple-react-app-with-login.firebaseapp.com",
    databaseURL: "https://simple-react-app-with-login.firebaseio.com",
    projectId: "simple-react-app-with-login",
    storageBucket: "simple-react-app-with-login.appspot.com",
    messagingSenderId: "478400429477"
  }
  firebase.initializeApp(config)
  export const database = firebase.database()