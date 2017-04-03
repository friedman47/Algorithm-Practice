/* Given an array, create a function that doubles its size and then writes a copy of each element in the next higher index for each eleemnt while maintaining the same sequence for all the elements.  So, an array of [42, 'Ulysses', false] would become [42, 42, 'Ulysses', 'Ulysses', false, false]. */

// My plan here is to first make space, then copy elements into the correct index locations beginning from the end.  I'll use two values to point to the copyFrom and the writeTo locations in the array.

function doubleArray(array) {
  let length = array.length;                // using array length both to calc new length and as a pointer for 'copy from' index
  for (let i = ((length * 2) - 1); i >= 0; i -= 2) {  //decrement by 2 since we're populating two indices each loop iteration
    array[i] = array[length - 1];
    array[i - 1] = array[i];  // this line means we'll copy element 0 back into element 0; could fix, but cost is constant and trivial
    length--;                 // for reference, compare to 'intermediateSums' where n can vary widely so efficiency might matter more.
  };
  return array;
};
