
/**
 * smallestValue function accept variable of an argument 
 * and return the smallest arguments pass to the function
 * here we can use the 'rest' operator (...) 
 * to gather all the arguments to the function 
 * this will return an array to us.
 * so if we use Math.min on that array
 * we'll get back another number
 * so what we need to do is use 'spread' operator 
 * to spread out each of the values in the array 
 * pass to this function 
 */

 function smallestValue(...args) {
     return Math.min(...args);
 }

 /**
  * placeInMiddle function accepts an arrays and list of values
  * which is place in the middle of the array.
  * firts to do is to figure out where the middle of the array is  
  * by doing Math.floor and taking the array.length (arr.length)
  * and devide it by 2.
  * in order to place the value in an array
  * we can use the splice methods
  * and the first parameter for splice is the index we start at
  * which be our 'mid' variable 
  * the second parameter to place is how many parameter to be remove
  * which will be zero
  * the third parameter is a coma separates list of values to add
  * since we need to add an array of values 
  * we going to spread out this values as a third parameter to splice
  * and then return the array
  * 
*/

function placeInMiddle(arr, vals) {
    let mid = math.floor(arr.length / 2);
    arr.splice(mid, 0, ...vals);
    return arr;
}

/***
 * joinArray function  gonna using rest operator (...) 
 * accepts an list of arguments  call args.
 * and return the result of reducing the arguments 
 * and concatenating each value with the next one.
 * we'll be an our accumulator with an empty array
 * and keep concatenating as many arraya as pass to this function
 * notice we using arrow function to clean up this code
 * 
 * 
 */

function joinArray(...args) {
    return args.reduce((acc, next) => acc.concat(next), []);
}

//or

function joinArray(...args) {
    return args.reduce(function(acc, next) {
        return acc.concat(next);
    }, []);
}

/***
* sumEvenrArgs function will gonna use rest operator
* here we going to reduce and check and see 
* if next values it's divisble by two
* if it is we'll added to the accumulator
* otherwise we just return the accumulator 
*/

function sumEvenArgs(...args) {
    return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0);
}

//or 
function sumEvenArgs(...args) {
    return args.reduce(function(acc, next) {
        if (next % 2 === 0) {
            acc += next
        }
    }, 0)
    return acc;           
}

/***
 * flip function which except another function and a value for keyword 'this'
 * and to gather the remaining arguments pass to this function using 'rest' operator
 * and then we'll return another function 
 * were well gather all of the arguments again using 'rest' operator
 * and then we create a variable which will be the result 
 * of our outerArg (outer arguments) concatenated with the innerArg (inner arguments)
 * in order to make sure that we pass the correct amount of parameter
 * we're going to slice this entire of the arguments
 * and go up until just how many arguments are pass to the function that flip excepts
 * to do that we'll using the length property on the function pass the flip
 * finally we return all result of that function with correct value of the keyword 'this'
 * using 'apply' and pass in as a second parameter all of our arguments reverse
 * 
 * 
 */

 function flip(fn, thisArgs, ...outerArgs) {
     return function(...innerArgs) {
         let allArgs = outerArgs.concat(innerArgs).slice(o, fn.length);
         return fn.apply(thisArgs, allArgs, reverse());
     }
 }

 /**
  * final exercise we implementing a bind function
  * which will accept some other function and a value for keyword 'this'
  * and then we'll to gather remaining arguments using rest operator (...)
  * and return a function where were gather the inner arguments as well.
  * well then we return the result of the function and pass the bind using 'apply'
  * and as first parameter we pass in a value of keyword 'this'
  * and then in array of the outer and inner concatenated together
  * 
  */

function bind(fn, thisArg, ...outerArgs) {
    return function(...innerArgs) {
        return fn.apply(thisArgs, [...outerArgs, ...innerArgs]);
    }
}
