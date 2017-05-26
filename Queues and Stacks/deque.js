/* Create a double-ended queue with these methods: pushFront, pushBack, popFront, popBack, front, back, contains, isEmpty, and size.*/

// I'll create this from scratch as well. It's very similar to the QueueStack class, but now adds popBack (pushBack is same as enqueue and popFront is dequeue while pushFront was new in the QueueStack class). I'll make a node class, the deque class, and then add the methods to the prototype. As a side note, this would be much easier if the node class were a doubly linked list since the popBack method needs to shift tail to previous. However, the workbook I'm going through doesn't introduce doubly-linked lists yet, so I'll stick with a singly linked list. Also, trying to maintain a pointer to next-to-last node is not more efficient as after popping twice, we'd still have no pointer to what would be the new node. So, I'll just iterate through the list to find the new node each time, even though that's expensive from a time complexity standpoint.

//Node class
function SLNode(value) {
  if (!(this instanceof SLNode)) {
    return new SLNode(value);
  }
  this.value = value;
  this.next = null;
}

//Deque class
function Deque() {
  if (!(this instanceof Deque)) {
    return new Deque();
  }
  this.head = null;
  this.tail = null;
}

//Prototype methods
Deque.prototype.pushFront = function (value) {
  let node = new SLNode(value);
  node.next = this.head;
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  return this;
}

Deque.prototype.pushBack = function (value) {
  let node = new SLNode(value);
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  return this;
}

Deque.prototype.popFront = function () {
  if (!this.head) {
    return new Error('List is empty');
  }
  let temp = this.head.value;
  this.head = this.head.next;
  if (!this.head) {
    this.tail = null;
  }
  return temp;
}

Deque.prototype.popBack = function () {
  if(!this.tail) {
    return new Error('List is empty');
  }
  let temp = this.tail.value;
  let current = this.head;
  if (current === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    while (current) {
      if (current.next === this.tail) {
        current.next = null;
        this.tail = current;
      }
      current = current.next;
    }
  }
  return temp;
}

Deque.prototype.front = function () {
  if (this.head === null) {
    return new Error('List is empty');
  } else {
    return this.head.value;
  }
}

Deque.prototype.back = function () {
  if (this.tail === null) {
    return new Error('List is empty');
  } else {
    return this.tail.value;
  }
}

Deque.prototype.contains = function (value) {
  let current = this.head;
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

Deque.prototype.isEmpty = function () {
  return !this.head;
}

Deque.prototype.size = function () {
  let count = 0;
  let current = this.head;
  while (current) {
    count += 1;
    current = current.next;
  }
  return count;
}
