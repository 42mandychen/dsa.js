/**
  * Bubble Sort implementation in JavaScript.
  * @param {number[]} arr - input array that contains numbers
  * @return {number[]} - sorted array
  */
function bubbleSort(arr) {
  if (arr === null || arr.length <= 1) return arr;

  let swapped = false;
  let prev = 0;
  for (;;) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[prev] > arr[i]) {
        [arr[prev], arr[i]] = [arr[i], arr[prev]];
        swapped = true;
      }
      prev++;
    }
    if (swapped === false) break;
    swapped = false;
    prev = 0;
  }
  return arr;
}
