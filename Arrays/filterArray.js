/* Given an array of integers and two integer values (a lower and upper bound), return the same array filtered so that it includes only the integers between those bounds (inclusive). */

// My plan is to use two variables: one as a "writeTo" index and a second as a runner ("i") to check values. Copy values into lower indices if they fall within the range. Truncate the array by the number of values outside of the range. Has O(n) time complexity and is in-place.

function filterArray(array, min, max) {     // I'm assuming min and max are properly specified (i.e. min <= max)
  for (var i = 0; i < array.length; i++) {
    if(array[i] < min || array[i] > max){   // find first index with a value outside of range
      break;                                // break 'preserves' our index for the first element outside range; no increment after break
    }
  }
  if(i < array.length) {                    // only start write phase of the function if array held values outside of range
    let writeTo = i;                        // write to the first index that was outside of range
    for (i += 1; i < array.length; i++) {   // i incremented once now, only increments again after conditional satisfied in each iteration
      if(min <= array[i] && array[i] <= max) {
        array[writeTo] = array[i];
        writeTo++;
      }
    }
    array.length -= (i - writeTo);          // truncate by the total number of values outside of range
  }
  return array;
};
