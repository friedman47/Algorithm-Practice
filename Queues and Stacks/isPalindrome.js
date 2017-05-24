/* Given a Queue, return true if its values are a palindrome or false otherwise. Restore Queue to its original state before exiting. For storage, use one additional Stack.*/

// Stack is LIFO and Queue is FIFO, so if we have all of the elements in both spots (stack will be in reverse order), then we can just pop/dequeue and compare. If they match through all of the elements, then its a palindrome, and not otherwise. Since we're only allowed to use public interfaces, the main things is to make sure it gets into both data structures properly. So, phase one will be to dequeue an element and re-queue that same element and also push it into the stack. Phase two is to iterate through the queue again while comparing to stack - be sure to re-queue here as well. Two quick points: first, we need .size() of queue so we know how long to loop, and second we'll just use a flagger and return it at the end for the boolean - there's no conditional logic on how to proceed once we find something is not a palindrome because we still need to restore queue (a total of 2 dequeue-requeue loops). I'll assume I have SLStack from listStack.js.

function isPalindrome(queue) {
  let stack = new SLStack(); // stack stores elements for comparison, automatically reverses order as we push dequeued element
  let length = queue.size(); // number of times to iterate in a given phase
  let temp; // stores elements so we can enqueue and push
  let i; // iterator
  let palindrome = true; // flagger, defaults to true (so empty queue is a palindrome)
  for (i = 0; i < length; i++) { // phase 1: push into stack
    temp = queue.dequeue();
    queue.enqueue(temp);
    stack.push(temp);
  }
  for (i = 0; i < length; i++) { // phase 2: compare queue and stack; also restore queue during compare
    temp = queue.dequeue();
    if (temp !== stack.pop()) { // even if flag is set to false, we need to continue to restore queue to original state
      palindrome = false;
    }
    queue.enqueue(temp);
  }
  return palindrome;
}
