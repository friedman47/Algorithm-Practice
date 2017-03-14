/* Build a function that returns the smallest significant digit of x^y where x and y are two non-negative integers.  You must do this without actually calculating x^y. */

// My plan is to calculate the last significant digit without calculating the full exponent based on data sufficiency.  The exponentiation will only affect the last significant digit once during each successive multiplication.  For instance, 19^n will be 361 for n = 2 and 6,859 for n=3, and we can see that the last significant digit goes from 1 to 9, so then when n=4 it goes back to 1 (since 9x9 is 81).  So, first, I'll identify the last significant digit by eliminating zeroes, second I'll store the base of the exponent, and finally, I'll iterate the appropriate number of times while trimming the product using modulo 10.

function lastSigDig(x, y) {
// validating that neither x nor y == 0; problem explicitly says 'non-negative' so need to check for zeroes; if x == 0, this just saves time, if y == 0, then the for loop wouldn't work.  Also, 0^0 == 1, so check y first.
  if (y === 0) {return 1};
  if (x === 0) {return 0};
// isolate last significant digit
  while (x % 10 === 0) {
    x = Math.floor(x / 10);
  };
// fix the base and store the last digit. Also, note i < y, not i <= y since we multiply the base and last digit, so we start by squaring
  const base = x % 10;
  let lastSignificant = x % 10;
  for (let i = 1; i < y; i++) {
    lastSignificant = (base * lastSignificant) % 10;
  };
  return lastSignificant;
};
