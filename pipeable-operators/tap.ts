import { filter, map, of, tap } from "rxjs";

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  .pipe(
    tap((value) => console.log('Spy:', value)),
    map((value) => value * 2),
    filter((value) => value > 5)
  )
  .subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log("complete"),
  });
