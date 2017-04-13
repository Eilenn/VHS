import { DebugElement } from "@angular/core";
import { TapeService } from './tape.service';
import { ComponentFixture, async, TestBed, tick } from "@angular/core/testing";
import { ReflectiveInjector } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TapesComponent } from "./tapes.component";
import { By } from "@angular/platform-browser";
import { Tape } from "./tape";
import { TapeStatus } from "./tape-status";
import { CUSTOMERS } from "./mock-customers";
import { RouterLinkStubDirective, RouterOutletStubComponent } from "./testing/router-stubs";
import { StarComponent } from "./star.component";
import { FormsModule } from "@angular/forms";
import { TapeFilterPipe } from "./tape-filter.pipe";
import { TapeFormComponent } from "./tape-form.component";
import { SpyLocation } from "./testing/spylocation";
import { fakeAsync } from "@angular/core/testing";


describe('TapesComponent', () => {
    let de: DebugElement[];
    let de2: DebugElement[];
    let comp: TapesComponent;
    let fixture: ComponentFixture<TapesComponent>;
    let el: HTMLElement;
    let el2: HTMLElement;
    let tapeService: TapeService;
    let TAPES: Tape[];
    //  let loc: Location;
    beforeEach(async(() => {
        TestBed.configureTestingModule
            ({
                imports: [FormsModule],
                declarations: [TapesComponent, StarComponent, TapeFilterPipe, TapeFormComponent, RouterLinkStubDirective, RouterOutletStubComponent],
                providers: [TapeService, { provide: Location, useClass: SpyLocation }]

            })
            .overrideComponent(TapesComponent, {
                set: {
                    templateUrl: '/base/src/app/templates/tapes.component.html',
                    styleUrls: ['/base/src/app/styles.css'],
                }
            })
            .overrideComponent(StarComponent, {
                set: {
                    templateUrl: '/base/src/app/templates/star.component.html',
                    styleUrls: ['/base/src/app/styles.css'],
                }
            })
            .overrideComponent(TapeFormComponent, {
                set: {
                    templateUrl: '/base/src/app/templates/tape-form.component.html',
                    styleUrls: ['/base/src/app/styles.css'],
                }
            })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TapesComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.queryAll(By.css('div'));
        el = de[0].nativeElement;
        tapeService = fixture.debugElement.injector.get(TapeService);
        TAPES = [
            { id: 1, title: 'Apocalypse Now', director: 'Francis Ford Copola', year: 1979, price: 1.99, status: TapeStatus.AVAILABLE, rating: 5, cover: './app/covers/apocalypseNow.jpg', gif: './app/gifs/apocalypseNow.gif' },
            { id: 6, title: 'Star Wars Episode IV: A New Hope', director: 'George Lucas', year: 1977, price: 1.99, status: TapeStatus.AVAILABLE, rating: 4, cover: './app/covers/starWarsIV.jpg', gif: './app/gifs/starWarsIV.gif' },
            { id: 7, title: 'Star Wars: Episode V - The Empire Strikes Back', director: 'George Lucas', year: 1980, price: 3.99, status: TapeStatus.RENTED, rating: 3, customer: CUSTOMERS[0], cover: './app/covers/starWarsV.jpg', gif: './app/gifs/starWarsV.gif', rentDate: new Date('2017-04-10'), returnDate: new Date('2017-04-11'), suggestedFee: 3.99 },
            { id: 9, title: 'Alien', director: 'Ridley Scott', year: 1979, price: 0.99, status: TapeStatus.RENTED, rating: 2, customer: CUSTOMERS[2], cover: './app/covers/alien.jpg', gif: './app/gifs/alien.gif', rentDate: new Date('2017-04-10'), returnDate: new Date('2017-04-11'), suggestedFee: 0.99 },
        ];
        spyOn(tapeService, 'getTapes').and.returnValue(Promise.resolve(TAPES));
        // let injector = ReflectiveInjector.resolveAndCreate([LocationStrategy, Location]);
        //   loc = injector.get(Location);
        // spyOn(loc, 'back');


    });
    it('should create component', () => expect(comp).toBeDefined());
    it('should get Tapes', fakeAsync(() => {
        comp.getTapes();
        fixture.detectChanges();
        tick();
        expect(comp.tapes).toEqual(TAPES);
    }));
        it('should get tapes in table', fakeAsync(() => {
        comp.getTapes();
       // fixture.detectChanges();
        tick();
        fixture.detectChanges();
         de2 = fixture.debugElement.queryAll(By.css('td'));
        el2=de2[0].nativeElement;
        expect(el2.textContent).toContain(TAPES[0].title);
    }));
});