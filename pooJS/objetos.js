// const pavel = {
//     name:'pavel',
//     age: 17,
//     approvedCourses: ["Curso1"],
//     addCourse(newCourse) {
//         this.approvedCourses.push(newCourse);
//     }
// }

// // console.log(Object.keys(pavel));
// // console.log(Object.getOwnPropertyNames(pavel));
// // console.log(Object.entries(pavel));


// // Object.defineProperty(pavel, "pruebaNASA", {
// //     value: "Extraterrestres",
// //     writable: false,
// //     enumerable: false,
// //     configurable: false,
// // });

// Object.seal(pavel) // Hace que todas las propiedades configurable sea false  (Se eliminen)
// Object.freeze(pavel) // Hace que todas las propiedades writable sea false  (Se cambie los valores)


// console.log(Object.getOwnPropertyDescriptors(pavel));
//Shallow copy
// const obj1 = {
//     a:"a",
//     b:"b",
//     c:{
//         d:"d",
//         e:"e",
//     },
//     editA(){
//         this.a = "AAAAAAAAAAAA";
//     },
// }

// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);



// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);

// function recursiva(){
//     if(/* validacion */){
//         llamados recursivos
//     }else{
//         llamados normales, sin recursividad
//     }
// }

// const numeritos = [0,1,2,3,4,5,6,6,5,7,3,5,6,3];
// let numerito = 0;

// for(let index = 0; index < numeritos.length; index++){
//     numerito = numeritos[index];
//     console.log({index, numerito});

// }

const numeritos = [0,1,2,3,4,5,6,6,5,7,3,5,6,3];
// let numerito = 0;
// let index = 0;

// function recursiva(lista, index){
//     let number = lista[index];

//     if(index  < lista.length){
//         console.log({index, number})
//         return recursiva(lista, index+1);
//     }

// }
// console.log()
// console.log(recursiva(numeritos, index));

//Mejor solucion

function recursivo(numbersArray){
    if(numbersArray != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursivo(numbersArray)
    }
}

recursivo(numeritos)