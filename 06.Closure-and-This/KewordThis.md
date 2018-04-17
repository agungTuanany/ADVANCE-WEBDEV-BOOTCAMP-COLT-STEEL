            == Objectives ==

1.  Define what the keyword 'this' is

    .- a reserved keyword in JavaScript

    .- usualy determinied by how a function is called (what we call 'execution contex')

    .- can be determined using four rules (global, object/implicit, explicit, new).

    .- in JavaScript every time that the funtions is run two special keyword are given to that function. (a) 'argument' keyword (b) keyword 'this' it's important to know that every time that a function is run the keyword 'this' is define for that function



2. Understand the four ways to always figure out what the keyword "this" is

    1. Global Context

    when "this" is not inside of a declared object. by the mean is outside of declared object. declared object is there's not been an object literal define which contain the function which uses the keyword 'this'. You can also think as when the keyword 'this' in the wild, when we see in the global context it's value refers to global object which in browser is the 'window' object. Infact maybe you didn't know every variable that you declared in global scope it's actually attach to window object.

        /**
        example 1 global

        we put the keyword 'this' inside of the function,
        it's value is still global object.
        Remember the global rule applies 
        unless inside of the declared object
        it's inside of the function right now.
        wo when we call a function whatIsThis() 
        the value return as a window object
        */

            function whatIsThis() {
                return this;
            }

            whatIsThis(); // window.



        /**
        example 2 global contex

        a global object = window object

        we attach the property onto the keyword "this".
        when it's value is  global object.
        and just a reference when  i say global object i mean a window object
        as an aside JavaScript environment the value of the global object will be different
        inside our variable in this function 
        we are attaching the property onto keyword 'this' call "person" and 
        sending it to 'Elie'
        since the keyword 'this' refer to global object
        anything we attach onto a global object becomes a global variable
        which mean we can use it outside of this function
        that might seen that some thing we might wanna do,
        but it's acctualy very bad practice
        */

            function variableInThis() {
                this.person = "Elie"
            }
            variableInThis() // the keyworld this inside the function is the window
            console.log(person); // elie



        /**
        example 3 global contex

        make a function mistake().
        and inside set a property 
        on keyword this call badIdea
        and assigned to the string 'oops!'
        now I'm going to call that function
        and I have acces to my badIdea variable
        I just created a global variable from the function 
        */

            function mistake() {
                this.badIdea = "oops!"       
            }

            mistake(); // undifined

            badIdea; // "oops!"



        /**
        in ES-5 previous of JavaScript something call a 'strict mode' with add it
        to help try to write a better JavaScript code.
        when strict mode is enable 
        you can see of the top here use strict with double code
        the value of the keyword 'this' inside of the function undifined'
        */

            // "use strict"

            console.log(this); //window

            function whatIsThis() {
                return this;            
            }
            whatIsThis();// undifined
            


        /**
        example more

        when "strict mode" enable
        the value of keyword 'this'
        when inside of the function is undefined
        this mean if we to attach attach the property on to 
        the keyword 'this' when in strict mode
        we get a 'TypeError'.
        */
        //"use strict"
            function variablesInThis() {
                // since we are in strict mode 'this' is undefined 
                // so what happens if we add a property on undefined?
                // let's see what happens when we call the function.
                this.person = "elie"
            }
            variableInThis(); // typeError, can't set person on undefined



    2.  Implicit/ Object binding

    implicit : tersirat, mutlak, yang harus dipatuhi
    binding  : mengikat, 

    is a State when the keyword 'this' is found inside of a declared object, a value of the keyword 'this' is always the closes parent object


        /**
        example 2. implicit/Object

        in this example
        we have a person object with a key parameter 'firstName' and 'SayHi'
        and 'determineContext'
        lets start with the sayHi method. Inside of this function 
        we are returning the value of the string "Hi" 
        concatenated with a value of FirstName property 
        on the keyword 'this',
        since we see of the keyword 'this' is inside of declared object
        we look of the closes parent object to figure out 
        what keyword 'this' refers to, 
        we can see the close parent object is person variable,
        which means the keywords 'this' refers to person object.

        now examine the determineContext method. 
        this dunction should return true or false
        notice we using triple equals which always evaluate to a boolean?
        what do you thinks will return?
        think about of were you see the keyword 'this'. is inside or outside
        of declared object, and is there a function 
        that is creating a keyword 'this'
        we see that the keyword 'this' inside the person object.
        which mean that should be a person object, so this expression should always return true.

        keyword 'this' is reference to the close of the parent object
        which is mean is 'person'
        */

            //stric mode does NOT make a difference here

            var person = {
                firstName: "Elie",
                sayHi: function() {
                    return "Hi" + this.FirstName;
                },
                determineContext: function() {
                    return this === person;
                }
            }

        
            // what should the keyword 'this' refer to here?

            var person = {
                firtsName: "Elie"
                determineContext: this;
            }

            person.determineContext; // window

        /***
        the answer:

        cause the keyword 'this' is define when a function is invoke,
        since there is no a function been run here to create a new value of keyword 'this',
        the value keyword'this' is still be a global object.

        in otherword A keyword 'this' is defined when a function is run! 
        There is not a function being run to create anew value of the keyword "this" 
        so the value of 'this' is still the window!.
        */ 



    3. Explicit / Object binding
    
        explicit : jelas, terang, gamblang, tegas

        .- Choose what we want the context of "this" to be using 'call', 'apply', or 'bind'.

        .- this three method only can be invoke on a function.

    
        === Explicit Binding ==

    
        -=- Recapt funtion definition -=-

            function firstFunction() {
                return 'hello';
            }

            firstFunction;

            ~return : 
            
            functionfirstfunction() {
                return 'hello';
            }
    
        /**
        'bind' is extremely powerfull function as we can save function
        with different value of the keyword 'this' and call them at al leader point in time. 

        This is quite valueable when working with a asynchoronous code
        like setTimeOut and it's a building block for more advance functional programming technique's like  
        */


        1- call() method 

            .- is what you want the value 'this' to be. 

            eg: thisArg, a, b, c, d, // invoke immediately

    
            == example 'call' ==

            var person = {
                firtsName: "Colt", 
                sayHi: function() {
                    return "Hi" + this.FirstName;
                },
                determineContext: function() {
                    return this === person;
                },
                dog: {
                    sayHello: function() {
                        return "Hello" + this.firstName;
                    },
                    determineContext: function() {
                        return this === person;
                    }
                }
            }

            person.sayHi(); // "hi colt"
            person.determineContext(); // true

            // this an error

            person.dog.sayHello(); // "hello undifined"
            person.dog.determineContex() // false. 


            // to fix this just add .call

            person.dog.sayHello.call(person) // 'Hello colt'
            person.dog.determineContext.call(person) // true


            /**
            NOTICE that we do NOT invoke sayHello or determineContext
            comonly 'call' use to avoid code duplication

            try look for example below :
            */

                var colt = {
                    firstName: "Colt",
                    sayHi: function() {
                        return 'Hi' + this.firstName;
                    }
                }

                var elie = {
                    firtsName: 'Elie'
                    // look at this duplication
                    sayHi: function() {
                        return 'Hi' + this.FirstName;
                    }
                }

                colt.sayHi(); // hi Colt
                elie.sayHi(); // hi Eli (but we had to copy and paste the function from above)

                // RESOLVE
                var colt = {
                    firstName: "Colt",
                    sayHi: function() {
                        return 'Hi' + this.firstName;
                    }
                }

                var elie = {
                    firtsName: 'Elie'
                }

                colt.sayHi(); // hi Colt
                colt.sayHi.call(elie); // Hi Elien 

                // RESOLVE
                // make a sayHi function for anyone!

                function sayHi() {
                    retrun 'Hi' + this.firstName; 
                }

                var colt = {
                    firstName: "Colt"
                }

                var elie = {
                    firstName: "Elie"
                }


            sayHi.call(colt); // Hi Colt
            sayHi.call(Elie); // Hi Elie

            // one function for many use cases - awesome!


            == Another Use case For Call ==

            Lets imagine we want to select all the 'divs' on a page;

                var divs = document.getElementsByTagName('divs');

            How can find all the divs that have the text "Hello"? Using 'filter' would be nice!.

                divs.filter // undefinied

            unfortunately, divs is not an array, it's am array like object so filter won't work.
            so how can convert an array-like--object into an array?
            very similiar to the way we make copies of arrays-using slice!.

                array.slice() method.

            "call" to the rescue!

            let's use slice method on arrays, but instead of the target of slice (the keyword this) being that array,
            let's set the target of the keyword 'this' to be our divs array-like-object.

                var divsArray = [].slice.call(divs);

                // you might also see this as Array.prototype.slice.call(divs)
                // they do the same thing

                divsArray.filter(function(val) {
                    return val.innerText === 'Hello';
                });

            What we are doing is trying to slice something that is not actually an array! in JavaScript, slice will not work om all data types, but it works very well on array-like-objects.

            

        2- apply() method

            .- 'apply' only take two parameter at most.

            eg: thisArg,[a,b,c,]  // invoke immidately

                .- the first parameter just like call().

                .- the second paramater it's array argumnet that we wanna pass the function that we wanna change's the value of the keyword 'this'


            == Another Use case For Apply ==

            /**
            Here we concatenating the vale of firtsName to with the string "just calculated" 
            and the sum of four number wich refer to the addNumbers function.
            if we wanna use the addNumber function and set the keyword this to "colt" or to "elie" we can use 'call' or 'apply', 
            in order to pass argument using to the function use 'call' we separete them with a comma. 
            when we use 'call', the argument is pass (1,2,3,4) seperated by comma,

            in a case 'apply'  we pass all the argument as value in one array.
            looks very similar to 'call',  instead comma seperate value as argument, we put them inside all of one array.
            */

                function addNumbers(a,b,c,d) {
                    return this.firstName + " just calculated " + (a+b+c+d);
                }
                var colt = {
                    firstName: "Colt"
                }
                var elie = {
                    firstName: "Elie"
                }
                addNumber.call(elie,1,2,3,4) // Elie just calculated 10


            == When to Use 'APPLY' ==

            when a function doesn't accept an array as a parameter 'apply' will be usefull, 'apply' will spread out values in an array for us.


            /**
            lets imagine that we have an array of the number we want to figure out the highest number in that array.
            Math.MAx() doesn't accept an array, it's just accept a list coma seperated value. 
            if we pass an array to Math.max we getback not a number
            however if we use 'apply' we can pass an array of values and they will be spread out, 
            in the case below we dont care about explecit setting the value of keyword 'this'
            we just care about spreading in array of the values out

                var nums = [5,4,1,4,2];
                Math.Max(nums); // NaN
                Math.max.apply(this, nums); // 7



            an other example, if we pass an array we dont get the output we want.
            But if we use 'appl' to seperate the values we get the correct output.

                function sumValues(a,b,c) {
                    return a+b+c;
                }
                var values = [4,1,2];

                sumValues(values); // "4,1,2 undefinedUndifined"
                sumvalues.apply(this, values)
                */


        
        3- bind() method

            .- bind returning function definition the value keyword 'this' allready set to what you past as a first parameter to the bind() method 


                eg: thisArg,A,b,c,d // not invoked immediately

            == bind() examples ==

            ei.1 bind()

                function addNumbers(a,b,c,d) {
                    return this.firstName + " just calculated " + (a+b+c+d);
                }

                var colt = {
                    firstName: "Colt"
                }

                var elie = {
                    firstName: "Elie"
                }

                var elieCalc = addNumber.bind(elie, 1,2,3,4); // function() {}

                elieCalc() // elie just calculated 10

                // Wtih bind we do not need to know all the argument up front!.
                var elieCalc = addNumbers.bind(elie,1,2) // function(){}
                elieCalc(3,4); // Elie just calculated 10


            when it's 'bind' usefull? if we do not know all the argument that will be past to a function,
            which mean we do not want to invoke function right away, we just wanna return a new function
            with some parameter we call this "partial application"
            the asynchronous a setTimeOut is a method on the window object
            that it's use to execute a functuion once after a specify a mount of time, 

                setTimeout(function() {
                    console.log('Hello world!')
                }, 2000)

            
            == Bind in the Wild ==

            very commonly we lose the contex of 'this', but in functions that we do not want to execute right away!

                var colt = {
                    firstName: "Colt",
                    sayHi: function() {
                        setTimeout(function() {
                            console.log("Hi" + this.FirstName)'
                        }, 1000);
                    }
                }

                colt.sayHi(); // hi undifined (1000ms later)

                //use 'bind' to set the correct contex of 'this'
            /**
            inside of the 'colt' object in the sayHI() method
            the value of the keyword 'this' refers to the 'colt' object,
            instead of the keyword 'this' you can pass in the variable 'colt' to the bind() method  you get same result.
            but if we were to change the name of the variable "elie" our entire function will be break.
            */

                var colt = {
                    firstName: "Colt",
                    sayHi: function() {
                        setTimeout(function() {
                            console.log("Hi" + this.FirstName)'
                        },bind(this), 1000);
                    }
                }



    4. NEW() method

        .- We can set the context of the keyword "this" using the "new" keyword-it does quite abit more as well which we will discuss further when we talk about OOP

            ei. new() method

            function person(FirstName, LastName) {
                this.FirstName = firstName;
                this.LastName = lasName;
            }

            var elie = new person ("Elie", "Shcoppik);

            elie.firstName;// "Elie"
            elie.lastName; // "schoopik"


        .- A 'new' keyword is reserve keyword which does quite view things

        .- A "new" keyword is use with the function. And inside "function definition" the keyword "this" will refer to the new object that is created.

        .- finally when the "new" keyword is use in implicit return "this" is added  to the function which use it. 




3. try as hard as possible not to use the word "this" in a sentece


    ,- keyword 'this' is fondation of Object Oriented Programming


        var data = {}; // undifined

        data;  // object{}

        data.unstrutor = 'Elie'; // elie

        data // object{instructor : "Elie"}

    
   
 == Nested objects ==
    /**
    the value of the 'dog' key is actually another object. 
    inside the'dog' object we have a key of 'sayHello' 
    which is a function that return a string "Hello" concatenated
    with the value of the 'firstName' property on the keyword 'this'.
    using the two rules for determining of the keyword 'this' 

    Q:
    inside of sayHello function what a keyword 'this' refer to? The person object, the dog object, or a global object?.

    A: 
    lest go back to first rule which state of the keyword 'this' 
    is not inside of the declared object it will be a global object.
    howeever we see the keyword 'this' is inside of declared object
    call person. 

    So go to second rule, the implicit binding.
    the implicit binding state that the value of the keyword "this"
    will always to be the closes parent object
    event thought the delcared object is 'person', there's object inside
    call dog, which's closes parent object to the sayHello method.
    so the keyword 'this' refer to the dog object, 
    what is the 'dog.firsName' object value? 
    since the dog object haven't a key firstName? The value will be undifined
    so when we invoke 'sayhello' method; by typing .dog.sayhello() we can see return 'hello undifined'.
    */


        var person = {
            firtsName: "Colt", 
            sayHi: function() {
                return "Hi" + this.FirstName;
            },
            determineContext: function() {
                return this === person;
            },
            dog: {
                sayHello: function() {
                    return "Hello" + this.firstName;
                },
                determineContext: function() {
                    return this === person;
                }
            }
        }

    person.sayHi(); // "hi colt"
    person.determineContext(); // true

    person.dog.sayHello(); // "hello undifined"
    person.dog.determineContex() // false.


-=- Recap CALL, APPLY, BIND -=-

.- use to explicit value of keyword 'this'  

.-we use them when we want a full control over what the value keyword 'this' will be.

.- it's has presedence over the first two rules 

.- call and apply will invoke the function that they are calldown immediatly

.- bind it's will return a new function definition that value of the keyword this explicitly set

.- call and bind except infinite a number of paramter wher 'apply' only take two paramer.



== RECAP ==

we saw the bind() method return the 'function defenition' unlike "call" and 'apply' and it's usefull for setting the values keyword 'this'  when we do not know what all the values of the argument would be or when we are working with asynchronous code.

This a kind of question you get ask in interview and code when you working of production code bases as well as with larger and complex  framework like Angular and React

== Exercise Solution CALL APPLY BIND ==
loot at 


== RECAP ALL KEYWORD "THIS ==

-- The keyword 'this' is a reserved keyword in JavaScript and its value is determined at execution.

-- It is either set using the "global context", "object binding", "explicit binding", or the "new" keyword

-- When set in the global context in a function, it is either the global onject (window if in the browser) or undifined (if we are using strict mode)

-- To explicitly set the value of the keyword "this", we use "call", "apply", or "bind".

-- we can also use the "new" keyword to set the context of "this", which we will discuss when we talk about Object Oriented Programming,













