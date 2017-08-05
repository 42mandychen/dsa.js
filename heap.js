/* An implementation of max-heap.

The representation of the heap is an array with zero-based indexing,
where the index of the i-th element's left
child is 2i + 1, the index of the right child
is 2i + 2, the index of the parent is Math.floor((i - 1)/2),
and the index of the node that has the maximum value is 0 (the top). */
class MaxHeap() {
  // Pass in a getVal function so that this heap can be used to implementation
  // a priority queue.
  // getVal() takes in an element in the heap, and returns the value that
  // value comparison should be operated on.
  constructor(getVal) {
    this._heap = [];
    this._getVal = getVal;
  }

  // Recursively swap down the element at index i to its appropriate position
  _swapDown(i) {
    // i is the current index
    let indexOfLeftChild = 2 * i + 1;
    let indexOfRightChild = 2 * i + 2;
    let current = this._heap[i];
    let leftChild = this._heap[indexOfLeftChild];
    let rightChild = this._heap[indexOfRightChild];

    // base case one: index out of range
    if (i >= this._heap.length || indexOfRightChild >= this._heap.length
    || indexOfLeftChild >= this._heap.length) {
      return;
    } else if (getVal(current) >= getVal(leftChild)
    && getVal(current) >= getVal(rightChild)) {
      // base case two: the current element is at the correct position
      return;
    }

    let newIndex;
    if (getVal(leftChild) > getVal(rightChild)) {
      // left child is the max compared to its parent and the right child,
      // swap the left child up
      this._heap[i] = leftChild;
      this._heap[indexOfLeftChild] = current;
      newIndex = indexOfLeftChild;
    } else {
      // otherwise, swap the right child up
      this._heap[i] = rightChild;
      this._heap[indexOfRightChild] = current;
      newIndex = indexOfRightChild;
    }

    this._swapDown(newIndex);
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  deleteMax() {
    // Swap the last element to the top

    // base case: empty heap
    if (this.isEmpty()) { return; }

    let lastElement = this._heap[this._heap.length - 1];
    this._heap.pop();
    this._heap[0] = lastElement;

    // Recursively swap down the new top to its position
    this._swapDown(0);
    return lastElement;
  }
}

// Initialize a max-heap. Compare directly the elements.
let maxHeap = new MaxHeap( (element) => {element} );
