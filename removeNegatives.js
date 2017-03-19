/* Implement a function removeNegatives() that accepts an array and removes any values that are less than zero.  Bonus: don't use nested loops. */

// Originally, I was going to post some of my earlier solutions, but I think just posting the best solution I've come up with is more appropriate. The solution below is in place and has O(n). In my earlier solutions, I would shift the array for each negative, but that was expensive from a time complexity standpoint since I was moving n-i elements each time, or in an alternate solution I pushed to a new array, but that cost more space/memory. This solution works by using a pointer to an insertion point and sending a runner ahead to check for non-negative values. If we find a negative it becomes our first insertion point, and we start overwriting the array from there by copying in subsequent non-negative values. At the end we truncate the array to remove all of the extra indices from the negatives we found.  So, this solution is efficient because we shift at most one time for each element and the shift is by the exact number of indices required.
// As an aside, this code is 24 lines compared to a 12-line and an 11-line solution I had earlier, but this is easily the best solution I found; that's part of what makes this problem particularly cool for me - I started thinking about efficiency in terms of the computer's operations instead of only how succinct the source code could be.

function removeNegatives (array) {
  if(!(array instanceof Array)) {return 'Please pass an array.'};
  let copyTo;
  let negativeCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negativeCount++;
      copyTo = i;
      break;
    };
  };
  if (negativeCount > 0) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < 0) {
        negativeCount++;
      } else {
        array[copyTo] = array[j];
        copyTo++;
      };
    };
    array.length -= negativeCount;
  };
  return array;
};
