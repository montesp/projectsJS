// let singlyLinkedList =  {
//   head: {
//     value: 1,
//     next: {
//       value:2
//       next: {
//         value: 3,
//         next: {
//           value:4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
  constructor(value){
    this.value = value,
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if(index >= this.length){
      return this.append(value)
    }
    const newNode = new Node(value);
    const prevPointer = this._getIndex(index - 1)
    const nextPointer = prevPointer.next;
    prevPointer.next = newNode;
    newNode.next = nextPointer;

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
    if(index < 0 || index >= this.length) {
      return "El index es incorrecto, intenta un nuevo index";
    } else {
      const prevNode = this._getIndex(index-1);
      // const currentNode = this._getIndex(index);
      // prevNode.next = currentNode.next;
      prevNode.next = prevNode.next.next;

      this.length--;
      return this;
    }
  }
}

let myLinkedList = new MySinglyLinkedList(1);