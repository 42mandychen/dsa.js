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

export class List {
  constructor() {
    this._listSize = 0;
    this._pos = 0;
    this._data = [];
  }

  get length() {
    return this._getLength();
  }

  _getLength() {
    return this._listSize;
  }

  clear() {
    this._data = [];
    this._listSize = this._pos = 0;
  }

  toString() {
    return '[ ' + this._data.toString() + ' ]';
  }

  getElement() {
    return this._data[this._pos];
  }

  insert(index, element) {
    this._data.splice(index, 0, element);
    this._listSize++;
  }

  append(element) {
    this._data[this._listSize] = element;
    this._listSize++;
  }

  remove(element) {
    let index = this._data.indexOf(element);
    if (index > -1) {
      this._data.splice(index, 1);
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
