/* Remove a stack's minimum value, otherwise leaving values in order. If duplicate min values are found, remove them all. Use only one additional queue for storage. Bonus, create removeNewestMin() and removeOldestMin() that use only one additional queue for storage.*/

// Again we must only use public interfaces. My plan is to pop and enqueue all the values while finding the minimum, and then dequeue and push all except the values that match the minimum. The stack will be in reverse order, so I'll need to pop and enqueue again, then dequeue and push to restore the original order.
// I'll assume access to the SLQueue in queue.js.

// Quick helper function to reverse order of a stack. Pass it a stack and queue so we don't take more space
function reverseStack(stack, queue) {
  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop());
  }
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }
  return stack;
}

function removeStackMin(stack) {
  if (stack.isEmpty()) { // empty stack is already completed
    return stack;
  }
  let queue = new SLQueue();
  let min = stack.top(); // initialize to first element of stack
  let temp;
  while (!stack.isEmpty()) { // empty stack and track minimum value
    temp = stack.pop();
    if (temp < min) {
      min = temp;
    }
    queue.enqueue(temp); // push into queue, which is now reverse order of original stack
  }
  while (!queue.isEmpty()) { // empty queue back into stack, but don't push if value is minimum
    temp = queue.dequeue();
    if (temp !== min) { // only push if value is not minimum
      stack.push(temp);
    }
  }
  reverseStack(stack, queue); // passing existing stack and queue, reverse stack
  return stack;
}
