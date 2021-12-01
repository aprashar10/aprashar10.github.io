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


let selector = document.getElementByID("SelectElement");


// Get the current URL
let urlAppend = window.location.href;


// Split the URL at the end of the site name and keep only the latter halve
urlAppend = urlAppend.split("github.io/").pop();


// If there is more 
// Update the <p> element with this portion of the string
if (urlAppend.length == 0) {
  document.getElementById("test").innerHTML = '<p id = "test">Try this URL: <a href = "aprashar10.github.io/?doc=1">aprashar10.github.io/?doc=1</a></p>';
} else {
  document.getElementById("test").textContent = urlAppend;
}

if (urlAppend === "?doc=1") {

  console.log("Hello!")  

  let myFunc = function (myStr) {
    document.getElementById("test").innerHTML = myStr;
  };

  makeRequest("https://raw.githubusercontent.com/aprashar10/aprashar10.github.io/main/exampleJSON.txt", myFunc);

}


if (document.getElementById("test").textContent.includes("Pikachu")) {

  console.log("Hi!");

  let parsedJSON = JSON.parse(document.getElementById("test").textContent);

  selector.style.display = "";

  for (let i = 0; i < Object.keys(parsedJSON).length; ++i) {
    let opt = document.createElement('option');
    opt.value = Object.keys(parsedJSON)[i];
    opt.innerHTML = opt.value;
    selector.appendChild(opt);
  }

}



if (selector.value != '') {
  document.getElementByID("hi").textContent = parsedJSON[Object.keys(parsedJSON)[selector.selectedIndex]];
}