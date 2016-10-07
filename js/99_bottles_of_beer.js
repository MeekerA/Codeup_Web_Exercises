/**
 * Created by Austin on 10/7/16.
 */

"use strict";

var startBottles = 99;
var bottlesOfBeer = startBottles;

do {
    bottlesOfBeer = startBottles - 1;
    console.log(startBottles + " Bottles of beer on the wall, " + startBottles + " Bottles of beer, take one down pass it around, " + bottlesOfBeer + " Bottles of beer on the wall.");
    startBottles = bottlesOfBeer

} while (bottlesOfBeer > 2);

console.log(startBottles + " Bottles of beer on the wall, " + startBottles + " Bottles of beer, take one down pass it around, " + (bottlesOfBeer - 1) + " Bottle of beer on the wall. Better go to the store!");