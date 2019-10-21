import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class NamePipe implements PipeTransform {

  transform(list, keys: string, term: string) {
    if (!term) return list;
    return (list || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }

}
