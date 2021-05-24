//class as type

//literal object
//Type class
class Employee {
   id:number;
   name?:string;
   isWorking?:boolean
   salary?:number
}

//to enforce data type for object properties
let employee:Employee = {
    id:1,
    name:'subramanian',
    //name:34
    isWorking:true,
    salary:1000
};

//to
let employee1:Employee = {
    id:1,
    name:'subramanian',
};

let printEmployeeDetails = (employee: Employee): Employee => {
    return employee;
}
printEmployeeDetails({id:1,name:'subramanian'});


//interface as type
interface AccountType{
    id: number;
    name: string;
    balance?: number;
}
let sb:AccountType ={
    id:1,
    name:'Test',
    balance:20
}
let loanaccount:AccountType ={
    id:1,
    name:'Test',
}

type Customer = {
    id: number,
    name: string;
    city?: string;
};

let cust: Customer= {
    id: 1,
    name: "Customer",
    city: 'Coimbatore'
}
console.log(cust);



interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}
configure({ width: 100 });
configure("auto");
//configure("automatic"); //error