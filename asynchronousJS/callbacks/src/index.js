function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(6,8, sum));

setTimeout(() => {
    console.log('Hello Javascript');
}, 5000);

function grettin(name){
    console.log(`Hello ${name}`);
}

setTimeout(grettin, 5000, 'Pavel');