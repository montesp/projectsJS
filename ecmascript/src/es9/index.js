const obj = {
    name: 'pavel',
    age: 21, 
    country: 'MX',
    libros: {
        libro1: 'Narnia Chrnicles',
        libro2: 'The analyst',
    },
};

let { country, ...all} = obj;
console.log(country, all);

const obj1 = {
    name: 'pavel',
    age: 21, 
};

const obj2 = {
    ...obj1,
    country: 'MX',
    libros: {
        libro1: 'Narnia Chrnicles',
        libro2: 'The analyst',
    },
};
console.log(obj1);
console.log(obj2);


//promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Hello World') , 5000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const mouth = match[2]
const day = match[3]

console.log(year, mouth, day);