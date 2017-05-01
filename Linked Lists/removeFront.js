/* Given a pointer to the first node in a list, write a method to remove the head node and return the new list head node. If the list is empty, return null.*/

// Again I'm assuming we have the list and node constructors (see "addFront.js"). My plan is just to set the head reference to the next node in the list. If list is empty (so this.head === null), we just return null immediately; otherwise we set head to next node (which may be null, in which case list becomes empty and we still return null). Note that there is no memory leak because the original this.head will be garbage collected by mark-and-sweep unless something else refers to it.

SLList.prototype.removeFront = function () {
  if (this.head !== null) { // conditional checks whether head is not null; if it is null and we try to set it to head.next it throws an error because null doesn't have a .next property.
    this.head = this.head.next; // set head to head.next;
  }
  return this.head;
}
