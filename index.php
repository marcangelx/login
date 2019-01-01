<html>
<head>
  <title>Firebase Login</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css" />
</head>
<body>

  <div id="login_div" class="main-div">
    <h1 style="color:#5d8ffc;"><center>HI ADMIN!!</center></h1>
    <input type="email" placeholder="Email..." id="email_field" />
    <input type="password" placeholder="Password..." id="password_field" />

    <button onclick="login()">Login to Account</button>
  </div>


<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAesp2WIjuWk1Dh4kTLbHmitjOMve6025U",
    authDomain: "seyf-drayb.firebaseapp.com",
    databaseURL: "https://seyf-drayb.firebaseio.com",
    projectId: "seyf-drayb",
    storageBucket: "seyf-drayb.appspot.com",
    messagingSenderId: "576263679226"
  };
  firebase.initializeApp(config);
  
</script>
  <script src="index.js"></script>

</body>
</html>
