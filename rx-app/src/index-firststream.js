//create Producer(Observable), push data to Observer, Observer listens for that

import { Observable } from 'rxjs';

const stream = new Observable(observer => {
    //push into observer/subscriber 
    observer.next(1)
    observer.next(2)
    observer.next(3)
 //   observer.error(new Error('something went wrong!'))
    observer.next(4)
    observer.next(5)
    observer.complete()
})

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