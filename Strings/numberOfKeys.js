/* Given an object, return the number of keys in that object. */

// This problem is aimed at familiarizing us with the for-in loop. So, I'll use a for-in loop to iterate through the keys in the object while incrementing a counter, then return that counter at the end.

function numberOfKeys (object) {
  let numberOfKeys = 0;
  for (let key in object) {
    numberOfKeys++;
  }
  return numberOfKeys;
}
