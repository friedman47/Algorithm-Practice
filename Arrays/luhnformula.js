/* The Luhn formula is sometimes used to validate credit card numbers.  Create a function that evaluates a credit card array of integers between 13 - 16 numbers long that returns a boolean if the number satisfies the formula below:
1) Set aside the last digit and do not include it in the calculations for steps 2 through 4
2) Starting from the back, multiply the digits with an odd index by 2
3) If any of the results are larger than 9, subtract 9 from them
4) Add all the number (including the evens) together
5) Now add the last digit back in and it should sum to a multiple of 10 (for true, false otherwise) */

// This seems like a fairly straightforward procedural challenge, so I'll begin by confirming length, then parsing into an array of only numbers and then apply the steps to each element of the array as appropriate.  Steps 4 and 5 are basically the same (just add all of the numbers together) and then determining if its modulo 10 gives us true or false.
// I'm assuming that we're being passed an array, that the array is between 13 - 16 in length, and that it contains only integers.


function isCreditCardValid(array) {
  let sum = 0;                                        // we'll need to sum everything eventually
  for (let i = array.length - 2; i >= 0; i--) {       // we exclude the last element, rather than .pop() for instance
    if(i % 2 === 1){                                  // we're combining steps 2 and 3, this gets us all the odd indices...
      array[i] = (array[i] * 2) % 9;                  // the max value is 18, so % 9 is the same as subtracting 9 if needed
    };
    sum += array[i];                                  // combine step 4 with completion of the loop...
  };
  sum += array[array.length - 1];                     // .. and add in the last element, which was excluded from the loop
  if (sum % 10 === 0) {return true}                  // now we just find out if our number is valid, and we're done
  else {return false};
};
