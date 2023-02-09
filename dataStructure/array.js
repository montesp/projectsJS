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
  pop(){
    if(this.length !== 0){
      let temporal = {};
      for (let index = 0; index < this.length; index++) {
        if(index !== this.length - 1){
          // console.log(`Valor${index}`)
          temporal[index] = this.data[index]
        }
      }
      this.data = {
        ...temporal,
      };
      this.length--;
    } else {
      console.log("Dont have any value")
    }
    return this.data;
  }
}

const array = new MyArray();
