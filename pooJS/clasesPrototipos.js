class LearningPaths {
    constructor({
        name,
        career,
        curses = [],
    }) {
        this.name = name;
        this.career = career;
        this.curses = curses;
    }

}

class Student {
    constructor({
        name, 
        email, 
        user,
        twitter = undefined, 
        instagram = undefined ,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name; 
        this.email = email; 
        this.user = user;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    };
}



// RETO: hacer una clase de learning paths y añadirla 
const desarrolloWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    career: "Desarrollo e Ingeneria",
    curses: [
        "Cursos definitivo de HTML y CSS",
        "Curso profesional de JS",
        "Curso introduccion a React.js"
    ],
});

const diseñoGrafico = new LearningPaths({
    name: "Escuela de diseño grafico",
    career: "Diseño y UX",
    curses: [
        "Cursos de Illustrator",
        "Curso de Dibujo de retrato",
        "Curso de arte para personajes 2D"
    ],
});

const marketing = new LearningPaths({
    name: "Escuela de marketing digital",
    career: "Marketing",
    curses: [
        "Curso de introduccion al marketing digital",
        "Curso de community Manager",
        "Curso de marca personal",
    ]
});

const carlos = new Student({
    name: "Carlos",
    username: "criptobro",
    email: "criptobro22@gmail.com",
    instagram: "elCriptobro",
    learningPaths: [
        desarrolloWeb,
        marketing,
    ],
});

console.log(carlos);