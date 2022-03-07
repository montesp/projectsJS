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

console.log(Object.getOwnPropertyDescriptors(pavel))

Object.defineProperty(pavel, "pruebaNASA", {
    value: "Extraterrestres",
    writable: true,
    enumerable: true,
    configurable: true,
})