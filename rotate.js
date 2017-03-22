/* Implement a rotate array function that takes an array and an offset value. Shift the array's values to the right by the offset amount and 'wrap around' any elements that would be shifted off the end so that no data is lost. Operate in place, do not use built in functions. Bonus 1: allow a shift to the left using a negative number. Bonus 2: minimize memory usage so you could shift arrays and offsets in the millions without a new array.  Bonus 3: minimize the touches of each element. */

// My plan is to use a temp variable to store an element that's being moved, the iterate through the array.  Ideally, the offset and the array length are coprime so that there are no cycles (e.g. array of length 7 with an offset of 3 will eventually shift the entire array). However, if the arrays have a common divisor (e.g. such as length 12, offset 9, which both have 3 as a divisor), then the rotation will cycle rather than touching all the elements (e.g. 9 goes to 6, goes to 3, goes to 12, then back to 9).  So, I think the best approach would be to find the greatest common divisor and then use a nested loop construction that increments after one 'cycle' is complete (so we'll still only touch each element once).  Instead, if we shifted each element in sequence, then we'd have to store many more values.  So, I'll use Euclid's Algorithm to find the greatest common divisor first and then shift the elements one at a time.

function rotateArray(array, offset) {
  if(!(array instanceof Array)) {return 'Please pass an array as the first argument.'}
  if(typeof offset != 'number') {return 'Please pass an integer as the second argument.'}
  if(Math.floor(offset) !== offset) {return 'Please pass an integer as the second argument.'}
  let m = array.length;
  let n = offset;
  let temp = n;
  // let cycleCount = 1;
  if(offset % array.length !== 0) {
    if(offset < 0) {offset = (offset % array.length) + array.length}
    else {offset = offset % array.length};
    while (m % n > 0) {
      temp = m % n;
      m = n;
      n = temp;
    }
    if(n > 1) {
      for (let i = 0; i < offset; i++) {
        let start = i;
        temp = array[i];
        do {
          array[i] = array[(i - offset + array.length) % array.length];
          i = (i - offset + array.length) % array.length;
          console.log(array);
        }
        while (i !== start + offset)
        array[start + offset] = temp;
      }
    } else {
      let i = 0;
      temp = array[i];
      do {
        array[i] = array[(i - offset + array.length) % array.length];
        i = (i - offset + array.length) % array.length;
      }
      while (i !== 0)
      array[offset] = temp;
    }
    //   temp = offset;
    //   while (temp % array.length !== 0) {
    //     temp += offset;
    //     cycleCount++;
    //   }
    //   for (let i = 0; i < offset; i++) {
    //     let j = i;
    //     do {
    //       temp = array[j + offset];
    //       array[j + offset] = array[j];
    //
    //     }
    //     while ()
    //   }
    // } else {
    //   for (let i = 0; i < array.length; i++) {
    //
    //   }
  }
  return array;
}

var testArray1 = [0, -1, 1, -1, 2, -1, 3];
var testArray2 = [0, -1, 1, -1, 2, -1, -1, -1, 3, -1];
var testArray3 = [{greeting: 'hello', coding: 'ninja'}, -1, 'you', -1, 'removed', -1, -1, 'my', -1, -1, -1, 'negatives', -1, -1, false];
var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testArray5 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
var testArray6 = [];
var testArray7 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

// console.log(rotateArray(testArray4, 1));
console.log(rotateArray(testArray4, 2));
console.log(rotateArray(testArray4, 3));
console.log(rotateArray(testArray4, 4));
console.log(rotateArray(testArray4, 5));
console.log(rotateArray(testArray4, 6));
console.log(rotateArray(testArray4, 7));
console.log(rotateArray(testArray4, 8));
console.log(rotateArray(testArray4, 9));
console.log(rotateArray(testArray4, 10));
console.log(rotateArray(testArray4, 11));
console.log(rotateArray(testArray4, -1));
