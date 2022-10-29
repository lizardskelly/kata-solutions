/* Duplicate Encoder - 6 kyu

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that 
character appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is 
the expected result, not the input!

*/

// My solution: declare empty array that we will be pushing "(" and ")" to. iterate through input word, check each letter with regex match to see if the 
// letter repeats. push parentheses according to regex.match length, join array and return it 

const duplicateEncode = word => {
	let encodedWord = [];
	for (let i = 0; i < word.length; i++) {
  	encodedWord.push(word.match(new RegExp(`[${word[i]}]`, 'gi')).length > 1 ? ')' : '(');
  }
  return encodedWord.join('');
}