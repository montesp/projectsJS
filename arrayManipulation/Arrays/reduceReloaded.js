// const items = [1, 3, 2, 3, 2 ,3 ,3 , 2 ,4 ,5 ,3];

// const countItems = items.reduce((obj, item) => {
//     console.log(obj[item])
//     if(!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item] = obj[item] + 1;
//     }

//     return obj;
// }, {});

// console.log(countItems);

// const data = [
//     {
//       name: "Nicolas",
//       level: "low",
//     },
//     {
//       name: "Andrea",
//       level: "medium",
//     },
//     {
//       name: "Zulema",
//       level: "hight",
//     },
//     {
//       name: "Santiago",
//       level: "low",
//     },
//     {
//       name: "Valentina",
//       level: "medium",
//     },
//     {
//       name: "Lucia",
//       level: "hight",
//     },
// ];

// const gameData = data
// .map(item => item.level)
// .reduce((obj, item) => {
//     if(!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item] = obj[item] + 1;
//     }

//     return obj;
// }, {});

// console.log(gameData)

const numbers = [1,4,5,10.7,4,6,7,3,8,9,10,10,2,3,4,5,6,7,8,4,5,9,3,1,10,2,3,1,4,6,3,6,4,6,7,4,3,5,3];
const countNumbers = numbers.reduce((obj, value) => {
    if(value >= 1 && value <= 5){
        obj["1-5"] += 1;
    } else if (value >= 6 && value <= 8) {
        obj["6-8"] += 1;
    } else {
        obj["9-10"] += 1;
    }

    return obj;
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
});

console.log(countNumbers)
