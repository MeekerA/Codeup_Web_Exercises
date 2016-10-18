(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            var area = Math.PI * Math.pow(this.radius, 2);

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            var area = this.getArea();
            // TODO: complete this method.
            if (doRounding) {
                area = Math.round(this.getArea());
            }
            return area;
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }

    };

    console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));

    console.log("=======================================================");

    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
})();
