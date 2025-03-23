const Stack = require('../stack'); // Ensure the path is correct

describe('Stack Data Structure', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    // ✅ Test isEmpty() Method
    test('should return true for an empty stack', () => {
        expect(stack.isEmpty()).toBe(true);
    });

    test('should return false after pushing an element', () => {
        stack.push(10);
        expect(stack.isEmpty()).toBe(false);
    });

    test('should return true after popping the only element', () => {
        stack.push(10);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    // ✅ Test push() Method
    test('should add elements to the stack', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.peek()).toBe(20);
    });

    // ✅ Test pop() Method
    test('should remove and return the last element', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.pop()).toBe(20);
        expect(stack.pop()).toBe(10);
        expect(stack.isEmpty()).toBe(true);
    });

    test('should return undefined when popping an empty stack', () => {
        expect(stack.pop()).toBeUndefined();
    });

    // ✅ Test peek() Method
    test('should return the top element without removing it', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.peek()).toBe(20);
        expect(stack.pop()).toBe(20); // Ensure 20 is still the top
        expect(stack.peek()).toBe(10);
    });

    test('should return undefined when peeking an empty stack', () => {
        expect(stack.peek()).toBeUndefined();
    });
});
