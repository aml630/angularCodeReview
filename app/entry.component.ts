import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry',
  inputs: ['testEntry'],
  template: `
      <button *ngIf = "testEntry.show" (click) = "showInfo(false)">{{testEntry.name}}</button>

      <button *ngIf = "!testEntry.show" (click) = "showInfo(true)">{{testEntry.name}}</button>

      <li *ngIf="testEntry.show">{{testEntry.details}}</li>

      <li *ngIf="testEntry.show">{{testEntry.calories}}</li>
  `
})
export class EntryComponent {
  public testEntry: Entry = new Entry("example", "stuff", 33);

  showInfo(show: boolean) {
    this.testEntry.show = show;
  }

  // showInfo(show: boolean) {
  //   console.log(show);
  //   if (show = true) {
  //     this.testEntry.show = false;
  //   }else {
  //     this.testEntry.show =true;
  //   }
  // }
}
