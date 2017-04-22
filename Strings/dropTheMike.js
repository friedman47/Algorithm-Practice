/* Given a string, write a function to remove leading and trailing spaces, capitalize the first letter of each word, and return the new string. Instead, if the original string contains "Mike" return "stunned silence."*/

// This appears to have two separate operations: formatting the string, and searching for 'Mike', but I'd like to complete it in O(n). So, my plan is to begin by trimming the spaces then formatting the words while keeping a conditional to test for 'Mike' (only in the original string, so 'mike' that turns into 'Mike' doesn't count) if I come across any 'M' character. Additionally, I'll push each value to a new array and then join at the end - I could append to the return string directly, but I recently did that in the 'bookIndex.js' problem, so this choice is mostly just a change of pace as our string sizes are likely to be small (for larger string sizes, using Array.join() is likely to have slightly better performance anyway since concatenation will destroy 2 strings and create a new string each time).

function dropMike(string) {
  let newArray = [];
  let i = string.length - 1;
  let endPoint;     // No .trim(), so need the end point for loop
  while (string[i] === ' ') {
    i--;
  }
  endPoint = i;
  i = 0;
  while (string[i] === ' ') {  // No .trim(), so find starting point for loop
    i++;
  }
  if (i === 0 && string[i] !== 'M') { // edge case: no leading spaces; 'M' is its own special case in for loop
    newArray.push(string[i].toUpperCase())
    i++;                                    // need to begin for loop on 2nd character now as first already pushed
  }
  for (i; i <= endPoint; i++) {
    if (string[i] === 'M') {    // loop and test for 'Mike' on any 'M' for a fast return
      if (string[i + 1] === 'i' && string[i + 2] === 'k' && string[i + 3] === 'e') {
        return "stunned silence"
      } else {
        newArray.push(string[i]) // push 'M' if not part of 'Mike'
      }
    } else if (string[i - 1] === ' ') { // if character is preceded by a space, then captialize it and push
      newArray.push(string[i].toUpperCase())
    } else {
      newArray.push(string[i]) // all other characters are just pushed directly to the array
    }
  }
  return newArray.join("");  // after creating the new array of characters, we join them and return it
}
