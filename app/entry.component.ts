import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { EditComponent } from './edit-entry.component';

@Component({
  selector: 'entry',
  inputs: ['testEntry'],
  template: `
      <h3 (click) = "showInfo()">{{testEntry.name}}</h3>
      <li *ngIf="testEntry.show">{{testEntry.details}}</li>
      <li *ngIf="testEntry.show">{{testEntry.calories}}</li>
  `
})

export class EntryComponent {
  public testEntry: Entry = new Entry("example", "stuff", 33);

  showInfo() {
    if (this.testEntry.show === false) {
      this.testEntry.show = true;
    }else {
      this.testEntry.show = false;
    }
  }

}
