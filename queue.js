// Queue: first in first out (FIFO)

class Queue() {
  constructor() {
    this._data = [];
  }

  enqueue(element) {
    this._data.push(element);
  }

  dequeue() {
    this._data.shift();
  }

  peek() {
    return this._data[this._data.length - 1];
  }
}

// Element in the priority queue has a value and priority.
class Element() {
  constructor(value, priority) {
    this._value = value;
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }
}

// The implementation of a priority queue uses max heap.

class PriorityQueue extends MaxHeap {
  constructor(getVal) {
    this._data = []; // an array of Elements
  }

  enqueue() {

  }

  // remove the element with the highest priority
  dequeue() {

  }
}

// Initialize a priority queue. Comparison is made based on priority.
let priorityQueue = new priorityQueue( (element) => {element.priority} );
