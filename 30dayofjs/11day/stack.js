class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length-1 ];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
module.exports = Stack;
// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// // stack.push(300);
// console.log(stack.pop()); // 20
// console.log(stack.peek()); // 10
