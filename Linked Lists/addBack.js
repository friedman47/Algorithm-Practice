/* Create a function that creates a linked list node from a given value and then inserts it at the end of a linked list.*/

// Just as with removeBack, I'll make this standalone and part of the prototype. The function takes a value and a list pointer, makes a list node, then traverses the list, and finally adds the node to the end. I'll assume there are no cycles in the list. Also, I'll assume we have access to the SLNode constructor (in the addFront.js file).

function addBack (value, sList) {
  let node = new SLNode(value);      // first contruct our new node from the value
  let current = sList.head;
  if (current === null) {            // if list is empty, we simply set head to our node
    current = node;
  } else {
    while (current.next) {           // otherwise, we traverse list until the last node
      current = current.next;
    }
    current.next = node;             // then set the last node's next pointer to the new node
  }
  return sList;
}

SLList.prototype.addBack = function (value, current = this.head) {
  let node = new SLNode (value);     // make our new node
  if (current === null) {            // if list is empty, add our new node to head
    current = node;
  } else {
    while (current.next) {           // otherwise, traverse to end of list
      current = current.next;
    }
    current.next = node;             // then add new node to end
  }
  return this;
}
