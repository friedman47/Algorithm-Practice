/* Given two arrays, create an associative array (map) containing keys of the first and values of the second. */

// We're given two arrays and want to create a JS object from both using the first as keys and the second as values. The problem does not specify this, but the lengths of the arrays should probably be equal or we probably should only iterate while both arrays have values (otherwise we would potentially be creatign key-value pairs without keys or values). Next, we probably also need the first array to use primitives (specifically strings and numbers; if we wanted to, we could for instance store the value of an array in a variable and then use that variable as a key (can be called either by the variable or the array literal), but then we get hash collision if there is another array with the same elements and indices even if it's held under a different variable name), and we need the items in the first array to be unique (all keys need to be unique).
// The above is a lot of ifs and needs that I think are beyond the scope of the spirit of the problem (book seems to focus more on the algorithmic integration of the zip, not the logistics regarding lengths, types, and uniqueness), so I'm just going to assume them away and re-frame the problem as below:
// Given two arrays of equal length, the first of which contains some combination of unique strings and/or numbers as elements, create a function that returns an associative array (map/object) using elements from the first array as keys and elements from the second array as values.

function zipArraysToMap (arrayKey, arrayValue) {
  let map = {};
  for (let i = 0; i < arrayKey.length; i++) {
    map[arrayKey[i]] = arrayValue[i];
  }
  return map;
}
