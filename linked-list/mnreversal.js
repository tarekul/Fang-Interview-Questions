class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

function mnreversal(head, m, n) {
  if (head === null || head.next === null) return head;

  let position = 1;
  let currentNode = head;
  let start = head;
  let tail = null;

  while (position < m) {
    start = currentNode;
    currentNode = currentNode.next;
    position++;
  }

  tail = currentNode;

  let listSoFar = null;
  while (position < n + 1) {
    const nextNode = currentNode.next;
    currentNode.next = listSoFar;
    listSoFar = currentNode;
    currentNode = nextNode;
    position++;
  }

  start.next = listSoFar;
  tail.next = currentNode;

  if (m === 1) head = listSoFar;
  return head;
  // traverse(head);
}

function traverse(head) {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
}

mnreversal(node1, 2, 3);
