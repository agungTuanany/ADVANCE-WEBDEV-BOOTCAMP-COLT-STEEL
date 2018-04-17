/**
 * dipalyStudentInfo function accpets an object
 * Inside of this object
 * we destructure the key 'frst' and 'last '
 * and return a string with template string
 * to clan up our code
 * 
 */


 function displayStudentInfo(obj) {
     var {first, last} = obj;
    return ` Your full name is ${first} ${last} `
 }

/***
 * printFunllName function destructure from the parameter
 * So we place an object with the key 'first' and 'last' 
 * as a parameter to the function
 * inside in this function we retrun 'you full name with 
 * template string 
 */

 function printFullName({first, last}) {
     return ` Your full name is ${first} ${last} `
 }


/***
 * createStudent function is pass in destructure object
 * has a default parameter with the key 'likeJavaScript' and a value of true
 * and the key 'likeES2015 wtih the value of true.
 * we also to make sure the all paramater key was assigned to an object with a cruly bracess,
 * 
 * so we write a conditional logic
 * we make a variable 'start' which vale as string called 'The student'
 * we write a conditionla logic to see likeJavaScript and likeESA2015 are both true
 * if so (true) we concatenate to a string 'like Javascript and ES2015'.
 * if likeJavaScript is true we simply just add a string 'like JavaSCript'.
 * if likeES2015 is true we simply just add a string 'likees ES2015'
 * otherwise if non of this condition are tre we just add the string ' does not like much ..'
 * and the last do not forget to retrun to 'start' 
 */

 function createStudent({likesJavaScript = true, likeES2015 = true} = {}) {
     var start = 'The student';
     if(likesJavaScript && likeES2015) {
         start += ' likes JavaScript and ES2015'
     } else if (likesJavaScript) {
         start += ' likes JavaScript!';
     } else if (likeES2015) {
         start += ' likes ES2015!';
     } else {
         start += ' does not like much...'
     }
     return start;
 }


/**
 * reserveArray function accept an array use desctructuring to swap the array
 * we start with creating a loop
 * and start to initializing variable 'i' to zero
 * while loop as long with length divided by two
 * since we going to start from begining end end
 * we only to need grow up to the middle
 * well then increament 'i' by one for each iteration
 * inside of the loop we going to take the value of 'i' in array
 * and a value of array.length minus 1 minus 'i'
 * which will start very end and go towards to the middle
 * and we assigned to the opposite.
 * what we doing here is desctructuring the array
 * and swaping the value from beginnning to the end 
 * and working our way to the middle.
 * when done looping we return the array. 
 */

 function reverseArray(arr) {
     for(var i = 0; i < arr.length / 2; i++) {
         [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]] 
     }
     return arr;
 }