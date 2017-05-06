/* Create a standalone function that locates the minimum value of a linked list and moves that node to the front of the list. Return the new list with all nodes still present and all nodes (except the minimum node) still in their original order.*/

// This problem involves two main steps: locating the minimum value and moving the minimum to the front. In order to find the minimum, my plan is to traverse the list while using a temp variable to store the minimum node and then compare the temp's value to each value in the list. In order to make the move, I'll need to also keep a pointer to temp's previous node, make previous point to temp's next, then point temp to list's head node, then point list's head to temp. So, aside from storing temp, I'll need previous to follow along behind current node and I'll need temp's previous to update whenever I update temp. For the sake of better soft documentation, I'll call temp 'min'. The function will take a pointer to a list and I'll assume the list has no cycles.

function moveMinToFront (sList) {
  let current = sList.head;         // initialize current and previous for traversal
  let previous = null;
  let min = sList.head; // init min with current so all comparisons are from list (starting w/ 0 could create a bug potentially)
  let minPrev = null;
  if (current === null) { // for empty list, take no action and return null
    return null;
  }
  while (current) {       // traversing while 'current' because using 'current.next' means we won't compare last node
    if (current.value < min.value) {  // update min and minPrev if current value is smaller
      min = current;
      minPrev = previous;
    }
    previous = current;   // continue traversing
    current = current.next;
  }
  if (minPrev !== null) {  // if minPrev is null, that means the minimum value was already at start of list, so do nothing
    minPrev.next = min.next;  // remove min from the list by pointing its previous node to its next node
    min.next = sList.head; // insert min in list at front by point min's next node to current head
    sList.head = min; // then point head to min
  }
  return sList
}
