/* List ADT

listSize (property): Number of elements in list
pos (property): Current position in list
length (property): Returns the number of elements in list
clear (function): Clears all elements from list
find (function): Find an element
toString (function): Returns string representation of list
getElement(function): Returns element at current position
insert (function): Inserts new element after existing element
append (function): Adds new element to end of list
remove (function): Removes element from list
front (function): Sets current position to first element of list
end (function): Sets current position to last element of list
prev (function): Moves current position back one element
next (function): Moves current position forward one element
currPos (function): Returns the current position in list
moveTo (function): Moves the current position to specified position */

class List {
  constructor() {
    this._listSize = 0;
    this._pos = 0;
    this._dataStore = [];
  }

  get length() {
    return this._getLength();
  }

  _getLength() {
    return this._listSize;
  }

  clear() {
    this._dataStore = [];
    this._listSize = this._pos = 0;
  }

  toString() {
    return '[ ' + this._dataStore.toString() + ' ]';
  }

  getElement() {
    return this._dataStore[this._pos];
  }

  insert(index, element) {
    this._dataStore.splice(index, 0, element);
    this._listSize++;
  }

  append(element) {
    this._dataStore[this._listSize] = element;
    this._listSize++;
  }

  remove(element) {
    let index = this._dataStore.indexOf(element);
    if (index > -1) {
      this._dataStore.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  front() {
    this._pos = 0;
  }

  end() {
    this._pos = this.listSize - 1;
  }

  prev() {
    if (this._pos > 0) {
      this._pos--;
    }
  }

  next() {
    if (this._pos < this._listSize - 1) {
      this._pos++;
    }
  }

  currPos() {
    return this._pos;
  }

  moveTo(pos) {
    if (pos >= 0 && pos <= this._listSize - 1) {
      this._pos = pos;
    }
  }
}

// Tests
console.log('Initialize an empty list');
let list = new List();
list.append(1);
list.append(2);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log('Insert 0 to position 0');
list.insert(0, 0);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log('Remove element 0');
list.remove(0);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log("Remove element 4, which doesn't exist");
list.remove(4);
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);

console.log('Clear list');
list.clear();
console.log(`list length: ${list.length}`);
console.log(`list elements: ${list.toString()}\n`);
