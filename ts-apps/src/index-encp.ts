
class Employee {
    //defalut scope is public; public keyword expliclity not req here
    public id:number
    public name:string;
    public isValid:string;
    //private 
    private password:string;

     //instance methods
    public calculateSalary(): number {
        return 1000;
    }
}
let emp = new Employee();
emp.id =1
//emp.password ="test"
console.log(emp.id)