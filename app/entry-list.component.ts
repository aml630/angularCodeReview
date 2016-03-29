import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { EntryComponent } from './entry.component';


@Component({
  selector: 'my-list',
  inputs: ['testEntries'],
  directives: [EntryComponent],
  template: `
    <div *ngFor = "#entry of testEntries">
      <ul>
      <entry [testEntry] = "entry"></entry>
      </ul>
    </div>
  `
})
export class EntryListComponent {
  public testEntries: Entry[];
  // public testEntry: Entry = new Entry("example", "stuff", 33);

  constructor() {
    this.testEntries = [
      new Entry("child", "its got good stuff", 444),
      new Entry("child", "its got other things", 333)
    ];
  }
  // showInfo(setState: boolean) {
  //   this.testEntry.show = setState;
  //   console.log()
  // }
}
