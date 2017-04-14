import { TestBed, inject, fakeAsync, tick } from "@angular/core/testing";
import { TapeService } from "./tape.service";
import { TAPES } from "./mock-tapes";
import { Tape } from "./tape";

describe('Tape Service Test', () => {
    let tapes: Tape[];
    let tape: Tape;
    let rentedTapes: Tape[];
    let sortedTapes: Tape[];
    let service: TapeService;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [TapeService]
        }).compileComponents();
    });

    it('can instantiate service when inject service',
        inject([TapeService], (service: TapeService) => {
            expect(service instanceof TapeService).toBe(true);
        }));
    it('it can getTapes', inject([TapeService],
        fakeAsync((service: TapeService) => {
            service.getTapes().then(tapesFromService => tapes = tapesFromService);
            tick();
            expect(tapes.length).toEqual(TAPES.length);
        })));
    it('it can getTape by id', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let tapeId: number = 1;
            service.getTape(tapeId).then(tapeFromService => tape = tapeFromService);
            tick();
            expect(tape.id).toEqual(tapeId);
        })));
    it('it can get rentedtapes', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let numberOfRentedTapes: number=6;
            service.getRentedTapes().then(tapesFromService => rentedTapes = tapesFromService);
            tick();
            expect(rentedTapes.length).toEqual(numberOfRentedTapes);
        })));
            it('it can get tapes sorted by title', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let sortTerm: string='title';
            let expectedTitle: string='Alien';
            let ascending: boolean=true;
            service.getSortedTapes(sortTerm,true).then(tapesFromService => sortedTapes = tapesFromService);
            tick();
            expect(sortedTapes[0].title).toEqual(expectedTitle);
        })));
});