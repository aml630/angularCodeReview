import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { EntryComponent } from './entry.component';
import { EditComponent } from './edit-entry.component';
import { CalSortPipe } from './calorie.pipe';

@Component({
  selector: 'my-list',
  inputs: ['testEntries'],
  pipes: [CalSortPipe],
  directives: [EntryComponent, EditComponent],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="low">Low Cal</option>
      <option value="notLow">Not As Low Cal</option>
      <option value="noCal" selected="selected">All Foods</option>
    </select>
    <div *ngFor = "#entry of testEntries | calCount:filterCal" (click) = "entryClicked(entry)" >
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
  public filterCal: string = "nocal"

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

  onChange(filterOption) {
    this.filterCal = filterOption;
    console.log(this.filterCal)
  }
}
