(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let getHeader = document.getElementById("myheader");
  let getuser-name = document.getElementById("user-name");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	getHeader.innerHTML = userName.value + "" + surname.value;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
