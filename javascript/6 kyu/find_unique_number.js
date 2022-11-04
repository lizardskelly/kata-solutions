/* Find the unique number - 6 kyu

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

// My solution:

const findUniq = arr => {
  let testNum = arr.slice(0, 3).sort().find((number, _index, array) => number !== array[1]);
  return testNum != undefined ? testNum : arr.find((number) => number !== arr[0]);
}