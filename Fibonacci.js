/* Create a Fibonacci function such that the function(n) returns the nth Fibonacci number.  Assume the first two values of the Fibonacci sequence are 0 and 1. */

// My plan is to use a closure to create a Fibonacci array that will persist while staying out of the global scope.  Then, retrieving any previously accessed Fibonacci number will have O(1) while the incremental values beyond the last-created number will be just O(i) where i is n - [last-created value in the array].

// *** I'm assuming that we'll be passing a positive integer n to the function. ***

function fibonacciArray(){
  var fibonacci = [0, 1];
  return function(n) {
    if(n > fibonacci.length) {
      for(let i = fibonacci.length; i < n; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      };
    };
    return fibonacci[n - 1];
  };
};

var fibonacci = fibonacciArray();
