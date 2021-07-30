function addUser() {
    var username=document.getElementById("user_name").value;
    localStorage.setItem("username",username);
    window.location="SCA_room.html";
}