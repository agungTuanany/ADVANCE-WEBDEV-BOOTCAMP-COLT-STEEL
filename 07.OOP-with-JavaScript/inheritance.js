/**
 * 
 * 
 */

 function Vehicle(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
 }

 Vehicle.prototype.start = function() {
     return "VROOM!"
 }

 Vehicle.prototype.toString = function() {
     return "The make, model, and year are" + this.make + " " + this.model + " " + this.year;
 }

/***
 * 
 * 
 */

function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}

/***
 * In order to inherit to start and to string method
 * from Vehicle. prototype 
 * we neet to set Car.prototype 
 * to be an object created (Object.create) 
 * from that Vehicle.prototype
 * so we'll use object.create to di that
 * 
 * on the next line
 * we need to make sure the constructor is reset
 *  for Car.prototype
 * so we'll set Car.prototype.constructor to be the Car constructor
 */

Car.prototype = Object.create(vehicle.prototype);
Car.prototype.constructor = Car;


function Motorcycle(make, model, year) {
    Vehicle.apply(this, arguments) // we don't need to sepcifiy make, model, year
    //that is just for readability
    this.numWheels = 2;
}

/***
 * in order to inherit toString method
 * from Vehicle.prototype
 * we'll set Motorcycle.prototype
 * to be an Object created from the Vehicle.prototype
 * 
 * finally we'll reset the constructor
 * on the Motorcyle prototype to be the Motorcylce function
 */

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;