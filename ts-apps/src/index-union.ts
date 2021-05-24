//What if i want to have more than one parameter type for a variable
//  id can be string or number

//union type
function printId(id: number | string){
   console.log(id)
}
printId(1);
printId("abc")
//printId(true)

//union type and how to process it :narrowing

function printIdV2(id: number | string){
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
 }
 printIdV2(1);
 printIdV2("abc")

 function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("subramanian")
welcomePeople(['subu','ram'])