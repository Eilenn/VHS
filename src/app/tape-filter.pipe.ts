import {  PipeTransform, Pipe } from '@angular/core';
import { Tape } from './tape';

@Pipe({
    name: 'tapeFilter'
})
export class TapeFilterPipe implements PipeTransform {

    transform(value: Tape[], filterBy: string): Tape[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((tape: Tape) =>
            tape.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}