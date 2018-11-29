const Node = require('./node');

/**
 * A doubly-linked/circular list is the same as a singly-linked list,
 * except that every node has both a next pointer pointing forwards and a pre (previous) pointer pointing backwards
 * Just add prev to the { } node Object
 * const list = { head: { value: 12, prev: null, next: { value: 99, prev: null, next: { value: 37, prev: null, next: null } } } };
 */


/**
 * [DoublyLinkedList (can you believe it, the world is just round), Just a DS]
 */
class DoublyLinkedList {
  constructor() {
    // pointer to first item
    this.head = null;
    // pointer to the last item
    this.tail = null;
    // length of the list
    this.length = 0;
  }

  addToHead(data) {
    const node = new Node(data);
    if (this.length) {
      this.head.next = node;
      node.prev = this.head;
      this.head = node;
    } else {
      this.tail = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  addToTail(data) {
    const node = new Node(data)
    if(this.length) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
    this.length++
    return this
  }

  deleteFirstNode() {
    if (!this.length) return;
    const data = this.head.data
    this.head = this.head.next
    this.length--
    return data
  }

}

const list = new DoublyLinkedList();
list.addToHead('cow');
list.addToHead('goat');
list.addToHead('sheep');

list.addToTail("josiahasdas")

list.deleteFirstNode()
console.log(list);
