import { of } from 'rxjs';  
import { filter } from 'rxjs/operators';  
const source = of([  
  { name: 'Alex', age: 32 },  
  { name: 'Akira', age: 25 },  
  { name: 'Aisha', age: 23 },  
  { name: 'Anisha', age: 16 },  
  { name: 'Anisha', age: 19 },  
  { name: 'Alisha', age: 22 }  
]);  
const example = source.pipe(filter(person => person.age <= 25));  
const subscribe = example.subscribe(val => console.log(`Under the age of 25: ${val.name}`)); 