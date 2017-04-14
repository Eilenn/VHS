import { TestBed, inject, fakeAsync, tick } from "@angular/core/testing";
import { TapeService } from "./tape.service";
import { TAPES } from "./mock-tapes";
import { Tape } from "./tape";

describe('Tape Service Test', () => {
    let tapes: Tape[];
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
            expect(tapes.length).toEqual(12);
        })));
});