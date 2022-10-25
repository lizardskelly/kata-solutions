using System;
using System.Linq;

public static class Kata
{
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
}