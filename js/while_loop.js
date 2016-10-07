/**
 * Created by Austin on 10/7/16.
 */

"use strict";

// An ice cream seller can't go home until she sells all of her cones. Write a JS program that
// generates a random number between 50 and 100 representing the amount of cones to sell.
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought
// by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.
// This is how you get the random numbers.


// This is how you get a random number between 50 and 100

var allCones = Math.floor(Math.random() * 50) + 50;
var cones;
var conesRemaining = allCones;

console.log("I started with " + allCones + " cones.");

do {
    // This is how you get a random number between 1 and 5
    cones = Math.floor(Math.random() * 5) + 1;
    conesRemaining = conesRemaining - cones;
    console.log("I sold " + cones + " cones. I have " + conesRemaining + " cones remaining.")

} while ( conesRemaining > 3);

console.log("I sold all my cones!");



var x = 2;

while (x <= 65536) {
    console.log(x);
    x = x * 2;
}