import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { EntryListComponent } from './entry-list.component';
import { CalSortPipe } from './calorie.pipe';

@Component({
  selector: 'my-app',
  directives: [EntryListComponent],
  template: `
    <div class="container">
      <h1>Food Entry List</h1>
      <input placeholder = "Name" #name>
      <input placeholder = "Details" #details>
      <input placeholder = "Calories" #calories>
      <button (click)= "AddEntry(name.value, details.value, calories.value)" >Input Entry</button>
      <my-list [testEntries] = "entries"></my-list>
    <div>
  `
})
export class AppComponent {
  public entries: Entry[];
  public filterCal: string = "noCal"
  
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
  }

}
