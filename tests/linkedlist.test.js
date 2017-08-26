import {LList} from '../src/linkedlist';

let llist;
const nums = [5, 7, 2, 10, 6, 8, 9, 12, 1];
const reversedNums = [...nums].reverse();

beforeEach(() => {
  llist = new LList();
});

test('insert', () => {
  expect(llist.print()).toBe('head');
  for (let i = 0; i < nums.length; i++) {
    llist.insert(nums[i]);
    const subArr = nums.slice(0, i + 1).reverse();
    expect(llist.print()).toBe(`head->${subArr.join('->')}`);
  }
});


test('find', () => {
  for (let i = 0; i < nums.length; i++) {
    llist.insert(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    expect(llist.find(nums[i]).data).toBe(nums[i]);
  }

  expect(llist.find(-10)).toBeNull();

});

test('remove', () => {
  llist.remove(-10);
  expect(llist.print()).toBe('head');

  for (let i = 0; i < nums.length; i++) {
    llist.insert(nums[i]);
  }

  for (let i = 0; i < reversedNums.length - 1; i++) {
    llist.remove(reversedNums[i]);
    expect(llist.print()).toBe(`head->${reversedNums.slice(i + 1).join('->')}`);
  }

  llist.remove(reversedNums[reversedNums.length - 1]);
  expect(llist.print()).toBe('head');

});

test('reverse a linked list with only head', () => {
  llist.reverse();
  expect(llist.print()).toBe('head');
});

test('reverse', () => {
  for (let i = 0; i < nums.length; i++) {
    llist.insert(nums[i]);
  }
  llist.reverse();
  const actualStr = llist.print();
  let expectStr = 'head->';
  for (let i = 0; i < nums.length - 1; i++) {
    expectStr += `${nums[i].toString()}->`;
  }
  expectStr += nums[nums.length - 1].toString();
  expect(actualStr).toBe(expectStr);
});
