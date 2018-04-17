    ===== OBJECTIVE ======


problem with XHR 

    1. ugl, bulky syntax
    2. it's 16 years old
    3. No Streaming


Fetch is new features in JavaSCript.


//ei. Fetch

	fetch(url)
	.then(function(res) {
		console.log(res);
	})
	.catch(function(error) {
		console.log(error);
	});


//ei. 2 parsing JSON with Fetch

	fetch(url).then(function(res) {
		return res.json();
	}).then(function(data) {
		console.log(data);
	}).catch(function() {
		console.log(problem!);
	});


//ei 3 Fetch options

	fetch(url, {
		method: 'POST',
		body: JSON.stringify({
		    name: 'blue',
		    login: 'bluecat',
		})
	})
	.then(function(data) {
		//do something 
	})
	.catch(function(error) {
		//hanlde error here
	});


// ei 4 combining eg 2 and 3

	var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

	fetch(url, {
		method: 'POST',
		body: JSON.stringify({
		    name: "blue",
		    login: "bluecat",
		})
	}).then(function(response) {
		console.log(response);
		return response.json()
	})
	.then(function(data) {
		console.log(deata.bpi.UER.rate);
	});



======FETCH ERROR HANDLING =====
//eg.5 
	
	var btn = document.querySelector("button");

	btn.addEventListener("click", function() {
		var url = "https://api.github.com/users/dhana";
		fetch(url)
		// just accessing status without knowing is the url true or false so the error handling on .cath() not pass any error
		.then(function() {
		    console.log("EVERYTHING IS FINE !");
		})
		//accsessing to the actual status quote of the request
		// 
		.then(function(request) {
		    console.log(request.status);
		})
		.cath(function() {
		    console.log("THERE IS A PROBLEM");
		});
	})


'.cacth' error define function is handling the 'Promise' that rejected..

how do actually handling error issues.
what is the cacth for..

// eg. for .catch 

	var. btn = document.querySelector('button');
	btn.addEventListenr("click", function() {
		var url = "https://api.github.com/users/dhana-error"
		fetch(url)
		.then(function(request) {
		    //handling error for .cacth that negate 
		    if(!request.ok) {
		        throw Error("custom ERROR!!");
		    }
		    return request;
		})
		.then(function(request) {
		    console.log("Everythings is Fine");
		    console.log(request);
		})
		.catch(function() {
		    console.log("THERE IS A PROBLEM!");
		});
	});

customise the function(request)
this will use more often

	btn.addEventListenr("click", function() {
		var url = "https://api.github.com/users/dhana-error"
		fetch(url)
		.then(handleErrors)
		.then(function(request) {
		    console.log("Everythings is fine");
		    console.log(request);
		})
		.cacth(function(error) {
		    console.log(error);
		});
		
	});
	//defining own function
	function handleErrors(request) {
		if(!request.ok) {
		    throw Error(404);
		}
		return request;
	}


