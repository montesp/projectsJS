const helloWorold = () => {
    const hello = 'Hello world';
    console.log(hello);
}

helloWorold();
console.log(hello);

var scope = "I'm global";

const functionScope = () => {
    var scope = "I am just a local";
    const func = () => {
        return scope
    }
    console.log(func())
}

functionScope();
console.log(scope);