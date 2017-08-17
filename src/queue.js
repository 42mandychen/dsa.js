import {MaxHeap} from './heap';

// Queue: first in first out (FIFO)

class Queue {
  constructor() {
    this._data = [];
  }

  enqueue(element) {
    this._data.push(element);
  }

  dequeue() {
    this._data.unshift();
  }

  peek() {
    if (this._data.length > 0)
      return this._data[0];
    else
      return null;
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
