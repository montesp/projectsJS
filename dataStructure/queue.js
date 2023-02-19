class Node {
  constructor(value){
    this.value = value,
    this.prev = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value){
    // Add element at the end
    const newNode =  new Node(value);
    if(this.length === 0){
      this.first =  newNode;
      this.last = newNode;
    } else {
      this.last.prev = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    // remove first element
    if(this.length === 1){
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.prev;
    }
    this.length--;
    return this;
  }

  peek(){
    // get first element
    return this.first;
  }
}

const myQueue = new Queue();