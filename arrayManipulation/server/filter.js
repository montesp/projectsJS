const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];

    if(item.length >= 6){
        newArray.push(item)
    }
}
// console.log('new3',  newArray);
// console.log('original', words);

const newWords = words.filter(item => item.length >= 6);
console.log('new Words',  newWords);
console.log('original', words);


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
    {
        customerName: "Samuel",
        total: 540,
        delivered: false,
      },
];

// const filterOrders = orders.filter(item => item.delivered && item.total >= 140) ;
// console.log('filter', filterOrders );

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Sa'))
