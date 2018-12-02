class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  /**
  * enqueue -> adds new element to the PQ
  * @param {priority} priority is like index ;(
  * @param {key} key is like value
  * @member {PriorityQueue}
  */
  enqueue(priority, key) {
    this.nodes.push({ key, priority });
    this.sort();
  }

  /**
  * dequeue -> removes an element to the PQ
  * @member {PriorityQueue}
  */
  dequeue() {
    return this.nodes.shift().key;
  }

  /**
  * front -> gets the top most element of the PQ
  * @member {PriorityQueue}
  */
  front() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[0];
  }

  /**
  * rear -> returns the last element in the PQ
  * @member {PriorityQueue}
  */
  rear() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this.items[this.items.length - 1];
  }

  /**
  * sorts -> sorts the PQ using priority property
  * @member {PriorityQueue}
  */
  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }

  /**
  * isEmpty -> checks if the PQ is empty
  * @member {PriorityQueue}
  * @return {boolean} isEmpty
  */
  isEmpty() {
    return !this.nodes.length;
  }
}

module.exports = PriorityQueue;
