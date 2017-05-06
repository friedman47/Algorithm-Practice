/* Create a standalone function that removes the last node in a list and returns the new list.*/

// This is an unusual choice to make removeBack standalone since it would naturally seem like a useful method to have in the prototype. So, I'm going to write both. However, I'll start with the challenge per the prompt. I'll pass it a list from which I'll iterate to the last element and then remove that element by setting its previous node's next pointer to null, and then garbage collection will free the memory for me (since we're in JavaScript). This assumes there are no cycles in the list.

function removeBack (sList) {
  let current = sList.head;  // track current and previous, then iterate to end of list
  let previous = sList.head; // initialize previous to head node in case list is 1 element long, then
  if (current === null) {
    return null;
  }
  while (current.next) {  // iterate until end of list; now current is last node and previous is 2nd-to-last node
    previous = current;
    current = current.next;
  }
  if (current === sList.head) { // if current hasn't changed (b/c list is one node long), then just set head to null;
    sList.Head = null;
  } else {
    previous.next = null; // otherwise, we set the 'next' pointer for the second-to-last node to null to delete last item
  }
  return sList;
}

SLList.prototype.removeBack = function (current = this.head) { // this method can start from any node, but assumes the head
  let previous = current;
  if (current === null) { // checks if list is empty
    return null;
  }
  while (current.next) { // iterates as long as there's a place to iterate to; will end with current === last node;
    previous = current;
    current = current.next;
  }
  if (current === this.head) {
    this.head = null;
  } else {
    previous.next = null;
  }
  return this;
}
