/* Given a stack, create a new second stack and copy values from the first stack into the second stack so that they pop in the same order. Use only one queue for additional storage, and only use public stack/queue interfaces */

// I'll assume I have access to the constructors in the queue.js, arrayStack.js, and listStack.js files, since the prompt says we're only supposed to use public interfaces. Additionally, we're supposed to use one queue as extra storage. So, the main problem is that stacks are LIFO and queues are FIFO, so if I just store the popped elements in the queue, then I'd be reinserting them in the reverse order. Note that if I could use a stack instead of a queue, then I'd just pop and store in the extra stack (which would reverse the order once) and then pop from the extra stack and store in the original and the copy stack (reversing again so they're both in the correct order). If I pop into the queue (reversing the order), then I dequeue back into the stack (still reverse), and then pop into the queue again, then I can feed back into both stacks in the correct order. But, that's a lot of movement, and we've already seen that popping into another stack is more efficient.
// So, I'm going to pop from the original stack into the copy stack, which means it's in the copy in reverse order. Then I'll pop from copy into queue, which puts it in the correct order, and then I'll dequeue into both stacks to complete the copy. So, rather than moving the entire stack 4 times (stack -> queue -> stack -> queue -> stack), it's only 3 times (stack -> stack-> queue -> stack) Note that we do need some data structure to hold these values in an ordered way since we must only use public interfaces.
// The prompt doesn't specify what type of stack to implement for the copy, so I'll default to SLStack (from listStack.js), but allow for an array stack.  Time O(n), space O(n).

function copyStack(stack, type = 'list') {
  let copy;                     // our new stack, which we'll return
  let queue = new SLQueue();    // our supporting queue data structure
  let temp;                     // our variable to hold the dequeued values while we push into stack and copy
  if (type === 'array') {
    copy = new arrayStack();
  } else if (type === 'list') { // could've just defaulted to a list implementation for everything except when 'array' is specified by only using the single 'IF' and removing 'ELSE IF' and 'ELSE', but thought I'd throw an error object for fun :)
    copy = new SLStack();
  } else {
    console.log('Please pass either "array" or "list" for the stack implementation.'); // helps to be polite! :)
    return new Error('Stack implementation argument not recognized.')
  }
  while (!stack.isEmpty()) { // step 1: pop the original stack into the copy; this reverses the order
    copy.push(stack.pop());
  }
  while (!copy.isEmpty()) { // step 2: pop from the copy into the queue; this restores the correct order to push back into stack
    queue.enqueue(copy.pop());
  }
  while (!queue.isEmpty()) { // step 3: dequeue from queue and push into original and copy; now both stacks are in correct order
    temp = queue.dequeue(); // temp holds the value from the dequeue so we can easily push it into both stacks
    // we could, for instance, push into stack, then push stack's top() into copy and achieve the same thing without using temp, but using temp is more readable and easier to reason through, I feel
    stack.push(temp);
    copy.push(temp);
  }
  return copy;
}
