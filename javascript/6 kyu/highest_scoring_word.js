/* Highest Scoring Word - 6 kyu

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

// My solution: split the words of the input string into an array. create another array that adds up the charcodes (minus 96 so the letters equal 
// their place in the alphabet) of each word. return the matching word at the index of the scored word

const highScore = string => {
  const words = string.split(' ');
  const scores = words.map(word => {
    return word.split('').reduce((score, letter) => {
      return score += (letter.charCodeAt(0) - 96);
    }, 0)
  })
  return words[scores.indexOf(Math.max(...scores))];
}