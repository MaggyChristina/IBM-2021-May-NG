

//decorator declartion

function Course(target:any){
    console.log(target.prototype)
    //decorator logic
    console.log('course decorator')
    Object.defineProperty(target.prototype, "subject", {
        value: 'Typescript'
    });
}

// type StudentType = {
//     firstName:string;
//     lastName:string;
//     subject:string;
// }

//attach decorator
@Course
class Student {
    constructor(public firstName:string,public lastName:string){}
}

let student = new Student("Subramanian","Murugan") as any;
console.log(`${student.firstName} ${student.lastName} is learning ${student.subject} `)