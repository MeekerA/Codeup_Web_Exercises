/**
 * Created by Austin on 10/6/16.
 */

"use strict";

// Knowing that a student's grades are 70, 80, 95. Write a JS program, using conditionals that logs to the console
// "You're awesome" if the average of her grades is greater than 80, otherwise the message should be "You need to
// practice more".

var studentGrades = (70 + 80 + 95) / 3;

if (studentGrades > 80) {
    console.log("You're Awesome!");
} else {
    console.log("You need to practice more!");
}

// HEB has an offer for the clients that buy products amounting more than $200 Write a JS program, using conditionals,
// that logs to the browser, how much does Ryan, Cameron and George need to pay. We know that Cameron bought $180,
// Ryan $250 and George $320. Your program will have to display a line with the name of the person, the amount before
// the discount, if any, and the amount after the discount.

var cameronTotal = 180;

var ryanTotal = 250;

var georgeTotal = 320;


if (cameronTotal > 200) {
    var discountedCameron = cameronTotal - (cameronTotal * .20);
    console.log("Cameron " + "     Pre-discount $" + cameronTotal + "     Total with discount $" + discountedCameron);
} else {
    console.log("Cameron " + "     No Discount under $200" + "     Total $" + cameronTotal);
}


if (ryanTotal > 200) {
    var discountedRyan = ryanTotal - (ryanTotal * .20);
    console.log("Ryan " + "     Pre-discount $" + ryanTotal + "     Total with discount $" + discountedRyan);
} else {
    console.log("Ryan " + "     Pre-discount $" + cameronTotal + "     No Discount under $200");
}


if (georgeTotal > 200) {
    var discountedGeorge = georgeTotal - (georgeTotal * .20);
    console.log("George " + "     Pre-discount $" + georgeTotal + "     Total with discount $" + discountedGeorge);
} else {
    console.log("George " + "     Pre-discount $" + georgeTotal + "     No Discount under $200");
}

// Suppose your friend Isaac cannot decide between two options. He doesn't know if he should buy a car or a new house.
// Help him decide! Write a small JS program. The following line generates either a 0 or a 1 randomly. Add an if
// statement to log a "Buy a car" to the console if the result is 0 and "Buy a house" if the result is 1. Could
// this program be written using a ternary operator?

var flipACoin = Math.floor(Math.random() * 2);

if (flipACoin == 0) {
    console.log("Buy a Car!")
} else if (flipACoin == 1) {
    console.log("Buy a House!")
}