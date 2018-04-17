/**
 * we build a countDown function which accept 'seconds' as paramter
 * in here we know setInterval() and also know that setInterval need to stop 
 * so we save intervalId I pass in anonymous function here
 * and because this countDowm is gonna print every second   
 * I want this run every 1000 ms every second
 * 
 * next step we will substrack the number of second we got (second --)
 * So since this run after a second we will start of by subtracking
 * 
 * and then if my second is greater then zero
 * so i just wanna print the number right now with console.log('timer', seconds)
 * and otherwise i want to console.log('ring, ring, ring!!').
 * 
 * at this point we know we cont from zero
 * so we dont want to count down any more
 * I also want to clear my interval with pass in the IntervalId 
 * 
 * Remember our goal is to count the console.log()
 * 
 * 
 */

	function countDown(seconds) {
	    var intervalId = setInterval(function() {
		seconds --; //subtrack 

		if (seconds > 0) {
		    console.log("Timer: ", seconds);
		    
		} else {
		    console.log('ring ring ring !!!!');
		    clearInterval(intervalId);
		}
	    }, 1000);
	}

	countDown(4);

/**
 * 
 * Timer: 3
 * Timer: 2
 * Timer: 1
 * ring ring ring!!!!
 */
