import { PipeTransform, Pipe } from "@angular/core";
import { Tape } from "./tape";

@Pipe({
    name: 'sortByTitle'
})

export class TapeSortByTitlePipe implements PipeTransform {
    transform(value: Array<Tape>, sortBy: string): Array<Tape> {
        sortBy = sortBy ? sortBy.toLocaleLowerCase() : null;
        if (typeof sortBy[0] === "undefined") {
            return value;
        }
        value.sort((a: any, b: any) => {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            } else {
                return 0;
            }
        });
        return value;
    }
}