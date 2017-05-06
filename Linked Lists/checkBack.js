/* Write a function that accepts a node from a singly linked list and returns the value (not the node) at the tail of a singly linked list. If the list is empty, return null.*/

// I'm assuming we have the list and node constructors (see "addFront.js"). My plan is to traverse the list and return the last value. This assumes that there are no cycles in the loop, and it has a O(n) time complexity for list traversal.

SLList.prototype.checkBack = function (current = this.head) { // default start at head, but can begin anywhere in list
  if (current === null) { // return null if list is empty;
    return null;
  }
  while (current.next) { // continue iterating until there is no next element, so we'll stop on the last element of list
    current = current.next;
  }
  return current.value;
}
