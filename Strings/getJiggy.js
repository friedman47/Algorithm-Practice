/* Given a name (string), return a string that strips off the first letter, capitalizes the new word and then adds " to the [first letter]!"*/

// No need to split the string - just loop through and concatenate the appropriate values then concatenate. Use a temporary variable to store return string as function builds it.

function getJiggy(string) {
  let temp = string[1].toUpperCase();         // initialize with second element (capitalized) of string
  for (let i = 2; i < string.length; i++) {   // concatenate the rest of the string
    temp += string[i];
  }
  temp += ' to the ' + string[0].toUpperCase() + '!';  // add the remaining text followed by the first element (capitalized)
  return temp;
}
