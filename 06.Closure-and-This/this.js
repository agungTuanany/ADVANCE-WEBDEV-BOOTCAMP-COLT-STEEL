/**
 * arrayFrom function is accept arrayLikeObject 
 * here we going to return the result 
 * of invoking the silce method by using .call
 * so that the target of slice is not the array
 * but the array like objects
 * we can return this value
 * 
 */

function arrayFrom(arrayLikeObject) {
    return [].slice.call(arrayLikeObject);
}


/***
 * sumEventArguments 
 * make a variable which's result 
 * of converting the argument (newArgs) array like object into an array
 * you can even use your array from function that was just implemented
 * once we converted the argument array like object into an array
 * we can call 'reduce' on this array
 * and inside the callback to reduce() 
 * check and see if the next value is devisible by two
 * and if it's we return the accumulator (acc) plus to the next value
 * otherwise we just return the accumulator (acc)
 * and make sure we start from zero
 * 
 */

 function sumEvenArguments() {
     var newArgs = [].slice.call(arguments);
     return newArgs.reduce(function(acc,next) {
         if(next % 2 === 0) {
             return acc + next;
         }
         return acc;
     }, 0)
 }

 /***
  * invokeMax function accept a other function (fn) 
  * and number of time that can be call
  * declare a variabel call 'max'
  * and assigned it to zero
  * well then return another function
  * we going to be using "closure" to solve this problem
  * inside the inner function we check and see 
  * if max greater or equal
  * to the number that we pass in to invoke max
  * if so we return the string "maxed Out"
  * if not we increament max by one
  * and return the result the function being call with 'apply'
  * we don't care about the value of the keyword 'this'
  * so we just pass in whatever the value of keyword "this" is 
  * at that time, but we do want to use "apply" 
  * so that we can pass in the array of argument 
  * to the inner function.
  * remember arguments full refer to the arguments pass to
  * the inner function when it's invoke.
  * Every time a function gets created 
  * he gets his own keyword 'this' and it's own arguments
  */


  function invokeMax(fn, num) {
      var max = 0;
      return function() {
          if (max >= num) {
              return "maxed Out";              
          }
          max++;
          return fn.apply(this,arguments);
      }
  }


/***
 * 'once' function pass in other function (fn)
 * and some value for the keyword 'this'(thisArgs)
 * we declare variable "hasBeenCalled" and assigned it to false
 * and then return a function
 * once agaim we going use "closure" here
 * and in inner function will check and see if "hasBeenCalled" is false
 * and if it is, we will set it to "true"
 * and return of result the function that we pass once
 * being invoke using "apply".
 * Here we can specified that value of the keyword "this"
 * and pass the array like object (arguments)
 * 
 * 
 * 
 */


function once(fn, thisArg) {
    var hasBeenCalled = false;
    return function() {
        if(!hasBeenCalled) {
            hasBeenCalled = true;
            return fn.apply(thisArg, arguments)
        }
    }
}

/***
 * bind function pass in some function (fn)
 * and some value for the keyword 'this' (thisArg)
 * we creates variable "outerArgs"
 * which is the result of the arguments array like object 
 * being converted into an array
 * we going to do here pass the parameter to slice
 * we wanna collect the remaining to get pass to the bind function
 * we dont want the first parameter or the second parameter
 * we just want any remaining once.
 * and then returning a function
 * and inside in this inner function
 * we create variable "innerArgs" which is result
 * of converting the arguments array like object being converted into an array.
 * we create variable "allArg" where we can concatenated  
 * "outerArgs" with "innerArg".
 * The idea here is build of one large array of arguments 
 * which we can pass to "apply" 
 * so on the next line in this function
 * we going to return the result of the original function 
 * being invoke with "apply" as a first parameter
 * and passing in for the value of keyword "this" 
 * are second parameter to "bind"
 * and then as an array of argument
 * passing in both the outer and inner once. 
 * 
 * 
 */


function bind(fn, thisArg) {
    var outerArgs = [].slice.call(arguments,2);
    return function() {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArg);
        return fn.applly(thisArg, allArgs);
    }
}



/**
 * flips accept of parameter (fn)
 * and some value for keyword this (thisArg)
 * just like "bind" we going to collect the remaining argument
 * pass the "flip" by converting the array like argument( [] )
 * into an array and slicing from two.
 * and then we going to return anonimous function
 * and inside of this anonimous function we make
 * a variable "innerArg" which is result 
 * of converting the arguments array like object being converted into an array.
 * however we wanna make sure that we invoke our function 
 * with only the number of parameter specified, 
 * since we going to be calling the argument in reverse.
 * So in "allArgs" variable we will concatenate 
 * the "outerArgs" with the "innerArgs" 
 * but we're only going to make a copy starting from zero
 * to however many parameters the function that we pass the "flip" accepts
 * 
 * this part it's hard
 * all function actually have a property called ".length"
 * which return the number of a arguments that function accepts
 * we can use the ".length" to figure out exactly 
 * how many parameters are "allArgs" array should include.
 * 
 * Finally we can return result of invoking the function
 * using "apply" 
 * and as a first parameter (thisArgs)
 * specifying of value for keyword "this"
 * which we pass to "flip" function.
 * and as second parameter we'll use "allArgs" variable.
 * we just have to make sure we call ".reverse" 
 * on allArgs variable.
 * 
 * 
 * 
 * we create variable "allArgs" 
 * 
 */


function flip(fn, thisArg) {
    var outerArgs = [].slice.call(arguments,2);
    return function() {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerargs).slice(0, fun.length);
        return fn.apply(thisArg, allArgs.reverse());
    }
}