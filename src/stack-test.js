import {Stack} from './stack';

let stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(5);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek()); // stack empty, return null
console.log(stack.pop()); // stack empty, return null

// Make sure when the object that peek returns is immutable
let obj = {a: 1, b: 2};
stack.push(obj);
let copy = stack.peek();
console.log(copy);
console.log(obj);
copy.a = 0;
console.log(copy);
console.log(obj);
