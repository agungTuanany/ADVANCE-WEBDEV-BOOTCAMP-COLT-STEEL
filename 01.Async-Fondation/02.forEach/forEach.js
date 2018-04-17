//example function without using forEach function

var arr = [1,2,3,4,5,6];
function double(arr) {
  for  (var i = 0; i < arr.length; i++) {
      console.log(arr[i] * 2);
  }
}
//invoke double
double(arr);


// refunction function double with forEach
// in this example no longger to implement for loop,
// function(number) is a callback

var arr = [1,2,3,4,5,6];
//
forEach(arr, function(number) {
    console.log(number * 2);
});



// example 1.

// forEach example with All Callback Paramater

var string = ['my', 'forEach', 'example'];

var result = '';
// reaction 1('my', 0,    string) result = "my"
// reaction 2 ('forEach', 1, string) result = "my forEach"
// reaction 3 ('example', 2, string) result = "my forEach Example!"
forEach(string, function(str,index, array) {
   if (array.length - 1 !== index) {
       result += str + " ";
   } else {
       result += str + "!!!";
   }
   
});


// implementation

function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}