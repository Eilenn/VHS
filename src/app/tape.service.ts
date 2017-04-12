import { Injectable } from '@angular/core';
import { Tape } from './tape';
import { TAPES } from './mock-tapes';
import { TapeStatus } from "./tape-status";

@Injectable()
export class TapeService {
    getTapes(): Promise<Tape[]> {
        return Promise.resolve(TAPES);
    }
    getTape(id: number): Promise<Tape> {
        return this.getTapes()
            .then(tapes => tapes.find(tape => tape.id === id));
    }
    getRentedTapes(): Promise<Tape[]> {
        let rented = TapeStatus.RENTED;
        return this.getTapes()
            .then(tapes => tapes.filter(tape => tape.status === rented));
    }
    getSortedTapes(parameter: string,asc: boolean): Promise<Tape[]> {
        let sorter=asc?-1:1;
        parameter = parameter ? parameter.toLocaleLowerCase() : null;
        return this.getTapes()
            .then(tapes => tapes.sort((a: any, b: any) => {
                if (a[parameter] < b[parameter]) {
                    return sorter;
                } else if (a[parameter] > b[parameter]) {
                    return -sorter;
                } else {
                    return 0;
                }
            }));
    }
    getRentedTapesSortedByParameter(parameter: string,asc: boolean): Promise<Tape[]> {
        let sorter=asc?-1:1;
        return this.getRentedTapes()
            .then(tapes => tapes.sort((a: any, b: any) => {
                if (a[parameter] < b[parameter]) {
                    return sorter;
                } else if (a[parameter] > b[parameter]) {
                    return -sorter;
                } else {
                    return 0;
                }
            }));
    }
    getCategories() {
        return ['Horror', 'Crime', 'War', 'Comedy', 'Science-Fiction', 'Drama', 'Thriller', 'Musical'];
    }
    getRatings(){
        return [1,2,3,4,5];
    }
    getDamages(){
        return ['unrewinded tape', 'delay', 'broken tape','lost', 'other'];
    }
    update(tape: Tape){
        let index=tape.id-1;
        TAPES[index]=tape;
    }
}