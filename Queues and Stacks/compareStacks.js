/* Given two stack objects, create a standalone function to return whether they are equal. Stacks are equal only if they have equal values in identical order. You should use an additional third stack for storage since you must return the given stack objects to their original order.*/

// Since the prompt specifically asks us to use a third stack, I'll assume that we should leverage polymorphism. I was considering instanceof checks to handle array and list implementations for each stack, since that would save us space, but the prompt specifically wants us to use a stack. So, I'll compare top elements of each stack, if they match, I'll pop and store in the third stack before continuing, if not then I'll restore the stacks and return false. If I reach the end of the stacks, then I'll restore them and return true. In order to potentially speed things up, I'll start by comparing sizes, continue only if they're equal.

function compareStacks(stack1, stack2) {
  let compare = []; // stores the values as we pop each stack
  let restore; // used for returning the stacks to their original state
  let match = true; // return value, arbitrarily defaults to true
  while (stack1.top() === stack2.top() && !stack1.isEmpty()) { // as long as both tops match and are non-empty...
    stack1.pop(); // ... we pop both values ...
    compare.push(stack2.pop()); // ... and store in the 'compare' stack so we can restore them later
  }
  if (!stack1.isEmpty() || !stack2.isEmpty()) { // if either stack is not empty at this point, then they do not match
    match = false;
  }
  while (compare.length > 0) { // restore both stacks to their original states
    restore = compare.pop();
    stack1.push(restore);
    stack2.push(restore);
  }
  return match;
}
