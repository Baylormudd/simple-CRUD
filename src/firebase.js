import firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtMYOVonSbiH3Xp2len8M6RvZeqzqM_lU",
    authDomain: "simple-crud-575a9.firebaseapp.com",
    databaseURL: "https://simple-crud-575a9.firebaseio.com",
    projectId: "simple-crud-575a9",
    storageBucket: "simple-crud-575a9.appspot.com",
    messagingSenderId: "248980674159"
  };
  firebase.initializeApp(config);

  export default firebase;