using System;
using System.Linq;

public static class Kata
{
/* Return Negative - 8 kyu
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?

Examples

Kata.MakeNegative(1);  // return -1
Kata.MakeNegative(-5); // return -5
Kata.MakeNegative(0);  // return 0

Notes

  The number can be negative already, in which case no change is required.
  Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/

// My solution: get the absolute of the integer, make it negative. duh

  public static int MakeNegative(int number)
  {
    return -Math.Abs(number);
  }

// Best solution: same as mine

// -----------------------

/* Grasshopper - Debug sayHello - 8 kyu
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. 
It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
*/

// My solution: just interpolate the input. duh again

  public static string SayHello(string name)
  {
    return $"Hello, {name}";
  }

// Best solution: same as mine

// -----------------------


/* You're a square! - 7 kyu
A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, 
is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! 
You just have to check if your number of building blocks is a perfect square. 

Task
Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; 
    in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false
*/

// My solution: finds square root of input and returns true/false if it mods 1 evenly

  public static bool IsSquare(int number)
  {
    return Math.Sqrt(number) % 1 == 0;
  }

// Best solution: same as mine

// -----------------------

}