/* 6 kyu
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// My solution: input converted to string in base-2 (binary), split into array, then use .reduce to sum up while converting back to an integer

const countBits = input => {
  return input.toString(2).split('').reduce((sum, digit) => sum + Number(digit), 0);
};

// Best solution: input converted to string in base-2 (binary), split into array at each 0, rejoined, and simply count length

countBits = n => n.toString(2).split('0').join('').length;

// ----------------------

/* Find the divisors! - 7 kyu
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors
(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'.

Example:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

// My solution: declare empty array, populate array using for loop that counts up to half the input number 
// (since you will never have divisors past half an integer), ternary returns correct answer depending on array length

const divisors = integer => {
	let divisorArray = [];
  for (let i = 2; i <= integer / 2; i++) {
  	if (integer % i == 0) {
    	divisorArray.push(i);
    };
  };
  return divisorArray.length > 0 ? divisorArray : `${integer} is prime`;
};

// Best solution: same as mine, but condensed

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};