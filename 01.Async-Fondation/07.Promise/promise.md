
========= OBJECTIVE =============

1. Define a promise

2. add a.then callback to a promise

3. add a.catch callback to a promise

4. wrap a setTimeout call in apromise

5. Describe the disadvantages of using nested callbacks

6. Return a promise from a.then callback function

7. Use a promise to make asynchronous code seem sequential

==========================================



-- promise  (conceptual) is 

an object that represet a task that will be completed in the future

analogy : taking an number at a goverment office before you can get helped. The piece of paper you get is like your promise. The help you get at the counter is like the invocation of your callback.


-- add a.then is

-- add a.catch is 
    to catch an error

1. represet : mewakili, menggambarkan, menyatakan, menerangkan


ei. 1 promise

	var p1 = new Promise(function(resolve, reject) {
	    resolve([1,2,3,4,5]);
	});

	p1.then(function(arr) {
	    console.log('promise p1 resolve with data: ' arr);
	});

 in this exampel p1.then is defining the callback 
 will be invoked when resolve is invoke inside the promise

ei. 2 promise : handling erros


	var p1 = new Promise (function(resolvem reject) {
	    reject('ERROR');
	});

	p1.then(function(data) {
	    console.log('promise p1 resolved with data: ' , data);
	}).catch(function(data) {
	    console.log('promise p1 was rejected with data: ', data);
	});


ei. 3 Promise With Randomly Occuring Errors

	var p1 = new Promise(function(resolve, reject) {
	    var num = Math.random();
	    if (num < 0.5) {
		resolve(num);
	    } else {
		reject(num);
	    }
	});

	p1.then(function(result) {
	    console.log("Success: ", result);
	}).catch(function(error) {
	console.log("Error: ", error);
	});


ei.4 Wrap setTimeout with Promise

	var promise = new promise(function(resolve, reject) {
	    setTimeout(function() {
		var randomInt = Math.floor(Math.random() * 100);
	    }, 4000);
	});

	promise.then(function(data) {
	    console.log("Random int passed to resolvbe: ", data);
	})



eg. 5 Nested Ascync Callbacks that doesn't use promise

// this code is a bad sample, when code get bigger its hard to maintain the code.
	 
	var counter = 0;
	 setTimeout(function() {
	     counter++;
	     console.log("counter: ", counter);
	     setTimeout(function() {
		 counter++;
		 console.log("counter: ", counter);
		 setTimeout(function() {
		    counter++;  
		console.log("counter: ", counter); 
		 },3000);
	     },2000);
	 },1000);



eg.5 Nested Ascync Callbacks use promise

	 var promise = new Promise(function(resolve, reject) {
	     setTimeout(function() {
		 randomInt = Math.floor(Math.random() * 10);
		 resolve(randomInt);
	     }, 500);
	 });

	 promise.then(function(data) {
	     console.log("Second random int passed to resolve: ", data);
	     return new promise(function(resolve, reject) {
		 setTimeout(function() {
		     resolve(Math.floor(Math.random() * 10));
		 },3000);
	     });
	 }).then(function(data) {
	     console.log("Second random int passed to resolve: ", data);
	 });


eg.6 Refactor Nested Callbacks


1.  creat a function Declaration (definition)

	 var counter = 0;
	 function inCounter() {
	     conter++;
	     console.log("Counter: ", counter);
	 }

2. Create a runlater Function

	function runLater(callback, timeInMs) {
	    var p = new Promise(function(resolve, reject) {
		setTimeout(function() {
		    var res = callback();
		    resolve(res);
		} timeInMs);
	    });
	    return p;
	}

3. Chain promises

	runLater(incCounter, 1000).then(function() {
		return runLater(incCounter, 2000);
	}).then(function() {
		return runLater(incCounter, 3000);
	}).then(function() {
		// final '.then' not necessary
	})
	
	
