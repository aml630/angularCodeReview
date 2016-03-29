import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { EntryComponent } from './entry.component';
import { EditComponent } from './edit-entry.component';



@Component({
  selector: 'my-list',
  inputs: ['testEntries'],
  directives: [EntryComponent, EditComponent],
  template: `
    <div *ngFor = "#entry of testEntries" (click) = "entryClicked(entry)">
      <ul>
      <entry [testEntry] = "entry"></entry>
      </ul>
    </div>
    <edit-entry *ngIf = "selectedEntry" [entry] = "selectedEntry"></edit-entry>
  `
})
export class EntryListComponent {
  public testEntries: Entry[];
  public selectedEntry: Entry;

  constructor() {
    this.testEntries = [
      new Entry("child", "its got good stuff", 444),
      new Entry("child", "its got other things", 333)
    ];
  }
  entryClicked(clickedEntry: Entry):void {
    this.selectedEntry = clickedEntry;
    console.log(this.selectedEntry);
  }
}
