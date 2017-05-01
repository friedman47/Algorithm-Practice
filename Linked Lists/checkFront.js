/* Write a function to return the value (not the node) at the head of a singly linked list. If the list is empty, return null.*/

// Again I'm assuming we have the list and node constructors (see "addFront.js"). My plan here is just to check whether head is null and if not then return the head node's value.

SLList.prototype.checkFront = function () {
  if (this.head === null) {  // need to return null for an empty list, or...
    return null;
  } else {
    return this.head.value;  // return value of the head node
  }
}
