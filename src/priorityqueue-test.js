import {PriorityQueue} from './priorityqueue';

// Initialize a priority queue. Comparison is made based on priority.
console.log('make a priority queue and print priorities');
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(10, 5);
priorityQueue.enqueue(9, 7);
priorityQueue.enqueue(11, 2);
priorityQueue.enqueue(3, 10);
priorityQueue.enqueue(6, 6);
priorityQueue.enqueue(11, 8);
priorityQueue.enqueue(4, 9);
priorityQueue.enqueue(5, 12);
priorityQueue.print();
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue()); // queue empty, return null
