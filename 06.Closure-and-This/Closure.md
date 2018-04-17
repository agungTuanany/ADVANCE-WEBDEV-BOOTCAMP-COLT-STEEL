


            === OBJECTIVES === 


1. Understand what a clousre is and what it is not

    A closure is a function that makes use of variables defined in other 
    that have previosly returned.

    what does that mean? sometimes an example is worth 1000 words (or slides) 

2. Use a closure to emulate private variable

3. List use cases for closure in the real world



== Example CLOSURE ==

/**

*/

    function outer() {
        var start = 'Closure are'
        return function inner() {
            return start + " " + "awesome";
        }
    }


    // just invoke outer function 
    outer()

    ~Result :
        Function inner() {
            return start + " " + "awesome"
        }

    //invoke inner function right away.
    outer()()

    ~Result :
        "Clousre are awesome"


How this inner function have acces to start variable? 
the outer function has return, that is a closure.




ei. 2 

A couple things to note here :

    .- We have to 'return' the inner functiuon for this to work

    .- We can either call the inner function right away by using an extra ()
        or we can store the result of the function in a variable

    .- We do NOT have to give the inner function a name-we can make it anonynmous
    (We just called it 'inner' for learning purpose)

    .- CLOSURE exists when an inner function make uses a variable define the outer function 
        that has return


        funtion outer(a) {
            return function inner(b) {
                // the inner function is making use of the variable 'a'
                // which was defined in an outer function called 'aouter'
                // and by the time inner is called, that outer function has returned
                // this function called 'inner' is a closure !!

                retrun a+b;
            }
        }


outer(5)(5); 
~Result : 10

var storeOuter = outer(5)
storeOuter(10);
~Result : 15




== Using Closure int The Wild ==


On of the most common of cases use CLOSURE is to create a private variable,  
 private variable it's a variable it's only can be acces in certain scope, and not modified in external scope.



    function counter() {
        var count = 0;
        return function inner() {
            count++;
            return cont++;
        }
    }

    var counter1 = counter(); // undifined


counter1() // invoke counter1 variable.
// function inner() {
//  count++;
//  return count;
//}


counter1() invoke counter1 
//1


counter1() //2
// make a new variable
var counter2 = counter() // undifined

counter2() // 1
counter2() // 2

// counter2 variable does not modfied counter2 variable, 
// since each of this function have own private count variable. 




    count // reference error.


making a ClassRoom function
make a variabel call instructor which an array have two string
then  returning object with a method call getInstructors
which return the instuctor an array
and then method addIstructor which accept parameters 
and add that parameter to the instructor an array. 
and then return the array of instructor 

this is module pattern 


    function classRoom() {
        var instructor = ['Elie', 'Colt'];
        return {
            getInstructors: functions() {
                return instructors;
            },
            addInstructor: functions() {
                instructor.push(instructor);
                return instructor;
            }
        }
    }


    car first = classRoom() // undifined
    first.getIntructor() // (2) ["Elie". 'Colt']
    first.addInstructor('Matt') // (3) ["Elie", "Colt", "Matt"]
    first.addIntructor('Tim') // (4) ["Elie", "Colt", "Matt", "Tim"]
    course2 = classRoom() // undifined
    course2.addInstructor('New') // (3) ["Elie", "Colt", "New"]
    first.getInstructor() //(4) ["Elie", "Colt", "Matt", "Tim"]
    first.getinstructor().pop // 'Tim'
    firts.getInstructor() // (3) ["Elie", "Colt", "Matt"];


// there's a way directly to manipulate the instructor variable 

if we were directly to remove a value from the output of getInstructor we can actually modifiy the instructor array.
what i do here is call method pop(),
and if i call the getInstructor() again, will see i have remove the value from the array.. how we prevent this?
When you start learn functional programming and working with library like REACT and REDUX will be introduce a concept 'EMMUTEABILITY'  which mean you cannot change the value of something.
To create that idea,  we will return a copy of instructors of array.  
and not the acctual array some one can accidentaly or even intennatioanly manipulate.
in order to do that we order to invoke a silce method on our output so we copy array.
which will stop some one modifiying our instructure variable now thius variable will completely private.



== RECAP ==

    .- Closure exist when an inner function makes use of variables declared in an outer function which has previosly returned.

    .- Closure does not exist if you do not return inner function and if inner function does not make use of variables returned by an outer function

    .- javaScript will only remember values that are being used inside of the inner function, not all variables defined in the outer function.

    .- We can use closures to create private variables and write better code that isolates our logic and application.

    -- in the closure.js we've create it a clasroom function that return an object that use closure it's fondation to very popular design pattern known module pattern 
