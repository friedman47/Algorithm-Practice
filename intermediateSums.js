/* Given an array of integers, after every 10th element, add an additional element containing the sum of those 10 values.  For the last section of the array, add a sum of that section, regardless of the length of that section.  Work in place and return the array.*/

// This function could be highly inefficient from a time complexity standpoint if we use a strategy of inserting and shifting to add the sums.  Instead, my plan is to calculate the final size of the array after all the insertions and then copy each element into its new position beginning from the end of the array while also tracking the appropriate sum for that segment.

function intermediateSums(array, nth = 10) {   // I've generalized this function for any positive integer interval, default set to 10
  let length = array.length;                   // store original array length so we have a reference point for which values to copy
  let stub = length % nth;                     // calculate the stub length
  let nSums = Math.floor(length/nth);          // number of sums to determine how many full segments we need to run (line 25)
  let writeSum = length + nSums;               // Index for last sum.  original length + number of sums + 1 (for stub) - 1 (for index)
  let writeTo = writeSum - 1;                  // Now copy values from 'original' portion of array to fill-in gaps
  let copyFrom = length - 1;                   // Keep track of which values to copy from 'original' portion of array
  let sum = 0;
  if(stub !== 0) {                             // if we have a stub, then handle it specifically
    for (let i = 0; i < stub; i++) {
      sum += array[copyFrom];
      array[writeTo] = array[copyFrom];
      writeTo--;
      copyFrom--;
    };
    array[writeSum] = sum;
    sum = 0;
    writeSum = writeTo;
    writeTo = writeSum - 1;
  };
  for (i = 0; i < nSums - 1; i++){         // the total number of sums we have each represents a 'block'; note nSums - 1 (see line 37)
    for (let j = 0; j < nth; j++) {      // each block is actually nth + 1 elements long (the n elements to sum, plus 1 for the sum itself)
      sum += array[copyFrom];            // we sum from the 'original' portion of the array
      array[writeTo] = array[copyFrom];  // we copy the values to their new positions in the array
      writeTo--;                         // we decrement the indices
      copyFrom--;
    };
    array[writeSum] = sum;               // once we've summed everything, then we input our sum outside of the inner for-loop
    sum = 0;
    writeSum = writeTo;
    writeTo = writeSum - 1;
  };
  for (i = nth - 1; i >=0; i--) {        // this avoids copying the first n elements in place, we could instead delete these lines and the -1 in the iteration condition of the for-loop on line 25 and it would still work.  However, we'd end up copying these final elements back into their original places as part of the final operation, so this is slightly better even though it's a few more lines of code.
    sum += array[i];
  };
  array[writeSum] = sum;                // write the last sum from the first n elements, and we're done!
  return array;
};
