import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { EntryComponent } from './entry.component';


@Component({
  selector: 'edit-entry',
  inputs: ['entry'],
  template: `
    <hr />
    <div class = "task-form">
    <h3>Edit Name: {{entry.name}}</h3>
    <input [(ngModel)] = "entry.name">
    </div>
    <div class = "task-form">
    <h3>Edit Description: {{entry.details}}</h3>
    <input [(ngModel)] = "entry.details">
    </div>
    <div class = "task-form">
    <h3>Edit Cals: {{entry.calories}}</h3>
    <input [(ngModel)] = "entry.calories">
    </div>
  `
})
export class EditComponent {
  public entry: Entry = new Entry("example", "stuff", 33);

}
