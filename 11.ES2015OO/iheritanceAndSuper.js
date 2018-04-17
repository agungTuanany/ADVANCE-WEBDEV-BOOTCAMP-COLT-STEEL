/**
 * 
 * 
 * 
 */

 class Vehicle {
     constructor(make, model, year) {
         this.make = make;
         this.model = model;
         thisl.year = year;
     }
     start() {
         return "VROMM!"
     }
     toString() {
         `The make, model, and year are ${this.make} ${this.model} ${this.year} `;
     }
 }

 class Car extends Vehicle {
     constructor() {
         //super(make, model, year);
         super(...arguments);
         this.numWheels = 4;
     }
 }

 class Motorcylce extends Vehicle {
     constructor() {
         super(...arguments);
         this.numWheels = 2;
     }

 }


 /*================================ ============ =========== */


 class Parent {
     constructor(firstName, lastName, favoriteColor, favoriteMeal) {
         this.firstName = firtsName;
         this.lastName = lastName;
         this.favoriteColor = favoriteColor;
         this.favoriteMeal = favoriteMeal;
     }
     work() {
         return "GO TO WORK";
     }     
 }

 class Student extends Parent {
     constructor(firstName, lastName, )
 }