const Queue = require("../queue"); // Adjust the path if necessary

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should initialize an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.front()).toBeUndefined();
  });

  test("should enqueue elements into the queue", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.front()).toBe(10);
  });

  test("should dequeue elements from the queue", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    expect(queue.front()).toBe(20);
  });

  test("should return undefined when dequeuing from an empty queue", () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  test("should return true for isEmpty when the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(10);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("should return the front element without removing it", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.front()).toBe(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.front()).toBe(20);
  });
});
