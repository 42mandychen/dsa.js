import {binarySearch} from '../src/binarysearch';

const arr = [1,2,3,4,5,7,8,9];

test('search for existing items', () => {
  for (let i = 0; i < arr.length; i++) {
    expect(binarySearch(arr[i], arr)).toBe(i);
  }
});

test('search for nonexistent elements', () => {
  expect(binarySearch(6, arr)).toBe(-1);
  expect(binarySearch(-1, arr)).toBe(-1);
  expect(binarySearch(10, arr)).toBe(-1);
});
