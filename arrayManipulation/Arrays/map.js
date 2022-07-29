letters = [ 'a', 'b', 'c'];

const newArray = letters.map(item => item + '++');
// newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];

//     newArray.push(element + '++');
// }

console.log(`Original ${letters}`)
console.log(`NEW ${newArray}`)