/* Given a string, create a function that returns its acronym (first letters only, capitalized).*/

// I plan to .split() on spaces, then use .toUpper() on the first index of each element in the array, concatenate those into a single string and return it.  The example shows that a dash in mid-sentence is acceptable to maintain in the acronym, so I'll assume normal punctuation and spacing (specifically that "," and "." appear without space at the end of a word) and not worry about searching for and removing those characters.

function acronym(string) {
  let wordsArray = string.split(" ");
  let acroArray = [];
  for (let i = 0; i < wordsArray.length; i++) {
    acroArray.push(wordsArray[i][0].toUpperCase());
  };
  let acronym = acroArray.join("");
  return acronym;
}

var string1 = "there's no free lunch - gotta pay yer way.";
var string2 = "live from new york, it's saturday night!";
var string3 = "space - the final frontier."
var string4 = "you've got the bear necessities."

console.log(acronym(string1));
console.log(acronym(string2));
console.log(acronym(string3));
console.log(acronym(string4));
