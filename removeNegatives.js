/* Implement a function removeNegatives() that accepts an array and removes any values that are less than zero.  Bonus: don't use nested loops. */

// The code below (from line 6 to line 27) is the best solution I came up with.  You can see two of my earlier solutions after line 29.
// Going back to the looping idea (but not nested loops!), it seems like a better way to approach it would be to simply overwrite negative integers and 'collapse' the array toward its beginning, then remove all of the unnecessary elements that are now at the end.  The in-place nested loop algorithm takes so long because it deletes an element then shifts all of the rest of the n-i elements down one index, which could happen over and over again.  Meanwhile, the push solution takes up more memory.  However, with this idea, if we have a pointer to an insertion point, and a runner that checks for values to copy, we can avoid having to copy the remaining n-i elements every time we hit a negative value.  Instead, we'll copy each non-negative element one at a time and overwrite the existing data as needed to 'collapse' all of the non-negative values towards the front of the array, and then we truncate the end appropriately.  That means the following solution is both in place and has O(n).

function removeNegatives (array) {
  if(!(array instanceof Array)) {return 'Please pass an array.'}
  let copyTo;
  let negativeCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negativeCount++;
      copyTo = i;
      break;
    };
  };
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < 0) {
      negativeCount++;
    } else {
      array[copyTo] = array[j];
      copyTo++;
    };
  };
  array.length -= negativeCount;
  return array;
};

// The code below is just for reference to show where my thoughts were when I initially saw this problem.

// I plan to iterate through the array and remove any negative values using a nested loop, then do the challenge again without nested loops.  I'm assuming this needs to be done in place and we return the array.  In order not to skip values, I'll use a decrement for the main counter i.  Otherwise, shortening the array AFTER shifting the values left and then incrementing the counter would skip the value that was originally next.  By decrementing, since we're shifting values left when we find a negative, none of the values we have yet to check will be affected by the shift.

function removeNegativesLoop(array) {
  if (!(array instanceof Array)) {return 'Please pass an array.'};
  for (let i = (array.length - 1); i >= 0; i--) {
    if (array[i] < 0) {
      for (let j = i; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      };
      array.length--;
    };
  };
  return array;
};

// I have a few thoughts on how to avoid the nested loop.  For instance, I could add a helper function, but that function would still loop through the array.  Or, I could write the algorithm recursively, but that's really just a different construction of a loop.  I could instead replace the negatives in one loop with some placeholder, then in a separate loop I could call a function to remove those placeholders from the array (sort of the worst of all worlds).  So, since all of the in-place ideas seem to have some disguised form of a nested loop (because we need to shift the values), I think the gist of this bonus challenge is to trade-off time complexity for a larger space requirement.  With that in mind, my plan is to loop through the array and build a filtered array, then set the previous array equal to the new array and return it.

function removeNegativesPush(array) {
  if (!(array instanceof Array)) {return 'Please pass an array.'};
  let scrubbedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] < 0)) {          // using '!' rather than '>=' allows us to include other data types
      scrubbedArray.push(array[i]);
    };
  };
  array = scrubbedArray;
  return array;
};
