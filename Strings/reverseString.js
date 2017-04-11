/* Given a string, return a string with the characters from the original string in reverse order.*/

// My plan is to .split("") the string on the empty string to get every character, then reverse the resulting array by doing a pairwise swap all the way to the midpoint of the string, then I'll join the string backtogether and return it.

function reverseString(string) {
  let charArray = string.split(""); // store each character of the string in an array
  let temp;
  for (let i = 0; i < (charArray.length/2); i++) {  // reverse the order of the array
    temp = charArray[i];
    charArray[i] = charArray[charArray.length - i - 1];
    charArray[charArray.length - i - 1] = temp;
  }
  let reversedString = charArray.join(""); // re-combine the characters into a new string and return it
  return reversedString;
}
