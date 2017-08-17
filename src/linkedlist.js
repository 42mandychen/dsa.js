// Implementation using the node structure

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LList {
  constructor() {
    this._head = new Node("head");
  }

  find(data) {

  }

  insert(data) {
    let newNode = new Node(data);
    let next = this._head.next;
    this._head.next = newNode;
    newNode.next = next;
  }

  remove(data) {

  }

  display(data) {

  }
}
