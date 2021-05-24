
//strong type

//explicit type declaration ;  variableName:type = value
//string
let firstName:string = "Subramanian"
//type viloation
//firstName = 100;
//number
let age:number =18;
//boolean
let isValid:boolean = true;

//implicit type declaration : Type inference

let salary = 2000; // implicitly number

//salary = "hello"
salary  =9000;

//what if i want js way -  free initalization; like dynamic typed.
let myvar:any=10;
myvar ="helo"
myvar=true;

//undefiend : this implicitly any; recommendaation is use "any"
let price;
price =100;
price ="hello"

//undefined : explicit undefiend no use in real time
let foo:undefiend
//foo =90; compile time error

