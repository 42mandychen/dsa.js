// Queue: first in first out (FIFO)

export class Queue {
  constructor() {
    this._data = [];
  }

  enqueue(element) {
    this._data.push(element);
  }

  dequeue() {
    if (this._data.length > 0){
      let first = this._data[0];
      this._data.shift();
      return first;
    } else {
      return null;
    }
  }

  peek() {
    if (this._data.length > 0) {
      let last = this._data[0];
      if (typeof last === 'object') {
        return Object.assign({}, last);
      }

      return this._data[0];
    } else {
      return null;
    }
  }
}
