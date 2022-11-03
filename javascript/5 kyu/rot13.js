/* Rot13 - 5 kyu

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters 
included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".

*/

// My solution: use a regex match to replace only the letters. using the letter's charcode, either add or subtract 13 depending on the letter's 
// position in the alphabet. return the new letter

const rot13 = message => {
  return message.replace(/[a-z]/gi, (match) => {
    return match === match.toUpperCase() ? 
      match.charCodeAt(0) < 78 ? String.fromCharCode(match.charCodeAt(0) + 13) : String.fromCharCode(match.charCodeAt(0) - 13) :
      match.charCodeAt(0) >= 110 ? String.fromCharCode(match.charCodeAt(0) - 13) : String.fromCharCode(match.charCodeAt(0) + 13)
  })
}