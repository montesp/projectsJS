class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  insert(key, value) {
    const address = this.hashMethod(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  search(key){
    const address = this.hashMethod(key);
    // console.log(address);
    const currentBucket = this.data[address];

    if(currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  delete(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    const data = [];
    if (currentBucket){
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] !== key) {
          data.push(currentBucket[i]);
      }
    }
    if(data === []){
      this.data[address] = undefined;
    } else {
      this.data[address] = data;
    }

    return this.data;
    }
  }

  getAllKeys(){
    keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]){
        // console.log(this.data[i]);

        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0])
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(5);