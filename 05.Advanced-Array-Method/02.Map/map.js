/**
 * Sudo code:
 * function map(arr, callback) {
    var newArr = [];
    for(var i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i, array));
    }

    return newArray;
}

 */

 function doubeleValues(arr) {
     var mapped = arr.map(function(val) {
         return val * 2;
     })
     return mapped;
 }
/**
 * 
 * see the different between,
 * at the upside calling method map() with new var
 * at the bottom side is directly return calling method map() that 
 */

 function doubleValues(arr) {
     return arr.map(function(val) {
         return val * 2;
     })
     
 }
/**
 * valTimesIndex,  
 * map over the array 
 * return a new array
 * with each value multiply by the index
 * so all return result all mapping over this array
 * and then inside the callback function
 * i accept the value and the index
 * and return the product of two numbers
 * 
 * 
 */
 
function valTimesIndex(arr) {
     return arr.map(function(val, idx) {
         return val*idx;
     })
 }

 /***
  * iterate  over an array of object 
  * and return a new array
  * just a specific key 
  * so i map over the array 
  * and return each object at the specific key 
  * im looking for
  * using bracket notation to access a key 
  * instead of that notation because we need 
  * a JavaScript to evaluate that variable
  * and not look for a key with a name of key
  * 
  * 
  */

  function extractKey(arr, key) {
      return arr.map(function(val) {
          return val[key];
      })
  }

/***
 * iterate over an array of obbject
 * and return a new array
 * of the firts and last property  
 * concatenated together, 
 * so map all over the array 
 * and return the first property on each object
 * and the last property of val object
 */

 function extractFullName(arr) {
     return arr.map(function(val) {
         return val.first + " " + val.last;
     })
 }
