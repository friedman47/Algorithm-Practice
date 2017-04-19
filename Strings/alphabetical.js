/* Given a string, return true if all contained letters in the string are in alphabetical order otherwise return false.*/

// Since capitalization is not relevant for alphabetical order, my plan is to scrub the array and then loop through it using character codes to evaluate whether it's in alphabetical order.

function alphabetical (string) {
  let scrubbed = string.replace(/ /g,"").toLowerCase().replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,""); // scrub string first
  for (let i = 1; i < scrubbed.length; i++) {
    if (scrubbed.charCodeAt(i) < scrubbed.charCodeAt(i-1)) {
      return false;
    }
  }
  return true;
}
