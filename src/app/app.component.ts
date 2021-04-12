import { Component } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sub: Subscription;

  constructor() {
    const stream$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1500);

      setTimeout(() => {
        observer.complete();
      }, 1900);

      setTimeout(() => {
        observer.error('Something went wrong');
      }, 2000);

      setTimeout(() => {
        observer.next(2);
      }, 2500);
    });

    this.sub = stream$.subscribe(
      (value) => console.log(value),
      (error) => console.log(error),
      () => console.log('complete')
    );
  }

  stopInterval() {
    this.sub.unsubscribe();
  }
}
