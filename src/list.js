/* List ADT

listSize (property): Number of elements in list
pos (property): Current position in list
length (property): Returns the number of elements in list
clear (function): Clears all elements from list
find (function): Find an element
toString (function): Returns string representation of list
insert (function): Inserts new element after existing element
append (function): Adds new element to end of list
remove (function): Removes element from list */

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

  find(element) {
    return this._data.indexOf(element);
  }

  toString() {
    return '[ ' + this._data.toString() + ' ]';
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
      this._listSize--;
      return true;
    } else {
      return false;
    }
  }
}
