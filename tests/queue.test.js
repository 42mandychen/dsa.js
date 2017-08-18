import {Queue} from '../src/queue';

test('enqueue and dequeue numbers', () => {
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(5);
  queue.enqueue(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(5);
  expect(queue.dequeue()).toBe(3);
  expect(queue.dequeue()).toBeNull();
});

test('peek', () => {
  let queue = new Queue();
  queue.enqueue(1);
  expect(queue.peek()).toBe(1);
  queue.enqueue(5);
  expect(queue.peek()).toBe(1);
  queue.enqueue(3);
  expect(queue.peek()).toBe(1);
});

test('enqueue and dequeue objects', () => {
  let queue = new Queue();
  let a = {a: 1, b: 0, c: 0};
  let b = {a: 0, b: 1, c: 0};
  let c = {a: 0, b: 0, c: 1};
  queue.enqueue(a);
  queue.enqueue(b);
  queue.enqueue(c);
  expect(queue.dequeue()).toEqual(a);
  expect(queue.dequeue()).toEqual(b);
  expect(queue.dequeue()).toEqual(c);
  expect(queue.dequeue()).toBeNull();
});

test('peek - object returned is immutable', () => {
  let queue = new Queue();
  let a = {a: 1, b: 0, c: 0};
  queue.enqueue(a);
  let popped = queue.peek();
  expect(popped).toEqual(a);
  popped.a = 0;
  expect(popped).not.toEqual(a);
  expect(queue.peek()).toEqual(a);
  expect(queue.dequeue()).toEqual(a);
  expect(queue.peek()).toBeNull();
});
