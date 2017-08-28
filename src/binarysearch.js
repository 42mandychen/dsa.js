/**
 * Binary Search implementation.
 * Run time: O(log n).
 */

/**
 * binarySearchHelper - Recursive helper for binary search.
 *
 * @param  {number} val   The value to search for
 * @param  {array} arr    Input array that's sorted in ascending order
 * @param  {number} left  Left index where the element is smaller than val
 * @param  {number} right Right index where the element is greater than val
 * @return {number}       Index of val if found, -1 if not
 */
function binarySearchHelper(val, arr, left, right) {
  if (right - left <= 1) {
    if (arr[left] === val) return left;
    else if (arr[right] === val) return right;

    return -1;
  }
  const mid = Math.floor((left + right)/2);
  if (val < arr[mid]) {
    return binarySearchHelper(val, arr, left, mid);
  } else if (val > arr[mid]) {
    return binarySearchHelper(val, arr, mid, right);
  }

  return mid;
}

/**
 * binarySearch - Search for a value in an ascendingly sorted array and
 * return its index if found. If not found, return -1.
 *
 * @param  {number} val The value to search for
 * @param  {array} arr  Input array that's sorted in ascending order
 * @return {number}     Index of val if found, -1 if not
 */
export function binarySearch(val, arr) {
  if (val < arr[0]) return -1;
  else if (val > arr[arr.length - 1]) return -1;

  return binarySearchHelper(val, arr, 0, arr.length - 1);
}
