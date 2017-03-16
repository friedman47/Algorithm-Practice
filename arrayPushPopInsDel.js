/* Do not use any built-in array methods for the following:
1. Given an array and a value, insert the value at the beginning of the array
2. Given an array, remove and return the value at the beginning of the array.  You may use the .pop() method.
3. Given an array, an index, and an additional value, insert the value into the array at the given index.
4. Given an array and an index, remove and return the array value at that index. You may use the .pop() method.*/

// I was debating making an object with these methods or even attaching them to Array via .prototype, but I think I'll just proceed with the challenge normally.  It looks like #1 and #2 are both O(n), while #3 and #4 on average would be O(n/2).

// pushFront - need to move all n elements to the next higher index and then insert at [0].  I'll start at the end of the array to avoid having to store any temp values. Note that .length is an attribute, not a method.  If I had to do this without .length, I'd make an assumption that the array cannot be sparsely populated in order to simplify.  I'm assuming we are passed a non-empty array, that this is in place, and that we return the array.

function pushFront(array, element){
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  };
  array[0] = element;
  return array;
};

// popFront - basically the same as the push, but we return the value from index 0.  I'll decline to use .pop() and instead just decrement the array.length property.  I'll assume a non-empty array and that this is in place.

function popFront(array){
  let pop = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  };
  array.length--;
  return pop;
};

// insertAt - this is analogous to problem 1 of this challenge, but now we specify an index in which to push. Same assumptions (passed a non-empty array, in place, return the array).

function insertAt(array, index, value) {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  };
  array[index] = value;
  return array;
};

// removeAt - analogous to problem 2, but we specify which index to pop.  Assume non-empty array, function operates in place.

function removeAt(array, index) {
  let pop = array[index];
  for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  };
  array.length--;
  return pop;
}

var testArray = [4, 7, 3, 8, 10, 5, 1, 9, 6, 2];
console.log(testArray);
console.log(pushFront(testArray, 0));
console.log(popFront(testArray));
console.log(insertAt(testArray, 0, 0));
console.log(pushFront(testArray, 12));
console.log(popFront(testArray));
console.log(insertAt(testArray, 0, 12));
console.log(pushFront(testArray, {name:'Archibald Huffpedal', occupation: 'badassery'}));
console.log(popFront(testArray));
console.log(testArray);
console.log(popFront(testArray));
console.log(testArray);
console.log(popFront(testArray));
console.log(testArray);
console.log(insertAt(testArray, 7, 19));
console.log(removeAt(testArray, 7));
console.log(testArray);
console.log(insertAt(testArray, 3, 38));
console.log(removeAt(testArray, 3));
console.log(testArray);
