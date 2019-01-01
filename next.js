  var config = {
    apiKey: "AIzaSyAesp2WIjuWk1Dh4kTLbHmitjOMve6025U",
    authDomain: "seyf-drayb.firebaseapp.com",
    databaseURL: "https://seyf-drayb.firebaseio.com",
    projectId: "seyf-drayb",
    storageBucket: "seyf-drayb.appspot.com",
    messagingSenderId: "576263679226"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  var ref = database.ref('Users');
  ref.on('value', gotData, errData);

  function gotData(data){
    var Users = data.val();
    var keys = Object.keys(Users);
    console.log(keys);

    var me = document.getElementById("tbl");
    me.innerHTML += "<tr><th>NAME</th>" + "<th>ADDRESS</th>" + "<th>AGE</th>" + "<th>EMAIL</th>" + "<th>PLATE</th></tr>";
    for (var i = 0; i < keys.length; i++){

     var k = keys[i];
      var name = Users[k].name;
      var address = Users[k].address;
      var email = Users[k].email;
      var age = Users[k].age;
      var plate = Users[k].plate;
      console.log(name, address);
      me.innerHTML += "<tr><td>" + name + "</td>" + "<td>" + address + "</td>" + "<td>" + age + "</td>"
      + "<td>" + email + "</td>" + "<td>" + plate + "</td></tr>" ;
      document.body.appendChild(me);
    }
    
  }

  function errData(err){
    console.log('Error!');
    console.log(err);
  }

function logout(){
  firebase.auth().signOut();
  window.location.href="index.php";
}
