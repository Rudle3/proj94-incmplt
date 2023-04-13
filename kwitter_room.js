
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBH3SNy086kSznDedQYC_NxJoItYvkB6Zc",
      authDomain: "proj94-6d825.firebaseapp.com",
      projectId: "proj94-6d825",
      storageBucket: "proj94-6d825.appspot.com",
      messagingSenderId: "1053516255035",
      appId: "1:1053516255035:web:24578040734e14e901311e"
    };

    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code

     //End code
     });});}
     getData();
logout(){
     window.location="index.html"
}