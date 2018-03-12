import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any[] {
    if (!filterField || !keyword) {
      return list;
    }
    return list.filter( item => {
      const fildValue = item[filterField];
      return fildValue.indexOf(keyword) >= 0;
    });
  }

}
