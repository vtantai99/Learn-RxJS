import { Observable, of } from "rxjs";

// of("Alice", "Ben", "Charlie").subscribe({
//   next: (value) => console.log(value),
//   error: (err) => console.log(err),
//   complete: () => console.log("Completed"),
// });

const ourOwnOf = (...args: string[]): Observable<string> => {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
  });
};

ourOwnOf("Alice", "Ben", "Charlie").subscribe((value) => console.log(value));
