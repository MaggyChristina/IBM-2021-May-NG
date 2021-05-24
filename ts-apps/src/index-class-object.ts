    //declare class  -  instance variables,constructors, instance methods,static variables,methods

    class Employee {
    //instance variables
    id:number =1;
    name:string ="subramanian"
    isWorking:boolean = true;
    salary:number =1000

    //instance methods
    calculateSalary(noofdays:number=0):number{
        return this.salary * noofdays;
    }
    }

    //create object
    //emp is reference variable
    //let is keyword
    //new is operator
    //Employee() - fun call -  constructor call
    let emp = new Employee();
    console.log(emp.id,emp.name,emp.isWorking,emp.calculateSalary(23))

