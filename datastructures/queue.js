class Queue {
  /**
  * constructor
  * @member {Queue}
  */
  constructor() {
    this.items = [];
  }

  /**
  * enqueue -> add element to the queue
  * @param {element} num element added
  * @member {Queue}
  */
  enqueue(element) {
    this.items.push(element);
  }

  /**
  * dequeue -> removes element from the queue
  * @member {dequeue}
  */
  dequeue() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.shift();
  }

  /**
  * peek -> returns the element at the top of the queue
  * @member {Queue}
  * @return {element} top element
  */
  peek() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    }
    return this.items[0];
  }

  /**
  * isEmpty -> checks whether the queue is empty
  * @member {Queue}
  * @return {element}
  */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
  * printQueue -> prints the current queue
  * @member {Queue}
  * @return {Queue}
  */
  printQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i += 1) {
      str += `${this.items[i]} `;
    }
    return str;
  }
}

module.exports = Queue;
