/* Create a list-based class SLStack using a singly linked list. Your class should include the following methods: push, pop, top, contains, isEmpty, and size.*/

// My plan is to implement an SLNode class and the SLStack class, then attach all of the methods to the SLStack prototype.  I'll push/pop at the front. For the sake of convenience, I'll also hold a .size attribute in each SLStack to prevent having to iterate through the entire list to find the size of the stack. I'll ignore the possibility of other sources manipulating nodes or the list itself (just for the sake of the problem), so I'm not checking for cycles or adding a verifySize method in prototype.

function SLNode(value) {
  if (!(this instanceof SLNode)) {
    return new SLNode(value);
  }
  this.value = value;
  this.next = null;
}

function SLStack() {
  if (!(this instanceof SLStack)) {
    return new SLStack();
  }
  this.head = null; // head is the same as top, but if we name it top, then we'd be overriding the .top() method in prototype, which means we'd get back the node holding the top value instead of the value itself, which is the requirement in the more detailed specification (not stated explicitly in my summary above).
  this.count = 0; // similarly, count is same as size, but we don't want to override the size method (and if we tried to call count as a method, it would throw an error). So, to maintain polymorphism, we implement .size() in the prototype;
}

SLStack.prototype.push = function (value) { // we're prepending because that's O(1) (rather than postpending, although we could do that in O(1) if we maintained a tail pointer, too), so just update head and count
  let node = SLNode(value);
  node.next = this.head;
  this.head = node;
  this.count += 1;
  return this;
}

SLStack.prototype.pop = function () {
  if (!this.head) {return null}
  let pop = this.head.value;
  this.head = this.head.next;
  this.count -= 1;
  return pop;
}

SLStack.prototype.top = function () { // as mentioned above, top and head are essentially the same, but if we called the head node 'top' in the constructor, it wouldn't be a method (so we lose polymorphism) and it would return the node, not the value
  return (this.head)? this.head.value : this.head;
}

SLStack.prototype.contains = function (value) { // only way without using extra space is to check the list, so .contains() is O(n); it doesn't matter if we pre or postpend, either way we'd need to traverse the list
  let current = this.head;
  while (current) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

SLStack.prototype.isEmpty = function () {
  return this.head === null;
}

SLStack.prototype.size = function () {
  return this.count;
}
