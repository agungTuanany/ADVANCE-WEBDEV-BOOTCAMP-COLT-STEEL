

/**
example stack in real world

we make 2 function which is upperCaseFirst function
and function upperCaseWords

upperCaseFirst accept a 'word' as parameter
and return some value are which is assign to count the 'word' from an array
concatenated with 'toUpperCase()' method
and slice the 'word' with 'slice()' method

upperCaseWords accept a 'sentence' as parameter
we make a variable 'words' and assign it to split the sentence
and split accept an empty string (' ').
we doing 'for-loop' to count the variable 'words' 
from an array index of 'words.length', and increment the index
inside the for-loop we call the upperCaseFirst function 
to count the variable 'words' of which accept the 'sentence' of index

and before the last we return the function with word.joins() method
which accept an empty string as a sentence. 

at least we call upperCaseWords() which accept a sentence values is "Lowercase Words"

*/
 
function upperCaseFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function upperCaseWords(sentence) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = upperCaseFirst(words[i]);
    }
    return words.joins(" ");
}

upperCaseWords("Lowercase Words");


/*
// the stack is

    stack 1: 

        //invoke main function 

        20 function: main
        
    stack 2: 
        
        //invoke upperCaseFunction
        12 function     : upperCaseWords
        20 function     : main

    stack 3: 
        // the machine still in line 12
        // calling a split function
        ? function      : split 
        13 function     : upperCaseWords
        20 function     : main


    stack 4:

        //the machine still in line 12
        // after the split function was done to breack into an array
        // split function was release from the stack
        13 function  : upperCaseWords
        20 function : main

    stack 5: 
    
        // function upperCaseWords has done 
        // move on to line number 15 that invoke upperCasefirst
        //  calling a upperCaseFirts function 
        // the 'l'  is gonna be change to capital 'L'
        // that couses the function invocation
        //so uppercase will be place on th up of the stack



        ?   function    : toUpperCase
        9.  function    : upperCaseFirst
        15. function    : upperCaseWords
        20. function    : main

    stack 6. 
        //invoke slice
        // return new string uppercase
        //popup the stack when get finished



        ?.  function    : slice
        9.  function    : upperCaseFirst
        15. function    : upperCaseWords
        20. function    : main

    stack 7.
        // we get both the first letter and the rest of the string
        // we gonna concatenated together
        // function upperCaseFirst was finished

        9.  function    : upperCaseFirst
        15. function    : upperCaseWords
        20. function    : main

    stack 8.


        // back to line number 15 words waiting previos result
        // that lower case of capital 'L'

        15. function    : upperCaseWords
        20. function    : main

    stack 9 

        // move out to number 17
        // result uppercase done get poppepup
        ?   function    : join
        15. function    : upperCaseWords
        20. function    : main


    stack 10

    //  done with function join
    // done with function upperCaseWord

        20. function    : main

        
    stack 11.

    // done with the main function
    // stack was clean

    //the result was all the letter come to lower case

    result : "lowercase words"


*/

/*
    this is how the stack in machine work.
    its lilte bit complicated.
    but when you was usualy writing and keeping your eyes
    that will not to be complicated at all.
*/