/**
 * Created by Austin on 10/11/16.
 */


(function(){

    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // var peopleNames  = ["Austin", "Rebecca ", "Cholula", "Isla"];

    // console.log(peopleNames);

    // TODO: Create a log statement that will log the number of elements in the names array.

    // console.log(peopleNames.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    // console.log(peopleNames[0]);
    // console.log(peopleNames[1]);
    // console.log(peopleNames[2]);
    // console.log(peopleNames[3]);

    // Exercise 1 Iterating


    // for(var i = 0; i < peopleNames.length; i++) {
    //     console.log("The name at index " + i + " is " + peopleNames[i]);
    // }

    // Exercise 2 Iterating

    // peopleNames.forEach(function(name, i, peopleNames) {
    //
    //     console.log("The name at index " + i + " is " + name);
    // });


    // var grades = [100, 80, 90, 80, 70];
    // function average(gradesToAverage) {
    //
    //     var sum = 0;
    //     for(var i = 0; i < grades; i++) {
    //         sum += grades[i];
    //     }
    // return sum / grades.length;
    // }

    // function isEven(someNumber) {
    //     return someNumber % 2 == 0;
    // }
    //
    // var newArray = [];
    // [1, 2, 3, 4, 5].forEach(function(element, index, array) {
    //     newArray.push(element + 1);
    // });
    // console.log(newArray);
    //
    // var arrayOfEvens = [];
    // [1, 2, 3, 4, 5].forEach(function(element, index, array) {
    //     if(isEven(element)) {
    //         arrayOfEvens.push(element);
    //     }
    // });
    // console.log(arrayOfEvens);
    //
    // var sum = 0;
    // [1, 2, 3, 4, 5].forEach(function(element, array) {
    //     sum += element;
    // });
    // console.log(sum)

})();

var names = ["john","paul","ringo","george","yoko"];
var numbers = [1,2,3,4,5,6,7,8,9,10];

// # 1

function capitalizeFirstLetter(array) {
    var newArray = [];
    array.forEach(function(element, index, array) {
        var upperCaseString = element.charAt(0).toUpperCase() + element.slice(1);
        newArray.push(upperCaseString);
    });
    return newArray;
}

console.log(names);
console.log(capitalizeFirstLetter(names));

// # 2

function addAllElements(array) {
    var sum = 1;
    array.forEach(function (element, index, array) {
        sum *= element;
    });
    return sum;
}

console.log(numbers);
console.log(addAllElements(numbers));

// # 3


function listToHTML(array) {
    var htmlContent = "";
    htmlContent += "<ul>";
    array.forEach(function(element, index, array) {
        htmlContent += "<li>" + element + "</li>";
    });
    htmlContent += "</ul>";
    return htmlContent;
}

console.log(names);
console.log(listToHTML(names));