
//state initalization

// class Employee {

//     id:number =1;
//     name:string="subramanian"
//     isWorking:boolean = true;
// }

class Employee {

    id:number;
    name:string;
    isWorking:boolean;
    constructor(id:number=1,name?:string,isWorking:boolean=false){
        this.id = id;
        this.name =name;
        this.isWorking=isWorking
    }

}

let emp = null;
emp = new Employee()
console.log(emp.id, emp.name, emp.isWorking)
//state afer object creation
emp.id =9000
emp.name = "ram"
emp.isWorking = false
console.log(emp.id, emp.name, emp.isWorking)

//during object creation ; constructor parameters
emp = new Employee(23,'Sam',true)
console.log(emp.id, emp.name, emp.isWorking)
