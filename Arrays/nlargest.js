/* These two problems each have first a specific case and then a general case.
1a) return the second to last element of an array; if it is too short, return null
1b) return the nth to last element of an array; if it is too short, return null
2a) return the second largest element of an array; if it is too short, return null
2b) return the nth largest element of an array; if it is too short, return null*/

// Problem #1 should be fairly straightforward, since we can just take the difference between array.length and n as our index.
// I'll assume non-sparsely populated data or that returning 'undefined' is acceptable.
function nthToLast(array, n) {
  if(!(array instanceof Array)) {return 'Please pass an array as the first argument.'};
  if(typeof n != 'number') {return 'Please pass an integer as the second argument.'};
  if(Math.floor(n) !== n) {return 'Please pass an integer as the second argument.'};
  if(n > array.length) {return null};
  return array[array.length - n];
}

// Problem #2 is a little trickier because we shouldn't assume the array is sorted, so we'll need to store and order the n largest numbers at least.  One idea is just to sort, which is what I'll do for the time being.  Another idea would be to minimize the numbers we're tracking just to n.  Using a queue/stack or tree doesn't seem to fit because we would need to traverse frequently to test values and order them properly; I could potentially use an object and store the elements as keys with their indices as their values, but since each key-value pair is unordered I'd have to iterate the entire object each time I wanted to make a comparison.  I'll come back to this with a quicksort, probably, after I've learned a bit more of the implementation, but in the meantime it's just a bubble sort and then the nth largest is also nth to last.

function bubbleSort(array) {
  let needSort = true;
  let temp;
  while (needSort) {
    needSort = false;
    for(let i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]){
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        needSort = true;
      };
    };
  };
  return array;
};

function nthLargest(array, n) {
  bubbleSort(array);
  return nthToLast(array, n);
}
