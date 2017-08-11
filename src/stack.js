// Stack: last in first out (LIFO)

class Stack {
  constructor() {
    this._dataStore = [];
  }

  push(element) {
    this._dataStore.push(element);
  }

  pop() {
    this._dataStore.pop();
  }

  peek(){
    return this._dataStore[this._dataStore.length - 1];
  }
}
