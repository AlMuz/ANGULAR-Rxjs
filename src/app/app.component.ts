import { Component } from '@angular/core';

import { interval, Subscription } from 'rxjs';
// import {} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sub: Subscription;

  constructor() {
    const intervalStream$ = interval(1000);

    this.sub = intervalStream$.subscribe((value) => {
      console.log(value);
    });
  }

  stopInterval() {
    this.sub.unsubscribe();
  }
}
