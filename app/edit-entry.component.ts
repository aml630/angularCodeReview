import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';
import { EntryComponent } from './entry.component';


@Component({
  selector: 'edit-entry',
  inputs: ['entry'],
  template: `
    <hr />
    <div class = "task-form">
    <h3>Edit Description: {{entry.details}}</h3>
    <input [(ngModel)] = "entry.details" class = "task-form">
    </div>
  `
})
export class EditComponent {
  public entry: Entry = new Entry("example", "stuff", 33);

}
