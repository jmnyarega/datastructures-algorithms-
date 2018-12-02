const Tree = require('./tree');

/**
  * Recursive javascript program for level order traversal of Binary Tree
 */
class BFTraversal extends Tree {
  /**
  * print level order traversal of tree
  * @param {root} root root node
  * @return {null}
  */
  printLevelOrder(root) {
    const treeHeight = this.height(root);
    const range = [...Array(treeHeight).keys()];
    for (let element = 0; element <= range.length; element += 1) {
      this.printGivenLevel(root, element);
    }
  }

  /**
  * Print nodes at a given level
  * @param {tree} tree the node
  * @param {level} level level of the node tree
  * @return {null}
  */
  printGivenLevel(tree, level) {
    if (!tree) return;
    if (level === 1) {
      console.log(tree.val);
    } else if (level > 1) {
      this.printGivenLevel(tree.left, level - 1);
      this.printGivenLevel(tree.right, level - 1);
    }
  }

  /**
  * Compute the height of a tree--the number of nodes
  * along the longest path from the root node down to
  * the farthest leaf node
  * @param {node} node - Object
  * @return {height} height of the tree.
  */
  height(tree) {
    if (!tree) return 0;
    const lheight = this.height(tree.left);
    const rheight = this.height(tree.right);
    if (lheight > rheight) {
      return lheight + 1;
    }
    return rheight + 1;
  }
}

// driver
const root = new BFTraversal(1);
root.left = new BFTraversal(2);
root.right = new BFTraversal(3);
root.left.left = new BFTraversal(4);
root.left.right = new BFTraversal(5);

console.log(root.printLevelOrder(root));
