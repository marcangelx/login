firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    firebase.database.enableLogging(true);
    // User is signed in.
    window.location.href="next.php";
    var user = firebase.auth().currentUser;
        window.alert("Successfully Logged In");

  } else {
    // No user is signed in.
    document.getElementById("login_div").style.display = "block";
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
