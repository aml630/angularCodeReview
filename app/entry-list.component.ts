import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';

@Component({
  selector: 'my-list',
  inputs: ['testEntries'],
  template: `
    <div *ngFor = "#entry of testEntries">
    <ul>
    <li>{{entry.name}}</li>
    <li>{{entry.details}}</li>
    <li>{{entry.calories}}</li>
    </ul>
    </div>
  `
})
export class EntryListComponent {
  public testEntries: Entry[];
  constructor() {
    this.testEntries = [
      new Entry("child", "its got good stuff", 444),
      new Entry("child", "its got other things", 333)
    ];
  }
  // AddEntry(name: string, details: string, cals: number):void {
  //   this.entriess.push(
  //     new Entry(name, details, cals)
  //   );
  //   console.log(this.entriess);
  // }
}
