import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseArray',
  pure: false,
  standalone: true
})
export class ReverseArrayPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.slice().reverse();
  }

}
