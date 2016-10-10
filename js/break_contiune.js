/**
 * Created by Austin on 10/10/16.
 */

"use strict";

// Random number generator only odd numbers. Below.

do {
    var randomNumber = Math.floor((Math.random()*50)+1);
} while (randomNumber % 2 == 0);

// Break ans Continue loop exercise.

console.log("Random odd number to skip is: " + randomNumber);

for ( var i = 1; i <= 50; i++ ) {

    if ( i % 2 != 0 ) {

        if (i == randomNumber) {
            console.log("Yikes! Skipping number: " + i);
            continue;
        }
        console.log("Here is an odd number: " + i)
    }

}
