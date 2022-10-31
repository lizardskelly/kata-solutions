/* Detect Pangram - 6 kyu

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

// My solution: we create a new set made from just the letters from an input string found with a regular expression. if that set's size is equal to 26 
// then it is a pangram (ie, the set contains each character of the english alphabet)

const isPangram = string => {
  return new Set(string.toLowerCase().match(/[a-z]/g)).size == 26;
}