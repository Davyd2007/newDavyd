import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipe implements PipeTransform {

  transform(value: string, replaceWith: string): string {
    return value.replace(/ /g, replaceWith);
  }

}
