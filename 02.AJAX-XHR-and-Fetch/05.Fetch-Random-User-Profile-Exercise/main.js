// REFACTORING FETCH

/*
fetch(url)
.then(handleErrors)
.then(parseJSON)
.then(updateProfile)
.catch(printError)

you should define function by self eg:

function hanldeErrors() {
    // do something
}
function parseJson() {
    // do something
}

function updateProfile() {
    // do something
}

*/

// step by step explanation
// see the number is from 1 to 9.
// to ensure what is the changes code from one to another

//1. ensure the web-address
var url = "https://randomuser.me/api";
//5.a make a new variabel invoke #fullname
var fullnameDisp = document.querySelector("#fullname");
//6 invoke an image
var avatar = document.querySelector("#avatar");
//7 invoke username
var username = document.querySelector("#username");
//8 invoke city
var city = document.querySelector("#city");
//9 invoke email
var email = document.querySelector("#email");
//2. make a button eventListener
var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {

    //3. put fetch
    fetch(url)

    //10 then.(handleError)
    .then(function(handleErrors){
        // same as .then(handleErrors)
    })
    //4. parse the JSON data
    .then(function(parseJSON) {
        //console.log(res);
        //console.log("Parsing!!");
        //return res.json();
    })
    .then(function(updateProfile) {     
        //console.log(fullname);
    })
    .catch(function(err) {
        console.log(err);
    });
});

function parseJSON(res) {
    return res.json().then(function(parseData) {
        return parseData.results[0];
    })
}

function updateProfile(data) {
    //5. make a inside var fullname
    var fullname = data.result[0].name.first + " "+ data.result[0].name.last;
    //5.b invoke fullnameDisp
    fullnameDisp.innerText = fullname;
   //6.a invoke JSON image
   avatar.src = data.result[0].picture.medium;
    //7.a invoke username from the JSON 
    username.innerText = data.login.username;
    //8.a invoke city from the JSON
    city.innerText = data.location.city;
    //9.a invoke email
    email.innerText = data.email;
}

function handleErrors(res) {
    if(!res.ok) {
        throw Error(res.status);
    }
    return res;

}

function displayErrors(err) {
    console.log("inside display error");
    console.log(err);

}

/*
by the mean the code at the upside is still messy
so i try to rebuild it at the bottom from here on.
*/

var url = "https://randomuser.me/api";
var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var email = document.querySelector("#email");


var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .then(displayErrors)
});



function handleErrors(res) {
    if(!res.ok) {
        throw Error(res.status);
    }
    return res;
}
function parseJSON(res) {
    return res.json().then(function(parseData) {
        return parseData.results[0];
    })
}


function updateProfile(data) {
    var fullname = data.result[0].name.first + " "+ data.result[0].name.last;
    fullnameDisp.innerText = fullname;
    avatar.src = data.result[0].picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}


function displayErrors(err) {
    console.log("inside display error");
    console.log(err);
}