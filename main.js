function addUser() {
    var username=document.getElementById("user_name").value;
    localStorage.setItem("name",username);
    window.location="SCA_room.html";
}