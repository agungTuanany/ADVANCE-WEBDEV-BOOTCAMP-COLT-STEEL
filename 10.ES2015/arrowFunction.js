function tripleAndfilter(arr) {
    return arr.map(function(value) {
        return value * 3;
    }).filter(function(value) {
        return value % 5;
    })
};

let tripleAndfilter = arr => arr.map(val => val * 3).filter(val => val % 5 === 0)



function doubleOddNumbers(arr) {
    return arr.filter(function(val) {
        return val % 2 !== 0;
    }).map(function(val) {
        return val * 2;
    })
}

let doubleOddNumbers = arr => arr.filter(val % 2 !== 0).map(val => val * 2)


function mapFilterAndReduce(arr) {
    return arr.map(function(val) {
        return val.firstName
    }).filter(function(val) {
        return val.length < 5;
    }).reduce(function(acc, next) {
        acc[next] = next.length
        return acc;
    }, {})

}

let mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5)
.reduce((acc, next) => {
    acc[next] = next.length
    return acc;
}, {});

/***
 * createStudentObj function create two parameter and
 * will accept firstName and lastName
 * since we returning an object literal 
 * we need to make sure actualy use curly braces here 
 * so the arrow function knows the returning object
 * 
 */

 let createStudentObj = (firstName, lastName) => ({firtName: firstName, lastName: LastName})


/***
 * we have instructor as sign as a object.
 * firtName we asign "colt"
 * sayhi (as a method) method which invoke a setTimeot after on second
 *
 */


 var instructor = {
     firstName: "Colt",
     sayHi: function() {
         setTimeout(function() {
             console.log('Hello' + this.firstName)
         }, 1000)
     }
 }


 // refactoring with arrow function

 var instructor = {
    firstName: "Colt",
    sayHi: function() {
        setTimeout(() => {
            console.log('Hello' + this.firstName)
        }, 1000)
    }
} 

