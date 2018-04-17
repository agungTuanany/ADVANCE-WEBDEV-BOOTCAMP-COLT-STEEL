

        === OBJECTIVE ===

1. Define what OOP is

    . A programming model based the idea of object


    . These objects are constructed from what are called "classes" which we can think of like blueprint. We call these objects created from classes "instances"

    . We strive to make sure our classes abstract and modular


    1. strive : berjuang, mengusakan, 
    2. mimic  : meniru


2. Revisit the "new" keyword and understand the four things it does

3. Use constructor functions to reduce duplication in our code

4. Use "call" and "aplly" to refactor constructor functions



== Object Creation ==

Imagine we want to make a few house objects, they will all have bedrooms, bathrooms, and numSqft.

eg: 

    var house = {
        bedrom: 2,
        bathrooms: 2,
        sqFeet: 1000
    } 

    var house2 = {
        bedrom: 2,
        bathrooms: 2,
        sqFeet: 1000
    } 

    var house3 = {
        bedrom: 2,
        bathrooms: 2,
        sqFeet: 1000
    } 

-=- Refactor -=-

Instead of making an infinite number of different object, let's see if we can create a function contstruct these similiar "house" objects.


-- Constructor Functions --

let's use a function as a blueprint for what each house should be--we call thse kind of function "constructor" functions.

/**
NOTICE a Few Things:

. Capitalization of the function name ('House') -- this is Convention!. For other programmer know that is the "constructor" function

. The keyword "this" is back!.
*/

    function House(bedrooms, bathrooms, numSqft) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.numSqft = numSqft;
    }


== THE "new" KEYWORD ==

So how do we use our constructor to create objects?

    function House(bedrooms, bathrooms, numSqft) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.numSqft = numSqft;
    }

    var firstHouse = House(2,2,1000) // does this work?

    ~ Result: firstHouse undifined.


Why is this not working??

. We not returning anything from the function so our "House" function return undefined.

. We are not explicitly binding the keyword "this" or placing it inside a declared object. This means the value of the keyword 'this' will be the global object, which is not we want!. 


1.binding   : mengikat


    function House(bedrooms, bathrooms, numSqft) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.numSqft = numSqft;
    }

    var firstHouse = new House(2,2,100);


    firstHouse.bedrooms; //2
    firstHouse.bathrooms; //2
    firstHouse.numSqft; // 1000



            == KEYWORD 'new' DO ==

-- So what does the 'new' keyword do? A lot more than we might think..

    .- It first creates an empty object out of thin air

    .- It then sets the keyword "this" in the functions which is be use with to be that empty object that was just created

    .- It adds an implicit 'return this' at the end of the function, so the object created using the 'new' keyword can be return from the function which follows it 

    .- It adds a property onto the empty object called "_proto_", (the thunder proto property)which links the (object) prototype property on the constructor function to the empty object (more on this later)


    _proto_ : used call a thunder proto.

/**
example to 

-create a constructor function for a Dog.

-Each dog should have a name and an age.

-as a bonus, add a function for each dog called "bark", which console.log's the name of the dog added to the string "just barked!"
*/

    // your constructor function goes here.

    function Dog(name, age) {
        this.name = name;
        this.age =  age;
        this.bark = function() {
            console.log(this.name + "just barked!")
        }
    }


    var rusty = new Dog("rusty", 3);
    var fido = new Dog("fido", 1); 

    rusty.bark(); // rusty just barked
    fido.bark(); // fido just barked.



== Multiple Constructor ==

/*
Let's create two constructor functions, one for Car and one for a Motorcycle--

-- Notice how much duplication is going on in the Motorcycle function. Is there any way to "borrow"  the car function and invoke it inside the Motorcycle function?
*/

    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year =year;
        // we can also set properties on the keyword "this"
        // that are presest values
        this.numWheels = 4;
    }

    function Motorcyle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year =year;
        this.numWheels = 2;
    }


    /**
    Refactoring Motorcycle constructor.

    */

    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year =year;
        // we can also set properties on the keyword "this"
        // that are presest values
        this.numWheels = 4;
    }

    function Motorcycle(make, model, year) {
        // using call(thisArgs, 1, 2, ,3 )
        car.call(this, make, model, year)
        this.numWheels = 2;
    }


    //or 

    function Motorcyle(make, model, year) {
        //using apply(thisArgs,[1,2,3]) 
        car.apply(this,[make, model, year]);
        this.numWheels = 2;
    }

    //or
    /**
    arguments : is a list of all of the argument that pass to a function it's has not technically in array 
    */

    function Motorcycle() {// we don't need to even pass in parameter!
        //even better using apply with argument
        car.apply(this, arguments);
        this.numWheels = 2;
    }



== RECAP CONSTRUCTOR FUNCTIONS ==

1. OOP is a model based on objects constructed from a blueprint. We use OOP to write modular and shareable code.

2. In language that have built-in support for OOP, we call these blueprints "clasess" and the object created form them "instances".

3. Since we do not have built-in class support in JavaScript, we mimic classes by using function. These constructor function create object through the use of the "new" keyword.

    a "new" keyword doing defenition(just reaxamine your memory):

    .- It first creates an empty object out of thin air

    .- It then sets the keyword "this" in the functions which is be use with to be that empty object that was just created

    .- It adds an implicit 'return this' at the end of the function, so the object created using the 'new' keyword can be return from the function which follows it 

    .- It adds a property onto the empty object called "_proto_", (the thunder proto property)which links the (object) prototype property on the constructor function to the empty object (more on this later)

4. we can avoid duplication in multiple constructor functions by using "call" or "apply"




== INHERITANCE ==

Inheritance is a process of passing method and properties from one class to another. 

we dont pass one constructor to another 
in JavaScript we just passing the prototype cause all the 'method' and 'properties' is all in protoype. So we just pass prototype property from one constructor to another constructor.

The idea here is since the prototype property was all the property and method live we needs to have another constructor function get all those property.


eg: 


    function Person(firsName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.sayHi = function() {
        return "Hello" + this.firstName + " " + this.lastName;
    }


    function Student(firstName, lastName) {
        return Person.apply(this, arguments);
    }

    Student.prototype.sayHi =function() {
        return "Hello" + this.firstName + " " + this.lastName;
    }



Do we really need to redifine sayHi() on the Student.prototype? that seems repetitive..

How to not to be sayHi() method in Student cronstructor be repetitive as same in Person.prototype.sayHi method?

 --assign the prototype property of one object to be another's


    function Student(firstName, lastName) {
        return Person.apply(this, arguments);
    }

    Student.prototype = Person.prototype;



now we can create an object from student contructor invoke the sayHi method on Student.prototype


    var elie = new Student('Elie', "Schoppik");
    elie.sayHi(); // Hello Elie Schoppik



it's works?

not exactly.

lets add something onto the Student.property (object)

if we implemented this correctly our Person object should not be able to be modified from student constructor function

Remember we want Student to inherit from Person
if we did this correctly the inheritance should only affect the Student


    Student.prototype.status = function() {
        return "I am currently a student !"
    }



let's created a new object from Person constructor and se if has a status method which is should not.

status it's just something that's belong to the Student prototype 
something is unrigth here.


    var elie = new Person('Elie', 'Schoppick');

    elie.status(); // I'am currently a student




person prototype should not have properties form the student prototype

the problem here we can't just assign one object to another it will just create a reference


    /**
    another example
    */

    > var o = {name: "Elie"} 
    <. undifined

    > varo2 = 0
    <. undifiend

    > o2.name = "Tim"
    <. "Tim"

    // It's has changes 'o' object variable
    // cause we assign one object to another
    // we do not create a brand new object
    // so we just make a reference or link to existing object
    // which is '0' is a exisiting object

    > o.name
    <. "Tim"



== THE PROBLEM == 

we can't assign one object to another--it will just create a refence!

This mean if we change the Student.prototype, it will affect the parent.prototype.

We still want all of the methods and properties from the parent.prototype, but we want two totally separate objects-not a reference!

so we use "Object.create"

it's a function that create a brand new object and accepts as a firts parameter, what the prototype (thunder proto) object should be for the newly created object



== Object.create in action ==


We can see here that Student.prototype is being assign to a new object with a thunder proto (_proto_) of a Person.prototype


    function Student(firstName, lastName) {
        return Person.apply(this, arguments);
    }


now lets at a function on a student.prototype to see if it's not affect person.prototype

    Student.prototype = Object.create(Person.prototype);

    Student.prototype.status = function() {
        return "I am currently a student!"
    }



and then lest create a Person object
and we can see that 
Student.prototype does not affect Person.prototype anymore!

    var elie = new Person("Elie", "Schoppik");

    elie.status; // undifined



why not just use a 'new' keyword?

since the 'new' keyword is set with prototype object should be,although it just do same thing, but add additional unnecessary properties on the prototype object (since it s creating an object with undefimed properties just for the prototype.) 

so when doing inheritance through the prototype which is commonly call 'prototype inheritance'use Object.create

    function Student(firstName, lastName) {
        return Person.apply(this, arguments)
    }

    Student.prototype = new Person;


== One Final Pieces to completing Inheritance ==

Remember that every prototype object has property own it
call constructor 
which point back to the constructor function


    functin Student(firtsName, lastName) {
        return Person.apply(this, arguments);
    }

    Student.prototype.saHi = function() {
        return "Hello" + this.firstName + " " + this.lastName;
    }

    Student.prototype = Object.create(Person.prototype);


if we take a look on the contructor property
student.prototype we'll actually see it's the person constructor
that because when we did Object.create 
we overwrote the constructor property
so we need to make sure to set it back the correct value


    Student.prototype.constructor; // person


we call this resetting the constructor 
and it's final parts of prototyple inheritance

to do that we simply assign Student.prototype.constructor
to be Student function


    Student.prototype.constructor = Student;



== RECAP ==

. Set the prototype property to be newly created object with another prototype

. Reset the constructor property
