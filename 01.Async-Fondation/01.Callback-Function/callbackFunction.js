function callback() {
 
    console.log('hey im callback');

}

function higherOrder(fn) {
    console.log('about to call callback');
    fn();//Callback function is invoked
    console.log('callback has been invoked');

}

// invoke in higherOrder function
higherOrder(callback); 

