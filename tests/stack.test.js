import {Stack} from '../src/stack';

let stack;

beforeEach(() => {
  stack = new Stack();
});

test('push and pop numbers', () => {
  stack.push(3);
  stack.push(1);
  stack.push(5);
  expect(stack.pop()).toBe(5);
  expect(stack.pop()).toBe(1);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBeNull();
});

test('peek', () => {
  stack.push(3);
  expect(stack.peek()).toBe(3);
  stack.push(1);
  expect(stack.peek()).toBe(1);
  stack.push(5);
  expect(stack.peek()).toBe(5);
});

test('push and pop objects', () => {
  const a = {a: 1, b: 0, c: 0};
  const b = {a: 0, b: 1, c: 0};
  const c = {a: 0, b: 0, c: 1};
  stack.push(a);
  stack.push(b);
  stack.push(c);
  expect(stack.pop()).toEqual(c);
  expect(stack.pop()).toEqual(b);
  expect(stack.pop()).toEqual(a);
  expect(stack.pop()).toBeNull();
});

test('peek - object returned is immutable', () => {
  const a = {a: 1, b: 0, c: 0};
  stack.push(a);
  let popped = stack.peek();
  expect(popped).toEqual(a);
  popped.a = 0;
  expect(popped).not.toEqual(a);
  popped = stack.peek();
  expect(popped).toEqual(a);
  expect(stack.pop()).toEqual(a);
  expect(stack.peek()).toBeNull();
});
