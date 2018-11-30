const Node = require('./node');

/**
 * A doubly-linked/circular list is the same as a singly-linked list,
 * except that every node has both a next pointer pointing forwards
 *and a pre (previous) pointer pointing backwards
 * Just add prev to the { } node Objects
 * const list = { head: { value: 12, prev: null, next: { value: 99, prev: null, next: { value: 37, prev: null, next: null } } } };
 */


/**
 * [DoublyLinkedList (can you believe it, the world is just round), Just a DS]
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * [addToHead adds new node at the beginning of the linked list]
   * @param {number} data add this guy to the list
  */
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

  /**
   * [addToTail adds new node at the end of the linked list]
   * @param {number} data add this guy to the list
  */
  addToTail(data) {
    const node = new Node(data);
    if (this.length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * [findItemFromHead searches new item from in the node]
   * @param {number} data search data blah blah blah
  */
  findItemFromHead(data) {
    let currentHead = this.head;
    while (currentHead.prev) {
      if (currentHead.data === data) {
        return currentHead;
      }
      currentHead = currentHead.prev;
    }
    return -1;
  }

  /**
   * [findItemFromTail searches new item from in the node]
   * @param {number} data search data blah blah blah
  */
  findItemFromTail(data) {
    let currentTail = this.tail;
    while (currentTail.prev) {
      if (currentTail.data === data) {
        return currentTail;
      }
      currentTail = currentTail.prev;
    }
    return -1;
  }


  /**
   * [deleteFirstNode deletes first node from the linkedList]
  */
  deleteFirstNode() {
    const { data, next } = this.head;
    if (!this.length) return;
    const nodeData = data;
    this.head = next;
    this.length--;
    return nodeData;
  }
}

const list = new DoublyLinkedList();
list.addToHead('head 1');
list.addToHead('head 2');
list.addToHead('head 3');
list.addToTail('tail 1');
list.addToTail('tail 2');
list.addToTail('tail 3');
list.findItemFromTail('tail 1'); // -1

list.findItemFromHead('head 3');

list.deleteFirstNode();
