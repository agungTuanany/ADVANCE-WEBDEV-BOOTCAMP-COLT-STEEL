

========= OBJECTIVE =============


    1. Describe what the stack is

        . an ordered data structure

        . keeps track of function invocations

        . part of the JavaScript runtime(you don't acces it directly )


        . stack definition is
        
            .. an ordered set of stack frames 
            
            .. Most recently invoked function is on the top of the stack
            
            .. The bottom of the stack is the firts fucntion invoked
            
            .. The stack is processed form top to bottom
        

    2. Describe what a stack frame

        .The function that was invoked

        . the parameters that were passed to the function

        .tracking current line number

    3. Describe the Heap

        an a area in memory where the your data is stored


how your code changes the stack

    . Whenever you invoke a function, the details of the invocation are saved the top of the stack (pushed to the top)

    . Whenever a function returns, the information about the invocation is taken off the top the stack (popped off of the top) 

    ei. Stack
        
        1    function multiply (x, y) {
        2       return x * y;
        3
        4    }
        5       var res = multiply (3,5);

    stack : 1
        //invoke a main function which is var res
    
        5. function: main

    stack: 2
        // pop up function multipy 
        2. function: multipy // return x * y
        5. function: main

    stack: 3

        //pop up function multiply finished

        // result function multiply which 3 * 5 = 15 is finished
        //the 2. function release

        5.function: main 

    stack : 4 

        stack was empty.

        javaScript 



ei. a HEAP 
/**
the object is created inthe heap
obj is a reference to the object.
*/
    var obj = {
        firstName: "Jhon",
        lastName: "Doe"
    };
/**
new data is not created,
only a copy of the reference
*/
    var referenceCopy = obj;