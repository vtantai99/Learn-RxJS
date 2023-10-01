import { Observable } from "rxjs";

// Exercise 1
const observable$ = new Observable<string>((subscriber) => {
  console.log("Observable executed");
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => {
    subscriber.next("Charlie");
    subscriber.complete();
  }, 4000);

  setTimeout(() => {
    subscriber.error(new Error('Failure'))
  }, 2000)

  // Teardown observable (which use for clear timeout or abort http request)
  return () => {
    console.log("Teardown executed");
  };
});

observable$.subscribe({
  next: (value) => console.log(value),
  error: (error: Error) => console.log(error.message),
  complete: () => console.log("Completed"),
});

// Exercise 2 
const interval$ = new Observable((subscriber) => {
  let counter = 1
  const intervalId = setInterval(() => {
    subscriber.next(counter)
    counter++
  }, 1000)

  // Teardown observable (which use for clear timeout or abort http request)
  return () => {
    clearInterval(intervalId);
  }
})

const intervalSubscription = interval$.subscribe({
  next: (value) => console.log(value),
  error: (error: Error) => console.log(error.message),
  complete: () => console.log("Completed"),
})

setTimeout(() => {
  console.log('Unsubscribe')
  intervalSubscription.unsubscribe()
}, 7000)
