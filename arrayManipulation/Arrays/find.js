const numbers = [1, 30, 39, 29,10,13];

let response = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    if (element === 30) {
        response = element;
        break;
    }
}

console.log(response);

const response2 = numbers.find(item => item === 30);
console.log(response2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const responseFood = products.find(item => item.id === '🥞');
console.log(responseFood);
const responseFoodIndex = products.findIndex(item => item.id === '🥞');
console.log(responseFoodIndex);

function solution(numbers) {
  return numbers.every(number => number % 2 === 0);
};

 console.log(solution([2, 4, 6, 8, 10]));
 console.log(solution([1, 3, 5, 7, 10, 11]));
 console.log(solution([1, 3, 5]));