/* Given a number of US cents, return the optimal configuration of change (i.e. using the fewest number of coins) in an object. */

// In this challenge, the algorithm itself is not different from the challenge during the 'array' section, only what we return. So, I'll use a greedy algorithm assuming that the coins we use are quarters, dimes, nickels, and pennies (no half dollars or silver dollars) and then store the quantity of each in an object to return.

function changeObject(cents) {
  let change = {total: cents};  // create object to return
  let values = [.25, .10, .05, .01]; // use an array to make looping through calculations easier
  let coinCount = [0, 0, 0, 0]; // store values to populate object in a separate array
  for (let i = 0; i < coinCount.length; i++) {
    coinCount[i] = Math.floor(Math.round(cents / values[i] * 100) / 100); // needed Math.round, as otherwise JS created a floating point that would sometimes floor down to .01 (e.g. value was calculated as .019999999999962 and it would floor to .01)
    cents = cents % values[i]; // instead of separate array, could also just use a temp variable to hold floor calculation above, then overwrite values[i] with temp once cents has been updated - felt like using separate array was better for readability.
  }
  change.quarters = coinCount[0]; // populate object...
  change.dimes = coinCount[1];
  change.nickels = coinCount[2];
  change.pennies = coinCount[3];
  return change;
}
