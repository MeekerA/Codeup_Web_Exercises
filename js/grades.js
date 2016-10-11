/**
 * Created by Austin on 10/11/16.
 */

"use strict";

// function averageGrade3(testOne, testTwo, testThree) {
//     for (var i = 1; i <= 3; i++) {
//
//         if (i == 1) {
//             testOne = parseInt(prompt("What was the grade of Test #" + i + "."));
//         }
//         if (i == 2) {
//             testTwo = parseInt(prompt("What was the grade of Test #" + i + "."));
//         }
//         if (i == 3) {
//             testThree = parseInt(prompt("What was the grade of Test #" + i + "."));
//         }
//     }
//     var testAverage3 = (testOne + testTwo + testThree) / 3;
//
//     if (testAverage3 >= 80) {
//         alert("Your test average is " + testAverage3 + "% Good Job!");
//     } else {
//         alert("Your test average is " + testAverage3 + "% You need to Practice more..");
//     }
//     return testAverage3;
// }
//
// averageGrade3();

/// class review below

function average3Grades() {
    var total = 0;
    var grade = 0;

    for (var i = 0; i < 3; i++) {

        grade = parseFloat(prompt("What was you test grade?"));
        while (isNaN(grade) || (grade < 0 || grade > 100)) {
            grade = parseFloat(prompt("Please input your grade as a number?"));
        }
        total = total + grade;
    }
    return total / 3;
}

console.log(average3Grades());

// get numeric grade function. below.

function getNumericGrade() {
    var grade = parseInt(prompt("Please input your grade."));

    while (isNaN(grade) || (grade < 0 || grade > 100)) {
        grade = parseInt(prompt("Please input your grade as a number between 0 and 100"));
    }
    return grade;
}

// generic average grade function. below.


function genericAverageGrade() {
    var total = 0;
    var counter = 0;
    var addaAnotherGrade;
    var average;

    do {
        total += getNumericGrade();
        addaAnotherGrade = confirm("Do you want to add another Grade?");
        counter++;
    } while (addaAnotherGrade);
    average = total / counter;
    return average;
}

var finalGrade = genericAverageGrade();
if(finalGrade >= 80) {
    alert("Your awesome!")
} else {
    alert("You need practice....")
}

genericAverageGrade();