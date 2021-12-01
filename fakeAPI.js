"use strict";


// Get the current URL
let urlAppend = window.location.href;


// Split the URL at the end of the site name and keep only the latter halve
urlAppend = urlAppend.split("github.io/").pop();


// If there is more 
// Update the <p> element with this portion of the string
if (urlAppend.length == 0) {
  document.getElementById("test").innerHTML = "Try this URL: aprashar10.github.io/doc=1;
} else {
  document.getElementById("test").innerHTML = urlAppend;
}

if (urlAppend === "doc=1") {
  let xmlHTTP = new XMLHttpRequest();
  xmlHttp.open("GET", "https://raw.githubusercontent.com/aprashar10/aprashar10.github.io/main/exampleJSON.txt", false);
  document.getElementByID("test").innerHTML = xmlHttp.responseText;

}