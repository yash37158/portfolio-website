// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqEKssSdvOWF0Zovw-HJ5b3yDd9IewIBg",
    authDomain: "portfolio-website-1ad29.firebaseapp.com",
    projectId: "portfolio-website-1ad29",
    storageBucket: "portfolio-website-1ad29.appspot.com",
    messagingSenderId: "780062053617",
    appId: "1:780062053617:web:06c1d7c1f17c93cd578550",
    measurementId: "G-RDE3X6CWTS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Refrerence message collections
var messagesRef = firebase.database().ref('message');

//Listen from submit :
document.getElementById('contactForm').addEventListener('submit',
submitform);

// submit Form
function submitform(e){
  e.preventDefault();


    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

        // save your message
        saveMessage(name, email, message);

            //show alert
    document.querySelector('.alert').style.display = 'block';

    //set timeout for alert for 4000sec
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },4000)

        // Reset contact form
        document.getElementById('contactForm').reset();

  }


    // function for getInputVal
function getInputVal(id){

  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message){
  var newmessageRef = messagesRef.push();
  newmessageRef.set({
      name: name,
      email: email,
      message: message
  });
}