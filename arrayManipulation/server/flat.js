const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const flatArrayFunction = (array, newArray = []) => {
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])){
            flatArrayFunction(array[i], newArray);
        } else {
            newArray.push(array[i])
        }
    }
    return newArray;
}

const flatArray = flatArrayFunction(matriz);
console.log('flat for', flatArray );

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

// console.log('for: ', newArray);

const flatArrays = matriz.flat(3)
console.log('flat: ', flatArras);

