/*
findIndex Definition:
  is a Return the index of the first element in the array
  for which the callback returns a thruthy value.
  -1 is returned if the callback never return a truthy value
  */

/**
 ei 1. A number
 make a callback function

 reaction 1 (3, 0, array) result is false
 reaction 2 (4, 1, array) result is false
 reaction 3 (5, 2, array) result is false
 reaction 4 (6, 3, array) result is true

 end loop.
 */

var arr = [3,4,5,6,2,1];

finIndex(arr, function(num, index, array) {
  return num === 6;
});

//returned result is index 3.


/**
 example 2.
 reaction 1 (5, 0, array) result 5 % 2 = 1 it's false
 reaction 2(11, 1, arrau) result 11 % 2 = 1 it's false
 reaction 3(13, 2, array) result 13 % 2 = 1 it's false
 reaction 4(8, 3, array) result 8 % 2 = 0 it's true
 end loop.
 */

var arr = [5, 11, 13, 8, 6, 5];

findIndex(arr, function(num, index, array) {
  return num % 2 === 0;
});

//returned result is index 3.


/*
 example 3. Could not find findIndex

 reaction 1 ('java', 0, arr) result false
 reaction 2 ('c++', 1, arr) result false
 reaction 3 ('ruby', 2, arr) result false
 reaction 4 ('python', 3, arr) result false

 end loop caouse aray not found the assignment lang ==== 'javaScript'.
 */


var langs = ['java', 'c++', 'ruby', 'python'];
finIndex(langs, function(lang,index,arr) {
  return lang === 'javaScript'
})

// returned result is index -1,


/*
 ei. 4.a bad Callback example in common case

 this callback funtion doesn't return anything,
 in a function in javascript if we don't return anything is will be undifined.
 which is always falsy
 */
var langs = ['java', 'c++', 'ruby', 'JavaScript'];
finIndex(langs, function(lang,index,arr) {
  langs === 'JavaScript';
});


/*
ei.5. finIndex Solution
*/
function finIndex(arr, callback) {
  for  (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }//end of for loop
  return -1;
}
