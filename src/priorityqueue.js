import {MaxHeap} from './heap';

// Element in the priority queue has a value and priority.
class Element {
  constructor(value, priority) {
    this._value = value;
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }

  get value() {
    return this._value;
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
    let ele = super.deleteMax();
    console.log(`element to dequeue: ${JSON.stringify(ele)}`);
    if (ele != null) {
      return ele;
    } else {
      return null;
    }
  }

}
