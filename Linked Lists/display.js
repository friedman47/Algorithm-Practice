/* Write a function called display that takes a node and returns a string containing all subsequent list values. */

// I'll write this as a function outside of the SLList prototype. My plan is to traverse the list and store each of the values in an array and then join the array into a string at the end. I'll assume that the list contains only the primitives of Number or String, although if the list contained arrays, objects, or functions I could write some validation and maybe just write their type when representing them in the string. I'm also assuming that the list does not cycle.

function display (node) {
  let values = [];
  while (node) {
    values.push(node.value);
    node = node.next;
  }
  return values.join(", ");
}
