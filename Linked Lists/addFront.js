/* Given a pointer to the first 'SLNode' of a singly linked list and a value, write function to create a new node, assign it to the list head, and return a pointer to the new head node.*/

// I'll write a list constructor and a node constructor, then create a method in the list constructor's prototype to add a node (not a value, per the prompt) to the front of the list.

function SLList() {                 // list constructor is self-instantiating
  if (!(this instanceof SLList)) {
    return new SLList();
  }
  this.head = null;
}

function SLNode(value) {            // node constructor is also self-instantiating
  if (!(this instanceof SLNode)) {
    return new SLNode(value);
  }
  this.value = value;
  this.next = null;
}

SLList.prototype.addFront = function (node) { // using prototypal inheritance, assuming node is value to be stored if it's not already a node (our node class is self-instantiating per the above constructor)
  if (! (node instanceof SLNode)) {
    node = SLNode(node);
  }
  if (this.head === null) { // for empty list, just set head to node
    this.head = node;
  } else {
    node.next = this.head;  // otherwise, insert by having node point to current head
    this.head = node;       // then pointing head to node
  }
  return this.head;
}
