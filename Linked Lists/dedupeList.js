/* Write a function to remove all nodes with duplicate values after the first such value and return the new list, which will consist only of unique values.*/

// My plan for this is to use a hash table to store values because of its O(1) look up time so as I traverse the list I can easily determine whether a given node needs to be deleted. Also, I'll incorporate a runner so I can remove blocks of contiguous repeat values at once. I'll assume there are no cycles in the list, and I'll assumed we're passed a reference to the list itself (prompt does not specify what our input is).

function uniqueValues(sList) {
  let current = sList.head;
  if (current === null) {return null};
  let runner;
  let hash = {};
  hash[sList.head.value] = true; // function as written looks ahead when evaluating a node (to avoid maintaining a 'previous' variable), so we need to manually populate the hash with the data for the head node.
  while (current) { // even though we look ahead, we iterate while 'current' exists so we don't miss the last node
    if (current.next && hash[current.next.value]) { // our look ahead checks if we've already seen its value
      let runner = current.next.next; // if we have seen next, then start runner at next's next
      while (runner) {
        if (hash[runner.value]) { //if we've seen runner, we keep iterating
          runner = runner.next;
        } else {
          hash[runner.value] = true; // if we haven't, we process its value now (function does not process current value, only next value, so we should add current value to hash now)
          break;
        }
      }
      current.next = runner // now next is the first unique value in the list after the current value
    } else {
      if (current.next) { // if next exists, then its not in our table, so we add it
        hash[current.next.value] = true;
      }
    }
    current = current.next;
  }
  return sList;
}
