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
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
    });
});
    }
    getData();
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }
    function logout(){
          localStorage.removeItem("room_name");
          localStorage.removeItem("user_name");
          window.location="index.html";
    }
    