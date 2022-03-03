//Crear todas las clases necesarias en Platzi
class Class {
    constructor({
        name,
        duration,
        comentaries = [],
        teacher,
    }){
        this.name = name;
        this.duration = duration;
        this.comentaries = comentaries;
        this.teacher = teacher;
    }
}

const frontendClass = new Class({
    name:"Que aprenderas sobre HTML",
    comentaries: [
        "Que curso tan genial",
        "El mejor",
    ],
    teacher: "Diego de Granda",
    duration: 5.2,
});

const backendClass = new Class({
    name:"Que es el backend",
    comentaries: [
        "Que curso tan genial",
        "El mejor",
        "El mejor profesor",
    ],
    teacher: "Diego de Granda",
    duration: 3.55,
});

const fullstackClass = new Class({
    name:"Que es Fullstack",
    comentaries: [
        "Que buen profesor",
        "Fullstack es muy interesante",
    ],
    teacher: "Diego de Granda",
    duration: 3.55,
});

const htmlSemantico = new Class({
    name:"¿Que es HTML semantico?",
    comentaries: [
        "Que buena maestra",
        "Wow HTML",
    ],
    teacher: "Estefany Aguilar",
    duration: 6.10,
});

const especificad = new Class({
    name:"Cascada y especificidad con CSS",
    comentaries: [
        "Que buen tema",
        "aaaaa"
    ],
    teacher: "Estefany Aguilar",
    duration: 6.10,
});
// console.log(backendClass);

class Course {
    constructor(
        {
            name,
            classes = [],
        }
    ){
        this.name = name;
        this.classes = classes;
    }
}

const cursoDefinitvoHTML = new Course({
        name: 'Curso definitivo de HTML y CSS',
        classes:[
            frontendClass,
            backendClass,
            fullstackClass
        ],
    }
);

const cursoFrontDevoloper = new Course({
    name: "Curso de Frontend Developer",
    curses: [
        htmlSemantico,
        especificad,
    ],
});


console.log(cursoDefinitvoHTML);

class LearningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
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




const desarrolloWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    career: "Desarrollo e Ingeneria",
    curses: [
        cursoDefinitvoHTML,
        cursoFrontDevoloper,
    ],
});

// const diseñoGrafico = new LearningPaths({
//     name: "Escuela de diseño grafico",
//     career: "Diseño y UX",
//     curses: [
//         "Cursos de Illustrator",
//         "Curso de Dibujo de retrato",
//         "Curso de arte para personajes 2D"
//     ],
// });

// const marketing = new LearningPaths({
//     name: "Escuela de marketing digital",
//     career: "Marketing",
//     curses: [
//         "Curso de introduccion al marketing digital",
//         "Curso de community Manager",
//         "Curso de marca personal",
//     ]
// });

const carlos = new Student({
    name: "Carlos",
    username: "criptobro",
    email: "criptobro22@gmail.com",
    instagram: "elCriptobro",
    learningPaths: [
        desarrolloWeb,
    ],
});

console.log(carlos);

// RETO: hacer una clase de learning paths y añadirla 
//Reto: crear todas las abstracciones necesarias a nuestro programa