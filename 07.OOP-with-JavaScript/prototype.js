

/***
 * 
 * we need to add a property onto the object created 
 * from our constructor function
 * call family 
 * this.family is empty array, 
 * we wanna make sure we don't place this property on the prototype object
 * because we do not want to share by every single object 
 * created from the Person constructor when 'new' keyword is use.
 */

 function Person(FirstName, lastName, favoriteColor, favoriteNumber) {
     this.FirstName = firstName;
     this.lastName = lastName;
     this.favoriteColor = favoriteColor;
     this.favoriteNumber = favoriteNumber;
     this.family = [];
 }

 Person.prototype.fullName = function(person) {
     return this.firstName + " " + this.lastName;
     
}
/**
 * add a function to Person prototype call addToFamily
 * which will add an object constructed from the person constructor
 * to the family array
 * 
 * we have hint here we can use the instance of operator
 * to make sure 
 * that the object is created from certain constructor function
 * and we also have to make sure that we don't include duplicate
 * 
 * the function addToFamily will accept the parameter
 * that we will call person
 * firts check to se if this.family.indexOf(person) is negative one
 * we wanna make sure that the person is not allready in a family array
 * 
 * we want to make sure that our person parameter has been created from Person constructor
 * so we'll use instanceof operator for that part
 * 
 * if both this condition are true
 * we'll push the person into this.family
 * and return this.family.length
 */

Person.prototype.addToFamily = function(person) {
    if(this.family.indexOf(person) === -1 && person instanceof person) {
        this.family.push(person);
    }
    return this.family.length;    
}

/***
 * implement the "map' method that exist in the array.prototype
 * we'll define function call map on array.prototype
 * which will accept one parameter is a callback function
 * 
 * remember the array we mapping over will be the keyword 'this'
 * inside the function we create a new array (newArr)
 * and in 'for loop' iterate starting from zero,
 *  untill 'i' is last then this.length
 * this reverse to the array we calling map on
 *
 * after each iteration  we'll increment 'i' by one 
 * and inside of the loop we'll 'push' in 
 * the result of callback
 * with value, index and array
 * when we done iterting we return a new array
 * 
 * as a note is a litle different 
 * then JavaScript native implementation of map
 * as map is litle bit more under the hood that what we have
 * map actualy  accept a second paramter
 * we can specify the value with keyword 'this'
 * just note that our implementation of "map"
 * is not interly complete
 */


Array.prototype.map = function(callback) {
    var newArr = [];
    for(var i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

/***
 * we need add a method call 'reverse' onto the 'String.prototype'
 * arrays have build in reverse so why we not make once for 'String'
 * we could do this using somethings like 'split', 'reverse', and 'join'
 * I'm gonna take it a different way
 * so you see another possible solution
 * 
 * I make a new variable 'newStr' and assigned to be empty string (' ')
 * I'll then start iterating from the end of the string
 * that we are calling reverse on
 * I'll keep looping as loong 'i' is greater then or equal to zero
 * and decerement 'i' by one after each iteration
 * inside the loop I'll add onto the new string (newStr) the carachter 
 * that i made in the loop
 * which be the last character up to the first character
 * when done looping I'll return a new string in reverse
 */


String.prototype.reverse = function() {
    var newStr = '';
    for(var i = this.length -1; i >= 0; i--){
        newStr += thsi[i];
    }
    return newStr;
}


