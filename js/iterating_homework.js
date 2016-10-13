/**
 * Created by Austin on 10/12/16.
 */

"use strict";

var fiftyStates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania',
    'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

var numbers = [1,2,3,4,5,6,7,8,9,10];

var names = ["john","paul","ringo","george","yoko"];

//  #1 Take an array of strings containing all the states and return only states
// that start w/ letter "T".

function startWithLetterT(array) {
    var newArray = [];
    array.forEach(function (element, index, array) {
        if (element[0] == 'T') {
            newArray.push(element);
        }
    });
    return newArray;
}
// console.log(startWithLetterT(fiftyStates));

//  #2 Make another function that returns a new array of all the states >= two "s"
// characters

function selectingOnlyDoubleS(array) {
    var newArray = [];
    array.forEach(function (element, index, array) {
        if (element.indexOf("ss") >= 0) {
            newArray.push(element)
        }
    });
    return newArray;
}
// console.log(selectingOnlyDoubleS(fiftyStates));

//  #3 Make a function that squares each number on an array.

function arrayOfSquares(array) {
    var newArray = [];
    array.forEach(function (element, index, array) {
        element *= element;
        newArray.push(element)
    });
    return newArray;
}

//  #4 Write a function that takes an array of lowercase names. Uppercase the first
// letter of each name and returns only the names that start with "Y".

function capitalizeNamesLetterY(array) {
    var newArray = [];
    array.forEach(function (element, index, array) {
        var upperCaseElement = element.charAt(0).toUpperCase() + element.slice(1);
        if (upperCaseElement[0] == 'Y') {
            newArray.push(upperCaseElement)
        }
        });
    return newArray;
}
// console.log(capitalizeNamesLetterY(names));

//  #5 Write a function that takes an array of numbers 1-10. Return the sum of
// only the numbers divisible by 3.

function numbersDivisibleBy3(array) {
    var newArray = [];
    array.forEach(function (element, index, array) {
        if (element % 3 == 0) {
            newArray.push(element);
        }
    });
    return newArray;
}
// console.log(numbersDivisibleBy3(numbers));