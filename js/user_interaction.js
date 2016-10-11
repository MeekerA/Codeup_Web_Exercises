"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
do {
    var userName = prompt("Hi there! What is your name?");
} while (userName == null || userName.trim() == "");

// TODO: Show an alert message that welcomes the user based on their input.

alert("Nice to meet you " + userName + "!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizza = confirm("Dude! Do you like Pizza?");

if (pizza) {
    alert("Awesome me too!");
} else {
    alert("That's no fun......");
}