        == OBEJCTIVES ==

1. Understand what the prototype object is


2. Describe and diagram the relation between _proto_, prototype, and constructor

    /*
    as a guide cirlce is a 'function' and a square is a 'object'


    .- Every constructor function (in JS) has a propery on it called "prototype", which is an object

    .- The prototype object has a property in it called "constructor", which points back to constructor function 

    .- Anytime an object is created using the 'new' keyword, a property called "_proto_" get created linking the object and the prototype property of the constructor function

    */


3. add method and properties on the prototype object to write more effecient code.



4. Explain the differences between adding methods and properties to the prototype versus the constructor function


5. Implement inheritance in JavaScript through the prototype object.







== The Prototype Chain ==


// this is the conscructor function

function Person(name) {
    this.name = name;
}

// these are object created from the person contructor

var elie = new Person ("Elie");
var colt = new Person ("Colt");

// Since we used the new keyword, we have established
// a link between the object and the prototype property
// we can access that usning _proto_ (thunder proto)

elie._proto_ === Person.prototype; // true
colt._proto_ === Person.prototype; // true

// the person.prototype object also has a property
// called constructor which points back to the function

Person.prototype.constructor === person; // true


/*

thunder proto (_proto_) this property is link prototype property of the constructor function.
what value this protopye property is have ? Prototype property is an object which can have method and property place on in,
this method and properties share an accesseable by any object that is creted from the constructor function when the 'new' keyword is use.


*/

/**

in this example we adding a property on the prototype 
call 'is' instructor,
and setting the 'is' value to be true.
now all of our object that has been created from this constructor
using the 'new' keyword have access to the 'is' instructor property
How that world happen?
we added a property on the Person.prototype object   
and all of sudden 
too seemingly non related object have access to it.
the answer lies in thunder proto (_proto_) 
since these object both have a link to the Person.prototype
they can both access anythings inside of it

-- This is actually the exact way JavaScript find a method and property on object. what we just describe just something call the 
"PROTOTYPE CHAIN"

*/

// this is the constructor function 

function Person(name) {
    this.name = name;
} 

// this is an object created from the person constructor

var elie = new Person ("Elie");
var colt = new Person ("Colt");

person.prototype.isIntructor = true;

elie.isInstructor; // true
colt.isInstructor; // true

// how were we able to acces properties on the object prototype?

// _proto_!


/**

*/


 var arr = [] //undifined

// what actualy did is a short had to writing "arr"  is a new array
 var = new array // undifined

 // I use build in constructor to call an array 
 // and make a new object form in

arr.push; // function push() {[native code]}

// where the push method come from?

// invoke console.dir(arr) to see what is inside of it
console.dir(arr);
    /**
    array(0)
        _proto_:array(0)
            _proto.push: function push()
    
    */
// to prove it 
arr._proto_ === array.prototype; // ture

/**
 so the way JavaScript find the method and property 
 is by looking the object 
 and if it cannot find the method and property you looking for
 it goes to the obejct._proto_ .

 it's acctually keeps happening 
 untill the property and method is found
 and if it's not found, JavaScript return undifined.
*/

/***
 In java script every object have a method hasOwnProperty
which accept parameter and return true
if the object has that property

but where is the method located

*/

arr.hasOwnProperty('length') // true

arr.hasOwnProperty('fo') // false

dir(arr)
    /**
    array(0)
        length:0
            _proto_: Array(0) // prototype chain
                _proto_: object // thunder proto
                   hasOwnProperty: function hasOwnProperty()
    */



== Adding Methods to The Prototype ==

 -=- Refactoring -=-

 -- now that we know that objects crated by the same constructor have shared protoype, let's refactor some code:

 function Person(name) {
     this.name = name;
     this.sayHi = function() {
         return "Hi" + this.name;
     }
 }

elie = new Person(Elie");
elie.sayHi(); // Hi Elie


/**
 the code works, but it is inefficiemt.

 Every time we make an object using the 'new' keyword we have to redifine the sayHi function!


*/

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    return "Hi" + this.name;
}

elie = new Person(Elie");
elie.sayHi(); // Hi Elie


-=- Challenge -=-

. Create a constructor for a Vehicle; every object created form this constructor should have a make, model, and year property. Each object should also have a property called isRunning, which should be set to False

. Every object created from the Vehicle constructor should have a function called turnOn, which change the isRunning property to true.

. Every object created from the Vehicle constructor should have a function turnOff, which changes the isRunning property to false.

. Every objecet created from the Vehicle constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true.


/**
this is my answer, actually have a mistakes. 
*/

// Make a Vehicle Constructor

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// make a isRunning function from each property Vehicle object.

Vehicle.prototype.isRunning = function() {
    return false; // this is not correct cause im not signed Isrunnig a boolean or what??
} 

// make a turnOn function from each property Vehicle object
// change the isRunning property to true

Vehicle.prototype.turnOn = function() {
    return function isRunning() {
        return true; // same as here too
    }
}

// make a turnOff function from each property Vehicle object.
// changes the isRunning property to false.
// 
Vehicle.prototype.turnOff = function() {
    return function isrunning() {
        return false // same as here too
    }
}

// make a honk method from each property Vehicle object.
// which returns the string "beep" ONLY if the isRunning property // is true.
Vehicle.prototype.honk = function() {
    return "beep" + function isRunning() {
        return true; // same as here too
    }
}


 -=- the right solution -=-



// Make a Vehicle Constructor

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // make a isRunning function from each property Vehicle object.
    this.isRunning = false;
}

// make a turnOn function from each property Vehicle object
// change the isRunning property to true

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

// make a turnOff function from each property Vehicle object.
// changes the isRunning property to false.

Vehicle.prototype.turnOff = function() {
    this.isRunning = false
}

// make a honk method from each property Vehicle object.
// which returns the string "beep" ONLY if the isRunning property // is true.

Vehicle.prototype.honk = function() {
    if(this.isRunning =  true) {
        return "beep!";
    }
}

== RECAP PROTOTYPE ==

1. Every time the 'new' keyword is used, a link between the object created and the prototype property of the constructor is established--this link can be accessed using _proto_ 

    -- every time the 'new' keyword is used, a thunder-proto property is added to an object created from the constructor function, the thunder-proto property links the object created from the constructor function to the prototype property of the constructor function. This links allows object created from the constructor function to acces method and properties on the prototype object

2. The prototype object contains a property called constructor, whic point back to the constructor function

    -- the prototype property also contains a property called constructor which points back to the constructor function  

3. To share properties and methods for objects created by a constructor function, place them in the prototype as it is the most efficient 

    -- we should try to place the properties and method that we want to share among all object created from the constructor in the prototype, as the properties and method only need to define once and not redifine for every singgle object 

3. To pass methods and properties form one prototype object to another, we can use inheritance which involves setting the prototype property to be a newly created object using Object.create and resetting the constructor property

    -- we can pass method and properties from one prototype object to another using prototyple Inheritance. This process involves setting prototypes property to be a newly created object using Object.create and reseting the constructor property 
















