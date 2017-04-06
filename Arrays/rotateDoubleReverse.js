/* I randomly came across this idea for rotating an array and thought it would be fun to implement.  It works by reversing two sub-arrays in place and then reversing the whole array.  So, the effect is [FirstPart, LastPart] => [FirstReversed, Last Reversed] => [LastPart, FirstPart].  Step 3 is tricky at first glance because both the first and last parts are reversed, but when we reverse the ENTIRE array, the last subarray will both 'unreverse' and move to the front of the array while the first subarray 'unreverses' and moves to the end.  An interesting side note: this double reverse method has O(n) (i/2 + n-i/2 = n/2 [reversing subarrays], so n/2 [total for subarrays] + n/2 [whole array] = n) while the original rotate solution I posted using cycles also has O(n) - despite this, I believe the original rotate solution (if I were to have rotated from the end toward the beginning of a cycle, rather than rotating forwards using two temp variables as I did (which was mostly just for fun)) is slightly more efficient because it contains fewer total operations. */

// I'm going to skip validation and negative offsets, since I just want to implement a quick MVP of this idea

function rotateDoubleReverse(array, offset) {
  let breakpoint = array.length - offset;
  let temp;
  for (let i = 0; i < (breakpoint / 2); i++){ //reverse first part. Exclude breakpoint, iterate halfway (each iteration is a pairwise swap)
    temp = array[breakpoint - i - 1];
    array[breakpoint - i - 1] = array[i];
    array[i] = temp;
  }
  for(let i = 0; i < (offset / 2); i++){  //reverse the second part.  Same principle as first part.
    temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i + breakpoint];
    array[i + breakpoint] = temp;
  }
  for (let i = 0; i < array.length / 2; i++){  // now we reverse the whole thing and we've got our offset! (well, our MVP offset anyway :P)
    temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = temp;
  }
  return array;
};

/* Possible ways/suggestions to improve this implementation:
1) Validate that the array is an array and that offset is an integer
2) Convert offset to modulo and a positive so it can handle any integer value
3) Write a helper 'reverseArray' function and call that, since we're doing it 3 times inside this function
4) Check whether either sub array needs reversing (e.g. if it's just one element) and skip if unnecessary
5) Prevent the middle most element from swapping with itself when reversing an array/subarray with an odd number of elements */

/* Side note: I opted for i = 0 and offset in the second for loop because I needed a convenient way to count backward from the end of the array; if I didn't set i = 0 and then add back in the breakpoint, then I would have had to keep a 'count' variable or something like that to help decrement from the end of the array.  That extra variable would have been one more assignment and one more operation during each iteration, so I just chose to add the breakpoint instead for a little cleaner, smoother code. */
