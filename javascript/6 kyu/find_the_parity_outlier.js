/* Find The Parity Outlier - 6 kyu
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// My solution: declare two empty arrays for both evens and odds, populate each array by iterating thru the input and pushing to the correct
// array with a modulo check, return the first element of the array that has a length of 1

const findOutlier = integers => {
  const evens = [];
  const odds = [];
  integers.forEach(num => {
    (num % 2 == 0 ? evens : odds).push(num);
  });
  return evens.length == 1 ? evens[0] : odds[0];
}

// Highest rated solution: declare and define two arrays for evens and odds by filtering for each, return the first element of the array that has a length of
// one. not sure i agree that this is the Highest rated solution for O(2n) / O(n) reasons

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}