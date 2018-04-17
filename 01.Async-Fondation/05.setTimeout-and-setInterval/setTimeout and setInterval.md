

========= OBJECTIVE =============


1. write asynchronous code using setTimeout

    -- SetTimeOut is a Function that asynschronously invokes callback after a delay in milisecond.

    ei. 1 

        function callback() {
            console.log('callback function');
        }

        var delay = 1000; // delay is in ms
        setTimeout(callback, delay);


    ei. 2

        setTimeout(function() {
            console.log('Runs in approx.200ms');
        }, 2000);


    ei. 3 Cancelling setTimeout 

        var timerId = setTimeout(function() {
            console.log('this function run in 30 seconds');
        }, 3000);

        setTimeout(function() {
            console.log('Cancelling the first setTimeout', timerId)
            clearTimeout(timerId); //embedden funcion 
        }, 2000);


2. write asynchornous code using setInterval


--  setInterval is a Function that continually invokes a callback after every X miliseconds, where X is provided to sertInterval


   e.i 1

        function callback() {
            console.log('callback is called continuouslly');
        }

        var repeat = 3000;
        setTimeout(callback, repeat);


    ei.2 

        var num = 0;
        setInterval(function() {
            num++;
            console.log("num",  num);
        }, 1000);


    ei.3 Cancelling setinterval

        var num = 0;
        var intervalId = setInterval(function() {
            num++;
            console.log('num', num);

            if(num === 3) {
                clearInterval(intervalId);
            }
        }, 1000);





