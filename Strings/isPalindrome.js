/* Given a string, return a boolean if the string is a strict palindrome (do not ignore spaces, punctuation, or capitalization). Bonus: same challenge, but do ignore spaces, punctuation, and capitalization. */

// Since we're looking at the entire string, my plan is just to compare the ith element to the length-ith element and continue until there is no match, at which point return false.  Otherwise, I'll return true.

function isPalindromeStrict (string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// For the bonus, I'll just reduce the string by removing spaces, converting to all lower case, and scrubbing out punctuation marks before running the same algorithm as above.

function isPalindrome(string) {
  var newString = string.replace(/ /g,"").toLowerCase().replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g,""); // scrub string first
  var same = true   // instead of multiple returns, just decided to store in a variable and have one return at the end
  for (var i = 0; i < newString.length / 2; i++) {
    if(newString[i] !== newString[newString.length - i - 1]) {
      same = false;
      break;
    }
  }
  return same;
}
