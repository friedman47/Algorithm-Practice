/* Given an array of integers, find the max, min, and average, and return them in an object.*/

// The algorithms for finding max, min, and average are the same as for the challenge in the 'array' section, but I'll just return them all in an object. So, I plan to include the array, max, min, and average in the object and perform in O(n) time by using variables to store current max, min, and sum.

function arrayStatsObject (array) {
  let stats = {array: array,
    max: array[0],
    min: array[0],
    average: array[0]
  };
  for (let i = 1; i < array.length; i++) { // loop from 1 to end of loop, since object was initialized with array[0]
    if (array[i] > stats.max) {
      stats.max = array[i];
    }
    if (array[i] < stats.min) {
      stats.min = array[i];
    }
    stats.average += array[i]; // store cumulative sum in array until we're ready to take average
  }
  stats.average = stats.average / array.length;
  return stats;
}
