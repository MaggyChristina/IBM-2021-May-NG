//return

function sayHello(){
    return "Hello" //return type is typeinferenced
}
function sayHai():string {
    return "Hai" //return type is explicit
}
// const add = (a:number=0,b:number=0):number=>{
//     return a+b
// }
const add = (a:number=0,b:number=0):number=>a+b

console.log(add(1,2))

//if not returning anything make it void

const doStuff = ():void=>console.log("void")

//if fun need to return any value

const returnValue = ():any =>"Hello"