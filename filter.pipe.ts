import { PipeTransform, Pipe } from '@angular/core';


//filter pipe
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if(!items || !filter) {
      return items;
    }
    return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
