import {Queue} from './queue';

// Initialize a new queue.
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue()); // queue empty, return null

// Make sure changing the object returned by peek() doesn't change the queue
let obj = {a: 1, b: 2};
queue.enqueue(obj);
let copy = queue.peek();
console.log(copy);
console.log(obj);
copy.a = 0;
console.log(copy);
console.log(obj);
