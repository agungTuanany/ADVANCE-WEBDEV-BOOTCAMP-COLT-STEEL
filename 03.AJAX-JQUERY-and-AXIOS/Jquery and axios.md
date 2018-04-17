==== OBJECTIVES =====


======================




Making A request and Parsing JSON Comparasion with and without JQuery


ei.1 without Jquery

i took it form XHR code from the folder AJAX XHR sample

	var request = new XMLHttpRequest();
	request.open('GET', 'my/url');

	request.onload = function() {
		if(request.status >= 200 && request.status < 400) {
		    //Succes!
		    var data = JSON.parse(request.responseText);
		} else {
		    // do something
		}
	};

	request.onerror = function() {
		//There was a connection error
	};

	request.send();

eg.2 with Jquery

its only 1 line cause all the function code was handled with JQuery library
	
	$.getJSON('/my/url', function(data){

		});

There are Four JQuery AJAX Methods

	$.ajax // this is the key Method that every things else build on top
	$.get
	$.post
	$getJSON


FAQ :
Q:
so what it's "$" sign build for?

A: 
its a selector, that JQuery format.
