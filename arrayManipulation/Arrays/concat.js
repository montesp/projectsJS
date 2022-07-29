const elements=[1,1,2,2];
const othersElements=[3,3,4,4];


// const newArray = elements; Memory reference is copied
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for: ', newArray);

const concatArray = elements.concat(othersElements); //Inmutable
const concatArray2 = [...elements, ...concatArray];
console.log('concat', concatArray);
console.log('spring operation', concatArray2);

elements.push(...othersElements); // Mutable
console.log('elements', elements);