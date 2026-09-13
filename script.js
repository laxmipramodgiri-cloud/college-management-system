function login(){
alert("Student Login Page Coming Soon!");
}
function studentLogin(){
let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;

if(name=="" || roll==""){
alert("Please enter details");
}

else{
alert("Welcome "+name);
window.location.href="dashboard.html";
}
}