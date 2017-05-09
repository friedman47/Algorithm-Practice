/* Given a list and a value, write a function that locates the first node with that value and then moves all nodes with values less than that value to be earlier and all values greater to be later. Original order need not be preserved. Return the new head node.*/

// The main challenge I see in this is keeping track of all the values as we traverse the list. Using either a hash table or array will cost O(n) space. On the other hand, if we traverse the list to grab the node and then traverse it again to enforce the partition, that's still O(n) time, but not as efficient as it could be if we can assume the partition node exists. A piece of information I'd like is if it's okay to alter the original list, regardless of whether the value exists in the list. So, I'll assume the line "Original order need not be preserved" means it's okay to change the list even if we don't find the given value.
// Given my assumption (that either the value is definitely in the list OR that it doesn't matter if we alter the original list), now the way I'm thinking about this for O(n) time and O(1) space is simply to evaluate each node as we come across it and build two separate lists. The first list will be values less than our partition value and the second for values greater. Then we'll concatenate the partition node to the first list (if the partition node exists) and then the second list to the partition node. This has the advantage that order is stable as well.
// So, I'll create two helper lists (assuming access to the SLList constructor and SLNode constructor in the addFront.js file) and set their heads to some placeholder node in order to avoid writing code to handle the specific case of adding a head node. I'll also track the tail of each list to make appending O(1). Then I'll iterate through the list and append each node in the appropriate list (all nodes equal to the partition node will be added after the first partition node and I'll track a tail for that as well). Finally, I'll combine the lists as described above and then set the last node's next to null to avoid a cycle.
// In final solution, decided not to use two lists due to additional space required. Felt this format was more readable even though it's marginally longer (4 lines longer), which is due to having to check whether a given pointer has already been populated (e.g. for current.value < value, if small is null, then assign it current, otherwise assign small's tail). Also, debated using switch statement and bit manipulation (possible in ES6!) to process each of 7 possible outcomes (3 potential sub-lists, each either exists or not = 2^3, but at least one sub-list must exist so 2^3 - 1 since 0b000 is not possible), but it seemed that just processing directly with conditionals was both straightforward and more readable. Another thing that helped re: conditionals was assuming 'large' exists (see annotations below). If I might have needed to extend the function (e.g. increase number of sub-lists), then I would re-consider bit manipulation since that would be easier to scale.

function partition (sList, value) {
  if (sList.head === null) {
    return null;
  }
  let current = sList.head; // init our traversal variable and each pair of pointers for the sub-lists
  let small = null;
  let sTail = null;
  let part = null;
  let pTail = null;
  let large = null;
  let lTail = null;
  while (current) {
    if (current.value < value) { // conditional appends to each sub-list appropriately
      if (!small) { // first checks whether the sub-list exists yet; will assign it if not...
        small = current;
        sTail = small;
      } else { // ... or just append and update the tail pointer; maintaining tail gives us O(1) to append
        sTail.next = current;
        sTail = sTail.next;
      }
    } else if (current.value > value) {
      if (!large) {
        large = current;
        lTail = large;
      } else {
        lTail.next = current;
        lTail = lTail.next;
      }
    } else { // having an 'else' category makes the assumption that everything in the list can be compared with our comparison operators. I recognize that may not necessarily be the case (e.g. for an array, function, or another object). Depending on what we want to happen, we could for instance make this an 'else if' and the new list would only have the values we want.
      if (!part) {
        part = current;
        pTail = part;
      } else {
        pTail.next = current;
        pTail = pTail.next;
      }
    }
    current = current.next;
  }
  if (small) { // now the conditional to combine 3 sub-lists into one; check where to set list.head (small, part, or large)
    sList.head = small;
    if (part) {
      sTail.next = part;
      pTail.next = large; // default to large, which ends our new list with a null (if large does not exist) ...
    } else {
      sTail.next = large; // ... ending with null is important to prevent cycles
    }
  } else if (part) {
    sList.head = part;
    pTail.next = large; // as above, if large exists, we've added it appropriately; if not, we've ended list with null;
  } else {
    sList.head = large;
  }
  if (large) { // now we check whether large actually exists, and if so, then we ensure we end list with a .next = null;
    lTail.next = null;
  }
  return sList;
}
