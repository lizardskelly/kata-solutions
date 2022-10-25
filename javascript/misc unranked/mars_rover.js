/* Mars Rover Problem

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a 
complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four 
cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, 
which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 
'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.

'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Input:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. 
The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

Output:

The output for each rover should be its final co-ordinates and heading.

Test Input:

  5 5

  1 2 N

  LMLMLMLMM

  3 3 E

  MMRMMRMRRM

Expected Output:

  1 3 N

  5 1 E

Note: consider this user input:

const parsedInput = new InputParser.parse(input) // returns an object
const plateau = new Plateau(parsedInput.plateauSize)
parsedInput.roverInstructions.forEach(roverInstructions => {
  const rover = plateau.buildRover(roverInstructions.initialPosition, roverInstructions.initialHeading)
  rover.move(roverInstructions.moves)
})
plateau.printRoverPositions() // calls rover.printPosition() for each rover

*/

// My solution:

class InputParser {
  parse(inputStrings) {
    return {
      plateauSize: this.parseSize(inputStrings[0]),
      roverInstructions: this.parseInstructions(inputStrings.slice(1))
    };
  }
  
  parseSize(plateauSizeString) {
    return {
      x: Number(plateauSizeString.split(' ')[0]),
      y: Number(plateauSizeString.split(' ')[1])
    };
  }

  parseInstructions(instructionsArray) {
    const roverInstructions = [];
    for (let i = 0; i < instructionsArray.length; i += 2) {
      roverInstructions.push({
        initialPosition: {
          x: Number(instructionsArray[i].split(' ')[0]),
          y: Number(instructionsArray[i].split(' ')[1])
        },
        initialHeading: instructionsArray[i].split(' ')[2],
        moves: instructionsArray[i + 1].split('')
      });
    }
    return roverInstructions;
  }
}

class Plateau {
  constructor(plateauSize) {
    this.height = plateauSize.y;
    this.width = plateauSize.x;
    this.rovers = [];
  }

  buildRover(position, heading) {
    const rover = new Rover(position, heading, this);
    this.rovers.push(rover);
    return rover;
  }

  printRoverPositions() {
    this.rovers.forEach(rover => rover.printPosition());
  }
}

class Rover {
  constructor(position, heading, plateau) {
    this.position = position;
    this.heading = heading;
  }

  move(moves) {
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] === 'M') {
        this.forwards();
      }
      else {
        this.turn(moves[i])
      }
    }
  }

  turn(rotation) {
    if (rotation === 'R') {
      switch (this.heading) {
        case 'N':
          this.heading = 'E';
          break;
        case 'E':
          this.heading = 'S';
          break;
        case 'S':
          this.heading = 'W';
          break;
        case 'W':
          this.heading = 'N';
      }
    }
    else {
      switch (this.heading) {
        case 'N':
          this.heading = 'W';
          break;
        case 'E':
          this.heading = 'N';
          break;
        case 'S':
          this.heading = 'E';
          break;
        case 'W':
          this.heading = 'S';
      }
    }
  }

  forwards() {
    switch (this.heading) {
      case 'N':
        this.position.y += 1;
        break;
      case 'E':
        this.position.x -= 1;
        break;
      case 'S':
        this.position.y -= 1;
        break;
      case 'W':
        this.position.x += 1;
    }
  }

  printPosition() {
    console.log(`${this.position.x} ${this.position.y} ${this.heading}`);
  }
}