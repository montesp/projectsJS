const button = document.getElementById('btn');

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

//Big int
const aBigNumber = 90071992254740991n;
const anotherBigNumber = BigInt(90071992254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

//Global this
console.log(window);
console.log(globalThis);

//null
const foo = 'a' ?? 'default string';
console.log(foo);

//optional sheining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("email");
} else {
    console.log("Fail")
}