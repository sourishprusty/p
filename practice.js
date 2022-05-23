var firebaseConfig = {
    apiKey: "AIzaSyANz1xaSGXVmVPuSIrsp_qL3eYfzOq90h8",
    authDomain: "kwitter-da681.firebaseapp.com",
    databaseURL: "https://kwitter-da681-default-rtdb.firebaseio.com",
    projectId: "kwitter-da681",
    storageBucket: "kwitter-da681.appspot.com",
    messagingSenderId: "398538177181",
    appId: "1:398538177181:web:4b6348d0a96f35e8a93274",
    measurementId: "G-8LFMVETQB8"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    
}