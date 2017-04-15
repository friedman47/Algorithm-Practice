/* Given a string that is a roman numeral representation of a positive integer, return the integer. */

// My plan for this is to break the string into an array and then evaluate each element by adding to or subtracting from a cumulative total, which will ultimately be the return integer.  In order to do this efficiently, it seems that I could use a hash table to look up values. Also, in terms of direction, I think moving from the right to the left makes sense since that will indicate whether I need to add or subtract the next element I check (if I moved from left to right, then I'd have to look ahead to the next character before coming back to determine how to handle the current character). Lastly, since things like a "double subtractive" are valid (e.g. IIX is a valid representation of 8), I'll need to track the most recent 'additive' element to determine when to switch between addition and subtraction.

function romanToInt(roman) {
  roman = roman.toUpperCase(); // convert string to upper case so values match the has table
  let integer = 0;             // cumulative sum stores the value to return
  let numArray = roman.split("");
  let lastAdd = numArray[numArray.length - 1]; // indicates add/subtract by comparing to largest roman numeral evaluated so far
  let values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  for (let i = numArray.length - 1; i >= 0; i--) { // move from right to left avoids more complex conditionals and potential nested loops
    if (values[numArray[i]] > values[lastAdd]) {  // if current roman numeral is larger than 'lastAdd', add to total and update lastAdd
      lastAdd = numArray[i];
      integer += values[numArray[i]];
    } else if (values[numArray[i]] === values[lastAdd]) { // if current is same as lastAdd, just add to total
      integer += values[numArray[i]];
    } else {            // otherwise current must be less than lastAdd, so subtract from total
      integer -= values[numArray[i]];
    }
  }
  return integer;
}
