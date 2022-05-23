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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
