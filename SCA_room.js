var firebaseConfig = {
    apiKey: "AIzaSyDvx2bAJKkP0KXCyD4A4jzcl3Nf6vnJQT8",
    authDomain: "scachat-9c39c.firebaseapp.com",
    databaseURL: "https://scachat-9c39c-default-rtdb.firebaseio.com",
    projectId: "scachat-9c39c",
    storageBucket: "scachat-9c39c.appspot.com",
    messagingSenderId: "642608469104",
    appId: "1:642608469104:web:457b7fc625324e035b90b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("name");

document.getElementById("username").innerHTML= "welcome "+ user_name;