/**
 * Created by Austin on 10/13/16.
 */


'use strict';

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array

 var books = [
     {
         "title": "Senior Turtle",
         "author": {
             "firstName": "Bobby",
             "lastName": "Buttcheeks"
         }
     },
     {
         "title": "Badger Wrestler",
         "author": {
             "firstName": "Billy",
             "lastName": "Dontthinkalot"
         }
     },
     {
         "title": "Spider Monkeys and their Danger to Mankind",
         "author": {
             "firstName": "Gavin",
             "lastName": "Buttox"
         }
     },
     {
         "title": "Alpine Grizzly Squirrels an Extinction Level Event",
         "author": {
             "firstName": "James",
             "lastName": "Grossweiner"
         }
     },
     {
         "title": "Turkey Roping from Zero to a Hero in 98 Easy Steps",
         "author": {
             "firstName": "Fannie",
             "lastName": "Licker"
         }
     }
 ];

// log out the books array
// console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here

// Adding a book to the array. Below.

function addBook() {
    var book = {};
    var author = {};
    book.title = prompt("Enter title of Book you would like to add.");
    author.firstName = prompt("Author's first name?");
    author.lastName = prompt("Author's last Name?");
    book.author = author;
    books.push(book);
}

books.forEach(function(element, index, array) {
    console.log("Book #" + (index + 1));
    console.log("Title: " + element.title);
    console.log("Author: " + element.author.firstName + " " + element.author.lastName);
    console.log("---");
});

// end loop here