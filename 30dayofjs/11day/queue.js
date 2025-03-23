class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) { this.items.push(element); }
    dequeue() { return this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
  }
  
//   let queue = new Queue();
//   queue.enqueue(10);
//   queue.enqueue(20);
//   console.log(queue.dequeue()); // 10
//   console.log(queue.front());   // 20
  module.exports = Queue;
  