/**
 * Created by Austin on 10/7/16.
 */

"use strict";

// First Question

for (var i = 1; i <= 10; i++) {
    var string = i.toString();
    var lastCharacter = string[string.length - 1];
    console.log(lastCharacter.repeat(i));

}

// Write the JS code to log to the console the multiplication table for a random number
// between 1 and 10.

var randomNumber = Math.floor(Math.random() * 10) + 1;

for (var i = 1; i <= 10; i = i + 1) {
    var answer = randomNumber * i;
    console.log(randomNumber + "x" + i + "=" + answer)
}

// 3rd Question

for (var i = 1; i <= 10; i++) {
    var highNumber = Math.floor(Math.random() * 180) + 20;
    if ( highNumber % 2 == 0 ) {
        console.log(highNumber + " is even.")
    } else {
        console.log(highNumber + " is odd.")
    }
}

// Final Question.

for (var i = 100; i >= 5; i = i - 5) {
    console.log(i)
}