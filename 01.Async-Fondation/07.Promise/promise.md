## OBJECTIVE

![Promise.basics-1.gif](./images/Promise-Basics-1.gif)

### 1. Define a promise

So what is promise?

![Promise-basiscs-1.jpg](./images/Promise-Basics-1.jpg)

You getting back an object that isn't the solution to your problem but will be
the solution in the future (in -Analogy).


#### Define a promise | Creating a Promise

Here is an example of creating a Promise:

![Promise-basiscs-2.jpg](./images/Promise-Basics-2.jpg)

First we are using the promise constructor, the constructor takes a single
**callback** function, that function has **2** parameter, either a **result**
function or **reject** function. So our asynchronous task will decide weather
not to call or invoke **resolve** or **reject** depending on how the asynchronous
task goes.

So if the asynchronous task completely successfully **resolve** will be invoke,
but if it didn't complete successfully or there is some error **reject** will be
invoke. Now once we have create this **Promise** we have the object as **p1**.

The next thing what we want gonna do is **define** a callback in the **.then**
function. So with this

    p1.then()

We're defining this a **callback** that will be invoke when **resolve** is in
invoke inside of the promise.

So

    ([1,2,3,4])

Get pass in into this invoke, then you can see here the console.log

    Promise p1 resolved with data, [,arr]

Lets take look in console.

![Promise.basics-2.gif](./images/Promise-Basics-2.gif)

So I've got my promise **p1 (1)**, and I'm gonna specified **.then** callback which
will invoke this callback function.

(**2**) as you can see **p1** is resolved with data **[1, 2, 3, 4]**, so this
console.log came from with (**3**) inner function inside of them.


### 2. Add ".then" callback to a promise | Promise: Handling Errors

Our previous example only handle the successful promise, so only handle the case
were **resolve** was invoke, but **reject** can also be invoke from the promise.

So in this example (**1**), we've got the same promise setup, we're creating
a new **Promise** and we have either **resolve** function we can invoke or
**reject** function, here we invoking **reject (2)**.

(**3**) When reject is invoke with in the **Promise**, none of the **.then**
will be invoke, so instead (**4**) **.catch** section. **Catch** is the
callback that will be invoke whenever **reject** is invoke with in the
**Promise**.

![Promise.basics-3.gif](./images/Promise-Basics-3.gif)

(**5**) So in this example, we only see Promise **p1** was rejected with data:
**ERROR** in the console. And where that **ERROR** come from? Well just like
before.

(**6**) When we invoke reject the string that replace in (**7**) here, will be
pass in into this callback in the **catch (8)**, so (**9**) our **data** here,
is going equal to string error that was pass from **reject (10)**, and then will
be console.log here (**11**) in our console.


### 3. Add ".catch" callback to a promise | Promise: With Randomly Occurring Errors

In this example, we combining both, the **resolve** and **reject**, here we have
50/50 change of either invoking **resolve** or invoking **reject** depending
what ever **random()** number return.

![Promise.basics-4.gif](./images/Promise-Basics-4.gif)

(**2**) so if **resolve** is invoke will pass that number, that randomly
generated, (**3**) and we should see on the console **Success** and what ever
number was.

(**4**) If we get the number greater then **0,5** (**5**) and **reject** is
invoke, (**6**) then  well see console.log **Error** and we'll see what ever
value get there.

So lets see this running in the console:

Because we using a random number here, we don't know if we get a **Success** or
an **Error**, lest take a look.

(**2**) We get success which mean our random number **0.254..** and **resolve**
it was invoke.

![Promise.basics-5.gif](./images/Promise-Basics-5.gif)

 (**9**) So we got a number that was greater then **0.5** which then invoke
 **reject** and we got an **Error**: **0.7911..**.

### 4. Wrap a setTimeout call With  Promise

In this example, that actually use asynchronous code, so all the example we've
seen so far, don't really have asynchronous component where either invoking
**resolve** or **reject** right away. But here we've got **setTimeout** inside
the **Promise**.

So this promise will be created and **setTimeout** will be invoke, and then
**4** second later will invoke **resolve**.

![Promise-basiscs-3.jpg](./images/Promise-Basics-3.jpg)

So now you can see the beauty of the promise, event thought this code won't have
finish running yet, will have an object already we can attach callback on to.

So this promise object will immediately will return, event though the **setTimeout**
doesn't done and **resolve** has not been called. And then we can decide what
callback function we wanna add to **".then"**.

So inside this **.then** function we providing this callback which will
console.log **"Random int passed to resolve", (randomInt)** we've got.

Lets see how this look in the console.

So we've got our code here, remember this promise will be created first before
the **setTimeout** finishes and return **resolve**.

(**2**) When I hit enter here, we've got our promise, and we gonna wait **4**
second before we see the result.

So think about the **Stack** again, all this function are off of the stack
before this **setTimeout** get invoke and then **resolve** get invoke, which one
turn **caller** callback function.

## Promise Chaining | Objectives

![Promise-Chaining-1.gif](./images/Promise-Chaining-1.gif)

### 5. Describe the disadvantages of using nested callbacks

####  Describe the disadvantages of using nested callbacks | Example

![Promise-Chaining-2.gif](./images/Promise-Chaining-2.gif)

So in this example, we got some messy situation, we're trying to have a callback
that depend with another callback. (**1**) in this **setTimeout** we going to
console.log the **Counter**, and once that done we wanna kick off another
**setTimeout** (**2**), but once that done so once we increment (**3**) our
**counter++** again and then displayed, we wanna kick off yet another (**4**)
**setTimeout**.

So the solution you might come up with this point, is just continually put more
callback inside of callback, and this is just a small example, you can take
a problem could end up having **10** or **12** level of **nesting** which is
really-really difficult to read. (**5**)So this code when we run it well first
print (**6**) with **1** second, and then **2** second later (**7**) will print
two, (**8**) and then **3** later it will print three.

Let's see this code running in console.

![Promise-Chaining-3.gif](./images/Promise-Chaining-3.gif)

So lets talk what wrong with writing code this way, why is that bad?

![Promise-Chaining-4.gif](./images/Promise-Chaining-4.gif)

(**2**) In that small example you might be able to follow, but once get bigger
and more complicated it's get really difficult to understand what going on.

(**3**) Sort in same pain, So when code get messy it's get hard to understand
exactly what going on and really takes you long time to sort of grasp what code
it does.

(**4**) The real problem is a there's a lot duplication here, but we don't have
a great way of putting it into separate function but once we use **promises**
we'll see how to do that.

Before we talk about refactoring, we need to understand the **important
concept** with promises called **Promises Chaining**.

So **Promise Chaining** is allow multiple **.then** functions to be chain to
a promise, and the really need thing is if a previous callback inside **.then**
return a promise, the next callback inside **.then** will be waiting with that
previous promise to be **resolve**.

![Promise-Chaining-5.gif](./images/Promise-Chaining-5.gif)

(**1**) So in this case we've got a promise to get **resolve** in **500**
millisecond.

(**2**) and this first **.then** will be waiting for that promise to finish.

(**3**) now inside that callback we returning a new promise that **resolve** in
**3000** millisecond.

(**4**) and the next **.then** will be waiting on this (**5**) to finish.

Alright this important one, lets take a look on the console again.

![Promise-Chaining-6.gif](./images/Promise-Chaining-6.gif)

(**3**) I see "Random int passed to resolve: 3"  from my first callback (**4**)

(**5**) and **3** second later I will see "Second random int passed to resolve:
6" from my (**5**) second callback.

(**7**) now lets change the value and see what we get after that. So I make the
first **setTimeout** **3000** millisecond.

(**8**) and I make the second value from promise **.then** chain make something
quick like **500** millisecond.

(**10**) as you can see the first promise take **3** second.

(**11**) and half second later we get the second promise.

So really cool features we can combine asynchronous task into a **chain
promisess**.














### 6. Return a promise from ".then" callback function

### 7. Use a promise to make asynchronous code seem sequential

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


//1.  creat a function Declaration (definition)

	 var counter = 0;
	 function inCounter() {
	     conter++;
	     console.log("Counter: ", counter);
	 }

//2. Create a runlater Function

	function runLater(callback, timeInMs) {
	    var p = new Promise(function(resolve, reject) {
		setTimeout(function() {
		    var res = callback();
		    resolve(res);
		} timeInMs);
	    });
	    return p;
	}

//3. Chain promises

	runLater(incCounter, 1000).then(function() {
		return runLater(incCounter, 2000);
	}).then(function() {
		return runLater(incCounter, 3000);
	}).then(function() {
		// final '.then' not necessary
	})
	
	
