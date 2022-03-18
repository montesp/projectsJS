// let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap( value => [value, value * 2]));

// let hello = '            hello wolrd';
// console.log(hello);
// console.log(hello.trimStart());

let hello = 'hello world        ';
console.log(hello);
console.log(hello.trimEnd());

try {

} catch {
    error
}

let entries = [["name", "pavel"], ["age", 21]];
console.log(Object.fromEntries(entries));

let mySymbol = 'My simbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);