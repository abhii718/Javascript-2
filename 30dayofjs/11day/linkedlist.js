class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) temp = temp.next;
      temp.next = newNode;
    }
  }

  display() {
    let temp = this.head;
    while (temp) {
    console.log(temp.value);
      temp = temp.next;
    }
  }
}

// let list = new LinkedList();
// list.insert(10);
// list.insert(20);
// list.display(); // 10 20
module.exports = LinkedList;