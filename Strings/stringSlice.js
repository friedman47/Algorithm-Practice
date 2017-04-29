/* Build String.mySlice(start, end) to extract part of a string and return a new one - start and end are indices of the string where start is the first character to be included in the string and end is an optional parameter that when present refers to the character one farther than the last character to include. Bonus: include support for negative indices that represent offsets from the end of the string. */

// Since we're trying to re-create slice, I'll mimic slice's behavior regarding negative numbers. If we pass a negative integer for either argument, then the index will be offset from the end of the string for that argument. For any invalid start/end combinations, the return is just an empty string.
// My plan is to use a for loop to push into an array that I'll join to return the answer; I'll adjust for negative start and/or end individually (so negative start and positive end or vice versa would both be possible). I'll assume start and end are integers. start > length = '', but absolute value of a negative start > length = whole string.

String.prototype.mySlice = function(start = 0, end = this.length) { // set defaults to make both parameters optional;
  //just as an aside, this syntax was introduced in ES2015/ECMAScript6; otherwise coding start = start || 0 and end = end || this.length inside the code block of the function would also work to set the default values.
  let extract = [];
  if(start < 0) {
    start = this.length + start; // offset from the end of the string if start is negative
  }
  if(end < 0) {
    end = this.length + end; // offset from the end of the string if end is provided and is negative
  }
  for (let i = start; i < end; i++) { // if start >= end, nothing will be pushed to extract, so we'll join into an empty string
    extract.push(this[i]);
  }
  return extract.join('');
}
