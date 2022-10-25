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