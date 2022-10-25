/* Bit Counting - 6 kyu
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// My solution: input converted to string in base-2 (binary), split into array, then use .reduce to sum up while converting back to an integer

const countBits = input => {
  return input.toString(2).split('').reduce((sum, digit) => sum + Number(digit), 0);
};

// Highest rated solution: input converted to string in base-2 (binary), split into array at each 0, rejoined, and simply count length

countBits = n => n.toString(2).split('0').join('').length;