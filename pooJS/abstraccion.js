// abstraccion sin prototipo

function isObject(subject){
    return typeof subject == "object";
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray){
        copySubject = []
    } else if(subjectIsObject) {
        copySubject = {}
    } else {
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]); 
        
        if(keyIsObject){
            copySubject[key] = deepCopy(key);
        } else {
            if(subjectIsArray){
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }


    }

    return copySubject
}

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia:{
//         twitter:undefined,
//         instragram: undefined,
//         facebook: undefined,
//     },
// };

function requieredParam(param){
    throw new Error(param + " este parametro es obligatorio");
}

function createStudents({
    name = requieredParam("name"),
    email = requieredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}){
    return{
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        sociaMedia:{
            twitter,
            instagram,
            facebook,
        },
        
    }
};

const pavel = createStudents({
    name: "Pavel",
    age: 18,
    twitter: "montesp",
    email: "montesp@gmail.com",
    approvedCourses: ["HTML", "CSS"],
    learningPaths: ["Escuela de web", "Escuela de frontend"]
});

