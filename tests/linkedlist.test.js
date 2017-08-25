import {LList} from '../src/linkedlist';

let llist;
let nums = [5, 7, 2, 10, 6, 8, 9, 12, 1];

beforeEach(() => {
  llist = new LList();
});

test('insert', () => {
  expect(llist.print()).toBe('head');
  for (let i = 0; i < nums.length; i++) {
    llist.insert(nums[i]);
    let subArr = nums.slice(0, i + 1).reverse();
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
  for (let i = 0; i < nums.length; i++) {
    llist.insert(nums[i]);
  }

  const reverse = nums.reverse();
  for (let i = 0; i < reverse.length - 1; i++) {
    llist.remove(reverse[i]);
    expect(llist.print()).toBe(`head->${reverse.slice(i + 1).join('->')}`);
  }

  llist.remove(reverse[reverse.length - 1]);
  expect(llist.print()).toBe('head');

});
