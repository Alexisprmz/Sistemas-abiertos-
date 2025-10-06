import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { linkedSignal } from "../services/likendSignal";

@Component({
  template: `
    <h1>{{ counter() }}</h1>
    <h2>Counter Component</h2>
    <button (click)="sumar()">sumar</button>
    <button (click)="restar()" [disabled]="counter() === 0">restar</button>
  `,
  imports: [],
})
export class CounterPageComponent {

  counter = linkedSignal('counter', 10); 

  sumar() {
    this.counter.set(this.counter() + 1);
  }

  restar() {
    this.counter.set(this.counter() - 1);
  }
}
