const fnAysnc =  () => {
    return new Promise((resolve, reject) =>{
        (true) 
        ? setTimeout(() => resolve('Async!!'), 5000)
        : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAysnc();
    console.log(something);
    console.log('Hello');
}

setTimeout(() => {
    console.log('2 seconds')
}, 2000);
console.log('Before');
anotherFn();
console.log('After');