/**
 * extractValue() which accept an array, and key
 * we gonna return the result of reducing this array
 * accumulator will start as an empty array
 * the callback will push into the accumulator 
 * each object of that key will return the accumulator
 * that we build up
 * remember not to return the push method
 * because it's return the new lenghth not a array it self
 */

	function extractValue(arr, key) {
		return arr.reduce(function(acc, next) {
		    acc.push(next[key]);
		    return acc;
		}, []);
	}


 /**
  * vowelCount() accept a string
  * we make a String vowels
  * then return the result by splitting the string by each 
  * character and reduce it's
  * accumulator it's start as an empty object.
  * firts thing is check to see 
  * if the character that we add is a vowel.
  * by doing indexOf() 
  * and make sure all each character
  * is to lower case by lowerCase()
  * if the character that we add is a vowel
  * then we check and see if the key exists in accumulator
  * and if does, will increment the value
  * otherwise we set the key in the accumulator 
  * and sign it to number "one (1)"
  * after the if statement we return accumulator 
  * so can be to iterate
  */

	function vowelCount(str) {
		var vowels = "aeiou";
		return str.split("").reduce(function(acc, next) {
		    if(vowels.indexOf(next.toLowerCase()) !== -1) {
		        if(next in acc) {
		            acc[next]++
		        } else {
		            acc[next] = 1
		        }
		    }
		    return acc;
		}, {})
	}

 
/**
* addKeyAndValue accept an array, key and value
* we return the result by reducing this array
* and accumulator will start
* as the array that will pass to this function
* inside the callback to reduce will access 
* each specific value at the index that we were add
* set the key inside of it to be whatever the value
* we pass to this function
* we return the accumulator 
* to make sure we building up of array of  object 
*/

	function addKeyAndValue(arr, key, value) {
		return arr.reduce(function(acc, next, idx) {
		    acc[idx][key] = value;
		    return acc;
		}, arr)
	}


/**
* partition() accept an array and a callback
* we try to reduce array inside the callbacck() 
* we going to see if the result of the callback
* at the value we're add it's true
* if it's we gonna to push it into 
* the separate array
* otherwise we pusshed into the second subbarray
* finally we return the accumulator 
* so it make sure we keep building up our array of arrays 
*/

	function partiton(arr, cb) {
		return arr.reduce(function(acc, next) {
		    if(cb(next)){
		        acc[0].push(next);
		    } else {
		        acc[1].push(next);
		    }
		    return acc;
		}, [[], []])
	}


