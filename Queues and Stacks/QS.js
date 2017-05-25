/* As a design exercise, how wouldyou combine the SLQueue (from queue.js) and SLStack (from listStack.js)? After designing, rework your SLQueue and SLStack classes, or start from scratch, with code sharing in mind. When you have this combined class, you should be able to use all methods from those classes.*/

/* From a design perspective, I think one of two things makes sense. The first is to have Stack inherit from Queue. The reason that's useful is because Queue already tracks both ends of the list using head and tail, which means that we can add the main stack functions by just enabling push/pop at head and then contains, size, isEmpty are the same, so we're just left with top, which is the same as front. The second option, which I'm less inclined to do because it seems unnecessary from where the current code base is, would be to create a super class (maybe an abstract class) that generates the underlying structure (a list with contains, size, and isEmpty methods) and then extend it to allow Queue, Stack, and QueueStack as subclasses.*/

// So, the design is to have Stack extend Queue. Rather than assuming access to the queue.js and listStack.js files, I'm just going to re-write the code here. I'll make an SLNode class and an SLQueueStack class, then add the methods to the prototype.

// First, make our node class
function SLNode(value) {
  if(!(this instanceof SLNode)) {  // self-instantiating, as is the SLQueueStack class;
    return new SLNode(value);
  }
  this.value = value;
  this.next = null;
}

// Second, make combined QueueStack class
function SLQueueStack() {
  if(!(this instanceof SLQueueStack)) { // self-instantiating simply ensures access to constructor's prototype in case an instance is created without applying the 'new' key word
    return new SLQueueStack();
  }
  this.head = null;
  this.tail = null;
}

// Third, add methods: enqueue, dequeue, push, pop, and then the common methods are contains, isEmpty, and size, plus front/top, which is essentially the same method. I don't know if there's a word for the opposite of an overloaded method, where differently named methods do the same thing rather than the same method name doing different things (based on arity or type). It certainly seems redundant, but for polymorphism I strongly feel the need to include both. So, I'll just have top call front. Same with pop and dequeue, since nodes only exit from the front in this construction, I'll just have pop call dequeue.
SLQueueStack.prototype.enqueue = function (value) {
  let node = new SLNode(value);
  if (this.head === null) { // special case: if list is empty, then new node is both head and tail
    this.head = node;
    this.tail = node;
  } else {    // normal case: add node as 'next' for current tail, then reset tail to node
    this.tail.next = node;
    this.tail = node;
  }
  return this; // return this to allow chaining
}

SLQueueStack.prototype.dequeue = function () {
  let temp;
  if (this.head === null) { // underflow error for empty list
    return new Error('List is empty');
  } else { // normally just reset head and return previous head's value
    temp = this.head.value;
    this.head = this.head.next;
    if (!this.head) { // possible (for a 1 node list) that head.next is null; in that case, list is empty so set tail to null
      this.tail = null;
    }
    return temp;
  }
}

SLQueueStack.prototype.push = function (value) { // primary unique functionality from stack is adding to front
  let node = new SLNode(value);
  node.next = this.head;
  this.head = node;
  if (!this.tail) { // similar to enqueue special case, if list was empty then need to set tail so Queue methods still work
    this.tail = node;
  }
  return this;
}

SLQueueStack.prototype.pop = function () { // only exit for elements is front, so pop and dequeue are effectively the same
  return this.dequeue();
}

SLQueueStack.prototype.contains = function (value) {
  let current = this.head; // no need for specific error check on empty list as return value defaults to false
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

SLQueueStack.prototype.isEmpty = function () {
  return !this.head;
}

SLQueueStack.prototype.size = function () {
  let count = 0;
  let current = this.head; // no need for specific error check on empty list because return will default to 0
  while (current) {
    count += 1;
    current = current.next;
  }
  return count;
}

SLQueueStack.prototype.front = function () { // in queue, front is next item to dequeue, which is simply head
  if (this.head === null) { // throw error for empty list
    return new Error('List is empty');
  }
  return this.head.value; // otherwise just provide next element-to-be-removed's value
}

SLQueueStack.prototype.top = function () { // in stack, top is next item to pop, which is head, which is same as front
  return this.front();
}
