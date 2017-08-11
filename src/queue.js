import {MaxHeap} from './heap';

// Queue: first in first out (FIFO)

class Queue {
  constructor() {
    this._data = [];
  }

  enqueue(element) {
    super.insert(element);
  }

  dequeue() {
    super.deleteMax();
  }

  peek() {
    super.peek();
  }
}

// Element in the priority queue has a value and priority.
class Element {
  constructor(value, priority) {
    this._value = value;
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }
}

// The implementation of a priority queue uses max heap.
export class PriorityQueue extends MaxHeap {
  constructor() {
    super((element) => {return element.priority});
  }

  enqueue(value, priority) {
    super.insert(new Element(value, priority));
  }

  // remove the element with the highest priority
  dequeue() {
    super.deleteMax();
  }

}

// // Initialize a priority queue. Comparison is made based on priority.
// console.log('make a priority queue and print priorities');
// let priorityQueue = new PriorityQueue();
// priorityQueue.insert(new Element(10, 5));
// priorityQueue.insert(new Element(9, 7));
// priorityQueue.insert(new Element(11, 2));
// priorityQueue.insert(new Element(3, 10));
// priorityQueue.insert(new Element(6, 6));
// priorityQueue.insert(new Element(11, 8));
// priorityQueue.insert(new Element(4, 9));
// priorityQueue.insert(new Element(5, 12));
// priorityQueue.print();
