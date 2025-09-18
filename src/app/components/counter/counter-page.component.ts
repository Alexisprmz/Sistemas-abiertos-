import { Component } from "@angular/core";

@Component({
  selector: "app-counter-page",
  template: `
    <h1>{{ counter }}</h1>
    <h2>Counter Component</h2>
    <button (click)="mas()">Mas</button>
    <button (click)="menos()" [disabled]="counter === 0">Menos</button>
  `
})
export class CounterPageComponent {
  counter = 0;

  mas() {
    this.counter++;
  }

  menos() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
