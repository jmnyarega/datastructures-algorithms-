/**
 *A linked list is an ordered collection of data elements.
 *A data element can be represented as a node in a linked list.
 *Each node consists of two parts: data & pointer to the next node.
 *
 * This is referred to as singly-linked because each item has only a one-way link to its next item.
 * Each link in the chain is called a node. Each node is just a plain old Javascript object
 *
 *const list = { head: { value: 12 next: { value: 99 next: { value: 37 next: null } } } };
 *
 * A linked list, as you can see, is nothing more than objects nested deeply inside of each other.
 * The next property of each node object in the list is a reference to the next node object.
 *
* */

/**
 * [LinkedList data structure]
 * Good stuff
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * [addToHead add new data to the head of the node ]
   * @param {Object} data newNode
   */
  addToHead(data) {
    const newNode = { data };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * [deleteFirstNode remove firts node on a singly linked list]
   * @return {number} value of the first node
   * Cool stuff, trust me
   */
  deleteFirstNode() {
    if (!this.length) return;
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }

  /**
   * [findItem searches new item from in the node]
   * @param {number} data search data blah blah blah
   */
  findItem(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  /**
   * [removeItem just removes the node value passed as an argument]
   * @param  {data} data damn it, this is just my awesome number variable
   * @return {Object}      returns new Node (Dont be afraid child, a node is just
   * an Object with next and data property on it. just saying)
   * @return {node} node object
   */
  removeItem(data) {
    if (!this.length) return;
    if (this.head.data === data) {
      this.deleteFirstNode();
      return this;
    }
    let prev = this.head;
    let currentNode = prev.next;
    while (currentNode) {
      if (currentNode.data === data) break;
      prev = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) return;
    prev.next = currentNode.next;
    this.length--;
    return this;
  }

  /**
   *  deleteList delete the whole list :(
   * @return {undefined} come on, the function just deletes the list.
   */
  deleteList() {
    this.head = null;
    this.length = 0;
  }
}

// driver
const list = new LinkedList();
list.addToHead(100);
list.addToHead(200);
list.addToHead(300);
list.addToHead(400);
list.deleteFirstNode();
list.findItem(200); // 200
list.removeItem(200);
list; // 100, 300
list.deleteList();
list; // null
