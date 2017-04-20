/* Given a string, return the longest palindrome (strict) within that string. Bonus: ignore spaces, capitalization, and punctuation.*/

// This seems like it will require a loop within a loop, since the palindrome can start at any point in the string and end at any point in the string. That means my intended solution has O(n^2) time complexity.  Consider this sample string for instance: "I heard mom say dad's racecar is really fast." There are at least 3 palindromes (mom, dad, racecar), so this function needs to find the palindromes, process their lengths and return the longest. Also, based on the problem, it looks like single letters are a palindrome, but we only return the first such letter, so if there are no palindromes, we return the first character of the string.

function longestPalindrome (string) {
  let tempPal = '';                         // store a temporary palindrome and the longest palindrome found so far
  let maxPal = '';
  for (let i = 0; i < string.length; i++) {       // loop through the entire string since the palindrome can start anywhere
    for (let j = string.length - 1; j >= i; j--) {  // in each loop, create another loop starting from the end, look for matches
      if (string[i] === string[j]) {
        let substringLength = j - i;
        let count = 0;
        while (count <= substringLength) {          // we're only looking at the characters in the string between our two indexes
          if (string[i + count] === string[j - count]) {
            tempPal += string[i + count]       // while characters continue to match, store in temporary palindrome
            count++;
          } else {
            tempPal = '';                       // as soon as matching fails, clear temporary palindrome and break while loop
            break;
          }
        }
        if (tempPal.length > maxPal.length) {   // if match doesn't fail, we have a palindrome; check vs max and update if needed
          maxPal = tempPal;      // note, if matching failed, then temporary palindrome was reset to '', so it won't be longer than max
          tempPal = '';
        }
      }
    }
    tempPal = '';    // reset temporary palindrome to empty in each outer loop, else it will continue appending & growing each iteration
  }
  return maxPal;
}
