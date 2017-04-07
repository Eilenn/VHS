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
    getSortedTapes(parameter: string): Promise<Tape[]> {
        return this.getTapes()
            .then(tapes => tapes.sort((a: any, b: any) => {
                if (a[parameter] < b[parameter]) {
                    return -1;
                } else if (a[parameter] > b[parameter]) {
                    return 1;
                } else {
                    return 0;
                }
            }));
    }
    getRentedTapesSortedByParameter(parameter:string): Promise<Tape[]> {
        return this.getRentedTapes()
            .then(tapes => tapes.sort((a: any, b: any) => {
                if (a[parameter] < b[parameter]) {
                    return -1;
                } else if (a[parameter] > b[parameter]) {
                    return 1;
                } else {
                    return 0;
                }
            }));
    }
}