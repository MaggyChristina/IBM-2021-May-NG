//data sources: what type of data can be stream
//any type of data - primitives,objects,array,promises,dom events,ajax.

import { of,from } from 'rxjs'
//how to send send sequence of numbers
//creational operator
//const stream = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//const stream = of("hello");
//const stream = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//from 
const stream = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//listen and grab data
stream.subscribe({
    next: data => {
        console.log(data)
    },
    error: err => {
        console.log(err)
    },
    complete: () => {
        console.log('done')
    }
});