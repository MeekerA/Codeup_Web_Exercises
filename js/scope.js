/**
 * Created by Austin on 10/11/16.
 */

/**
 * Created by Austin on 10/10/16.
 */

"use strict";

(function () {

    var myNameIs = 'Austin'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

    function sayHello(name) {
        var result = "Hello " + name;
        return result;
    }

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random

    var random = Math.floor((Math.random() * 100) + 1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

    function isOdd(someNumber) {
        var result;
        if (someNumber % 2 == 0) {
            result = someNumber + " is not a odd number."
        } else {
            result = someNumber + " is a odd number."
        }
        return result;
    }

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

// Additional Class Work.

    function add(a, b) {
        var result = a + b;
        return result;
    }

    function subtract(a, b) {
        var result = a - b;
        return result;
    }

    function multiply(a, b) {
        var result = a * b;
        return result;
    }

    function divide(a, b) {
        var result = a / b;
        return result;
    }

    function square(number) {
        return multiply(number, number);
    }

    function sumOfSquares(a, b) {
        return add(square(a), square(b));
    }

})();

