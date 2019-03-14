import { Pipe, PipeTransform } from '@angular/core';
import { Standing } from './standings/standings.component';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Array<Standing>, by: string, direction: "asc" | "desc"): Array<Standing> {
    value = _.orderBy(value, [by], direction);
    return value;
  }
}
