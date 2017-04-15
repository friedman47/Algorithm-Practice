/* Given an input string, return a boolean if its parentheses are valid.  Valid means that each open paren has a corresponding closing paren and vice versa, and an opening paren always precedes its closing counterpart.*/

// My plan is to implement a stack and push every opening paren, then pop whenever there is a closing paren.  Since each valid parentheses pair consists of one opening and one closing paren, there is no configuration of parentheses that would be "invalid" as long as they are always paired and a closing paren doesn't precede its opening paren (although the configuration could DEFINITELY be illogical - the examples in the problem make it clear that this is not a logical evaluation, only one of checking pairs and ordering). So, my condition for throwing an error would be stack underflow, since that means there was no preceding opening paren for a given closing paren. Also, at the end of the string, if the stack is not empty, that means there's no closing paren for a given opening paren.
// So, first I'll .split("") the string, and then loop through the array using a stack as a supporting data structure. I'll push every "(" and pop for each ")" and if I pop when the stack is empty, or if I have a non-empty stack after completing the loop, it's an error.

function validParens(string) {
  let parenStack = [];                          // this will only store "(" as we iterate through the string, then pop for every ")"
  let charArray = string.split("");
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === "(") {                 // push all "(" to our stack [we could push any symbol, since it's just a placeholder]
      parenStack.push(charArray[i]);
    } else if (charArray[i] === ")") {
      if (parenStack.length > 0) {              // check for stack underflow, which returns false in the 'else' clause
        parenStack.pop();
      } else {
        console.log('Closing parenthesis has no valid counterpart.');
        return false
      }
    }
  }
  if (parenStack.length > 0) {                  // after iterating, non-empty stack means an opening paren never closed, return false
    console.log('Opening parenthesis has no valid counterpart.');
    return false
  } else {
    return true
  }
}
