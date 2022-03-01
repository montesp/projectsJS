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