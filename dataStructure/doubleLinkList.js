class Node {
  constructor(value){
    this.value = value,
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    //insert
    if(index <= 0 && index >= this.length ) return "El index es incorrecto, ingresa un index nuevo";
    if(index === this.length - 1 ) {
      this.append(value);
      this.length++;
      return this;
    }
    if(index === 0) {
      this.prepend(value);
      this.length++;
      return this;
    }

    const newNode = new Node(value);
    const prevNode =  this._getIndex(index - 1);
    const nextNode = prevNode.next;

    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.length++;


    return this;
  }

  _getIndex(index){
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index){
    // remove
  }
}

const myDoublyList = new MyDoublyLinkedList(1);