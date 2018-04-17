
/**
 * hasMoreFollowers function accept variable number of argumets
 * which will be github usernames
 * we'll query github API
 * and return what ever username has most followers
 * 
 * firts we create variable call 'baseUrl'  
 * which will be a url and would be making a request 
 * to that url is https://api.github.com/user/
 * secondly we create a variable call 'urls'
 * which will be a new array of promises
 * I use 'map' function and return the result 
 * of JQuery .getJSON with 'baseUrl' and base username I'm mapping over
 * 'username' is an array which I collected using 'rest' operator (...)
 * I'll then use Promise.all() method to result all of my promises
 * 
 * @param data.sort
 * and then create a new variable called 'max'
 * here I'll store the result of 'sorting' of all result promises
 * and seeing which one have a highest property 
 * I can do that using 'a.followers' last then 'b.followers' 
 * and access the first value in that array 
 * which's the user which the most followers
 * notice I'm using an 'arrow' function here to really clean things up
 * 
 * Finally I return the string which is 'max.name' 
 * has the most followers with max.followers 
 * when I invoke this function I get some output using '.then' 
 * 
 * 
 * 
 */

function hasMostFollowers(...usernames) {
    //let baseUrl = "https://developer.github.com/v3/users/#get-a-single-user";
    
    let baseUrl = "https://api.github.com/user/"
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls).then(function(data) {
        let max = data.sort((a,b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers} `;
    });
}

hasMostFollowers('daunge', 'tigarcia', 'colt').then(function(data) {
    console.log(data)
});

// colt steele has the most followers with 418

/***
 * The next function we implement is starWarsString
 * which except some number or 'id'
 * we first start by making some variable call 'str'
 * which's empty string
 * well then make first AJAX call to starwars API 
 * with what ever 'id' we specified
 * once set AJAX call is done, we'll take that data 
 * and start building up our string
 * by mentioning who's this character is and what their features in
 * we'll make sure that we gp to the films property
 * that we get back and accces the firts films
 * we'll then return the AJAX call to get that specific movies
 * once we finish the next AJAX call, we keep building up our string
 * to mention the title of the film and the director as well
 * the last thing we need todo 
 * is mention first planet that the movie is feature in
 * and return the result of the next AJAX call
 * finally we get back some information on the planet
 * and build up our string to mention where this take places
 * and then finally return our 'str' variable
 * so let see what happen when we invoke this with the 'id' 1
 * 
 */

 function starwWarsString(id) {
     var str = '';
     return $.getJSON('https://swapi.co/api/people/${id}').then(function(data) {
         str += `${data.name} is featured in `;
         let filmData = data.films[0];
         return $.getJSON(filmData);
     }).then(function(res) {
         str += `${res.title}, directed by ${res.director}`
         let planetData = res.planets[0];
         return $.getJSON(planetData);
     }).then(function(res) {
         str += `and it take places on $(res.name)`;
     }).then(function(finalString) {
        return finalString;
    })

 }

 starwWarsString(1).then(function(data) {
     console.log(data)
 })
