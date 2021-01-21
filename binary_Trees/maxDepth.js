function maxDepth(root) {
  if (root === null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (this.root === null) this.root = node;
    else {
      const queue = [this.root];
      while (queue.length > 0) {
        const out = queue.pop();
        if (!out.left) {
          out.left = node;
          break;
        } else if (!out.right) {
          out.right = node;
          break;
        }
        queue.unshift(out.left);
        queue.unshift(out.right);
      }
    }
  }
}

const bt = new BinaryTree();
bt.insert(10);
bt.insert(6);
bt.insert(3);
bt.insert(8);
bt.insert(15);
bt.insert(20);
bt.insert(4);
bt.insert(18);

console.log(bt.root);
console.log(maxDepth(bt.root));
