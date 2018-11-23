class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.val)
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if(root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.val)
    }
  }

  preOrder(root) {
    if(root) {
      console.log(root.val)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }
}

// driver

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

// preOder
console.log(`${root.preOrder(root)} Pre Order`)

// postOrder
console.log(`${root.postOrder(root)} Post Order`)

// inOrder
console.log(`${root.inOrder(root)} In Order`)
