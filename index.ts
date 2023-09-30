import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("Observable executed");
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

// const observer = {
//   next: (value: string) => console.log(value),
// };

const subscription1 = observable$.subscribe({
  next: (value) => console.log('Subscription 1', value),
  complete: () => console.log('Subscription 1 completed'),
});

// setTimeout(() => {
//   console.log('Unsubscribe')
//   subscription.unsubscribe()
// }, 3000)
