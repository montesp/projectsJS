const numbers = [1, 30, 39, 29,10,13];

let response = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    if(element >= 40){
        response = false;
    }
}

console.log('for', response);

const response2 = numbers.every(item => item <= 40);
console.log('every', response2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];

const responseAge = team.every(teamate => teamate.age <= 15)
console.log(responseAge);
