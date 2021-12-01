"use strict";

let urlAppend = window.location.href;

urlAppend = urlAppend.split("github.io").pop();


document.getElementById("test").innerHTML = urlAppend;



