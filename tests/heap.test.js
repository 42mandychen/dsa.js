import {MaxHeap} from '../src/heap';

let maxHeap;
const nums = [5, 7, 2, 10, 6, 8, 9, 12, 1];
const sortedNums = [...nums].sort((a, b) => {
  return b - a;
});

beforeEach(() => {
  maxHeap = new MaxHeap( (element) => {return element} );
});

test('delete max with empty heap', () => {
  expect(maxHeap.deleteMax()).toBeNull();
});

test('delete max with non-empty heap', () => {
  for (let num of nums) {
    maxHeap.insert(num);
  }

  for (let i = 0; i < sortedNums.length; i++) {
    expect(maxHeap.deleteMax()).toBe(sortedNums[i]);
  }
});

test('heapify empty array', () => {
  maxHeap.heapify([]);
  expect(maxHeap.print()).toBe('');
});

test('heapify undefined', () => {
  expect(() => maxHeap.heapify(undefined)).toThrowError(/please pass in a valid array./);
});

test('heapify null', () => {
  expect(() => maxHeap.heapify(null)).toThrowError(/please pass in a valid array./);
});

test('heapify a non-empty array', () => {
  maxHeap.heapify(nums);
  for (let i = 0; i < sortedNums.length; i++) {
    expect(maxHeap.deleteMax()).toBe(sortedNums[i]);
  }
});

test('peek', () => {
  expect(maxHeap.peek()).toBeNull();
  for (let i = 0; i < nums.length; i++) {
    maxHeap.insert(nums[i]);
    let subArr = nums.slice(0, i + 1);
    let currMax = Math.max(...subArr);
    expect(maxHeap.peek()).toBe(currMax);
  }
});

test('print array with one element', () => {
  maxHeap.insert(3);
  expect(maxHeap.print()).toBe('3');
});

test('print long array', () => {
  for (let num of nums) {
    maxHeap.insert(num);
  }

  expect(maxHeap.print()).toBe(
    '                12                ' + '\n'
+ '        10                9        ' + '\n'
+ '    7        6        2        8    ' + '\n'
+ '  5    1  ' + '\n'
  );
});
