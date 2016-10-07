/**
 * Created by Austin on 10/6/16.
 */

"use strict";

var luckyNumber = Math.floor(Math.random()* 6);


// Now, suppose there's a promotion in Walmart, If your lucky number is 0 you have no discount, if your lucky number
// is 1 you'll get a 10% discount, if it's 2, discount is 25%, if it's 4, 50%, and if it's 5 you'll get all for free!.
// Write a JS program that logs to the console, how much you will have to pay if your receipt is for $60. Every time
// you reload your page you should see a different result. Use a switch statement for this exercise.


var totalBeforeDiscount = 60;
var discountPercent;

switch (luckyNumber) {
    case 0 :
        discountPercent = 0;
        break;
    case 1 :
        discountPercent = .10;
        break;
    case 2 :
        discountPercent = .20;
        break;
    case 3 :
        discountPercent = .30;
        break;
    case 4 :
        discountPercent = .40;
        break;
    case 5 :
        discountPercent = .50;
        break;
}

var discountedTotal = totalBeforeDiscount - (totalBeforeDiscount * discountPercent);

console.log("Total Sale $" + discountedTotal + ", with a %" + luckyNumber + "0 discount.");


// Suppose you have been assigned a task and you need to convert a number to the name of a month. 1 should be shown as
// January, 2 as February and so on. Using a switch statement write the JS code that shows the names of the months in
// the console.


var month;

switch (luckyNumber) {
    case 0 :
        month = "January";
        break;
    case 1 :
        month = "February";
        break;
    case 2 :
        month = "March";
        break;
    case 3 :
        month = "April";
        break;
    case 4 :
        month = "May";
        break;
    case 5 :
        month = "June";
        break;
}

console.log(month);