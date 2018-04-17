var btn = document.querySelector("#button");
var priceDisp = document.querySelector("#price");
var currency = "USD";



btn.addEventListener("click", function() {
//1.step
    var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {

    if (XHR.readyState == 4 && XHR.status == 200) {
       var data = JSON.parse(XHR.responseText);
        var price = data.bpi[currency].rate;
        priceDisp.innerText = price + " " + currency;


        
        //console.log(data.bpi.GBP.rate);
        //console.log(XHR.responseText);
    }
}
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";


// 2.step
    XHR.open('GET', url);
    XHR.send();


});