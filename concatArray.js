/* Replicate the .concat() method.  Your function should accept two arrays and return a new array containing the first array's elements followed by the second array's elements.  Do not alter the original arrays.*/

// This just seems like a matter of reading and copying two arrays into a new array.  I'll do it without push.

function concatArray(array1, array2) {
  if(!(array1 instanceof Array) || !(array2 instanceof Array)) {return 'Please pass two arrays as parameters.'};
  let newArray = [];
  for (var i = 0; i < array1.length; i++) {   // use 'var' instead of 'let' so we can pass the next index to the following loop
    newArray[i] = array1[i];
  };
  for (let j = 0; j < array2.length; j++) {
    newArray[i] = array2[j];
    i++;                                      // manually increment 'i' so we continue to advance our write-to index
  };
  return newArray;
};
