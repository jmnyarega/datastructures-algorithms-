class Tree {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}


// driver

/**
const root = new DFTraversal(1);
root.left = new DFTraversal(2);
root.right = new DFTraversal(3);
root.left.left = new DFTraversal(4);
root.left.right = new DFTraversal(5);
*/

module.exports = Tree;
