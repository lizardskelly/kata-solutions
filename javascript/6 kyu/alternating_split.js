/* Simple Encryption #1 - Alternating Split - 6 kyu

Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters 
of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

// My solution:

const encrypt = (text, n) => {
  if (!text || n <= 0) return text;
  let letters = text.split('');
  for (i = n; i > 0; i--) {
    letters = letters.filter((_letter, i) => i % 2 != 0)
    	.concat(letters.filter((_letter, i) => i % 2 == 0));
  }
  return letters.join('');
}