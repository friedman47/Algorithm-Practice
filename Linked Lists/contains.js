/* Write a method that, given a list node pointer and a value, returns a boolean for whether that value exists within the list (or portion of the list) you traverse from the pointer. */

// My plan here is to assume we have the list constructor and node constructor (see addFront.js in this directory) and add a new method. We'll use a while loop to traverse as long as 'current' exists and we'll check each node's value.

SLList.prototype.contains = function (current = this.head, value) { // pass a node reference, defaulting to head of list
  while (current) { // at end of list, current is 'null' and we'll exit loop
    if (current.value === value) { // return true if we find a match
      return true;
    } else { // otherwise keep iterating until end of list
      current = current.next;
    }
  }
  return false;
}
