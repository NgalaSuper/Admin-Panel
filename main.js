//Login form

var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {

  event.preventDefault();


  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "ngadhenjim.lubishtani" && password == "lubishtani123") {

    var redirectUrl = document.getElementById("my-link").href;


    location.assign(redirectUrl);
  } else {
    alert("Incorrect PSW or Username");
  }
});


