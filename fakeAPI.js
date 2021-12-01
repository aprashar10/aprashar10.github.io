"use strict";


// Get the current URL
let urlAppend = window.location.href;


// Split the URL at the end of the site name and keep only the latter halve
urlAppend = urlAppend.split("github.io/").pop();


// Update the <p> element with this portion of the string
document.getElementById("test").innerHTML = urlAppend;


if (urlAppend.length == 0) {
  console.log(":(")
} else {
  console.log(":)")
}

