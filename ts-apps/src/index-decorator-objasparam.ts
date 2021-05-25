 type Subject = {
     whatSubject:string;
     trainer:string;
     duration:number;
 }
//decorator declartion
function Course(course:Subject){
    //return a function , inside you have to write logic
    return function(target:any){
        Object.defineProperty(target.prototype, "subject", {
            value: course
        });
    }   
}

@Course({whatSubject:'Dart',trainer:'Subramanian',duration:5})
class Student {
    constructor(public firstName:string,public lastName:string){}
}

let student = new Student("Subramanian","Murugan") as any;
console.log(`${student.firstName} ${student.lastName} `)
console.log(`Course Information`)
console.log(`Name : ${student.subject.whatSubject}`)
console.log(`Trainer : ${student.subject.trainer}`)
console.log(`Duration : ${student.subject.duration}`)


