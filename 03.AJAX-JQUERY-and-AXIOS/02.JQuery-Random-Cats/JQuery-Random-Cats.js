


/**
 *assume that you have a index.html
 and you have put the script tag JQuery
 
 
 that contain: 
 
 <h1>Random Cat Photos</h1>
 
 <img id="catImg" src="https://random.cat/i/cats3.jpg">
 <button id="btn">RANDOM CAT!</button>

 <style>
 img{
     width: 200px;
 } </style>


 * 
 **/

 $("#btn").click(function() {
     $.getJSON("https://random.cat/meow")
     .done(function(data) {
         $('#catImg').attr("src", data.file);
     })
     .fail(function() {
         alert("REQUEST IS NOT POSSIBLE");
     })
     //using .get
     $.get("https://random.cat/meow")
     .done(function(data) {
         console.log(data);

     })
     .fail(function() {
         console.log("REQUEST ERROR");
     })

     //using .ajax
     $.ajax({
         method: "GET",
         url: "https://random.cat/meow",
         dataType: "json"
     })
 })

