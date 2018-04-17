/**
 * 
 * assume that you have index.html
 * 
 * <h1>Ron Swanson qoute Generator</h1>
 * 
 * <p>(4 ways of writing AJAX requet)</p>
 * 
 * <section class="container">
 * <button id="xhr">XHR</button>
 * <button id="fetch">FETCH</button>
 * <button id="jquery">JQuery</button>
 * <button id="axios">axios</button>
 * </section>
 * 
 * <p id="quote">Quote update goes here .. </p>
 * 
 * 
 */

 var xhrbtn = document.querySelector("#xhr");
 var fetchbtn = document.querySelector("#fetch");
 var jquery = document.querySelector("#jquery");
 var axiosbtn = document.querySelector("#axios");
 var display = document.querySelector("#quote");


 var url = "htpps://ron-swansow-quotes.herokuapp.com/v2/quotes"

 xhrbtn.addEventListener("click",function() {
     var XHR = new XMLHttpRequest();
     XHR.onreadystatechange = function() {
         if(XHR.readyState == 4 && XHR.status == 200) {
             console.log(XHR.responseText);
             var quote = JSON.parse(XHR.responseText)[0];
            console.log(quote);
            display.innerText= quote;
        }   
     }

     XHR.open("GET", url);
     XHR.send();

 });

 fetchbtn.addEventListener("click", function() {
     fetch(url)
     .then(function(req) {
         req.json().then(function(data) {
             console.log(data[0]);
            display.innerText = data[0]
         })

     })
     .catch(function() {
         console.log("ERROR");
     })
 });


 $("#jquery").click(function() {
     $.getJSON(url)
     .then(function(res) {
         console.log(res)
     })
     .done(function(data) {
         console.log(data[0]);
         $("#quote").text(data[0]);
     })
     .fail(function() {
         console.log("SOME ERROR??");
     })
 });


 axiosbtn.addEventListener("click", function() {
     axios.get(url)
     .then(function(res) {
         console.log(res.data[0]);
         display.innerText = res.data[0];
     })
     .catch(function() {
         console.log("SOMETHING ERR!!");
     })
 });


