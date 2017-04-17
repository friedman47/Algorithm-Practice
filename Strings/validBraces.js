/* Given a string containing parentheses, braces, and brackets, determine whether it is valid (opening marks precede closing marks, and all marks are paired) and return a boolean. */

/* My plan is to maintain a single stack and push/pop the appropriate symbols. This will test not only balance, having an opening mark paired with a closing mark, and having opening marks precede closing marks, but whether the marks are nested properly.  If we only cared about count and order, then something like "( this is [) nonsense {]}" would pass, but by using a stack this will return false since the first ')' symbol will try to pop the '[' symbol and they are not a pair. */

function validBraces(string) {
  let stack = [];
  let charArray = string.split("");
  for (var char in charArray) {
    if (charArray[char] === "(" || charArray[char] === "{" || charArray[char] === "[") { // push opening marks
      stack.push(charArray[char])
    } else if (charArray[char] === ")" || charArray[char] === "}" || charArray[char] === "]") { // pop closing marks and pair with stack
      if (stack.length > 0) {    // check if stack is empty
        let temp = stack.pop();  // used switch instead of charCodeAt for readability, see below for code using charCodeAt
        switch (temp) {          // another alternative would be to use a hash table with ({[ as keys and ]}) as values
          case "(":
            temp = ")"
            break;
          case "{":
            temp = "}"
            break;
          default:
            temp = "]" // stack can only be populated with 3 symbols, so just arbitrarily chose this as default
        }
        if (temp !== charArray[char]) { // no match means either improper nesting or closing mark is not preceded by opening mark
            return false;
        }
      } else {
        return false;     // cannot pop an empty stack, so a closing mark is either unpaired or precedes an opening mark
      }
    }
  }
  if (stack.length > 0) { // after looping, if the stack is non-empty then some opening mark(s) were not closed
    return false;
  } else {
    return true;
  }
}

// example of implementation using charCodeAt below:

// if (stack[stack.length - 1] === "(") {  // unfortunately, '(' is 40 and ')' is 41, but the '{}' and '[]' pairs are each separated by 2
//   if (charArray[char] !== ")") {
//     return false;
//   } else {
//     stack.pop()
//   }
// } else if ((stack.pop().charCodeAt(0) + 2) !== (charArray[char].charCodeAt(0))) {
//   return false;
// }
