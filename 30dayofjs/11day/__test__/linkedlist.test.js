const LinkedList = require('../linkedlist');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('should insert a value into the linked list', () => {
    list.insert(10);
    expect(list.head.value).toBe(10);
    expect(list.head.next).toBeNull();
  });

  test('should insert multiple values into the linked list', () => {
    list.insert(10);
    list.insert(20);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(20);
    expect(list.head.next.next).toBeNull();
  });

  test('should display all values in the linked list', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    list.insert(10);
    list.insert(20);
    list.display();
    expect(consoleSpy).toHaveBeenCalledWith(10);
    expect(consoleSpy).toHaveBeenCalledWith(20);
    consoleSpy.mockRestore();
  });
});