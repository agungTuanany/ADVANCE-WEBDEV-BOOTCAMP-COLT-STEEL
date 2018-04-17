=== OBJECTIVE ===

	.- build in method in JavaSCript that can help produce code duplication

	.- fondation material to understanding introduction functional programming. 

	.- fondation material to understanding the complex library and framework like REACT 


method foreach,

=== forEach Method === 

	1. iteraes through an array invoked
	2. Runs callback function on each value in the array
	3. return 'undefined'
	 

== for each ALWAYS return undifined ==

if return forEach on variabel or a function you still get a result undifined


== anatomy of forEach ===



	[1,2,3] >> array

	.forEach >> method

	function() >> calback function

	(value, index, array) >> parameter value
		1. each value in the array
		2. each index in the array
		3. the entire array


the callback function will be executed 3 times since there are 3 values in the array

	.- we can call the parameter to the callback whatever we want!

	.- we do not always need all three parameters, use whicheer ones you need. just remember the order is important!


this is the sudo code
	
	[1,3,3].forEach(function(value, index, array) {

	})

example in real world

	var arr = [1,2,3];

	arr.forEach(function(value, index, array) {
		console.log(value);
	})


~Result :
// 1 0 > (3) [1,2,3]
// 2 1 > (3) [1,2,3]
// 3 2 > (3) [1,2,3]
// undifined


== implementing ===

.- function that doesn't have a return keyword always output undefined


	function forEach(array, callback) {
		for (var i = 0; i < array.length; i++) {
		    callback(array[i], i, array); //invoked a callback
		}

	}

== Using forEach in a function ==

	function hafValues(arr) {
		var newArr = [];
		arr.forEach(function(val) {
		    newArr.push(val / 2);
		})
		return newArr;
	}


	halfValues([2,4,6]);

	~ Result 
	[1,2,3]


=== MAP ===

	. create a  new array

	. Iterates through an array

	. Runs a callback function for each value in the array

	. Adds the result of that callback function to the new array

	. Return the new array.


== map ALWYAS returns a new array of the SAME length ==


== map example == 

	var arr = [1,2,3];

	arr.map(function(value, index, array) {
		return value * 2;
	});


== how does it work ==
. Creates a new array
. iterates through an array
. Runs a callback function for each value in the array
.Pushes result of the callback function to the new array
. Return the new array


== implementing ==

	function map(arr, callback) {
		var newArr = [];
		for(var i = 0; i < array.length; i++) {
		    newArr.push(callback(array[i], i, array));
		}

		return newArray;
	}

== Using map in a function ==

why you don't use for each for solving?

	1. map return a new array byself
	2. for each can be use for overwrite the value in an array or changes somethings externally

but when you want a new array to be return to you especially as same length map should always be use

	function tripvalues(arr) {
		return arr.map(function(value) {
		    return value * 3;
		});
	}

	function onlyFirstName(arr) {
		return arr.map(function(val) {
		    return val.first;
		});
	}

onlyFirstName([{first:'Jhone',last:'doe'},{{first:'clara',last:'lane'}]);

~ Result : ['Jhone', "clara"]


=== FILTER ===

	. Creates a new Array
	. Iterates through an array
	. Runs a callback function on each value in the array
	. If the callback function returns true, that will be added to the new array
	. If the callback function return false, that value will be ignored from the new array


== The result of the callback will ALWAYS be a boolean ==


ei. Filter Example

	var arr = [1,2,3];

	arr.filter(function(value, index, array) {
		// no need for and if statement
		// just return an expression 
		// that evaluate to true or false

		return value > 2;
	})

~ Result : [3];



ei.second example Filter

	var instructor = [
		{name:"elie"}
		{name:"tim"}
		{name:"colt"}
		{name:"matt"}

	];

	instructor.filter(functions(value, index, array) {
		return value.name.length > 3;
	});

~Result [{"Elie"},{"tim"},{"colt"}]


== Filter implementing ==

	function filter(array, callback) {
		var newArr = [];
		for(var i = 0; i < array.length; i++) {
		    if(callback(array[i], i, array)) {
		        newArr.push(array[i]);
		    }
		}
	 return newArr;
	}


=== Using filter in a function ==

	function onlyFourLetterNames(arr) {
		return arr.filter(function(value) {
		    return value.length === 4;
		})
	}

	onlyFourLetterNames(["Rusty", "Matt", "Moxie", "Colt"]);

~ Result : ["Matt","Colt"]

	function divisibleByThree(arr) {
		return arr.filter(function(value) {
		    return value % 3 === 0;
		})
	}

	divisibleByThree([1,2,3,4,5,6,7,8,9]);

~ Result [3,6,9]


== when filter is usefull ===

	.- wich one the tweet that have a 10 favorite.

	.- anytime you want take an array and remove a certain value base in a condition filter is excellent options


=== SOME ===

	.- iterates through an array
	.- Runs a callback on each value in the array
	.- If the callback return true for at least one single value, return true
	.- otherwise, return false

== The result of the callback will ALWAYS be a BOOLEAN ==

ei. SOME 

some doesn't return a new value of an Array

	var arr = [1,2,3];

	arr.some(function(value, index, array) {
		retunr value < 2;
	;});


== implementing SOME in real world ==

	function some(array,callback) {
		for(var i = 0; i < array.length; i++) {
		    if(callback(array[i], i, array)) {
		        return true;
		    }
		}
		return false;
	}

	function hasComma(str) {
		return str.split('').some(function(value) {
		    return value === ",";
		});
	}

hasComma('This is wonderful'); // false
hasComma("This, is wonderful") // true


=== EVERY ===

	.- iterates through an array
	.- Runs a callback on each value in the array
	.- If the callback return false for any single value, return false
	.- otherwise, return true
	.- EVERY is more strict from SOME

== The result of the callback will ALWAYS be a BOOLEAN ==


ei. EVERY

every value in this array is less then zero so every() will return array is true

	var arr = [-1, -2, -3];

	arr.every(function(value, index, array) {
		return value < 0;
	});

	//true


every value in this array greater then two so every()  will return array is false

	var arr = [1,2,3];

	arr.every(function(value, index, array) {
		return value > 2;
	});

	//false


== implementing EVERY in real world ==

sudo code

	function every(array, callback) {
		for(var i = o; i < array.length; i++) {
		    if(callback(array[i], i, array) === false) {
		        return false;
		    }
		}
		return true;
	}
 

== Using EVERY in a Function ==

	function allLowerCase(str) {
		return str.split("").every(function(value) {
		    return value === value.toLowerCase();
		});
	}

	allLowerCase("this is really nice");// true
	allLowerCase("this is Really nice"); // false


	function allArrays(arr) {
		return arr.every(Array.isArray);
	}

	allArrays([[1], [2], [3]]); //true
	allArrays([[1], [2], {}]); // false


=== REDUCE ===

	.- Idea behind the REDUCE is take an array so we  turn in another data structure like a STRING, a NUMBER, an OBJECT, or an ARRAY OF ARRAY.

	.- accepts a callback function and an optional second parameter

	.- itereates through an array

	.- runs a callback on each value in the array

	.- the first parameter to the callback is either the first value in the array or the optional second paramater

	.- the firs paramater to the callback is often called "accumulater"

	.- the returned value from the callback becomes the new value of accumulator.


== Whatever is returned from the callback function, becomse the new value of the accumulator ==


/**
. [1,2,3] >> an array

. ,reduce >> method

.function() >> callback

. (accumulator, NextValue, Index, array)

. accumulator >> firts value in array or optional second parameter

. nextValue >> second value in array or first if optional second paramenter is passed

. index >> each index in the array

. array >> the intire array

*/

	[1,2,3].reduce(function(accumulator, nextValue, index, array) {


	// whatever is returned inside here, will be the value of accumulator in the next iteration

	}, optional secon parameter);


== REDUCE using In String ==


	Var names = ['Tim', 'Matt','Elie', 'colt'];

	names.reduce(funtcion(accumulator, nextValue) {
		return accumulator += ' ' + nextValue;
	},'The instructor are');


== How About Objects? ==

	var arr = [5,4,1,4,5];

	arr.reduce(function(accumulator, nextValue) {
		if(nexValue in accumulator) {
		    accumulator[nextValue]++;
		} else {
		    accumulator[nextValue] = 1;
		}
		return accumulator;
	},{});


== Using REDUCE in a Function ==

	function sumOddNummbers(arr) {
		return arr.reduce(function(accumulator, nexValue) {
		    if(nextValue % 2 !== 0) {
		        accumulator += nextValue;
		    }
		    return accumulator;
		}, 0);
	}

	sumOddNumbers([1,2,3,4,5]); 

	~Result : 9;



	function createFullName(arr) {
		return arr.reduce(function(accumulator, nextValue) {
		    accumulator.push(nextValue.first + " " + nextValue.last);
		    return accumulator;
		}, []);
	}

	createFullName([{first:"Colt", last:"Stelle"}, {first:"Matt", last:"Lane"}]);

	~Result : ["Colt Stelle", "Matt Lane"]



== RECAP ==

	.- forEach() iterates over an array, runs a callback() on each values and returns undifined

		--

	.- map() creates new array, runs a callback() on each value and pushes the result of each callback() in the new array

		-- MAP always return a new array in same length as the array was call on

	.- filter() creats a new array, runs a callback() on value and if the result of the callback() return true, that value is added to the new array

		-- callback() to FILTER will always evaluated to be a bolean  since FILTER need to know wheter or not at the value to new array

	.- some() iterates through an array and runs a callback() on each value, if the callback() for at least one value returns true. SOME return true, otherwise false

		-- callback() to SOME will always evaluated to be a bolean since SOME need to know wheter returns true or not.

	.- every() iterates through an array and runs a callback() on each value(in the array). if the callback() (for every single value return true EVERY return true) at any time returns false, EVERY returns false.

		-- callback() to EVERY will always evaluated to be a bolean since EVERY need to know wheter return true or not.

	.- reduce() (iterate through to an array) returns an  accumulated value which (start) is determined by the result of what is returned to each callback.

		-- callback to REDUCE accept 4 parameter, whatever it's return to callback() of REDUCE become the value of the accumulator in next iteration. 



