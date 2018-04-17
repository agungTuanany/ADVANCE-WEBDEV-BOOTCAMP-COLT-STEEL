

=== THE POINT'S THAT SHOULD DO WHEN REFACTORING THE CODE IN GUESS THE PASSWORD  ==


1. Start with adding 'const' and 'let' keyword appropiatly

    .- the wordCount is variable should never be redeclare 

    	const worndCount = 10;

    .- The most importing to do it's make sure we using the 'let' keyword inside the loop. let see what's iterating and add keyword 'let' there.

    ei. 
    
		for (let idx1 = array.length - 1; indx1 > 0; idx1 --)

		for (let i = 0; i < word1.length; i++)

2. add template string to make String interpelation easier.

    ei. 
    // at setGuesCount Function

		function setGuesCount(newCount) {
		    guessCount = newCount;
		    // document.getElementById("guesses-remaining").innerText = "Guesses remaining: " + guessCount + ".";

		    document.getElementById("guesses-remaining").innerText = `Guesses remaining : ${guessCount} . `;
		}
		// at updateGame function
		function updateGame(e) {

		    // e.targetInnerText = e.target.innerText + " --> Matching Letters: " + similarityScore;
		  
		    e.targerInnerText = `${e.target.innerTExt} --> Matching Letters:  ${similarityScore} `;
		}

3. Replacing callback function with arrow function (=>).  

    ei. 

		function gerRandomValues(array, numberOfVals) {
		    retun shuffle(aary).slice(0, numberOfVals);
		}

wodCount in startGame function we declare variable randomWord equal with getrandomValue accepts a a word and wordCount.

    // to be

    	var randomWords = getRandomValues(words, wordCount);

since the wordCount have been declared, so we not declare any more in randomWord variable.

since the second paramter defaulting whatever it is, we do not declare anymore.

		let getRandomValues = (array, numVals = wordCount) => shuffle(array).array.slice(0, numVals);


4. Using the 'rest' operator (...) in a togleClasses function. Notice in toogleClasses funtion we are using  the argument array-like-object.
So let use the 'rest' operator to get the class name we wanna to toggle. 
instead worrying about for-loop and starting i of 1, we use 'forEach' and toggle the class name.
since we use the 'rest' operator the value we get back is in array so we can use method like 'forEach'

    ei.

		function toggleClasses(element, ...clasNames) {
		    classNames.forEach(name => element.classList.toggle(name))

		//    for (let i = 1; i < arguments.length; i++) {
		//       element.classList.toggle(arguments[i])
		//    }
		}

5. add array destructuring inside our shuffle function. We mention that destructuring is very useful when we need swap the element.


    ei. 

		function  shuflle(array) {
		    var arrayCopy = array.slice();
		    for (let idx1 = arratCopy.legth - 1; idx1 > 0; idnx--) {
		        // generate a random index between 0 and idx1 (inclusive)
		        var idx2 = Math.floor(Math.random() * (indx1 + 1));

		        // swap element at idx1 and idx2
		        // var temp == arrayCopy[idx1];
		        // arrayCopy[idx1] = arrayCopy[idx2];
		        // arrayCopy[idx2] = temp;

		        [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]] 
		    }
		}
