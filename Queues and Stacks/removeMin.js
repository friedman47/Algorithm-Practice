/* Create a standalone function that takes an SLQueue and removes its lowest value and leaves the remaining values in the same sequence. Use only local variables (no other objects) and remove all duplicates of this value.  Bonus: remove only the last minimum value.*/

// The basic problem involves two parts: find the minimum value, and remove all instances of it. Since we cannot use any objects, we cannot hash the list or use another helping data structure (even an object that stores current min value and pointers to all of the nodes immediately preceding each instance of that value) to assist in the deletion process. That means we'll need to traverse the list multiple times: first to find the minimum, and second to remove all instances. I'll assume there are no cycles within the queue (as mentioned in other problems, this excludes circular queues where I naturally expect the only cycles to include all nodes of the queue). Bonus is below the basic solution. Both are O(n) time complexity.

// Helper function to improve readability; returns minimum value from list
function findMin(SLQueue) { // This function is only intended to be called as a helper, so all assumptions that apply to the main function apply here as well (no cycles, valid inputs, nodes hold comparable values, etc)
  let current = SLQueue.head;
  let min = current.value;
  while (current) {
    if (current.value < min) {
      min = current.value
    }
    if (current !== SLQueue.tail) {
      current = current.next;
    } else {
      break;
    }
  }
  return min;
}

// This function breaks the problem into two further sub-parts (we've found the minimum and now we're iterating): first, remove all of the minimum values in the 'body' of the queue, and second handle the head and tail nodes separately.
// I chose to deal with the head and tail nodes separately because 1) they have special pointers from the queue that make them distinct from other nodes in the list and require specific treatment to maintain the queue, and 2) it's easier to read if all of the special cases are combined in one area
function removeMin(SLQueue) {
  if (SLQueue.head === null) {
    return null;
  }
  let current = SLQueue.head;
  let runner = null;
  let min = findMin(SLQueue);
  while (current) { // iterate until we hit the tail of the queue
    if (current.next && current.next.value === min) { // look ahead; we'll check for a contiguous block of nodes, too
      runner = current.next;
      while (runner !== SLQueue.tail) { // if we're at the tail, we stop since we're dealing with head and tail separately
        if (runner.value === min) {
          runner = runner.next;
        } else { // if we hit this point, we've found a value greater than min and can now connect to it
          break;
        }
      }
      current.next = runner;
    }
    if (current.next === SLQueue.tail) { // we stop at node just before tail, in case we need it (if tail holds min val)
      break;
    } else {
      current = current.next;
    }
  }
  // this if statement is a bit much, so let's break it down:
  // 1) IF checks whether: a) head and tail are the same node, in which case, we didn't do anything in the body above, OR b) the list has exactly two nodes and both are the minimum value. This just keeps it DRY, since checking tail, the resetting it only to find out that tail and head are the same (in a 2-node list, both holding min values) and then setting head/tail to null is irksome; this handles the case where tail is min and current is head (since current is node immediately before tail) AND current is also min, so we need to set queue to null.
  // 2) ELSE IF just lets us know that even if current is head, it's not min (otherwise IF would catch it), so we can directly set current (the node immediately before tail) as the new tail in the case where tail is min. We don't need to check anything else because the IF would have caught the other edge cases. Head and tail can now be the same, or not, doens't matter, but if tail was min, then we've reset it. Also, note that we set current.next in order to accommodate circular queues.
  if (SLQueue.head === SLQueue.tail || SLQueue.tail.value === min && current === SLQueue.head && current.value === min) {
    SLQueue.head = null;
    SLQueue.tail = null;
  } else if (SLQueue.tail.value === min) {
    current.next = SLQueue.tail.next;
    SLQueue.tail = current;
  }
  // The above conditional cleared the other edge cases, so if we still have a head node and it's min, we can just advance it. If head and tail are the same or not afterwards, it doesn't affect the process.
  //Note that we handle tail before head because in the case of a 2-node list, current is head. If we advanced head before resolving tail and tail needs resolution, then head would point to tail, current would still have the prior head, then tail's new pointer would be current, which was the prior head. So, both head and tail should be null, but instead they would both point to the original head. On the other hand, resolving the 2-node edge case first gives us the assurance we need that we can resolve tail without conflict, so resolving tail immediately is natural and that just leaves us with head.
  if (SLQueue.head && SLQueue.head.value === min) {
    SLQueue.head = SLQueue.head.next;
  }
  return SLQueue;
}

// I'll update this later with the bonus challenge. The basic plan is just to maintain a pointer to the most recently seen min value as we traverse the list.
