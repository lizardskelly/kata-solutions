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

// Highest rated solution: same as mine, but condensed

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};