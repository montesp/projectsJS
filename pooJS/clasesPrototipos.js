//Crear todas las clases necesarias en Platzi
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.like + " likes");
        console.log(this.content);
    }
}


class Class {
    constructor({
        name,
        duration,
        comentaries = [],
        teacher,
    }){
        this._name = name;
        this._duration = duration;
        this.comentaries = comentaries;
        this.teacher = teacher;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get duration(){
        return this._duration;
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
            isFree = false,
            lang = "spaninsh"
        }
    ){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(newName === "Curso Malito de programacion Basica"){
            console.error("Web... no");
        }else{
            this._name = newName;
        }
    }
    // changeName(newName){
    //     this._name = newName;
    // }
}



const cursoDefinitvoHTML = new Course({
        name: 'Curso definitivo de HTML y CSS',
        classes:[
            frontendClass,
            backendClass,
            fullstackClass
        ],
        isFree: true,
    }
);

const cursoJS = new Course({
    name: 'Curso definitivo de HTML y CSS',
    classes:[
            frontendClass,
            backendClass,
            fullstackClass
        ],
    lang: "english",
});

// cursoDefinitvoHTML.name
// cursoDefinitvoHTML.name = "cambio"

const cursoFrontDevoloper = new Course({
    name: "Curso de Frontend Developer",
    curses: [
        htmlSemantico,
        especificad,
    ],
    lang: "english",
});


console.log(cursoDefinitvoHTML);

class LearningPaths {
    constructor({
        name,
        courses = [],
    }) {
        this._name = name;
        this.courses = courses;
    }

    get name(){
        return this._name;
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,

        });

        comment.publicar()
    }
}

class FreeStudent  extends Student {
    constructor(props){
        super(props);

    }

    approveCourse(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);

        } else {
            console.warn("Lo sentimos " + this.name + " solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props);

    }

    approveCourse(newCourse) {
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);

        } else {
            console.warn("Lo sentimos " + this.name + " no puedes tomar cursos en ingles")
        }
    }
}

class ExpertStudent extends Student {
    constructor(props){
        super(props);

    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);

    }
}

class TeacherStudent extends Student {
    constructor(props){
        super(props);

    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);

    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });

        comment.publicar()
    }

}






const desarrolloWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    career: "Desarrollo e Ingeneria",
    curses: [
        cursoDefinitvoHTML,
        cursoFrontDevoloper,
    ],
});

const carlos = new ExpertStudent({
    name: "Carlos",
    username: "criptobro",
    email: "criptobro22@gmail.com",
    instagram: "elCriptobro",
    learningPaths: [
        desarrolloWeb,
    ],
});

const yael = new BasicStudent({
    name: "Yael",
    username: "yaelhm",
    email: "yael54@gmail.com",
    instagram: "yh",
    learningPaths: [
        desarrolloWeb,
    ],
});

const freddy = new TeacherStudent({
    name: "Freddy",
    username: "freddier",
    email: "fredito@gmail.com",
    instagram: "freddier",
});

// carlos.approveCourse(cursoJS);
// yael.approveCourse(cursoJS);

console.log(carlos);

// RETO: hacer una clase de learning paths y añadirla 
//Reto: crear todas las abstracciones necesarias a nuestro programa