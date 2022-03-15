function ask(name, age, country){
    var name = name || "pavel";
    var age = age || 21;
    var country = country || "MX";
    console.log(name, age, country);
}

ask();

//ecmascript6 = es6 
function askData (name = 'pavel',age = 21, country = 'mx'){
    console.log(name, age, country);
}

askData();
askData('Oscar', 32, 'co');

// template literals
let hello = "Hello";
let world = "World";
// let epicPhrase = hello + '' + world
// console.log(epicPhrase);
//es6
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

let lorem = "Para trabajar basta estar convencido de una cosa: \n"
+ "que trabajar es menos aburrido que divertirse"

//es6
let lorem2 = `Para trabajar basta estar convencido de una cosa: 
que trabajar es menos aburrido que divertirse (Charles Baudelaire)
`
console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'pavel',
    'age': 21,
    'country': 'MX',
};

console.log(person.name, person.age);
//es6
let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['Pavel', 'Yael', 'Carlos'];
let team2 = ['Karla', 'Alfredo', 'Nilu'];

let devs = ['David', ...team1, ...team2];

console.log(devs);

{
    var global = "Global Var";

}
// es6
{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(global);
// console.log(globalLet);

let nombre = 'Pavel';
let edad = 21;
//es5
// obj = {name: nombre, age:edad};
//es6
obj = {nombre, edad};
console.log(obj);

//Arrow functions
const names = [
    {name: 'pavel', age: 21},
    {name: 'Yael', age: 19},
];

let listOfNames = names.map(function(item){
    console.log(item.name)
});

let listOfNames2 = names.map(item => console.log(item.name));

// const listOfNames3 = (name, age, country) => {
//     ...
// };

// const listOfNames4 = name => {
//     ...
// };

const square = num => num * num;

//promises
const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('hey');
        }else {
            reject('ups');
        }
    });
};

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    static sumar(valueA , valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

// const calc = new Calculator();
const suma = Calculator.sumar(4, 7);
console.log(suma);

//modulos
import { hello } from './module';
hello();

//generators
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }    
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);