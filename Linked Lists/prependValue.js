/* Create a function with two parameters: value and before. The first argument is a value for a new list node, and the second argument is a value in a linked list that indicates where the new node should be inserted (immediately before this second value). If the second value is not found, insert the new node as the last item of the list. Return the new list. */

// I'll assume we have access to the SLList and SLNode constructors (see the addFront.js file). Also, I'll assume the list has no cycles. There are three parts to this function: first, create the new node, second traverse the list to find the insertion point, and third, insert the new node. So, my plan is to traverse the list while storing the previous node in a temp variable and comparing the current value against the 'before' value. Once we find the value, we break or we don't find the value and have traversed the list (in which case 'previous' will be the last node). In either case, we then make new node point to current (which is null if we're at the end of the list, or the next node if we're in the middle of it) and the previous points to new node.

SLList.prototype.prependValue = function (value, before) {
  let node = SLNode(value);
  let previous = this.head;
  let current = this.head;
  if (current === null) { // for empty list, just add node
    this.head = node;
    return this;
  }
  while (current) {
    if (current.value === before) { // can break out of the loop if we find our 'before' value
      break;
    }
    previous = current;       // otherwise, keep traversing until the end
    current = current.next;
  }
  if (previous === this.head) { // special case if the 'before' value is the head node, need to make sure new head is correct
    node.next = this.head;
    this.head = node;
  } else {
    node.next = current;
    previous.next = node; // if we're in the middle or at the end of the list, we can just insert normally
  }
  return this;
}
