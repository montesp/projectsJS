//replace all
const text  = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedText = text.replace("JavaScript", "Python");
console.log(replacedText);

const replacedTex2 = text.replaceAll("JavaScript", "Python");
console.log(replacedTex2);

//private methods
class Message {
    #show(val){
        console.log(val);
    };
    // get #add(val){
        
    // }
}

const message =  new Message();
message.show("Hola");

//promise any 
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// class AnyClass {
//     constructor(element){
//         this.ref = new WeakRef(element);
//     }

// }

