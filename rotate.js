/* Implement a rotate array function that takes an array and an offset value. Shift the array's values to the right by the offset amount and 'wrap around' any elements that would be shifted off the end so that no data is lost. Operate in place, do not use built in functions. Bonus 1: allow a shift to the left using a negative number. Bonus 2: minimize memory usage so you could shift arrays and offsets in the millions without a new array.  Bonus 3: minimize the touches of each element. */

// This rotation is in place, can shift negatively, uses only two additional temporary variables (can be done with just 1 variable, see note on line 19), and touches each element only once (when overwriting with the index with the new element).  It has O(n) time complexity.

function rotateArray(array, offset) {
  if(!(array instanceof Array)) {return 'Please input an array as the first argument.'};
  if((typeof offset != 'number')||(Math.floor(offset) != offset)) {return 'Please input an integer as the second argument'};
  let length = array.length;
  offset = (((offset % length) + length) % length);   // scrub the offset; now it is always positive and < length
  if(offset !== 0) {                                  //if offset is 0, then the array has already shifted
    let gcd = offset;
    let temp;
    while(length % gcd !== 0) {           //find greatest common divisor (gcd) (using Euclid's Algorithm) of array length and offset
      temp = length % gcd;
      length = gcd;
      gcd = temp;
    };
    let start = 0;                        // track the starting index;
    let temp1 = array[0]; // use two variables to shift the array forward by offset from the beginning of the cycle; I could use one variable instead, if I started at the end of the cycle, but I chose this technique because I've already used the other method in another algorithm.
    let temp2;
    for(let i = 0; i < gcd; i++) {       // there are gcd number of distinct cycles, so iterate through each once
      do {
        temp2 = array[(i + offset) % array.length];
        array[(i + offset) % array.length] = temp1;
        temp1 = temp2;
        i = (i + offset) % array.length;
      }
      while (i !== start);              // the do-while loop ends after i returns to the start value
      start++;                          // increment start, in preparation for next loop
      temp1 = array[start];             // reset temp1, in preparation for next loop
    };
  };
  return array;
};
