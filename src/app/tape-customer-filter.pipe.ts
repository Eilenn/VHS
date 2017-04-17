import {  PipeTransform, Pipe } from '@angular/core';
import { Tape } from './tape';

@Pipe({
    name: 'customerFilter'
})
export class TapeCustomerFilterPipe implements PipeTransform {

    transform(value: Tape[], filterBy: string): Tape[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((tape: Tape) =>
            tape.customer.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}