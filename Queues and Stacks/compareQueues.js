/* Given two SLQueue objects, create a standalone function that returns whether they are equal. Equal means equal elements in identical order. Allocate no other object, and restore queues to their original condition upon exit.*/

// My plan is to iterate through each queue, one node at a time, and compare values. If ever the values don't match, then I'll return false. I'm assuming that the values are easily comparable (such as primitives) and that the queue has no cycle (although I haven't implemented a circular queue yet, I'm attempting to accommodate it by checking for 'tail'. So this means no cycles inside the queue itself, but a circular queue without any cycles that do not include all nodes in the queue should be okay as long as tail is specified)

function compareQueues(queue1, queue2) {
  if (queue1.head === null && queue2.head === null) { // if both lists are empty, then they match so return true
    return true;
  }
  let current = queue1.head;
  let check = queue2.head;
  while (current) { // iterate through the lists by running through the first list and checking it against the second
    if (!check || current.value !== check.value) { // if the second does not have that node or the values disagree, return false
      return false;
    } else if (current === queue1.tail) {
      break;
    }
    current = current.next;
    check = check.next;
  }
  if (check) { // now the first queue is exhausted, so check status of second queue
    if (current === queue1.tail && check === queue2.tail) { // broke while loop: if both first and second queue at tail => match
      return true;
    } else { // first queue is null, but second not; OR first queue has ended, but second has not;
      return false;
    }
  } else {
    return true;
  }
};
