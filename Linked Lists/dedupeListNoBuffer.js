/* Write a function to remove all nodes with duplicate values, retaining only the first instance of a value, and return the new list. You may not use a secondary buffer. What are the performance ramifications?*/

// By saying we cannot use a secondary buffer, the prompt is challenging us to solve the same issue in O(1) space. Consequently, we'll have to trade-off time to achieve that, meaning this version of the algorithm will be O(n^2) time. So, the original dedupe was O(n) time and O(n) space, and this will be O(n^2) time and O(1) space. My plan is to iterate the list and delete all subsequent instances of the given value - it's much like the prime sieve (Sieve of Eratosthenes) in concept, except we do not know the contents of the nodes (so even a random access/array implementation would not improve performance, we would still need to check each index; sieve of eratosthenes gets O(n log^2 n) because it's essentially using the array as a number line so it knows both location AND contents without needing to check ...
// to process the 'sieving' step [contents are just a true/false toggle, the index of the array represents the number], plus the sieve of eratosthenes only needs to iterate to root n for a given n). This plan uses the same sieve idea, but we must visit each node; the main benefit is that we can safely assume each new node we visit during the process is already unique (note I'm using strict comparison and also implicitly assuming we're comparing primitives, so we might still find a number and it's string equivalent). I'll assume no cycles in the list and that we receive a pointer to the list.

function uniqueValuesNoBuffer(sList) {
  let current = sList.head;
  if (current === null) {return null}
  let sieve; // the process of checking all subsequent nodes and sieving needs to be done n-1 times in the worst case (when all nodes are already unique). I'd love to write this recursively, since the repetitive checking lends itself naturally to that type of approach, but the prompt hints that we may be short on memory or at the very least we prize it highly, so I'll stay iterative to avoid inflating the stack frame.
  let runner; // so, now current is effectively a placeholder, sieve iterates the list from current, and runner optimizes deletions, then current advances one node and the process repeats until the list is exhausted.
  while (current) { // despite the appearance (2 nested loops), this is still only n^2; sieve and runner work together so each node is touched only once - sieve and runner just enable deleting contiguous blocks rather than breaking and forging links within a block that will ultimately be deleted.
    sieve = current;
    while (sieve) { // rather than checking for multiples of a prime, sieve is just matching a value, but it still could reduce the remaining nodes in the iteration, which is where much of the efficiency potential comes from.
      if (sieve.next && (sieve.next.value === current.value)) {
        runner = sieve.next.next;
        while (runner) { // runner helps group contiguous nodes for deletion where possible, which also provides some efficiency.
          if (runner.value === current.value) {
            runner = runner.next;
          } else {
            break;
          }
        }
        sieve.next = runner;
      }
      sieve = sieve.next;
    }
    current = current.next;
  }
  return sList;
}
