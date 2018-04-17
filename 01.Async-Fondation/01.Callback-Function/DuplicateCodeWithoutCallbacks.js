//Duplicate Code without callbacks

function sendMessageConsole(message) {
    console.log(message);
}

function sendMessageAlert(message) {
    alert(message);
}

function sendMessageConfirm(message) {
    return confirm(message);
}

sendMessageAlert('Lots of duplication');


// Redesign code with Callbacks
// sendMessage function is highorder function
// sendMessage have two  parameter. 
// message and callback.

function sendMessage (message, callback) {
    return callback(message);
}

sendMessage('Message for console', console.log);

sendMessage('Message for alert', alert);

var answer = sendMessage('Are you sure??', confirm);

// EXAMPLE 1.
//callbacks with function Declaration

// make a function greet as highorder function -
// -that have a two paramater.
// make a function UppercaseName that can be call 
//  in function greet. 

function greet(name, formatter) {
    return 'Hello, ' + formatter(name);
}
//upperCaseName is a declared function
function upperCaseName(name) {
    return name.toUpperCase();
}
// invoke function greet 
// make declared funtion as callback funtion
greet ('Jhon', upperCaseName);



// EXAMPLE 2.
//use anonimous function as a callback rather then a function declaration
function greet(name, formatter) {
    return 'Hello, ' + formatter(name);
    //calling a  anonimos function 
    // invoke it
}
    greet('Jhon', function(name) {
        return name.toUpperCase();
    });
// invoke a second greet function.
    greet('Jhon', function(name) {
        return name + '!wow!' +' '+ '!!!!';
    });




