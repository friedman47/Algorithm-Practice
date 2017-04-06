/* Given a numerical array, reverse the order of the values. */

// I'll assume this needs to be done in place and to return the array.  My plan is to swap the first and last elements and proceed to the middlemost element.  When the number of elements is odd, the array would swap the middlemost element with itself, so we don't need a separate case.

function reverseArray(array) {
  if (!(array instanceof Array)) {return 'Please pass an array.'};
  for (let i = 0; i < (array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  };
  return array;
};
