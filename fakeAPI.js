"use strict";


function makeRequest(url, callback) {

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  xhr.onload = function() {

    if (xhr.status >= 400) {
      alert('The request could not be fulfilled');
      return;
    }

    let responseStr = xhr.responseText;
    
    console.log(responseStr);

    callback(responseStr);

  }

  xhr.send();

}



// Get the current URL
let urlAppend = window.location.href;


// Split the URL at the end of the site name and keep only the latter halve
urlAppend = urlAppend.split("github.io/").pop();


// If there is more 
// Update the <p> element with this portion of the string
if (urlAppend.length == 0) {
  document.getElementById("test").innerHTML = "Try this URL: aprashar10.github.io/?doc=1";
} else {
  document.getElementById("test").innerHTML = urlAppend;
}

if (urlAppend === "?doc=1") {

  console.log("Hello!")  

  myFunc = function (myStr) {
    document.getElementById("test").innerHTML = myStr;
  }

  makeRequest("https://raw.githubusercontent.com/aprashar10/aprashar10.github.io/main/exampleJSON.txt", myFunc);

}