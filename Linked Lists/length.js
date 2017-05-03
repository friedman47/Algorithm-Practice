/* Create a function that accepts a pointer to the first list node, and then returns the number of nodes in that singly linked list.*/

// The way this prompt is phrased makes it sound as though this function should NOT be part of the prototype for the linked list (if it were, I would set the parameter to current = this.head so it defaults to the head node). So, my plan here is to pass a start node to the function and then iterate through the list using a while loop while incrementing a counter, then return the counter. Here again, I'm making the critical assumption that the list does not cycle.

function listLength (current) { // current will usually be the head node of the SList;
  let count = 0;
  while (current) {             // if list is empty, then head node is null, so list length will return 0
    count += 1;
    current = current.next;
  }
  return count;
}
