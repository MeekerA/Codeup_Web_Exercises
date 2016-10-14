
    "use strict";

    // TODO: Create person object

     var person = {};

    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    person.firstName = "Austin";
    person.lastName = "Meeker";

    console.log(person);

    // TODO: Add a sayHello method to the person object that
    // alerts a greeting using the firstName and lastName properties

    person.sayHello = function () {
        alert("Hello! " + this.firstName + " " + this.lastName + "!");
    };

    person.sayHello();

    // Say hello from the person object.
    // person.sayHello();
