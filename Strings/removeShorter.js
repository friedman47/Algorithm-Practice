/* Given a string, write a function that takes that string and a value.  The function should remove any strings shorter than the value.*/

// I'm interpreting "strings" inside of the string that we pass as being delimited by spaces.  If that's the case, then my plan is to .split(" ") the string on spaces so that each array element can be compared against value.  Next, I'll remove values that are too short by overwriting with longer values (it's in place with O(n) time complexity, O(1) space complexity), and finally I'll .join(" ") the array using a single space so that it returns a new string with shorter strings removed.
// Note that this won't restore original spacing if there were multiple spaces.  Two quick ideas if we need that functionality: (1) .split(""), and then modify comparison logic to remove substrings that are too short, or (2) perform the function as written below, but before .join(" "), compare to original string and restore spacing according to whatever rules we choose to establish (e.g. if we decide that the spaces leading a substring we delete will be ignored, then we don't add them back in, or we could attach them to the end of the preceding substring, or whatever we choose)

function removeShorter(string, value) {
  let stringArray = string.split(" ");  // split on spaces to evaluate substrings
  let i = 0;
  let copyTo = 0;
  for (i; i < stringArray.length; i++) { // use a for loop implementation since the while loop threw errors for value = 0 or 1
    if (stringArray[i].length < value) {
      break;
    }
  }
  copyTo = i;     // the first index with a length less than value is where we'll start overwriting
  for (i++; i < stringArray.length; i++) {
    if (stringArray[i].length >= value) {
      stringArray[copyTo] = stringArray[i]
      copyTo++;
    };
  };
  stringArray.length = copyTo;
  return stringArray.join(" ");
}
