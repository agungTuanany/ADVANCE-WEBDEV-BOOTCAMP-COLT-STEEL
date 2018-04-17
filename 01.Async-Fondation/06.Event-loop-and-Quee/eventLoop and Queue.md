

========= OBJECTIVE =============

1. Define the event loop and the queue

2. Describe how the event loop and the queue work with the stack

3. define JavaScript as single threaded language.

================================================


-- The Queue is 

An ordered list of function waiting to be placed on the stack

Functions in the queue are processed on a first in, out basis (FIFO).

-- Event loop is

Functionality in JavaScript runtime that checks the queue when the stack is empty

if the stack is empty, the front of the queue is placed in the stack


-- Single Threaded is

code execution is linear. code that is running cannot be interupted by something else going on in hte program.


/eg. 

1        setTimeout (function() {
2            console.log('hello World');
3        }, 0);


// stack 

stack1

// invoke setTimeout to the stack
// function setTiemout called

    1 setTimeOut
    3 function: main

/now stack was empty with event loop.




/eg. 2

function square(n) {
    return n * n;
}

    setTiemout(function() {
        console.log('callback is placed', 'on the queue');
    },0);

    console.log(square(2));

 common error:
    most of when you invoke setTimeout in a 0 second it's doesn't run immidiatly it's when stack is empty 