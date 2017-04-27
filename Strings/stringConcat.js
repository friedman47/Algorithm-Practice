/* Recreate the string.concat() method in the JavaScript library.  It takes some arbitrary number of arguments and adds them to the end of the existing string, then returns the new string.*/

// This seems fairly straightforward, with the main catching point being to accommodate some arbitrary number of string elements. So, I'll use JavaScript's 'arguments' key word to take all of the arguments passed into the function as an array-like object (I say 'array-like' because it doesn't have certain array methods, but it does have a length property and elements can be accessed with array-like index syntax such as arguments[0]).

String.prototype.myConcat = function() { // per the prompt, attaching this concatenate to the String object as a method
  let addStrings = []; // arguments object does not have the .join() method, so need to transfer to an Array object
  let newString = this;  // 'this' refers to the particular instance of the String object and is immutable (the thing that 'this' is referring to cannot be changed by assignment such as this += extra values), so we'll hold the value of the string itself in a variable and that allows us to join/concatenate with the variable, which we'll ultimately return
  for (let i = 0; i < arguments.length; i++) {
    addStrings.push(arguments[i]);  // copy all arguments into the array...
  }
  newString += addStrings.join(''); // ... now append original string with the joined array of all the arguments
  return newString;
}
