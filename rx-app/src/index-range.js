import { range } from 'rxjs';

import { delay, filter, map } from 'rxjs/operators';


//find even number from 1...to 100 and double it.
const stream = range(1, 100).pipe(
    filter(x => x % 2 === 0),
    map(x => x * 2),
    delay(1000)
)

//subscriber
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