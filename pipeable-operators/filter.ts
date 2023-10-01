import { Observable, filter } from "rxjs";

interface NewsItem {
  category: "Business" | "Sports";
  content: string;
}

const newFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "A" });
  }, 1000);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "B" });
  }, 3000);
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "C" });
  }, 4000);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "D" });
  }, 5000);
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "E" });
  }, 6000);
});

const sportsNewsFeed$ = newFeed$.pipe(filter((item) => item.category === "Sports"));

sportsNewsFeed$.subscribe({
  next: (item) => {
    console.log(item);
  },
});
