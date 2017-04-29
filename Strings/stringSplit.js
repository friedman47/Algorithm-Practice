/* Build String.mySplit(separator, limit) to split a string into an array of substrings and then return that array. The separator argument indicates where to divide substrings and is not included in the substring. The limit argument is optional and specifies the number of splits - items after limit should be discarded. Note that the existing string is unaffected. */

// My plan for this is to use a helper function to copy substrings of the string into the array. Since we cannot use built-ins like .slice(), I'll just re-write it. I'll use a while loop to identify the separators and specify the indices. Using "" as a separator needs to be a special case, and I'll test for whether 'limit' is specified. Because of the presence of limit as optional, I'll use two more helper functions to improve readability rather than writing the same code twice.

function copySub (string, start, end) {  // building a copy function because we cannot use the .slice() method (part of the problem chapter's prompt). I could also have chosen to define this inside the main function, but it just felt too crowded with all of my annotations (not comments! they're way too long for comments :P) and I'd normally use .slice() here anyway, whereas the two internal functions are specific to the .mySplit() method I'm defining.
  let substring = [];
  for (start; start < end; start++) {
    substring.push(string[start]);
  }
  return substring.join('');
}

String.prototype.mySplit = function (sep, limit) {
  let start = 0;
  let end = 0;
  let split = [];
  let findIndex = () => { // using an arrow function (ES6) to lexically bind 'this' so it will refer to the instance of String
    while(this[end] !== sep && end < this.length) { // first internal helper function identifies where to copy substring from
      end++
    }
  }
  let pushToSplitArray = () => {
    split.push(copySub(this, start, end)); // second internal helper pushes the substring into the array as a single element
  }
  if (sep === "") { // using '' (empty string) as the separator is a special case, so it's coded explicitly here. W/o this exception coded in, it would just return an array with a single element containing the whole string.
    for (start; start < this.length; start++) {
      split.push(this[start]);
    }
    return split;
  }
  if (limit) { // if limit is specified, then we use it as a counter for the push function.
    while(limit > 0) {
      findIndex(); // if I were to have used a normal function definition above instead of an arrow function, then 'this' would no longer refer to the string instance when called here (inside the while loop - it defaults back to global object); some other ways around having 'this' change contextually would be to set a variable to 'this' at the start of the function and then operate with that variable instead or to use .bind(this).
      pushToSplitArray();
      start = end + 1;
      end = start;
      limit--; // decrement limit
    }
  } else {
    while(end <= this.length) { // if limit is unspecified, then we just keep going until we've exhausted the string
      // another side note: we're using while (end <= this.length) instead of (end < this.length) in order to mimic .split more closely - if the last character of a string is the separator, then split returns an empty string as the final array element. So, by saying we'll push even when end = this.length, which means there are no more characters in the string to push, we'll push an empty string into the array just as .split() would in the same scenario.
      findIndex();
      pushToSplitArray();
      start = end + 1;
      end = start;
    }
  }
  return split;
}
