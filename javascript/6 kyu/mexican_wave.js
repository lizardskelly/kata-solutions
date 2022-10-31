/* Mexican Wave - 6 kyu

Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

Good luck and enjoy!

*/

// My solution: return an empty array if the string is empty. otherwise declare an empty array, then iterate through the string. if the current character 
// is a space, do nothing. if it is a letter, declare a new array made from the split string, uppercase the current index's letter, then push the joined
// word to the wave array. return wave array

const wave = str => {
  if (!str[0]) return [];
  let waveArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      let nextWord = str.split('');
      nextWord[i] = nextWord[i].toUpperCase();
      waveArray.push(nextWord.join(''));
    }
  }
  return waveArray;
}