/* Implement a rotate array function that takes an array and an offset value. Shift the array's values to the right by the offset amount and 'wrap around' any elements that would be shifted off the end so that no data is lost. Operate in place, do not use built in functions. Bonus 1: allow a shift to the left using a negative number. Bonus 2: minimize memory usage so you could shift arrays and offsets in the millions without a new array.  Bonus 3: minimize the touches of each element. */

// My plan is to use a temp variable to store an element that's being moved, then iterate through the array.  Ideally, the offset and the array length are coprime so that there are no cycles (e.g. array of length 7 with an offset of 3 will eventually shift the entire array). However, if the arrays have a common divisor (e.g. such as length 12, offset 9, which both have 3 as a divisor), then the rotation will cycle rather than touching all the elements (e.g. 9 goes to 6, goes to 3, goes to 12, then back to 9).  So, I think the best approach would be to find the greatest common divisor and then use a nested loop construction that increments after one 'cycle' is complete (so we'll still only touch each element once).  Instead, if we shifted each element in sequence, then we'd have to store many more values.  So, I'll use Euclid's Algorithm to find the greatest common divisor first and then shift the elements one at a time.

function rotateArray(array, offset) {
  offset = (((offset % array.length) + array.length) % array.length); // scrub the offset for negatives and multiples of the length
  if (offset !== 0) { // if modulus is 0, then the array is already shifted so we'll skip all this stuff below and just return it directly
// determine largest common divisor (Euclid's Algorithm)
    let m = array.length;
    let n = offset;
    let temp;
    while(m % n !== 0) {
      temp = m % n;
      m = n;
      n = temp;
    }
// if largest common divisor is 1, then the offset is coprime with the array length so we can loop through all the elements without cycling
    if(n === 1) {
      let temp1 = array[0];  //use two temp variables so we can copy values forward without losing data; initialize with first origin value
      let temp2;
      let i = 0;
      do {
        temp2 = array[(i + offset) % (array.length)];  // temp2 stores the original destination value
        array[(i + offset) % (array.length)] = temp1;  // temp1 passes the previous value from the originating index (before it was replaced)
        temp1 = temp2;  // temp1 takes temp2's value b/c this 'destination' value becomes the originating value for the next iteration
        i = (i + offset) % (array.length);  // increment i by the offset to continue this cycle (touches all elements once before restarting)
      }
      while (i % array.length !== 0) // this is why we use a do-while; 0 is where we started so seeing it again means we've cycled everything
// if largest common divisor > 1, then the offset will begin to cycle before touching all the elements.  So, we nest the do-while loop inside a for loop that increments through each starting index of the offset.  This ensures that we touch and move all elements exactly once.
    } else if (n === offset) {
      let start = 0;  //declare a 'start' value, so we know where we've started and can end the do-while when we get back to the beginning
      let temp1 = array[0]; // initialize the first temp value with the first originating value;
      let temp2;
      for (i = 0; i < offset; i++) {
        do {
          temp2 = array[(i + offset) % (array.length)];
          array[(i + offset) % (array.length)] = temp1;
          temp1 = temp2;
          i = (i + offset) % (array.length);
        }
        while (i % array.length !== start)
        start++; //reset the starting point to the next cycle in the array
        temp1 = array[start]; //re-initialize the first originating value for the next cycle in the array
      }
    } else {

// the main issue I'm thinking about here is how to avoid moving indices that would have otherwise moved multiple times.  If the array length and offset are coprime, the cycle will touch each element exactly once before starting over.  If the array length has the offset as a divisor, then each element will 'span' the entire array in 1 cycle before starting over.  However, if the offset and the array length share a common divisor, then it will shift elements that will be shifted again as we iterate through the offset.  For instance, array length 10 and offset 4 both share 2 as a common divisor - rather than make a perfect cycle, 0 goes to 4 goes to 8 goes ('spanning' the array once) to 2 goes to 6 and then would restart at 0, which ends the loop.  Later, we'll move some of the same elements in a subsequent loop (such as when we start at index 2), and the result is we'll be over-rotated.
// I don't want to track indices that have already been touched, since my goal here was to minimize memory space usage and time complexity (minimizing touches/operations), even though this may be a limited case.  I'm debating whether to make Euclid's algorithm a helper function and then applying it to i in the third case to avoid certain iterations.
      return 'need to figure out how to handle gcd cases'
    }
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

// if n is a divisor of array length, then can proceed; if n is larger than that, then it will mess with previous iterations (e.g. length 25 and offset 10 will go 10, 20, then 5, 15, 25 - so, the 5 will iterate twice (notice that 10 = 5 * 2 and 5 is gcd))
// could re-write entire approach using a queue of length offset to store values and pull them off to overwrite => costs O(n + offset);

console.log(rotateArray(testArray4, 3));
var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(testArray4, 5));
var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(testArray4, 2));
var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(testArray4, 6));
var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(testArray4, 4));
var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, 5));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, 6));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, 7));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, 8));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, 9));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, 10));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, 11));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(rotateArray(testArray4, -1));
// var testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
