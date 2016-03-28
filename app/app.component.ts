import { Component, EventEmitter } from 'angular2/core';
import { Entry } from './entry.model';

console.log("app.component page success");

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Food Entry List</h1>

    <div>
  `
})
export class AppComponent {
  // // public tasks: Task[];
  // constructor(){
  //   // this.tasks = [
  //   //   new Task("Create To-Do List app.", 0),
  //   //   new Task("Learn Kung Fu.", 1),
  //   //   new Task("Rewatch all the Lord of the Rings movies.", 2),
  //   //   new Task("Do the laundry.", 3)
  //   // ];
  // }
  // taskWasSelected(clickedTask: Task): void {
  //   console.log('parent', clickedTask);
  // }
}
