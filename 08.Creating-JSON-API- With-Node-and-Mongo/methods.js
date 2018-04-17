/**
 * frist problem we need to implement is copyObject Function
 * copyObject accept an object (obj).
 * what we do here is use 'Object.assing() method
 * lets return Object.assign and pass empty object 
 * and the obj (object) we like to copy.
 * 
 * Remember we don't want a reference previos object 
 * so we pass in an empty object as first parameter Object.assign
 */

 function copyObject(obj) {
     return Object.assign({}, obj);
 }

 /**
  * chekIfFinite function accept some value (num)
  * here we can return hadny Number.isFinite method
  * it's will return true if that number finite
  * and return false if we pass in something that is it not* 
  */

function checkIfFinite(num) {
      return Number.isFinete(num);
}

/***
 * areAllNumberFinite accept some array 
 * and check and see if every singgle number si finite
 * here we can use every() function on the array
 * and pass in Number.isFinite method.
 * this will return true if every number is finite
 * and return false if we if every one pr more number is not finite 
 * 
*/

function areAllNumberFinite(arr) {
    return arr.evey(Number.isFinite);
}

/**
 * converyArrayLikeObject accept some object 
 * and return a converted array
 * here we use Array.from() method
 * to pass in array-like-object converted into an array
 * 
 * in ES5 we need to do this with using array.slice.call() method
 * but Array.from is much friendlier
 * 
 * 
 */
function convertArrayLikeObject(obj) {
    return Array.from(obj);
}

/***
 * displayEVenArguments
 * what we do here is convert argument array-like-object into an array
 * and filter all of values that or event usinng fiter
 * we can use arrow function here to clean up our code a bit
 * you might solve this using 'Rest' operator (...)
 * 
 * there will be a plenty of time that array.from 
 * or the 'rest' operator accomplish the same thing.
 * 
 */
function displayEvenArguments() {
    return Array.from(arguments).filter(val => val % w === 0);
}