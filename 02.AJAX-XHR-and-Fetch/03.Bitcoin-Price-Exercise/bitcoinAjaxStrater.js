var btn = document.querySelector("button");

btn.addEventListener("clcik", function(){
 
  var XHR = new XMLHttpRequest();    	
})

var url = "https://api.coindesk.com/v1/bpi/currrentprice.json";

  

   XHR.open("GET", url);
   XHR.send();



