// Implement the Car class that adheres to the Vehicle interface
var Car = /** @class */ (function () {
    // Constructor to initialize the properties
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Corolla", 2021);
// Call the start method to verify the output
myCar.start();
