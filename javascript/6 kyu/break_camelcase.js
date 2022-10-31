/* Break camelCase - 6 kyu

Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// My solution: split string into array, iterate through array, if current letter index is upper case then splice a space into the array. 
// return the joined array

const decamel = string => {
  let splitString = string.split('');
  for (let i = 0; i < splitString.length - 1; i++) {
    if (splitString[i] === splitString[i].toUpperCase()) {
      splitString.splice(i, 0, ' ');
      i++;
    }
  }
  return splitString.join('');
}