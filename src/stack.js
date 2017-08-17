// Stack: last in first out (LIFO)

export class Stack {
  constructor() {
    this._dataStore = [];
  }

  push(element) {
    this._dataStore.push(element);
  }

  pop() {
    if (this._dataStore.length > 0) {
      let last = this._dataStore[this._dataStore.length - 1];
      this._dataStore.pop();
      return last;
    } else {
      return null;
    }
  }

  peek() {
    if (this._dataStore.length > 0) {
      let last = this._dataStore[this._dataStore.length - 1];

      if (typeof last === 'object') {
        // make a copy of the element if it's an object so that
        // it's immutable
        return Object.assign({}, last);
      }

      return last;
    } else {
      return null;
    }
  }
}
