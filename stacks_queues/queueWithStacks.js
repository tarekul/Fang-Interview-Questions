class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    const remove = this.stack.pop();
    return remove;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

class QueueWithStack {
  constructor() {
    this.in = [];
    this.out = [];
  }
  enqueue(val) {
    this.in.push(val);
  }
  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }
  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

const q = new QueueWithStack();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.peek());
