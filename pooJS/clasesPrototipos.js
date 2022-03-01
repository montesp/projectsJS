class LearningPaths {
    constructor({
        
    })
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

const carlos = new Student({
    name: "Carlos",
    username: "criptobro",
    email: "criptobro22@gmail.com",
    instagram: "elCriptobro",

});

console.log(carlos);

// RETO: hacer una clase de learning paths y añadirla 