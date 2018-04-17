

/***
 * create a constructor function for a person, 
 * each person should have firstName, lastName, 
 * favoriteColor, favoriteNumber.
 * and declared person with capital 'P'
 * so the other developer should know
 * the person is a construtor function 
 * 
 * inside this function will attach four property 
 * onto the keyword "this".
 * 
 * 
 * next we need to write a method multiplyFavoriteNumber 
 * that takes in a number
 * and return the product of that number 
 * and the person favoriteNumber.
 * So we add a method to the constructor function
 * and said this.multuplyFavoriteNumber is assign to a function
 * which accept to a number.
 * and return a number multiplied 
 * by the favoriteNumber property for that person
 * which can access using this.favoriteNumber.
 */


 function Person (firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.multiplyFavoriteNumber = function(num) {
        return num * this.favoriteNumber;
    }
}


/**
 * passing Parent constructor parameter to Child constructor 
 * 
 * we invoke parent function with .apply
 * as the first parameter to  'apply' will pass in keyword 'this'
 * The idea is keyword 'this' is refer to an object
 * that will be created when the child function is run
 * using the 'new' keyword.
 * So we need to make we get right value of the keyword 'this'
 * Since we using 'apply' we can simplly pass in the second parameter
 * the 'arguments' array like object.
 * 
 * if we using 'call' we pass in the argument separates by coma.
 * 
 * 
 */


function Parent (firstName, lastName, favoriteColor, favoriteFood) {
    this.firstName = firstname;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

 function Child (firstname, lastName, favoriteColor,favoriteFood) {
     Parent.apply(this, arguments);
 }

//or

 function Child (firstname, lastName, favoriteColor,favoriteFood) {
    Parent.call(this, firstname, lastName, favoriteColor, favoriteFood );
}
