import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';

console.log("app.component page success");

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Food Entry List</h1>

      <input placeholder = "Name" #name>
      <input placeholder = "Details" #details>
      <input placeholder = "Calories" #calories>
      <button (click)= "AddEntry(name.value, details.value, calories.value)" >Input Entry</button>


      <div *ngFor = "#entry of entries">
      <ul>
      <li>{{entry.name}}</li>
      <li>{{entry.details}}</li>
      <li>{{entry.calories}}</li>
      </ul>
      </div>
    <div>
  `
})
export class AppComponent {
  public entries: Entry[];
  constructor() {
    this.entries = [
      new Entry("sandwhich", "its got good stuff", 444),
      new Entry("soup", "its got other things", 333)
    ];
  }
  AddEntry(name: string, details: string, cals: number):void {
    this.entries.push(
      new Entry(name, details, cals)
    );
    console.log(this.entries);
  }
}
