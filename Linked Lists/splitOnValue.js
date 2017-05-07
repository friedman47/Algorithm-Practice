/* Create splitOnVal(list, num) that takes a list and a value and then splits the list in two at the value. The latter half of the list should be returned, starting with the node containing num.*/

// My plan is to traverse the list until finding value, then set its previous node's next pointer to null, then return the node with value. I'll assume the list has no cycles. If the value is not in the list, then I'll simply return the original list. I'll use a strict comparison to verify the value.

function splitOnVal(list, num) {
  let current = list.head;
  let previous = list.head;
  if (current === null) {  // for empty list, will notify with a console.log and then return null;
    console.log("List is empty");
  } else if (current.value === num) { // if num is head node, then list set to null and return full list
    list.head = null;
  } else { // otherwise, traverse until finding the splitting point; track previous to update its next pointer to null
    while (current) {
      if (current.value === num) {
        previous.next = null;
        break;
      }
      previous = current;
      current = current.next;
    }
  }
  if (current === null) { // if current === null => list either empty or value not found. choosing to return full list (will be null if list is empty) in order to mimic .slice() method of arrays (although this is just the list itself, not a copy)
    current = list.head;
  }
  return current;
}
