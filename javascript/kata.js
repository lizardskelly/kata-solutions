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

// Highest rated solution: same as mine, but condensed

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

// ----------------------

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

// ----------------------

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

// --------------------------

/* Are they the "same"? - 6 kyu
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 
20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarksfalse

    a or b might be [] or {}
    a or b might be nil or null or None or nothing

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

// My solution: check to make sure both inputs are not null returning false if one is, sort them both lowest to highest so numbers 
// are aligned between arrays, then test each element of the first array to make sure it matches its square in the second array 
// returning false at the first non-matching number. return true if all numbers match

const comp = (array1, array2) => {
  if (array1 && array2) {
    sortedArr1 = array1.sort((a, b) => a - b);
    sortedArr2 = array2.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i]**2 != sortedArr2[i]) {
        return false
      }
    }
    return true
  }
  return false
}

// Highest rated solution: check to make sure both inputs are not null returning false if one is, sort both lowest to highest
// so numbers are aligned between arrays. map thru first array and square each element. test with .every to make sure every
// now squared number in the first array matches the squared numbers in the second array

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

// --------------------------

/* Replace With Alphabet Position - 6 kyu
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// My solution: declare the ascii offset ("a" charcode is 97, so we want to offset by 96 to equal its place in the alphabet)
// do a regex match to filter out all non-alphabet characters and put it in an array. if the match finds nothing, return an empty string
// otherwise, map over the array replacing every character with its charcode minus the ascii offset. join the array into a string and return

const alphabetPosition = text => {
	const ASCII_OFFSET = 96;
  const letters = text.match(/[a-z]/gi);
  if (!letters) return '';

	return letters.map(l => l.toLowerCase().charCodeAt(0) - ASCII_OFFSET).join(' ');
}

// Highest rated solution: declare an empty string. iterate through array setting each character to uppercase and then changing it to its charcode
// if the charcode falls between 64 and 91 (the set of charcodes for the uppercase alphabet) subtract 64 to set it equal to its alphabet position
// return the result and slice off the empty space at the end. this solution sucks why is this highly rated

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

// --------------------------

/* Consecutive strings - 6 kyu
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Examples:

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
Note

consecutive strings : follow one after another without an interruption
*/

// My solution: protection returns an empty string early if n is less than 1. set an empty string variable that will hold our result
// loop through input array where we slice off the strings we want to join together, join them, then test their length. if their length
// is higher than any previous tests, set our result var to that string. return result

const longestConsec = (strarr, n) => {
  if (n < 1) return '';

  let longest = '';
  for (let i = 0; i <= strarr.length - n; i++) {
    let concatString = strarr.slice(i, i + n).join('');
    if (concatString.length > longest.length) {
      longest = concatString;
    }
  }
  return longest;
}

// Highest rated solution: about the same as mine. only difference is formatting

function longestConsec(strarr, k) {
  var longest = "";
  for(var i=0;k>0 && i<=strarr.length-k;i++){
    var tempArray = strarr.slice(i,i+k);
    var tempStr = tempArray.join("");
    if(tempStr.length > longest.length){
      longest = tempStr;
    }
  }
  return longest;
}