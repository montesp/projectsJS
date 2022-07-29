const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

function copyNewArray(arrayToCopy){
    return arrayToCopy.map(item => item);
}

const productsCopy = copyNewArray(products);
// const productIndex = productsCopy.findIndex(prod => prod.id === "🥞" );

if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    productsCopy.splice(productIndex, 1);
}

console.log("products Original", products);
console.log("products", productsCopy)
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const productsV2Copy = productsV2.map(item => item);


const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    },
};

const productIndex = productsV2Copy.findIndex(item => item.id === update.id );
productsV2Copy[productIndex] = {
    ...productsV2Copy[productIndex],
    ...update.changes,
};
console.log('Original', productsV2);
console.log('Copia', productsV2Copy);