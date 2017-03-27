/* Given an array and indices 'start' and 'end', remove the values in that index range (inclusive).  Work in place and return the array. */

// My plan here is to use 2 placeholders: 1 to hold an index to copy to, 1 to traverse the array to get the values to copy.  Then I'll truncate the array by the length of the range.  This will be more efficient from a time complexity standpoint than if I were to remove and shift the array one element in the range at a time.  We're allowed to assume we're given an array and indices, so I won't validate those - I could check to see if start and end exist within the array, but I think the spirit of the problem allows us to assume they're valid.

function removeRange(array, start, end) {
  let truncate = end - start + 1                    // +1 so range includes 'start', store total b/c 'start' & 'end' will change
  for (let i = end + 1; i < array.length; i++) {    // begin copying from 'end + 1' b/c we're also deleting the index at 'end'
    array[start] = array[i];
    start++;
  };
  array.length -= truncate;
  return array;
};
