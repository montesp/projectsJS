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
const obj1 = {
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e",
    },
    editA(){
        this.a = "AAAAAAAAAAAA";
    },
}

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);



// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);

