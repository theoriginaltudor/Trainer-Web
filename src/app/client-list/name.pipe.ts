import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class NamePipe implements PipeTransform {

  transform(list, query: string) {
    return list ? list.filter(item => item.email.search(new RegExp(query, 'i')) > -1) : [];
  }

}
