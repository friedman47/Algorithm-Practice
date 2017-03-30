/* Given two arrays, combine them into a single array and return that array.  As a bonus, combine the second array into the first array. */

// Doing the first part seems like a matter of running each array and pushing to a new array after checking that the value isn't null.  The second part could be costly from a time complexity standpoint if I insert in the middle of the array and push higher indices up, so I'll try to copy to the back as appropriate.  My plan is to have the first item from the first array lead the new array, followed by the first item from the second array and interweave them for as long as there are elements in both arrays.  Then I'll simply fill out the rest of the remaining array.

function zipArrayPush(array1, array2) { // assuming both arguments are arrays
  let newArray = [];
  if(array2.length > array1.length) {  // forcing array1 to be the longer array
    let temp = array1;
    array1 = array2;
    array2 = temp;
  };
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);     //push to new Array from array1 first, then if array2 is not null, add that behind
    if(array2[i]){
      newArray.push(array2[i]);
    };
  };
  return newArray;
};
