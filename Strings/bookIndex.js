/* Given a sorted array of pages for where a term may appear (as in a book's index), create and return an index string. Consecutive pages should form ranges separated by a hyphen, and use commas for non-continguous page references.*/

// My plan for this challenge is to iterate through the array while storing a current value in a temporary variable, then running ahead with a pointer to look for adjacency. I'll use a while loop that increments the index, so we can loop through the array in O(n), and I'll push values to a return string so the logic can apply a hyphen immediately, then a comma and space if needed.

function bookIndex (array) {
  let indexString = '';  // pushing an integer to a string will automatically convert an integer value to a string value in JS.
  let startPage;
  for (let i = 0; i < array.length; i++) {
    startPage = array[i]; // hold first value to concatenate to string
    while (array[i + 1] === array[i] + 1) { // check whether next element is adjacent/loop until next element is not adjacent
      i++;
    }
    if (startPage < array[i]) { // concatenate to string using hyphen for a range, otherwise just concatenate the startPage
      indexString += `${startPage}-${array[i]}`
    } else {
      indexString += startPage
    }
    if (i < array.length - 1) { // if index is not for the last item in array, then append a comma and space
      indexString += ", "
    }
  }
  return indexString;
}
