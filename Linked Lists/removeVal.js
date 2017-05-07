/* Create removeVal(node, value) where given a pointer to the head node of a singly linked list, the function removes the first node with the given value. Return the new list. What will you do if value is not found?*/

// My plan is to traverse the list and compare each node's value to the value passed into the function. I'll use a strict comparison (=== instead of ==, so type must match). If the value is not found, then I'll console log an error message and still return the list's head node (that way it can still chain). I'll assume the list has no cycles. So, once the value has been found, the function will simply set its previous node's next value to its next value. The main edge cases are when the value is last in the list, which means we just set previous' next to null and when the value is first in the list. When the value is first in the list, we cannot simply set list head to the second item in the list since we don't have list head (we only have an argument that evaluates to the same node that list head points to. That means changing the argument does not affect the pointer to the head node from the list itself)
// As an interesting aside, since changing the argument (i.e. coding head = head.next) does nothing to change the actual list or the head pointer of that list, that makes the "change" idempotent. No need to worry about race conditions, duplicated requests, etc. since nothing would ever get done anyway - always a bright side, am I right? :P
// So the way to resolve the special case of the head node matching the value is to check whether the NEXT node exists (if it doesn't, we just set head node's values to null), copy the values from that next node and then change the next pointer to skip to the third node (which can be null or not, it doesn't affect this process). Effectively, the values from the head node disappear (since we overwrite them with the 2nd node's values), and we also remove a node from the list (the 2nd node), which is equivalent to deleting the head node/setting the list's head pointer to the 2nd node (since the list still points its head node to the original head node, but now the head node's value have been overwritten).

function removeVal (head, value) {
  let previous = null;
  let current = head;
  if (current === null) { // if list is empty we log this and also the error that nothing was found in list or deleted
    console.log(`List is empty.`);
  } else if (head.value === value) {
    if (head.next) {  //as long as list has 2 or more nodes, we can effectively "delete" the head node as explained above
      head.value = head.next.value;
      head.next = head.next.next;
    } else {  // when there is only 1 node in the list, the best we can do is set its values to null. That means that the list still points to an object rather than null, but that object has null for its values. In order to actually delete the head node when list length is 1, we need a reference to the list, then we could set list head = null. I would definitely need to clarify what the person asking for this function wants here - this is just my best guess.
      head.value = null;
      head.next = null;
    }
  } else { // now the general case, list is not empty and value does not match head node's value
    while (current) {
      if (current.value === value) { //traverse until we find a match...
        previous.next = current.next; // ...  then delete from list by linking around it
        break;
      }
      previous = current;
      current = current.next;
    }
  }
  if (current === null) { // at this point, if current === null then either list was empty or we've completed traversal
    console.log(`${value} not found in list. No nodes have been removed from list.`);
  }
  return head;
}
