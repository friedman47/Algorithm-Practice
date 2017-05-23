/* Using only two Stack objects for the underlying storage, recreate the Queue class.*/

// I'll assume I have access to the Stack class in arrayStack.js. The point is to create a FIFO structure with enqueue, dequeue, front, contains, isEmpty, and size methods. I'll assume we won't be modifying or extending this core functionality (e.g. removing minimum values) so that we can have slightly more efficient performance by having a dequeue stack and an enqueue stack rather than having a single stack that we pop and push into the other followed by resetting back to the original stack (for things such as dequeue and top). As with the copyStack.js challenge, I'll only use public interfaces in the Stack class. Also, the array implementation is dynamic, so there is no limit to the size of the queue, but I'd still want to clarify whether we want to apply a limit before proceeding - if so, I'd pass it as an argument in the original constructor and then I'd have to modify the arrayStack class to impose the limit, which would affect the method implementations.

function queueByStacks() {
  if (!(this instanceof queueByStacks)) { // self-instantiating class
    return new queueByStacks();
  }

  this.add = new arrayStack(); // just holds two private array-stack implementations, methods in prototype
  this.remove = new arrayStack();
}

queueByStacks.prototype.enqueue = function (value) {
  this.add.push(value); // add to one stack (in reverse order), then pop into other stack (which puts it in correct order)
  return this;
}

queueByStacks.prototype.dequeue = function () {
  let temp;
  if (this.remove.isEmpty()) { // if nothing is in our remove stack...
    if (this.add.isEmpty()) { // then if add stack is empty too, we throw an underflow error
      return new Error('Queue is empty.');
    } else {
      while (!this.add.isEmpty()) { // otherwise, we push everything from add into remove to populate it
        this.remove.push(this.add.pop());
      }
    }
  }
  temp = this.remove.pop();
  return temp;
}

queueByStacks.prototype.front = function () {
  if (this.remove.isEmpty()) { // similar to dequeue method, we need to determine if add stack has an element to show
    if (this.add.isEmpty()) {
      return new Error('Queue is empty.'); // could also just return null instead, as that would be a falsey value
    } else {
      while (!this.add.isEmpty()) {
        this.remove.push(this.add.pop());
      }
    }
  }
  return this.remove.top();
}

queueByStacks.prototype.contains = function (value) {
  if (this.add.contains(value) || this.remove.contains(value)) {
    return true;
  } else {
    return false;
  }
}

queueByStacks.prototype.isEmpty = function () {
  if (this.add.isEmpty() && this.remove.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

queueByStacks.prototype.size = function () {
  return this.add.size() + this.remove.size();
}
