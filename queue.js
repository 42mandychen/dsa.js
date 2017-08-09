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
  constructor() {
    super((element) => {element.priority});
  }

  enqueue(element) {
    super.insert(element);
  }

  // remove the element with the highest priority
  dequeue() {
    super.deleteMax();
  }
}

// Initialize a priority queue. Comparison is made based on priority.
let priorityQueue = new priorityQueue();
