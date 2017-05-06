/* Create a standalone function that locates the maximum value in a linked list and moves that value's node to the back of the list, then return the new list. All other nodes in the list should still be present and in the same order. */

// This problem is similar to moveMinToFront. There are two phases: locate the max value, and move max value to the end. The function is standalone, so it will take a pointer to the list. I'll assume there are no cycles in the list. I'll traverse the list and compare values, and I'll need two additional temporary variables to store max and max's previous value (maxPrev). After traversing the list, I'll remove max by connecting maxPrev.next to max.next, then I'll append max to the end of the list by setting previous.next to max (after the while loop, current will be null and previous will be the last node in the list)

function moveMaxToBack (sList) {
  let current = sList.head;  // initialize current and previous to traverse the list;
  let previous = null;
  let max = current;  // init max and maxPrev with values from the list (otherwise could return an incorrect max)
  let maxPrev = previous;
  if (current === null) {  // for empty list, do nothing and return null;
    return null;
  }
  while (current) {  // traverse list and update max; use 'current' instead of 'current.next' so we'll still compare last node
    if (current.value > max.value) {
      max = current;
      maxPrev = previous;
    }
    previous = current;
    current = current.next;  // at end of list, current will be set to null and previous will point to last node in list
  }
  // main danger when moving to back of list is to make sure we set .next to null, else we'll create a cycle.
  // if max.next is null, then max is already last element, so don't need to move it
  if (max.next !== null && maxPrev !== null) { // if list is 1 element long (prev & next both null), then do nothing
    maxPrev.next = max.next;   // otherwise, delete max from list
    max.next = null;           // set max.next to null to avoid cycles
    previous.next = max;       // add max to end of list (previous is last node after while loop)
  } else if (max.next !== null && maxPrev === null) { // if maxPrev is null & max.next isn't, then max is at head, so reset head
    sList.head = max.next;     // head points to 2nd node in list, which deletes max from list
    max.next = null;           // set max.next to null to avoid cycles
    previous.next = max;       // add max to end of list
  }
  return sList;
}
