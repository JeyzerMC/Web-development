var name = prompt("Enter your name!");
var age = prompt("Enter your age!") * 365;

var text = document.createTextNode("Hello " + name + ". You are " + age + " days old!");

document.querySelector("h2").appendChild(text);




