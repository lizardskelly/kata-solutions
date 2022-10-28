/* RGB To Hex Conversion - 5 kyu

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

// My solution: toHex function takes the number input, bounds it between 0-255, and is set to a variable where its is converted 
// to a string (using 16(hex)) and uppercased. the new value is returned with a left-padding "0" if needed. the rgb function simply
// returns a string where all values are passed thru the toHex function

const toHex = value => {
	value = Math.min(Math.max(value, 0), 255);
	const hexValue = value.toString(16).toUpperCase();
  return value < 16 ? '0' + hexValue : hexValue;
}

const rgb = (r, g, b) => {
	return toHex(r) + toHex(g) + toHex(b);
}