/* Create a function with two parameters: value and after. The first argument is a value for a new list node, and the second argument is a value in a linked list that indicates where the new node should be inserted (immediately after this second value). If the second value is not found, insert the new node as the last item of the list. Return the new list. */

// I'll assume we have access to the SLList and SLNode constructors (see addFront.js). I'll also assume the list has no cycles. I'll traverse the list and compare along the way, then insert the new node by first setting new node's next equal to after's next, then setting after's next to new node. Now we traverse using 'current.next' instead of 'current' because even though it means we won't compare the last node with the after value, either way we must insert the new node after this last node so the comparison becomes moot. Instead, if we insisted on doing this comparison for the last node, then we'd also have to store previous so that when current runs off the end of the list and becomes null, we'd still have a pointer (previous) to the last node of the list.

SLList.prototype.appendValue = function (value, after) {
  let node = SLNode(value);
  let current = this.head;
  if (current === null) { // for an empty list, just set head to new node
    this.head = node;
    return this;
  }
  while (current.next) { // traverse the list until we reach the end, at which point 'current' will be the last node
    if (current.value === after) { // break if ever current is the node we're suppose to append
      break;
    }
    current = current.next;
  }
  node.next = current.next; // link node to the next item in the list first to preserve the linkages
  current.next = node; // then link current to the node
  return this;
}
