/* Bouncing Balls - 6 kyu

A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

*/

// My solution: protection check to make sure parameters are legal, returning -1 if any are not. set a count equal to 1 since the mother will always
// see the ball at least once (inital fall past window). while the ball bounce is higher than the window increase our count by 2 
// (for bouncing up past window and falling back down past window) and set height to its new value. return count

const bouncingBall = (height, bounce, window) => {
  if (height <= 0 || bounce <= 0 || bounce >= 1 || window >= height) return -1;
  let count = 1;
  while (height * bounce > window) {
    count += 2;
    height *= bounce;
  }
  return count;
}