/* Create the method removeSelf() in the list node class to disconnect a given node from linked lists that include it. Note: the list might be the first in the list, but it won't be the last and you do NOT have a pointer to the previous node. Do not lose any subsequent nodes in the list.*/

// This is essentially the same as how I handled the special case of the head node in removeVal.js. My plan is to copy the value from the next node in the list and then delete that next node by linking to its next node. The end result is that the value in the node we want to remove is gone and the list is one node shorter, so effectively we've duplicated what the result would be if we could delete the node directly. It won't matter if it's a head node or another node because all links pointing to this specific node will be unaltered (the links' target remains). Also, since the node has only one next value, even if the node exists in multiple lists this would remove it from all of those lists at once (and by the way, all of those lists must have merged at some point in order for this node to exist in multiple lists).

SLNode.prototype.removeSelf = function () {
    this.value = this.next.value;  // copy the next value, so we've overwritten the value of the node we want to remove
    this.next = this.next.next;  // skip the next node (now we point to null or another node), so now our list is 1 node shorter
    return this; // note that this will throw an error if our assumption about there being a next node is violated
}
