/* Given a positive integer less than 4,000, return a string containing that value in Roman numeral representation.*/

// This one seems tough in that there are many possible valid ways to represent a roman numeral (e.g. 4 could be IIII or IV and 8 could be VIII or IIX [the latter is called a "double subtractive"]). I think my best approach is to decide on a certain style and create either a switch statement or a series of conditionals to handle the possibilities.
// Moving from left to right using modulus seems like a reasonable approach. I'll choose to use subtraction for only digits that are 1 less than 5 or 1 less than 10 (so 4 is IV and 10 is IX, but 3 is III and 8 is VIII) since we have roman numerals in 'multiples of 5' for each place (10's place has V and X, 100's has L and C, and 1000's has D and M). So, right to left won't work as well because it would require extra checks - for instance, if the number were 49, then checking from the left would
// Due to the large number of conditionals, I opted to use a switch statement. Note that in terms of performance, writing out all of the conditionals individually would generally be faster. Also, rather than actually implementing modulus, it's 'hard-coded' into the program by virtue of my using 3 separate switch statements.
// One last note: the switch statement behaved erratically if the expression involved a comparison (e.g. num >= 100), which is why the implementation uses switch(true) and then evaluates several cases.
function intToRoman(num) {
  let roman = '';
  while (num >= 1000) {
    num -= 1000;
    roman += 'M';
  }
  switch (true) {
    case num === 999:
      num -= 999;
      roman += 'IM';
      break;
    case num >= 900:
      num -= 900;
      roman += 'CM';
      break;
    case num >= 500:
      num -= 500;
      roman += 'D';
      while (num >= 100) {
        num -= 100;
        roman += 'C';
      }
      break;
    case num === 499:
      num -= 499;
      roman += 'ID'
      break;
    case num >= 400:
      num -= 400;
      roman += 'CD';
      break;
  default:
      while (num >= 100) {
        num -= 100;
        roman += 'C';
      }
  }
  switch (true) {
    case num === 99:
      num -= 99;
      roman += 'IC';
      break;
    case num >= 90:
      num -= 90;
      roman += 'XC';
      break;
    case num >= 50:
      num -= 50;
      roman += 'L';
      while (num >= 10) {
        num -= 10;
        roman += 'X'
      }
      break;
    case num === 49:
      num -= 49;
      roman += 'IL'
      break;
    case num >= 40:
      num -= 40;
      roman += 'XL';
      break;
    default:
      while (num >= 10) {
        num -= 10;
        roman += 'X';
      }
  }
  switch (true) {
    case num === 9:
      roman += 'IX';
      break;
    case num >= 5:
      num -= 5;
      roman += 'V';
      while (num >= 1) {
        num -= 1;
        roman += 'I';
      }
      break;
    case num === 4:
      roman += 'IV';
      break;
    default:
      while (num >= 1) {
        num -= 1;
        roman += 'I';
      }
  }
  return roman;
}
