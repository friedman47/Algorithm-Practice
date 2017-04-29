/* Build String.myTrim() to remove leading and trailing white space from a string and return the new string. White space includes spaces, tabs "\t", and new lines "\n". Leading and trailing refers to a contiguous block of white space from the beginning of the string until the first non-white-space character and a second contiguous block from the end of the string to the first non-white-space character. */

// My plan for this one is to copy the string into a new array while skipping white space and then joining that array. I don't want to split because then removing white space involves multiple shifts. I could copy to an array and use an overwrite technique to avoid multiple shifts, but I would still have "copied" twice (once during 'split' and once during overwrite). The problem with just copying directly into an array is that I need to define start and end indices, so I'll use two while loops to decrement end and increment start, then pass those to the for loop, copy to an array, and then join to return the new string.

String.prototype.myTrim = function() {
  let start = 0;              // set start and end to identify where to start the loop for copying the string and where to end.
  let end = this.length - 1;
  let trimArray = [];
  while (this[end] === " " || this[end] === "\t" || this[end] === "\n") { // decrementing to set the end point
    end--;
  }
  if(start < end) { // if the entire string is white space (or all but first character), we can skip setting the start point
    while (this[start] === " " || this[start] === "\t" || this[start] === "\n") {
      start++;
    }
  }
  for (start; start <= end; start++) { //copy to an array to form a new string
    trimArray.push(this[start]);
  }
  return trimArray.join("");
}
