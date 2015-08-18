function setButtonRed() {
  var hello = document.getElementsByName("button");
  //alert("hello " + hello[0]);
  hello[0].setAttribute("class", "centerButton red");
}

function setButton() {
  var hello = document.getElementsByName("button");
  //alert("hello " + hello[0]);
  hello[0].setAttribute("class", "centerButton red");
}

function openAddMenu(){
  alert("this will open the add menu");
}

function loginPrompt(){
  var user = prompt("Please enter username");
  var pass = prompt("Password");
  
  if(user == "knkp"){
    if(pass == "password"){
      alert("welcome back knkp");
    }
    else {
      alert("bad password");
    }
  }
  else {
    alert("wrong username");
  }
}