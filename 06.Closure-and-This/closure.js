/**
 * specialMutiply are gonna be pass in 2 parameter 'a' and 'b'
 * first we check to see if only one argument has beeb pass to this function 
 * using the argument array like object 
 * if only one parameter has been pass to this function
 * we're going return this function with singgle paramater 'b'
 * inside in this inner function we make a closure return 'a' times 'b'
 * closure exist here because parameter 'a' is part of special multipy function 
 * which has return by time are inner function is using it
 * 
 * if we pass more one parameter to this function
 * we should just return 'a' times 'b'
 * 
 */

 function specialMultiply(a,b) {
     if(arguments.length === 1) {
         return function(b) {
             return a * b;
         }
     }
     return a*b;
 }

/**
 * guessingGame function we are to be declare a couples variables 
 * and accept the parameter called 'amount'
 * first will be an 'answer' which is be a random number from zero and ten
 * we can do this by using 'Math.floor' and 'Math.random' to find that number
 * 
 * well then we initialize another variable call 'guesses' and assign it to zero
 * and then initialize variable call 'completed' and assign it as boolan which value is false
 * 
 * all this variable will be use inside inner function
 * and by the time that inner function is run
 * the outer function will have to return
 * 
 * Inside in the inner function that we'll return
 * will accept the parameter called 'guess'
 * which will be some user input
 * 
 * the first thing we gonna do is
 * if completed is false we'll continue
 * otherwise we'll return a string says 'All done playing'
 * 
 * now lets increment guesses by one
 * because if this function has been run, guesses has been made
 * 
 * now lets check and see if 'guess is an answer
 * and if so will say completed to be true
 * and return guess function a string 'You got it!'
 * 
 * 
 * if the guess is greater then the answer will return a string 'your guess is too high'
 * else if the guess is last then the answer will return a string 'your guess is too low'
 * finally if the guess is same with the amount is allow well set completed to true
 * and return a string to 'No more guesses and let user now the answer was'
 * 
 * 
 */

 function guessinggGame(amount) {
     var answer = Math.floor(Math.random() * 11);
     var guesses = 0;
     var completed = false;
        // guess is some user input
     return function(guess) {
         if(!completed) {
             guesess++
             if(guess == answer) {
                 completed = true;
                 return "You got it!"
             }
             else if(guess > answer) return "Your guess is to0 high"
             else if(guess < answer) return "Your gess is too low"
             else if(guess === amount) {
                 completed = true
                 return "No more Guesess the answer was " + answer;
             }
         }
         return "All done playing"
     }
 }