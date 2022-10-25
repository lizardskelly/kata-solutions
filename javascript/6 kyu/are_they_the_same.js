/* Are they the "same"? - 6 kyu
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 
20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarksfalse

    a or b might be [] or {}
    a or b might be nil or null or None or nothing

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

// My solution: check to make sure both inputs are not null returning false if one is, sort them both lowest to highest so numbers 
// are aligned between arrays, then test each element of the first array to make sure it matches its square in the second array 
// returning false at the first non-matching number. return true if all numbers match

const comp = (array1, array2) => {
  if (array1 && array2) {
    sortedArr1 = array1.sort((a, b) => a - b);
    sortedArr2 = array2.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i]**2 != sortedArr2[i]) {
        return false
      }
    }
    return true
  }
  return false
}

// Highest rated solution: check to make sure both inputs are not null returning false if one is, sort both lowest to highest
// so numbers are aligned between arrays. map thru first array and square each element. test with .every to make sure every
// now squared number in the first array matches the squared numbers in the second array

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}