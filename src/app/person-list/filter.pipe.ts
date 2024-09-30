import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(staffList: any[], searchText: string): any[] {
    if (!staffList || !searchText) {
      return staffList;
    }
    return staffList.filter(staff =>
      staff.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
