import { Pipe, PipeTransform } from 'angular2/core';
import { Entry } from './entry.model';

@Pipe({
  name: "calCount",
  pure: false
})

export class CalSortPipe implements PipeTransform {
  transform(input: Entry[], args) {
    var calSort = args[0];

    if (calSort === "low") {
      return input.filter((entry) => {
        return entry.calories <= 300;
      });
      }else if (calSort === "notLow") {
        return input.filter((entry) => {
          return entry.calories >=299;
        });
      } else {
        return input;
      }
    }
  }
