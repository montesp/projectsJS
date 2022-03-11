// module pattern

// function isObject(subject){
//     return typeof subject == "object";
// }

// function isArray(subject){
//     return Array.isArray(subject);
// }

// function deepCopy(subject){
//     let copySubject;

//     const subjectIsArray = isArray(subject);
//     const subjectIsObject = isObject(subject);

//     if(subjectIsArray){
//         copySubject = []
//     } else if(subjectIsObject) {
//         copySubject = {}
//     } else {
//         return subject;
//     }

//     for(key in subject){
//         const keyIsObject = isObject(subject[key]); 
        
//         if(keyIsObject){
//             copySubject[key] = deepCopy(key);
//         } else {
//             if(subjectIsArray){
//                 copySubject.push(subject[key]);
//             } else {
//                 copySubject[key] = subject[key];
//             }
//         }


//     }

//     return copySubject
// }

function requieredParam(param){
    throw new Error(param + " este parametro es obligatorio");
}

function createLearningPaths({
    name = requieredParam("name"),
    courses = [],
}){
    const private = {
        "_name": name,
        "_courses": courses
    };
    const public = {
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos un caracter");
            }

        },
        get courses(){
            return private["_courses"];
        },
        

    };

    return public;
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

    const private = {
        "_name": name,
        "_learningPaths": learningPaths,
    };
    const public = {
        age,
        email,
        approvedCourses,
        sociaMedia:{
            twitter,
            instagram,
            facebook,
        },
        get name(){
            return private["_name"];
        },
        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos un caracter");
            }

        },

        get learningPaths(){
            return private["_learningPaths"];
        }, 
        set learningPaths(newLP){

            if(!newLP.name){
                console.warn("Tu Lp no tiene la propiedad name");
                return;
            }

            if(!newLP.courses){
                console.warn("Tu Lp no tiene courses");
                return;
            }

            if(! Object.isArray(newLP.courses)){
                console.warn("Tu lp no es un lista de cursos");
                return
            }
            
            private["_learningPaths"] = newLP;

        },
    }
    return public;
    
};
Object.isArray


// const pavel = createStudents({
//     name: "Pavel",
//     age: 18,
//     twitter: "montesp",
//     email: "montesp@gmail.com",
//     approvedCourses: ["HTML", "CSS"],
//     learningPaths: ["Escuela de web", "Escuela de frontend"]
// });

const pavel = createStudents({
    name: "Pavel",
    email: "montesp@gmail.com",
});

pavel.name = "pavelito";