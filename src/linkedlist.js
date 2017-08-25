// Implementation using the node structure

class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }

  get next() {
    return this._next;
  }

  get data() {
    return this._data;
  }

  set next(node) {
    this._next = node;
  }

  set data(d) {
    this._data = d;
  }
}

export class LList {
  constructor() {
    this._head = new Node("head");
  }

  find(data) {
    let curr = this._head;
    while(curr !== null) {
      if (curr.data === data) return curr;
      curr = curr.next;
    }
    return null;
  }

  insert(data) {
    const newNode = new Node(data);
    const next = this._head.next;
    this._head.next = newNode;
    newNode.next = next;
  }

  remove(data) {
    let prev = this._head;
    let curr = prev.next;
    while(curr !== null) {
      if (curr.data === data) {
        prev.next = curr.next;
        return;
      }
      curr = curr.next;
      prev = curr;
    }
  }

  reverse() {

  }

  print() {
    let curr = this._head;
    let llist = '';
    while(curr !== null) {
      llist += curr.data.toString();
      llist += (curr.next === null)? '' : '->';
      curr = curr.next;
    }
    return llist;
  }
}
