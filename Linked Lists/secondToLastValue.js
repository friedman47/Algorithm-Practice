/* Create a standalone function that takes a pointer to a head node of a singly linked list and returns the second to last value of the list.*/

// I'll assume no cycles in the list. Also, I'll generalize the function to find the nth-to-last node, but have it default to 2nd-to-last. If that node does not exist (list of insufficient lenth) or if it's an empty list, then I'll return null. My plan is to send a runner ahead n nodes ahead. After n nodes, I'll start to send a marker down the list, both runner and marker moving one node at a time. When runner hits the end, marker will be the nth-to-last node, and I'll return marker's value.

function nToLast(node, n = 2) {
  let runner = node;
  let marker = node;
  if (runner === null) { // checking if list is empty
    return null;
  }
  for (let i = 0; i < n; i++) {
    if (runner.next) { // advance if possible
      runner = runner.next;
    } else { // else list is not long enough
      return null;
    }
  }
  while (runner) { // both runner and marker initialized to head, then runner advances n more steps so gap is n
    runner = runner.next;
    marker = marker.next;
  }
  return marker.value; // when runner runs off end of list, marker is at nth-to-last to last position because gap was size n 
}
