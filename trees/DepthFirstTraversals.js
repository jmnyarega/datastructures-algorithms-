const Tree = require('./tree');

class DFTraversal extends Tree {
  /**
  * Inorder Traversal (Left-Root-Right)
  * @param {root} root node
  */
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.val);
      this.inOrder(root.right);
    }
  }

  /**
  * Preorder Traversal (Root-Left-Right)
  * @param {root} root node
  */
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.val);
    }
  }

  /**
  * Postorder Traversal (Left-Right-Root)
  * @param {root} root node
  */
  preOrder(root) {
    if (root) {
      console.log(root.val);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
}

// driver
const root = new DFTraversal(1);
root.left = new DFTraversal(2);
root.right = new DFTraversal(3);
root.left.left = new DFTraversal(4);
root.left.right = new DFTraversal(5);

// preOder
console.log(`${root.preOrder(root)} Pre Order`);

// postOrder
console.log(`${root.postOrder(root)} Post Order`);

// inOrder
console.log(`${root.inOrder(root)} In Order`);
