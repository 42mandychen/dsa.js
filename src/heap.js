/* An implementation of max-heap.

The representation of the heap is an array with zero-based indexing,
where the index of the i-th element's left
child is 2i + 1, the index of the right child
is 2i + 2, the index of the parent is Math.floor((i - 1)/2),
and the index of the node that has the maximum value is 0 (the top). */
export class MaxHeap {
  // Pass in a getVal function so that this heap can be used to implementation
  // A priority queue.
  // getVal() takes in an element in the heap, and returns the value that
  // Value comparison should be operated on.
  constructor(getVal) {
    this._heap = [];
    this._getVal = getVal;
  }

  // Swap child with parent
  _swap(parent, child) {
    const current = this._heap[parent];
    this._heap[parent] = this._heap[child];
    this._heap[child] = current;
  }

  // Recursively swap down the element at index i to its appropriate position
  _swapDown(i) {
    // I is the current index
    const indexOfLeftChild = 2 * i + 1;
    const indexOfRightChild = 2 * i + 2;
    const current = this._heap[i];
    const leftChild = this._heap[indexOfLeftChild];
    const rightChild = this._heap[indexOfRightChild];

    // Base case one: index out of range
    if (i >= this._heap.length || indexOfLeftChild >= this._heap.length) {
      return;
    } else if (indexOfRightChild >= this._heap.length){
      // Base case two: right child doesn't exist but left child does
      if (this._getVal(current) < this._getVal(leftChild)) {
        this._swap(i, indexOfLeftChild);
      }
      return;
    } else if (this._getVal(current) >= this._getVal(leftChild)
    && this._getVal(current) >= this._getVal(rightChild)) {
      // Base case three: the current element is at the correct position
      return;
    }

    let newIndex;
    if (this._getVal(leftChild) > this._getVal(rightChild)) {
      // Left child is the max compared to its parent and the right child,
      // Swap the left child up
      this._swap(i, indexOfLeftChild);
      newIndex = indexOfLeftChild;
    } else {
      // Otherwise, swap the right child up
      this._swap(i, indexOfRightChild);
      newIndex = indexOfRightChild;
    }

    this._swapDown(newIndex);
  }

  // Recursively swap up the element at index i to its appropriate position
  _swapUp(i) {
    // Base case
    if (i === 0) { return; }
    const current = this._heap[i];
    const indexOfParent = Math.floor((i - 1)/2);
    const parent = this._heap[indexOfParent];
    // Base case 2
    if (this._getVal(parent) < this._getVal(current)) {
      this._swap(indexOfParent, i);
      this._swapUp(indexOfParent);
    }
  }

  // O(n) algorithm:
  // For each of the node in the tree, if its height is h,
  // It takes at most h steps to swap down if the top node
  // Has height = 1 and the leaf nodes have height = H + 1,
  // Where H is Math.floor(log n).
  // For each height, there is at maximum 2^(H-h) nodes.
  // Therefore, total number of steps is:
  // sum(h=1 to H)h * 2^(H-h) = O(n).
  heapify(data) {
    if (data === null || data === undefined) {
      throw new Error(`Input array is ${data}, please pass in a valid array.`);
    }

    this._heap = [...data];

    if (data.length <= 1) return;

    for (let i = Math.floor((this._heap.length - 1)/2); i >=0; i--) {
      this._swapDown(i);
    }
  }

  insert(node) {
    this._heap.push(node);
    this._swapUp(this._heap.length - 1);
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  deleteMax() {
    // Swap the last element to the top

    // Base case: empty heap
    if (this.isEmpty()) { return null; }

    const firstElement = this._heap[0];
    const lastElement = this._heap.pop();
    if (!this.isEmpty()) {
      this._heap[0] = lastElement;

      // Recursively swap down the new top to its position
      this._swapDown(0);

    }
    return firstElement;
  }

  peek() {
    if (this._heap.length === 0) return null;

    return this._heap[0];
  }

  print() {
    if (this._heap.length === 0) return '';
    if (this._heap.length === 1) return this._heap[0].toString();

    let strHeap = '';
    const heapDepth = Math.floor(Math.log2(this._heap.length));
    const maxSpace = 4 * (2 ** heapDepth);
    for (let i = 0; i <= heapDepth; i++){
      const numOfNodes = 2 ** i;
      const numOfSpaces = Math.floor(maxSpace / numOfNodes);
      let level = '';
      for (let j = 0; j < numOfNodes; j++) {
        const index = numOfNodes - 1 + j;
        if (index >= this._heap.length) { break; }
        level += ' '.repeat(numOfSpaces/2) + this._getVal(this._heap[numOfNodes - 1 + j]) + ' '.repeat(numOfSpaces/2);
      }
      strHeap += level + '\n';
    }
    return strHeap;
  }
}
