

// The "base" Jquery Method for $.ajax

	$.ajax({
		//$.ajax passing the object containing 
		// some XHR request and send it
		method: "GET",
		url : "some.api.com",
		data: {name: "Jhon", location: "Boston"}
	})

//'.done' will run when the request come back from $.ajax
	
	.done(function(res) {
			console.log(res);
		})

// else when $.ajax have an error this function will run when there is a problem
	
	.fail(function() {
			//do something 
			console.log("THERE IS AN ERROR !");
		})


/*
Assume that you have a index.html 
and write some basic syntax that have
an 'script' and 'button'

<script src="https://code.jquery.com/jquery-3.2.1.min.js">
</script>

<button id="btn"> Bacon Button </button>
*/
// example in real world using JQUERY request AJAX

	$("#brn").click(function() {
		$.ajax({
		    method: "GET",
		    url: "https://baconipsum.com/api/?type=meat-and-filler",
		    dataType: 'json'
		    
		})
		done(addParagraph)

/*
.done(function(data) {
    console.log(data);
 // when you use jquery for appeding data to the page 
 // that manipulating the data to DOM
 // for targeting the paragraph 
 
 //>> $("p").text(data[0]);
})
*/
		.fail(function() {
		    alert("THERE IS A FAILED");
			})
		});

//dataType(defult: intelligent Guess (xml, json, script,or html)) extract the function from .data();

	function addParagraph(data){
		$("p").text(data[0]);
	}

/*
 Digging In the Jquery source code from github.com/jquery/jquery

 the key line found from window.XMLHttpRequest();
 from hhttps://github.com/jquery/jquery/blob

	 jQuery.ajaxSetting.xhr = function() {
		 try {
		    return new window.XMLHttpRequest();
		 }
		 catch(e){}
	 }

 // this is sample from JQuery documentation 
 // that XHR doing in Jquery

	 xhr.open {
		 options.type,
		 options.url,
		 options.async,
		 options.username,
		 options.password
	 }

	callback = callback('abort');

	try {
		xhr.send(options.hasContent && options.data || null);

	} catch(e) {
		if (callback) {
		    throw e;
		}
	}

*/

/*
	== JQUERY AJAX Shorthand Method ==

implementing the 3 other Jquery method :

1. $.get
2. $.post
3. $getJSON

assume you have an idex.html that have a 3 button

<btn id="getBtn" >get() </btn>
<btn id="postBtn" >pos() </btn>
<btn id="getJSONBtn" >getJSON() </btn>

*/

	$("#getBtn").click(function() {
		$.get('https://api.github.com/users/jhoen')
		.done(function(data) {
		    console.log(data);
		})
		.fail(function() {
		    console.log("ERROR!");
		})
	//$.get is same as $.ajax({method:"GET", url:"https://api.github.com/users/jhoen"})
	});

	$("#postBtn").click(function() {
		$.post(www.github.com)
		.done(function(data) {
		    console.log();
		})
		.fail(function() {
		    console.log("ERROR!")
		})
	})

	$("#getJSONBtn").click(function() {
		$.getJSON('https://api.github.com/users/jhoen')
		.done(function(data) {
		    console.log(data);
		})
		.fail(function() {
		    console.log("PROBLEM!!");
		})
	})

// the get and post method togheter in Jqeury documentation

	$jQuery.each (["get", "post"], function(i, method) {
		jQuery[method] = function(url, data, callback, type) {

		    //shift argument if data argument was ommited
		    if(JQuery.isFunction(data)) {
		        type = type || callback;
		        callback = data;
		        data = undefined;
		    }

		    //The url can be an option object (which then must have, url)
		    return JQuery.ajax(JQuery.extend({
		            url: url,
		            type: method,
		            dataType: type,
		            data: data,
		            success: callback 
		    }, jQuery.isPlainObject(url) && url) );
		};
	});
/*
	getJSON: function(url, data, callback) {
		return jQuery.get(url, data, callback, "json");
	},
	getScript: function(url, callback) {
		return jQuery.get(url, undifined, callback, "script");
	}

so the summary is
    1. base $.getJSON build on top "$get"
    2. $.get and $.post build on $.ajax 
    3. $.ajax build on top $.XHR
*/
