//  Array conventional
// const array = ["Pavel", "Maria", "Yael"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  // pop(){
  //   if(this.length !== 0){
  //     const temporal = {};
  //     for (let index = 0; index < this.length; index++) {
  //       if(index !== this.length - 1){
  //         temporal[index] = this.data[index]
  //       }
  //     }
  //     this.data = {
  //       ...temporal,
  //     };
  //     this.length--;
  //   } else {
  //     console.log("Dont have any value")
  //   }
  //   return this.data;
  // }
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--;
    return lastItem;
  }
  delete(index){
    const deletedItem = this.data[index];
    this.shiftIndex(index);
    return deletedItem;
  }
  private shiftIndex(index){
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  // Add an element in the beggining
  unshift(){

  }
  // Delete an element in the beggining
  shift(){
    
  }
}

const array = new MyArray();
