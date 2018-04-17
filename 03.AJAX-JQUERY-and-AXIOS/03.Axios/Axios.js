/**
 * 
 Axios is 3rd part libary

 Axios is lightweiht HTTP request library

 Features or goal in Axios:
 1. make XMLHttpRequests from the browser
 2. Make http requests from node.js
 3. Supprot the Promise API
 4. Intercept request and response data
 5. Cancel requests
 6. Automatic transform for JSON data
 7. Client side support proctecting against 'XSRF'
 8. All browser include all internet explorer cause build on top XHR

 why you using Axios

 cause you don't need the all features in 
 JQuery to do thing manipulate DOM
 * 
 */

 // the basic syntax Axios.get to make a get request!

	 axios.get(url)
	 .then(function(res) {
		 console.log(res.data);
	 })
	 .catch(function(e) {
		 console.log(e);

	 })


 // just creates an XMLHttpRequest under the hood

 // eg. 1 

	 var ulr = "https://opentdb.com/api.php?amount=1";
	 axios.get(url)
	 .then(function(res) {
		 console.log(res.data.result[0].question);
	 })
	 .catch(function() {
		 console.log("EUGH COUGHT SOME ERR ")
	 })

/**
* summary:
* 
* 1. Jquery is Great but if you just want to use
* AJAX functionaly use AXIOS there's no reason
* to include all extra method and all extra code 
* if you are not to use it  
* 
* 
* 2. Axios is great, very modular library
* and provide nice and clean syntax that 
* common programmer 
*/

/**
* 
* AXIOS ERROR HANDLING
* 
* assume you have build a index.html
* that include AXIOS library
* 
* <script src="https://unpkg.com/axios/dist/axios.mis.js"></script>
* 
* <button>CLICK</button>
* 
* <section id="comment"> </section>
*/

	   var btn = document.querySelector("#button");
	   var section = document.querySelector("comments");
	   
	   btn.addEventListener("click", sendRequst);

	   function sendRequst() {
		   axios.get("https://jsonplaceholder.typeicode.com/comment", {
		       params: {
		           postId:1 
		    /**
		     * rahter than doing https://jsonplaceholder.typidcode.com/comments?post=1
		     * 
		     * postId: can use by "dynamic" or "variable"
		     */
		       }
		   })
		   .then(addComments)
		   .catch(handleErros)       
	   }


	   function addComments(res) {
		   res.data.forEach(function(comment) {
		       appendComment(comment);
		   });
	   }

	   function appendComment(comment) {
		   var newP = document.createElement("p");
		   newP.innerText = comment.email;
		   section.appendChild(newP);
	   }
/**
 * 
 * @param {err.response} err 
 * if the error was in 
 *  "https://jsonplaceholder.typeicode.com/commentasdsdw"
 * problem with the response commentasdsdw
 * the request is goes to correct url
 *  but the server 
 * doesn't know how to handle that 'commentasdsdw' 
 * 
 * @param(err.request) err
 * if the error was in
 *  "https://json"pwdsaw"laceholder.typeicode.com/comment"
 *  problem with the invalid url json"pwdsawlaceholder."
 * the request is uncorrect url
 * 
 * both two is a nice little features were able to determine 
 * where is the error
 */
   
	function handleErros(err) {
       if (err.response) {
            console.log("Problem With Response ", err.response.status);
       } else if(err.request) {
            console.log("problem With Request!");
       } else {
            console.log("Error ", err.message);
       }
   }




