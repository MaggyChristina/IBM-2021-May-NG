
// class Employee {
//     id:number;
//     name:string;
//     isWorking:boolean

//      constructor(id:number,name:string,isWorking:string){
//          this.id = id;
//          this.name =name;
//          this.isWorking = isWorking
//      }
    
// }
// class Employee {
    
//     //constructor local variable can be converted into instance variable:add access modifier
//     constructor(public id:number=1,public name:string="",public isWorking:boolean=false){
//          this.id = id;
//          this.name =name;
//          this.isWorking = isWorking
//      }
// }
class Employee {
    
    //constructor local variable can be converted into instance variable:add access modifier
    constructor(public id:number=1,public name:string="",public isWorking:boolean=false)
    {    }
}
let emp = new Employee(1, "subramanian", true);
console.log(emp.id, emp.name, emp.isWorking)
