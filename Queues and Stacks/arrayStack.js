/* Implement a stack constructor using an array. Your class should include the following methods: push, pop, top, contains, isEmpty, and size. Make sure the underlying array is private, rather than public. */

// My plan is to create the constructor and all methods. Since the requirements specify that the array must be private, we cannot use prototypal inheritance. The trade-off is that now we have encapsulation in exchange for a greater space complexity (since each instance of the class must now contain the associated methods). Because we're using JS, the array is already dynamic.

function arrayStack() {
  if (!(this instanceof arrayStack)) {
    return new arrayStack();
  }
  let stack = []; // private variable enables encapsulation
  this.push = function (value) { // assuming I should re-create .push() instead of using built-in on stack
    stack[stack.length] = value;
    return this; // return this to allow chaining; not returning stack itself since the point seems to be encapsulation
  }
  this.pop = function () { // again assuming I should re-create .pop() instead of using built-in
    let pop = stack[stack.length - 1];
    stack.length--;
    return pop;
  }
  this.top = function () {
    return stack[stack.length - 1];
  }
  this.contains = function (value) {
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === value) {
        return true;
      }
    }
    return false;
  }
  this.isEmpty = function () {
    return stack.length === 0;
  }
  this.size = function () {
    return stack.length;
  }
}
