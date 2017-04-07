/* Given a string, return an integer made from the string's digits. */

// My plan is to split the string into an array of characters and then use a regular expression test each character to see whether it's a digit. At the end, I'll recombine the digits and convert the result to return an integer of those digits.

function getDigits(string) {
  let charArray = string.trim().split(""); // must split, since a string is immutable
  let digitsArray = [];
  let digits;
  console.log(charArray);
  for (let i = 0; i < charArray.length; i++) {
    if(/[0-9]/.test(charArray[i])) {    // using regex, we test if the character is the string of a digit
      digitsArray.push(charArray[i]);   // push all the digits into an array
    }
  }
  digits = digitsArray.join("");        // combine into a single string; note that ".join()" returns a string
  return Number(digits);                // convert the string into a number in order to return an integer (per the instructions);
}
