
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
// console.log('original', orders)

// const newOrders = orders.map(item => item.total)
// console.log('new',  newOrders)

// const newOrders2 = orders.map(item => {
//     item.tax = .19;
//     return item; 
// })

// console.log('original', orders)
// console.log('new2',  newOrders2)

const newOrders3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
})

console.log('new3',  newOrders3)
console.log('original', orders)
