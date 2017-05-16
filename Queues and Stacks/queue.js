/* Implement a queue constructor using a singly linked list. Your class should include the following methods: enqueue, dequeue, front, contains, empty, and size. */

// My plan is to create a constructor that holds head and tail, then implement the methods in the prototype. So, I'll make the class self-instantiating (to ensure access to the prototype) and then just declare head and tail. Also, I'll create the SLNode class, since those will be used to populate the list.

function SLQueue() {
  if (!(this instanceof SLQueue)) {
    return new SLQueue();
  }
  this.head = null;
  this.tail = null;
}

function SLNode(value) {
  if (!(this instanceof SLNode)) {
    return new SLNode(value);
  }
  this.value = value;
  this.next = null;
}

// Enqueue takes a value and adds it to the end of the SLQueue
SLQueue.prototype.enqueue = function (value) {
  let node = new SLNode(value);
  if(this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  return this;
};

// Dequeue removes and returns the value at the front of the SLQueue
SLQueue.prototype.dequeue = function () {
  let temp;
  if (this.isEmpty()) {
    return null;
  } else {
    temp = this.head;
    this.head = this.head.next;
    if (this.isEmpty()) {
      this.tail = null;
    }
  }
  return temp.value;
};

// Front returns the first value in the queue without removing it
SLQueue.prototype.front = function () {
  if (this.isEmpty()) {
    return null;
  }
  return this.head.value;
};

// Contains returns a boolean for whether a given value is in the queue
SLQueue.prototype.contains = function (value) {
  if (this.isEmpty()) {return false;}
  let current = this.head;
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
};

// isEmpty returns a boolean (true if queue is empty, false otherwise)
SLQueue.prototype.isEmpty = function () {
  return !this.head;
}

// Size returns the number of values in the queue
SLQueue.prototype.size = function () {
  let count = 0;
  let current = this.head;
  while (current) {
    current = current.next;
    count++;
  }
  return count;
}
