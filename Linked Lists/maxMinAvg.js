/* Given a linked list of integers, write functionality to return the maximum, minimum, and average values in the list. Write this functionality as 3 separate functions, each returning the value they find. */

// Again I'm assuming we have the list and node constructors (see "addFront.js"). We can solve this in O(n) time with O(1) space for each of these functions, we just need a temporary variable to store max/min/sum and for the average function we'll also need to store a count of values. Then we just iterate through the list, do our comparison, update our values, then at the end we perform our calculations and return. Note that I'm assuming the list has no cycles (if it does have cycles, then these functions become infinite loops).

SLList.prototype.maxValue = function(current = this.head) { // adding in functionality to find max from a given node to end of list
  if (current === null) {
    return null; // return null for an empty list
  }
  let max = current.value; // initialize max to current value; cannot start at 0 because all nodes may be less than 0, so we'd return 0 when that value doesn't exist in the list.
  while (current) {
    if (current.value > max) {
      max = current.value;
    }
    current = current.next;
  }
  return max;
}

SLList.prototype.minValue = function(current = this.head) {
  if (current === null) {return null;}
  let min = current.value;
  while (current) {
    if (current.value < min) {
      min = current.value;
    }
    current = current.next;
  }
  return min;
}

SLList.prototype.avgValue = function(current = this.head) {
  if (current === null) {return null;}
  let count = 0;  // initialize to 0 since while loop increments; so head node (or whatever we pass as current) will be 1
  let sum = 0;    // initialize to 0; first loop starts on current node and will add its value to sum (avoid double counting)
  while (current) {
    sum += current.value;
    count += 1;
    current = current.next;
  }
  return (sum / count);
}
