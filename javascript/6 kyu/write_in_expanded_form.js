/* Write Number in Expanded Form - 6 kyu

Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/

// My solution: convert the input into a string and split at every character. build up a string with reduce that multiplies every non-zero digit
// by 10^(index + 1) so each has the correct number of trailing 0's. slice off the extra " + " and return

const expandedForm = num => {
  return num.toString().split('').reduce((string, number, index, array) => {
    return number != 0 ? string + `${number * (10**(array.length - (index + 1)))} + ` : string;
  }, '').slice(0, -3);
}