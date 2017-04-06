/* Given a string, return all of that string's contents in the same order, but without blanks. */

// This seems like it would be similar to other array methods like remove negatives, but strings are immutable.  So, I'll need to split them into an array to manipulate them.  My plan is to split on " ", so then I can simply join the array.

function removeSpaces(string) {
  if(typeof string !== 'string') {return 'Please pass a string to this function.'};  // split needs a string argument
  let wordArray = string.split(" ");    // split on spaces to create an array holding all the non-space characters
  let newString = wordArray.join("");   // need to save as a new string because strings are immutable, so we can't work 'in place'
  return newString;
}
