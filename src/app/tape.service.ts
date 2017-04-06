import { Injectable } from '@angular/core';
import { Tape } from './tape';
import { TAPES } from './mock-tapes';

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
        return this.getTapes()
            .then(tapes => tapes.filter(tape => tape.status === 1));
    }
}