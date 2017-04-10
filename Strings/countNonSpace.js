/* Given a string, return the number of non-space characters in that string.*/

// My plan for this is to break the string using .split(), then loop through the array and use a conditional to increment a value for every element in the array that is not " ".  Based on the prompt, I will not .trim() since it makes no distinction between leading/trailing spaces versus internal spaces.

function countNonSpace(string) {
  let characterArray = string.split("");  // break string into array since strings are immutable
  let count = 0;
  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i] !== " ") {
      count++;                            // increment count for every " " character in the string
    };
  };
  return count
}
