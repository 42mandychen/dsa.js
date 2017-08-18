import {List} from '../src/list';

let list;

beforeEach(() => {
  list = new List();
  list.append(1);
  list.append(2);
});

test('append, length', () => {
  expect(list.length).toBe(2);
  expect(list.toString()).toBe('[ 1,2 ]');
});

test('insert', () => {
  list.insert(0, 0);
  expect(list.length).toBe(3);
  expect(list.toString()).toBe('[ 0,1,2 ]');
  list.insert(1, 3);
  expect(list.length).toBe(4);
  expect(list.toString()).toBe('[ 0,3,1,2 ]');
});

test('clear', () => {
  list.clear();
  expect(list.length).toBe(0);
});

test('remove', () => {
  expect(list.length).toBe(2);
  expect(list.remove(2)).toBeTruthy();
  expect(list.length).toBe(1);
  expect(list.toString()).toBe('[ 1 ]');
  expect(list.remove(1)).toBeTruthy();
  expect(list.length).toBe(0);
  expect(list.toString()).toBe('[  ]');
  expect(list.remove(1)).toBeFalsy();
  expect(list.length).toBe(0);
  expect(list.toString()).toBe('[  ]');
});

test('find', () => {
  expect(list.find(1)).toBe(0);
  expect(list.find(2)).toBe(1);
});
