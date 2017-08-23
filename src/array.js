/* Array is built-in. */

/* Directly assign one array to be equal to another
is passing by reference. => shallow copy */
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr2[0] = 0;
console.log(arr2[0]); //0
console.log(arr1[0]); //0
// To copy correctly, use the spread syntax (...).
// See docs: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator#Copy_an_array
arr1 = [1, 2, 3, 4];
arr2 = [...arr1]; // or [...arr2] = arr1;
arr2[0] = 0;
console.log(arr2[0]); //0
console.log(arr1[0]); //1
// or use slice
arr2 = arr1.slice();
arr2[0] = 0;
console.log(arr2[0]); //0
console.log(arr1[0]); //1
// Alternatively, use concat
arr2 = arr1.concat([]);
arr2[0] = 0
console.log(arr2[0]); //0
console.log(arr1[0]); //1

/* Array.prototype.sort() by default sorts string arrays.
If number arrays, sort by string unicode code points. */
let arr = [1, 2, 9, 10];
arr.sort(); // sort() is in-place, so it modifies the array directly
console.log(arr); //[ 1, 10, 2, 9 ]
// To sort number arrays correctly, pass an ordering function
arr = [1, 2, 9, 10];
arr.sort((num1, num2) => num1 - num2);
console.log(arr); //[ 1, 2, 9, 10 ]
