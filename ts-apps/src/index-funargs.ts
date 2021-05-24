//parameters and args

//type inference is activated for a and b when it gets called
function add(a,b){
  let c = a + b;
  console.log(c);
}
add(10,10) // a:number,b:number
add(false,true)//a:boolean,b:boolean
add(89,"hello") //a:number,b: string

//add type annotation for args
function multiply(a:number,b:number){
    let c = a * b;
    console.log(c);
}
multiply(10,10)
//multiply(89,"hello") //will throw error.

//compiler expects two args always
//default args: es 6 feature
function div(a:number=0,b:number=0){
    let c = a * b;
    console.log(c);
}
div() //compiler forcing to supply value.

//no default value but i need to compile: optional parameters:ts feature
function sayHello(name?:string,message:string="hello"){
   console.log(`${name} ${message}`)
}
sayHello("Subramanian","Hello")
sayHello()

///arrow
const sayGreet = (name?:string,message:string="hello")=>console.log(`${name} ${message}`)

//i want function to accept any value

const doStuff = (something:any)=> console.log(something)

doStuff("strings")
doStuff(1)
doStuff(true)