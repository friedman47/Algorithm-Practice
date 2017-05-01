/* Build String.mySearch(value) to search a string for the given value (which is another string). Return the index position of the first match found or -1 if not found. */

// Since we only want the first occurrence, that strongly suggests using a for loop and walking through the string. So, my plan is to use a for loop to check for a matching first character, then use a while loop to continue checking the rest of value's characters.

String.prototype.mySearch = function (value) {
  let _this = this; // storing 'this' in a variable so it will still refer to string instance when called in conditional below
  let index = -1;
  let matching = 0; // counter for walking through value during matching phase
  if (value === "") { // conditional to mimic .search(); without this conditional, function returns _this.length instead
    index = 0;
    return index;
  }
  for (let i = 0; i < (_this.length - value.length + 1); i++) { // end loop early if not enough characters left for substring
    if (_this[i] === value [0]) { // when first character in substring matches a character in the string, we compare
      matching++; // no need to check the first characters again
      while (matching < value.length) {
        if (_this[i + matching] === value[matching]) { // walk through as long as the substring matches
          matching++;
        } else {
          matching = 0; // reset when the substring doesn't match and break;
          break;
        }
      }
    }
    if (matching > 0) { // outside of the comparison, if matching has been incremented, it means we found a match, so we return
      index = i;
      break;
    }
  }
  return index;
}
