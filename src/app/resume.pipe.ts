import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

   maLimit : number | undefined ;// personalisation de pipe
  transform(value: string, limit?: number): any {
    if(!value){
      return null
    }
    this.maLimit = (limit ) ? limit : 100 ;

    return value.substr(0,limit) + '...';
  }

}
