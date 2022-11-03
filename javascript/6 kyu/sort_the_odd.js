/* Sort the odd - 6 kyu

Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

// My solution: declare a new array that contains all the odd numbers from the input array sorted in ascending order. return a new array that maps 
// through the input array replacing each odd number with the next element in the sorted array

const sortArray = array => {
  let sortedOdds = array.filter(number => number % 2 != 0).sort((a, b) => a - b);
  return array.map(number => {
    return number % 2 == 0 ? number : sortedOdds.shift();
  });
}