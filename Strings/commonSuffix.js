/* Given an array of words, return the largest suffix (referring simply to the letters at the end of the word, not strictly a morpheme) that is common to all words in the array. If there is no common suffix, return an empty string.*/

// Returning the longest common suffix requires checking each word in the array. I'll use the first word (arbitrarily) in the array and compare all others against it - the word used for comparison doesn't matter since we want a common suffix. So, if we start with the shortest word and it's a perfect match (e.g. 'ion' matching, 'nation', and 'preservation') then even though a longer suffix ('tion') exists, it's not common to all. Similarly, if we started with 'preservation' then we cannot match farther than 'ion'. I'll use a conditional to check each letter of the suffix and append to a new array, then reverse, join, and return that array as the longest suffix. This can be done in O(nxm) where n grows (linearly) with the length of the shortest word in the array and m grows (linearly) with the number of words in the array.

function commonSuffix (array) {
  let suffix = []; // an array to hold the suffix; this behaves as a queue since after pushing (appending) we concatenate from the beginning (using .join()) rather than popping - if we want to avoid the reversal step, we could use a stack instead
  let temp; // a temp variable to help with the reversal step, if we use a stack, then we don't need this
  for (let i = 0; i < array[0].length; i++) { // loop through all of the letters in the first word of the array and...
    for (let j = 1; j < array.length; j++) { // compare each letter against all the other words in the array
      if (array[0][array[0].length - 1 - i] !== array[j][array[j].length - 1 - i]) {
        i = array[0].length // if there's a mismatch, set i to stop outer loop and break from inner loop
        break;
      }
    }
    if(i < array[0].length) { // if we didn't break out of the inner loop, then all words match current letter, so add to suffix
      suffix.push(array[0][array[0].length - 1 - i]);
    }
  }
  for(i = 0; i < suffix.length / 2; i++) { // need to reverse because of queue implementation (T(n/2)); this is linear
    temp = suffix[suffix.length - 1 - i]; // note if we used a stack, we'd still need to pop and concatenate, so it would also be a linear operation
    suffix[suffix.length - 1 - i] = suffix[i];
    suffix[i] = temp;
  }
  return suffix.join('');
}
