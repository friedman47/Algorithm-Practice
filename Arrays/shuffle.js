/* Create a function that will randomize the order of an array's elements.  Work in-place.  Only return what you need to. */

// I'm going to use a for loop with the floor function of Math.random times the array.length to select a random index and then swap the current iteration's loop with that random index.  I could have chosen a while loop, with a decrementer based on some passed parameter, and then I could randomly choose what to shuffle.  However, I feel like I want to ensure I touch each element - note that an element can map to its own index, so it is about as random as it could be.  Also, no need to return anything, since the function is what shuffles, not the return statement.

function shuffle(array) {
  if(!(array instanceof Array)) {return 'Please pass an array.'}
  let temp;
  for(let i = 0; i < array.length; i++) {
    let toIndex = Math.floor(Math.random() * array.length);
    temp = array[toIndex];
    array[toIndex] = array[i];
    array[i] = temp;
  };
};
