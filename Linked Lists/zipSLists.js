/* Given two pointers to two independent linked lists, interleave the two lists starting with the first list and return the new combined list.*/

// I'll assume no cycles in either list and the prompt also asserts there is no merging ('independent' linked lists). My plan for this is to insert nodes from the second list alternately into the first list until the second list is exhausted. There are essentially three cases to consider, and thinking about the problem as drawing from the second linked list to insert into the first addresses all three at once.  First case: original list is longer -> we'll run out of nodes from the second list and the original 'next' links in the original list will be left unbroken; second case: lists are same size -> last node will come from source list and we'll effectively insert it between "original last node" and null; third case: original list is shorter -> now we insert last node from source list and leave its 'next' link unbroken to complete the list. Note, in both cases 2 & 3 above, we simply leave the source node's 'next' link unchanged.
// So, I'll use two pointers for the destination list and two more for the source list, then advance as appropriate.

function zipSLists (destination, origin) {
  if (destination.head === null) { // if destination is null, result will just be the origin list
    destination.head = origin.head
  } else if (origin.head === null) { // fast-finish; do nothing so origin is unchanged, and then we simply return destination
  } else {
    let current = destination.head;
    let next = current.next;
    let source = origin.head;
    let temp = source.next;
    while (current) {
      if (source && next) { // basic process: origin has a node and destination has a 'next', so we interleave
        current.next = source;
        source.next = next;
        source = temp;
        if (source) { // if source exists, then we reset temp, otherwise temp is already null and origin is exhausted
          temp = source.next;
        }
        current = next; // we continue traversing here
        next = current.next;
      } else if (source) { // second and third cases: destination is exhausted, but not origin
        current.next = source; // we link last destination node to origin, and then origin either continues or is also exhausted, but either way we do not need to alter source's 'next' link
        break;
      } else { // first case: origin is exhausted
        break; // we break out of the loop and leave the remaining destination 'next' links untouched
      }
    }
  }
  return destination;
}
