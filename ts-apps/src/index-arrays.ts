

let numList:number[] = [1,2,3,5]
//let numList:number[] = [1,2,3,5,"test"] compiler error

//generic syntax
let names:Array<string> = ["a","b","c"];

//how to store employee data

type Employee ={
    id:number;
    name:string;
}
let employees:Array<Employee> = [{
    id:1,
    name:'a1'

},{
    id:2,
    name:'a2'

},{
    id:1,
    name:'a3'

},];
