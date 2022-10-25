/* Counting Duplicates - 6 kyu
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur 
more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

// My solution: declare a new array built from the lowercased, split, and sorted input. declare a count variable starting at 0. loop thru array, 
// checking if one element matches the next element at each step. if it does, increase count by 1 and use .findLastIndex() to set the iterate
// step equal to the index of the last occurence of that element. this skips any additional copies of the same element. then return count.
// NOTE: wont work in node since node does not support .findLastIndex()

const duplicateCount = text => {
	let textToSearch = text.toLowerCase().split('').sort();
  let count = 0;
  for (let i = 0; i < textToSearch.length; i++) {
  	if (textToSearch.includes(textToSearch[i], i + 1)) {
    	count++;
      i = textToSearch.findLastIndex(element => element === textToSearch[i]);
    };
  };
  return count;
};

// Highest rated solution: set the input to lowercase, split, sort, and rejoin. build a new array with a regex match. return the length of that new array
// or an empty array if no matches are found.

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}