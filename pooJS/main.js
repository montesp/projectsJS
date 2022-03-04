import { PlatziClass } from "./ecma6.mjs";

//objetos literales
const pavel = {
    name:'Pavel',
    age: 20,
    cursosAprobados: [
        "Curso de CSS",
        "Curso de HTML",
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
    
};  // objeto literal

// Hacer que pavel apruebe otro curso
// pavel.cursosAprobados.push("Curso de JS");
pavel.aprobarCurso("Curso de React");
console.log(pavel.cursosAprobados);

// objetos prototipo
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCurso){
    //     this,cursosAprobados.push(nuevoCurso);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const yael = new Student("Yael", 21 , ["Curso de programacion", "Curso de videojuegos"]);
// console.log(yael);

//clases
class Student2 {
    // constructor(name, age, cursosAprobados){
    //     this.name = name;
    //     this.age = age;
    //     this.cursosAprobados = cursosAprobados;
    // }

    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }
        


    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
 
   }
}

const carlos = new Student2({
    name: "Carlos",
    email: "criptobro22@gmail.com",
    age: 20,
    cursosAprobados: ["Curso de python", "Curso de django"],
});


// const carlos = new Student2(
//     "Carlos",
//     20,
//     ["Curso de python", "Curso de django"],
// );


carlos.aprobarCurso("Curso de flask");
console.log(carlos);