import {  PipeTransform, Pipe } from '@angular/core';
import { Tape } from './tape';

@Pipe({
    name: 'sortBy'
})
export class TapeSortPipe implements PipeTransform {

   transform(value: Array<Tape>, sortTerm: string): Array<Tape> {
         value.sort((a: any, b: any) => {
            if (a[sortTerm] < b[sortTerm]) {
                 return -1;
            } else if (a[sortTerm] > b[sortTerm]) {
                 return 1;
             } else {
                 return 0;
             }
         });
         return value;
    }
 }
