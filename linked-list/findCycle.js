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
node7.next = node3;


function findCycle(head) {
  if(head === null) return null
  let hare = head, tortoise = head;

  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;

    if (hare === null || hare.next === null) return null;

    hare = hare.next;

    if(hare === tortoise) break;
  }

  let p1 = head, p2 = tortoise;
  while(p1 !== p2){
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1
}

console.log(findCycle(node1));