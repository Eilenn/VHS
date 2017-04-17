import { TestBed, inject, fakeAsync, tick } from "@angular/core/testing";
import { TapeService } from "./tape.service";
import { TAPES } from "./mock/mock-tapes";
import { Tape } from "./tape";
import { TapeStatus } from "./tape-status";

describe('Tape Service Test', () => {
    let tapes: Tape[];
    let tape: Tape;
    let rentedTapes: Tape[];
    let sortedTapes: Tape[];
    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [TapeService]
        }).compileComponents();
    });

    it('can instantiate service when inject service',
        inject([TapeService], (service: TapeService) => {
            expect(service instanceof TapeService).toBe(true);
        }));
    it(' can getTapes', inject([TapeService],
        fakeAsync((service: TapeService) => {
            service.getTapes().then(tapesFromService => tapes = tapesFromService);
            tick();
            expect(tapes.length).toEqual(TAPES.length);
        })));
    it(' can getTape by id', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let tapeId: number = 1;
            service.getTape(tapeId).then(tapeFromService => tape = tapeFromService);
            tick();
            expect(tape.id).toEqual(tapeId);
        })));
    it('can get rentedTapes', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let numberOfRentedTapes: number = 6;
            service.getRentedTapes().then(tapesFromService => rentedTapes = tapesFromService);
            tick();
            expect(rentedTapes.length).toEqual(numberOfRentedTapes);
        })));
    it('can get tapes sorted by title ascending', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let sortTerm: string = 'title';
            let expectedTitle: string = 'Alien';
            let ascending: boolean = true;
            service.getSortedTapes(sortTerm, ascending).then(tapesFromService => sortedTapes = tapesFromService);
            tick();
            expect(sortedTapes[0].title).toEqual(expectedTitle);
        })));
    it('can get tapes sorted by title descending', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let sortTerm: string = 'title';
            let expectedTitle: string = 'The Sting';
            let ascending: boolean = false;
            service.getSortedTapes(sortTerm, ascending).then(tapesFromService => sortedTapes = tapesFromService);
            tick();
            expect(sortedTapes[0].title).toEqual(expectedTitle);
        })));

    it('can get rented tapes sorted by rating ascending', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let sortTerm: string = 'rating';
            let expectedTitle: string = 'Rocky';
            let ascending: boolean = true;
            service.getRentedTapesSortedByParameter(sortTerm, ascending).then(tapesFromService => sortedTapes = tapesFromService);
            tick();
            expect(sortedTapes[0].title).toEqual(expectedTitle);
        })));
    it('can get rented tapes sorted by rating descending', inject([TapeService],
        fakeAsync((service: TapeService) => {
            let sortTerm: string = 'rating';
            let expectedTitle: string = 'Star Wars: Episode VI - Return of the Jedi';
            let ascending: boolean = false;
            service.getRentedTapesSortedByParameter(sortTerm, ascending).then(tapesFromService => sortedTapes = tapesFromService);
            tick();
            expect(sortedTapes[0].title).toEqual(expectedTitle);
        })));
    it('can get Ratings',
        inject([TapeService], (service: TapeService) => {
            let numberOfRatings: number = 5;
            let ratings = new Array;
            ratings = service.getRatings();
            expect(ratings.length).toEqual(numberOfRatings);
        }));
            it('can get damages',
        inject([TapeService], (service: TapeService) => {
            let numberOfDamages: number = 5;
            let damages = new Array;
            damages = service.getDamages();
            expect(damages.length).toEqual(numberOfDamages);
        }));
                    it('can update tape',
        inject([TapeService], (service: TapeService) => {
            let updatedTape= new Tape(1, 'The Silence of the Lambs', 'Jonathan Demme', 1991,1.99,TapeStatus.AVAILABLE,null,null,null,0);
           service.update(updatedTape);
            expect(TAPES[0]).toEqual(updatedTape);
        }));
});