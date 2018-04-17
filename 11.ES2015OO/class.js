/**
 * Here we going to be going over solution 
 * to the class keyword exercise.
 * Here we need to refactor the constructor function from ES5
 * to use a new ES2015 'class' syntax
 * 
 * So we start with 'class' keyword 
 * and specified the name fo the class which is 'Person'
 * and place curly braces after
 * 
 * inside we'll define any method of the class
 * the first method we need to define is 'constructor' method
 * which accept 'firstName' ,'lastName', 'favoriteColor','favoriteNumber'
 * inside of here we place code very similiar 
 * to what we would have in contrutor function 
 * by assigned properties by the keyword 'this'
 * 
 * The second method we need to add to our class 
 * is an instance method called multiplyFavoriteNumber
 * which accept a parameter a 'number' (num)
 * and return that number multiplied by the favoriteNumber property
 * for every object created from this class using the 'new' keyword.
 * 
 * Inside of this instance method, we'll multiply 
 * the number pass the method and the favoriteNumber property
 * for the object where we invoking it on
 * 
 * 
 */

 class Person {
     constructor(firstName, lastName, favoriteColor, favoriteNumber) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.favoriteColor = favoriteColor;
         this.favoriteNumber = favoriteNumber;
     }
     // instance method, so not a static method
      multiplyFavoriteNumber(num) {
         return num * this.favoriteNumber;
     }

 }