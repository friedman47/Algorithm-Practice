/* Given two arrays, combine them into a single array by alternating elements from each original array and return the new array.  As a bonus, combine the second array into the first array. */

// Arrays are immutable, which makes this interesting. If we push to a new array, it will cost extra memory, but if we copy in place, we might not have enough room. JavaScript will handle expanding an array for us and hide the details, but in another language the choice of method would affect efficiency more tangibly. Push would be better if the original array couldn't accommodate the extra elements, since we would have needed a new array anyway and pushing means we would skip copying the elements once when we expand the array and then again when we copy in place. However, if array 1 does have room, then copy in place saves that extra memory, so it's better in that case.

// For the push method, I'll alternately push elements into a new array from each original array until one runs out of elements, then I'll push the rest of the elements from the remaining array.

function zipArrayPush(array1, array2) {
  let newArray = [];
  let index = 0;                            // index tracks which index we're pushing from during the while-loop
  while(array1[index] || array2[index]) {   // implementing a while-loop seems easier than a for-loop since we can skip length calculations
    if (array1[index]) {                    // either we push from array1 and then array2 (if possible), or...
      newArray.push(array1[index]);
      if (array2[index]) {
        newArray.push(array2[index]);
      }
    } else {                                // we just push from array2, since array1 must be out of elements if we hit this 'else'
      newArray.push(array2[index]);
    }
    index++;                                // increment our index as the last part of the while loop
  }
  return newArray;
};

// To copy in place uses a few more variables.  My plan is to copy the longer array into its final position starting from the end of the array, and then when both arrays are interweaving I'll alternate copying values.  Note a couple things: (1) array1 will always occupy even-numbered indices and array2 odd during the interweaving, and (2) the element to copy will have the same index number in each of the original arrays while we're interweaving, so the arrays effectively have the same "length" while we're interweaving.  That means we can use modulus (%) to determine which array to copy from per (1) above, and we can use the shorter array's length as a counter for which element to copy while we're interweaving per (2) above.

function zipArrayCopy(array1, array2) {
  let long = array2;      // set an array as "long" and the other as "short" for easy reference
  let short = array1;
  if (array1.length > array2.length) {
    long = array1;
    short = array2;
  };
  let lRunner = long.length;  // store these values since soon array1's length will increase and array1 could be long or short;
  let sRunner = short.length;
  let total = lRunner + sRunner - 1; // we don't need either total or weave to store values, but they improve readability;
  let weave = lRunner - sRunner;
  for (let i = total; i >= 0; i--) { // it seems like >=0 could be >0, but if [] is an argument, we do need to copy the 0th index in place
    if (i > (total - weave)) {    // as long as we're outside of the interweaving phase, we just copy in the longer array's values
      array1[i] = long[lRunner - 1]
      lRunner--;    // can't use "i" (too large); if array1 happens to be "long", then decrementing with "long.length--" will cause a bug
    } else {  // now we're in the interweaving phase, so we'll use the shorter array's length to track which index to copy from
      if (i % 2 === 1) {      // all odd-numbered indices come from array2 ...
        array1[i] = array2[sRunner - 1];
      } else {    // all even-numbered indices come from array1
        array1[i] = array1[sRunner - 1];
        sRunner--; // we copy from array2, then array1, then decrement the counter to move to the next lower index in each original array
      }
    }
  }
  return array1;
};
