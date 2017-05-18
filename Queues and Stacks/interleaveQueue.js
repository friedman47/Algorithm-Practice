/* Write a function that takes an SLQueue and reorders it by alternating the first half values with the second half values. You may create one additional SLQueue, if needed.*/

// My plan is to find the mid-point, then begin alternating the second half with the first half, and finally (depending on whether there's an even or odd number of elements in the queue) resetting tail if necessary. I'll assume there are no cycles within the queue, although I'll allow the queue to be circular by preserving tail's next pointer (either null or head).

function interleaveQueue(SLQueue) {
  if (SLQueue.head === null) { // if list is empty, or...
    return null;
  } else if (SLQueue.head === SLQueue.tail) { // ...if list has only one node, just fast-finish
    return SLQueue;
  }
  let current = SLQueue.head; // we'll use current in the first phase (finding mid-point) and second phase (interleaving)
  let jumper = SLQueue.head.next; // jumper is only for the first phase as we find the mid-point
  let next; // next, insert, and temp are going to be placeholders during interleaving
  let insert;
  let temp;
  while (jumper) { // our loop has two stopping conditions: jumper is null, or jumper cannot complete a full jump
    if (jumper.next) { // this check is like a 'try' to complete a full jump, and helps us detect odd-length queues
      jumper = jumper.next.next; // if a full jump wasn't possible, this is null and loop terminates next iteration
      current = current.next; // if jumper is null now, then this current is the exact middle-most node in an odd-length queue
    } else {
      break; // if .next does not exist, that means the queue has an even number of nodes; jumper (if it exists) can only be on even numbered nodes because each time it advances twice
    }
  }
  insert = current.next; // now regardless of even/odd-length queue, current's .next must start the second half of the queue
  // next, we set up our variables for the second phase (interleaving)
  if (!jumper) { // if jumper is null, then queue must have an odd number of nodes, which means the first half will contain tail as there will be one fewer node in the second half of the list
    current.next = SLQueue.tail.next; // current will become the new tail since the queue has an odd number of elements, so we copy tail's next (which will be either null or head if it's a circular queue)
    SLQueue.tail = current; // then set tail to current as the new tail of the list
  }
  current = SLQueue.head; // now set the variables (including current) to prepare for interleaving
  next = current.next;
  temp = insert.next;
  while (insert) { // as long as the second half of the queue exists, we interleave it
    current.next = insert;
    if (insert === SLQueue.tail) { // if we hit tail (in this case queue must be even-numbered since 'insert' always comes from second half of queue), we should exit the loop... (we specifically look for tail in case queue is circular)
      break;
    } else {
      insert.next = next; // ... otherwise, we complete the interleave by setting .next back to 'next' from the first half
    }
    if (next === SLQueue.tail) { // if next is tail (queue must be odd-numbered since next is always from the first half), we should manually break in case this is a circular queue
      break;
    } else { // normal iteration is just to prepare for next interleave
      current = next;
      next = current.next;
      insert = temp;
      temp = insert.next;
    }
  }
  return SLQueue;
}
