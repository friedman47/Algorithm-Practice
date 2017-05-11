/* Given a pointer to the head node of a singly linked list, return the second largest value contained in the list.*/

// My plan here is to traverse the list and track the largest and second largest values during traversal. I'll assume no cycles in the list. I'll disallow 'ties' for the values (so they must be distinct, meaning 5->5->3->2->1 would say 3 is the 2nd largest value, not 5), and I'll return null if not enough distinct values are found (including the case where the list is too short).

function secondLargest(node) {
  if (node === null) {
    return null;
  }
  let largest = node.value;
  let nextLargest = null;
  let current = node.next;
  while (current) {
    if (current.value > largest) { // a value > largest means it becomes the new largest, so we must update nextLargest, too
      nextLargest = largest;
      largest = current.value;
    } else if ((!nextLargest && current.value !== largest) || (current.value > nextLargest && current.value < largest)) {
      nextLargest = current.value; // populate with non-null value != largest; update when value > nextLargest & < largest
    }
    current = current.next;
  }
  return nextLargest;
}
