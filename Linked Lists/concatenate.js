/* Given two pointers to separate linked lists, concatenate the second linked list to the end of the first and return the new list.*/

// My plan here is to traverse the first list until reaching the end, then set its next pointer to the head of the second list. The prompt does not indicate that we should delete the second list, so I'll leave it untouched. I'll assume there are no cycles in either list AND that both lists are completely distinct. If the first list has a cycle, then we enter an infinite loop and never concatenate; a cycle in the second won't stop us from concatenating, but we'll still have a circular list (which may not be what we want). The second condition (all nodes distinct) is so that concatenating won't create a cycle either. If the two lists merge at some point, then the end of the original first list will lead to the start of the second, but both the first and second lists have some section that refers to the same nodes so the list will eventually point back to the start of the second list and thus create a cycle.

function combineLists (sList, appendList) {
  let current = sList.head;
  if (current === null) { // for an empty list, just concatenate immediately
    sList.head = appendList.head;
  } else {
    while (current.next) { // otherwise traverse until the last node of the first list
      current = current.next;
    }
    current.next = appendList.head;
  }
  return sList;
}
