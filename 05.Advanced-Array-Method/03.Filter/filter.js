/**
*Sudo Code: 

* function filter(array, callback) {
    var newArr = [];
    for(var i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
 return newArr;
}
 * 
 */


/**
 * filterByValue
 * 
 * checking to see that each object 
 * has the key were we looking for
 * and if it does that object will be include it
 * in the new array the filter return.
 * notice here we using bracket notation 
 * cause JavaScript to evaluate the key
 * 
 */

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undifined;
    });    
}


/** 
 * since filter arr return to us
 * we wanna return the first things in that array
 * so we gonna directly acces this at index [0]
 * if filter array is empty
 * this function will return undifined
 */

 function find(arr, searchValue) {
     return arr.filter(function(val) {
         return val === searchValue;
     })
     [0];
 }


/**
* findInObj its accept some array,
* key, and searcValue
* we wanna filter a value at specific key 
* when its same as the search value
* we will acces this at index [0]
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })
    [0];
}


/**
 * removeVowels its accept a string
 * 
 * 
 * convert the string to lower-case 
 * and split it each character into an array 
 * so we can filter it 
 * inside the callback we can check to see 
 * if that characeter we are add is inside of the vowels string
 * using indexOf
 * if it's not we would add it to the filter array
 * finally we will joint this array back to the string
 * with all the vowels all remove
 */

 function removeVowels(str) {
     var vowels = "aeiou";
     return str.toLowerCase().split('').filter(function(val) {
         return vowels.indexOf(val) === -1;
     }).join('');
 }


 /**
  * doubleOddNummer accept an array
  * filter the array
  * and return the value that not devisible by two
  * and then we gonna map over all this array 
  * and return the new array wich array muliply by two
  * 
  */

  function doubleOddNumbers(arr) {
      return arr.filter(function(val) {
        return val % 2 !== 0;
      }).map(function(val) {
          return val * 2;
      });
  }
