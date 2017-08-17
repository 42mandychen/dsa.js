import {List} from './list';

// Tests
console.log('Initialize an empty list');
let list = new List();
list.append(1);
list.append(2);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log('Insert 0 to position 0');
list.insert(0, 0);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log('Remove element 0');
list.remove(0);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log("Remove element 4, which doesn't exist");
list.remove(4);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log('Clear list');
list.clear();
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);
