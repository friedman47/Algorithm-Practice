/* Given a pointer to a singly linked list, return a copy of that list.*/

// I'll asssume no loops in the original list. This problem seems like it's mostly about understanding the difference between passing by value versus passing by reference. So, my plan is to traverse the original list and create a new node with the same value for a new list. I'll assume I have access to the SLList and SL Node constructors in the addFront.js file. I'll use a pointer to the current node in the original, a pointer to the previous node in the new list, and another temp variable to hold the newly created node. I'll check whether the original list is empty and if not, then I'll copy the head node value and initialize the new list and pointers at that time.
// I decided not to use a 'temp' variable, since I don't think it hurt readability to skip it, but using it felt too verbose

function copyList(sList) {
  let current = sList.head;
  let copyList;
  let copyNode;
  if (current === null) {
    return null;
  } else {
    copyList = new SLList();
    copyList.head = new SLNode(current.value);
    copyNode = copyList.head; // our copy is provided the same head node value as the source list
    current = current.next; // then we advance the source list by one
  }
  while (current) { // now as we traverse, copy lags behind source by 1 node until the end (since source cannot advance further)
    copyNode.next = new SLNode(current.value);
    copyNode = copyNode.next;
    current = current.next;
  }
  return copyList;
}
