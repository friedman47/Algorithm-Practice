/* Write a function to create a singly linked list using prompt() to gather values one at a time. Build the list in the order the values are received. When the user hits cancel, return the new list.*/

// I'll assume that I have access to the SLList and SLNode constructors (see addFront.js file). Upon invoking the function, I'll call a prompt once and then afterwards I'll continue calling it while appending to the end of the list until the user hits cancel. I'm going to build a new addBackNode function as well, since the prototype I have only takes a value, not a node. I'm doing this because I don't want to traverse the entire list every time I want to append a value. I could add a pointer to the end of the list as part of the list object as well, but I don't want to support deletion/updating functionality within the scope of this problem.

function addBackNode(tail, node) { // minor helper function specific to this function; broke out here for readability
  tail.next = node;
  return node;
}

function buildList () {
  let list = SLList();
  let message1 = "Please enter a value to store as the head node of a new linked list. Cancel to finish building the list.";
  let message2 = "Please enter a value for the next node or click cancel to finish.";
  let nodeString = '\n Current list is: ';
  let value = prompt(message1); // all prompts will return strings...
  if (Number(value)) { // so, just checking to see if it can be converted to a number and then converting
    value = Number(value); // not a perfect solution as booleans, dates, etc. lose their formats, but felt this was sufficient just to show the idea rather than writing a large switch statement or conditional block;
  }
  let tail;
  let temp;
  if (value) { // if user inputs any value, then first value is a special case as we must set head node to this value
    list.head = SLNode(value);
    tail = list.head;
    nodeString += value;
    value = prompt(message2 + nodeString);
    if (Number(value)) { // note that numbers compare differently than the strings of those same numbers, so just converting to  meet users' most LIKELY expectations when inputting a number and performing another action (like move min to front, etc)
      value = Number(value);
    }
  }
  while (value) {
    temp = SLNode(value); // temp not necessary as "tail = addBackNode(tail, SLNode(value))" is same, just for readability
    tail = addBackNode(tail, temp);
    nodeString += ', ' + value;
    value = prompt(message2 + nodeString);
    if (Number(value)) {
      value = Number(value);
    }
  }
  return list;
}
