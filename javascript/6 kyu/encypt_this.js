/* Encrypt this! - 6 kyu

Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

// My solution:

const encryptThis = string => {
  return string.split(' ').map(word => {
    if (word.length === 1) return `${word.charCodeAt(0)}`;
    else if (word.length === 2) return `${word.charCodeAt(0)}${word[1]}`;
    return `${word.charCodeAt(0)}${word[word.length - 1]}${word.slice(2, word.length - 1)}${word[1]}`;
  }).join(' ');
}