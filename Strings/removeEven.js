/* Given an array, build a standalone function to remove strings of even lengths in place. */

// This problem looks like a scenario where the user has already performed a string.split(" ") and now we're just writing a helper function to remove even-length elements from the given array. My plan is to iterate through the array, check whether a given element is even or odd, and then start overwriting to that point using a pointer while running ahead to continue checking with a checker, then truncating the list. This will be more efficient than shifting the array for each deletion. O(n) time complexity.
// One other feature I'll add, just because it's quick, is to allow the user to toggle between even- or odd-length deletions by having a default parameter in the function. Also note that any adjacent punctuation is considered part of the string (based on the example in the problem), so "this" is even while "this." is odd.

function removeEven(array, even = 0){
  let copyTo = array.length;              // default our copyTo index to array.length; this avoids extra conditionals later
  for (var i = 0; i < array.length; i++) { // set our first index to overwrite (copyTo) by looping through the array
    if(array[i].length % 2 === even) {
      copyTo = i;
      break;
    }
  }
  for (i++; i < array.length; i++) {   // resume looping and copy values that meet our criteria to the copyTo index
    if(array[i].length % 2 !== even) {
      array[copyTo] = array[i];
      copyTo++;
    }
  }
  array.length = copyTo; // copyTo is now the same as new array length; if we'd initialized copyTo at zero instead of the original array length, then we'd need to check whether all elements or no elements met our criteria since copyTo would still be 0 in both cases.
  return array;
}
