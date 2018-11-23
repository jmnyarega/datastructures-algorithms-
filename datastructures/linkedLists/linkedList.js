class LinkedList {
  constructor() {
  this.head = null
  this.tail = null
  }

  addToHead(value) {
    const newNode = new Node(value, this.head, null)
    if(this.head) {
      this.head.prev = newNode
    } else {
      this.tail = newNode
    }
    this.head = newNode
  }
}


class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}


const list = new LinkedList()
list.addToHead(100)
list.addToHead(200)
console.log(list)
