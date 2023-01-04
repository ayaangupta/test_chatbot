const firebaseConfig = {
    apiKey: "AIzaSyAAT1WjGwinvcJahUJDe_3SIco9fCH5pF0",
    authDomain: "mychatbot-5a4b2.firebaseapp.com",
    databaseURL: "https://mychatbot-5a4b2-default-rtdb.firebaseio.com",
    projectId: "mychatbot-5a4b2",
    storageBucket: "mychatbot-5a4b2.appspot.com",
    messagingSenderId: "239018216755",
    appId: "1:239018216755:web:07867e7403b7b692aa8246",
    measurementId: "G-5NZ11VSGPT"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send(){
    cbt = document.getElefmentById("cbt").value;
    firebase.database().ref("/").child(room_name).update({
        comment: cbt
      });
    document.getElementById("cbt").value = "";
    console.log(cbt);
}

function getData(){
    console.log("getData");
    firebase.database().ref("/" + room_name).on('value', function (snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey != "purpose"){
                firebase_chatbot_id = childKey;
                chatvot_data - childData;
                console.log(firebase_chatbot_id);
                
            }
        })
    })
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}
