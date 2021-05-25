

//decorator declartion

function Course(whatSubject:string='Java'){
    //return a function , inside you have to write logic
    return function(target:any){
        Object.defineProperty(target.prototype, "subject", {
            value: whatSubject
        });
    }   
}

@Course()
class Student {
    constructor(public firstName:string,public lastName:string){}
}

let student = new Student("Subramanian","Murugan") as any;
console.log(`${student.firstName} ${student.lastName} is learning ${student.subject} `)