import { Injectable } from '@angular/core';
import { Tape } from './tape';
import { TAPES } from './mock-tapes';

@Injectable()
export class TapeService {
    getTapes(): Tape[] {
        return TAPES;
    } 
}