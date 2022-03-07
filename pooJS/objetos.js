const pavel = {
    name:'pavel',
    age: 17,
    approvedCourses: ["Curso1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

// console.log(Object.keys(pavel));
// console.log(Object.getOwnPropertyNames(pavel));
// console.log(Object.entries(pavel));


// Object.defineProperty(pavel, "pruebaNASA", {
//     value: "Extraterrestres",
//     writable: false,
//     enumerable: false,
//     configurable: false,
// });

Object.seal(pavel) // Hace que todas las propiedades configurable sea false  (Se eliminen)
Object.freeze(pavel) // Hace que todas las propiedades writable sea false  (Se cambie los valores)


console.log(Object.getOwnPropertyDescriptors(pavel));