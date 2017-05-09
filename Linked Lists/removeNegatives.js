/* Given a linked list, write a function that removes any nodes containing negative values and return the new list.*/

// I'll assume there are no cycles in the list. Also, if all the values are negative, then I plan to return null. My basic plan is to iterate the list while tracking previous, then connecting previous to any negative node's next. I can either include logic to check whether I'm connecting to a node with a negative value or to iterate through the sequence of breaking the link and connecting to next until either the next node is non-negative or is null. This same situation holds true if the head node is negative, however dealing with the head node is a little odd because it's designated by a pointer stored in the list itself. So, I'll wait until the end of the algorithm to move it forward, if necessary.
// In the end, I decided to avoid using 'previous' since I felt readability didn't suffer by excluding it. I also favored using a runner so the algorithm only breaks and forges a connection at most once, rather than multiple times while iterating. Both approaches are O(n), but I felt this was still easy enough to follow and this approach is potentially more efficient.


function removeNegatives (sList) {
  let current = sList.head;
  let runner; // using a runner to find next non-negative node, rather than breaking and forging links one node at a time
  if (current === null) {
    return null;
  }
  while (current) {
    if (current.next && current.next.value < 0) { // if there is a next node and its value is negative...
      runner = current.next.next; // we start and the next node's next node (which may be null)
      while (runner) { // as long as that next next node exists, we'll iterate until we hit a non-negative node or null
        if (runner.value < 0) {
          runner = runner.next;
        } else {
          break; // if we break, we've found a non-negative node (if runner were null, the while loop doesn't run)
        }
      }
      current.next = runner; // now we skip all of the intervening negative numbers; note current.next could also be set to null if runner reached the end of the list
    }
    current = current.next;
  }
  if (sList.head.value < 0) { // the only situation we haven't addressed is if head is negative, but now we know that the rest of the list consists only of positive nodes (if the rest of the list exists)
    sList.head = sList.head.next; // so, we can just set head to its next. then either head is positive or entire list is null
  }
  return sList;
}
/*
function removeNegatives (sList) {
  let current = sList.head;
  let previous = sList.head;
  if (current === null) { // for empty list, return null;
    return null;
  } else if (current.value < 0) { // for negative head, either return null if there's no next node or advance one node
    if (!current.next) {
      sList.head = null;
    } else {
      previous = current;  // it's still possible that this value is negative, which we rectify at the end of the algorithm
      current = current.next;
    }
  }
  while (current) { // iterate through the list and delete negatives by skipping them
    if (current.value < 0) {
      previous.next = current.next; // skip the negative, previous is unchanged
      current = current.next; // then check current again and repeat
    } else {
      previous = current;
      current = current.next;
    }
  }
  if (sList.head && sList.head.value < 0) { // now if we have a head value and its negative
    if (sList.head.next) { // if we have a next value, it must be positive because all of the other nodes are now positive
      sList.head = sList.head.next;
    } else { // if there is no next node, then all of the other nodes were negative, and so is the head, so we return null
      sList.head = null;
    }
  }
  return sList;
}
*/
