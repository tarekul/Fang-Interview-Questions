class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
    this.child = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
const node12 = new Node(12);
const node13 = new Node(13);

node1.next = node2;
node2.prev = node1;
node2.child = node7;
node7.next = node8;
node8.prev = node7;
node8.child = node10;
node10.next = node11;
node11.prev = node10;
node8.next = node9;
node9.prev = node8;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;
node5.child = node12;
node12.next = node13;
node13.prev = node12;
node5.next = node6;
node6.prev = node5;

function flatten(head) {
  let currentNode = head;
  let prevNode = null;
  while (currentNode) {
    if (currentNode.child === null) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    } else {
      const nextNode = currentNode.next;
      let childNode = currentNode.child;
      currentNode.next = childNode;
      childNode.prev = currentNode;
      while (childNode.next) {
        childNode = childNode.next;
      }

      if (nextNode) {
        childNode.next = nextNode;
        nextNode.prev = childNode;
      }

      currentNode.child = null;
      currentNode = currentNode.next;
    }
  }

  return head;
}

function traverse(head) {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
}

traverse(flatten(node1));
