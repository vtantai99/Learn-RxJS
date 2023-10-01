import { from } from "rxjs";

from(['Alice', 'Ben', 'Charlie']).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('complete')
})

const somePromise = new Promise((resolve, reject) => {
  resolve('Resolved!')
  // reject('Rejected!')
})

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('complete')
})