import { Observable, concatMap, of } from "rxjs";

const subscribe$ = new Observable((subscriber) => {
  subscriber.next('A');
  subscriber.next('B');
})

subscribe$.pipe(concatMap(() => of(1, 2))).subscribe(value => console.log(value));