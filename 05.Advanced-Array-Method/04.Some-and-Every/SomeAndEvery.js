/**
 * hasOddNumber function which accept an array
 * here use some function to see that one value
 * that not devisible by two
 * inside the callback val mod two not equal zero
 */

 function hasOddNumber(arr) {
     return arr.some(function(val) {
         return val % 2 !== 0;
     });
 }

 
/***
* hasAzero() accept a number 
* and see it contain any zero
* convert number toString and split it
* by each digit
* here we use some method to see there is 
* single character that is a zero
* since each of this value is string
* so we just to make sure we comparing 
* each value with a string zero
*/

  function hasAZero(num) {
      return num.toString().split('').some(function(val) {
          return val === '0';
      });     
  }


/**
 * hasOnlyOddnumbers function accept an array
 * use every method to iterate over each value
 * to make sure that every single one not divisible by two
 * and inside at callback will return the expression is not 
 * divisble by two
 * 
 */

 function hasOnlyOddNumbers(arr) {
     return arr.every(function(val) {
         return val % 2 !== 0;
     })
 }


/**
* hasNoDuplcates accept an array
* use every mehod to see a indexOf a value
* is the same of LasIndexOf value
* it's to make sure the indexOF value it's the same
* from at the beginning and form the end
* this will ensure there's no duplicate valu
* at different indexes 
*/

   function hasNoDuplicates(arr) {
       return arr.every(function(val) {
           return arr.indexOf(val) === arr.lastIndexOf(val);
       });
   }


/***
* hasCertainKey() accept an array, key, 
* using every method to iterate thrue the array
* and make sure the key is in each object 
* where iterating over
* using the 'in' keyword to see if a key
* is inside of an object
* 
*/

    function hasCertainKey(arr, key, ) {
        return arr.every(function(val) {
            return key in val;
        });
    }

/**
 * hasCertainValue function accept an array, key
 * and searchValue, 
 * iterate thrue the array and check to see
 * if every value at specific key it's the same
 * as the searchValue
 * we need to use bracket notation 
 * so the JavaScript can evaluate key variable
 * and not hard coded to the string key 
 * 
 */

	 function hasCertainValue(arr, key, searchValue) {
		 return arr.every(function(val) {
		     return val[key] === searchValue;
		 });
	 }











