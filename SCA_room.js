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

function addRoom(){
  room_name = document.getElementById("addRoom").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "SCA_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "SCA_page.html";
}

function logOut() {
localStorage.removeItem("name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}