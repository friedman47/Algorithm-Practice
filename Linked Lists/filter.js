/* Write a function that takes a pointer to a list, a low value, and a high value. Remove any nodes from the list that are lower than the low value or higher than the high value and return the new list.*/

// I'll assume no cycles in the list. My plan is to use a current pointer and a runner. Whenever our next value falls outside of the filter range, we'll use the runner to find the next value that lies within our range and connect directly to that. This is O(n) with O(1) space, and is potentially more efficient than breaking and forging links for each node outside our range on a node-by-node basis. I'll write this as a standalone, since the prompt explicitly says we're given a pointer to a list (and if it were a method of the SLList prototype, then we wouldn't need that pointer). Also, I'll resolve the head node AFTER resolving the rest of the list as a way of making it easier to handle (since we can guarantee that head's next is either a value within the range or it's null).

function filter(sList, low, high) {
  if (sList.head === null) {
    return null;
  }
  let current = sList.head;
  let runner;
  while (current) {
    if (current.next && (current.next.value < low || current.next.value > high)) { // check whether next node is out of range
      runner = current.next.next; // if it is, then set runner to its next node
      while (runner) {
        if (runner.value < low || runner.value > high) { // keep advancing runner until we find a node in range
          runner = runner.next;
        } else {
          break;
        }
      }
      current.next = runner; // delete all the out-of-range nodes between current and runner (runner can be null as well)
    }
    current = current.next;
  }
  if (sList.head.value < low || sList.head.value > high) { //now head.next is either in range or is null
    sList.head = sList.head.next; // so if head is out of range, just delete it
  };
  return sList;
}
