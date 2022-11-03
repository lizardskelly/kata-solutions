/* Take a Ten Minutes Walk - 6 kyu

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their 
phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
    It will never give you an empty array (that's not a walk, that's standing still!).

*/

// My solution: if the array is not exactly 10 in length, return false. declare x and y variables set to 0. add or subtract from those variables
// using forEach and switch to make sure you end up back at the starting position (0, 0)

const isValidWalk = walk => {
  if (walk.length !== 10) return false;
  let startX = 0, startY = 0;
  walk.forEach(direction => {
    switch (direction) {
      case 'n':
        startY++;
        break;
      case 's':
        startY--;
        break;
      case 'e':
        startX++;
        break;
      case 'w':
        startX--;
        break;
    }
  })
  return startX === 0 && startY === 0;
}