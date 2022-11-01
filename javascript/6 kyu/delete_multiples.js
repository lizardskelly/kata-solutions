/* Delete occurrences of an element if it occurs more than n times - 6 kyu

Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

*/

// My solution: create an object that will be used to reference the number of entries in the array. using a reduce function, iterate through the input 
// array and build up a new results array. each index is checked against the counts object. if the entry does not yet exist, create it. if it exists 
// and is less than the max allowed (n), increment by one. in either case push the current value to our result array. return result array

const deleteNth = (arr, n) => {
  const counts = {};
	return arr.reduce((result, current) => {
    if (!counts[current] || counts[current] < n) {
      counts[current] ? counts[current]++ : counts[current] = 1;
      result.push(current);
    }
    return result
	}, [])
}