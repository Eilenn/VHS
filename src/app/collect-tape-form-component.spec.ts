import { DebugElement } from "@angular/core";
import { CollectTapeFormComponent } from "./collect-tape-form-component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { By, BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { TapeService } from "./tape.service";
import { Tape } from "./tape";
import { TapeStatus } from "./tape-status";
import { Customer } from "./customer";

describe('CollectTapeFormComponent(templateUrl)', function () {
    let de: DebugElement[];
    let comp: CollectTapeFormComponent;
    let fixture: ComponentFixture<CollectTapeFormComponent>;
    let el: HTMLElement;
    let tapeService;
    let customer;
    let rentDate, returnDate;
    let rating,fee,additionalFee;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, FormsModule],
            declarations: [CollectTapeFormComponent],
            providers: [TapeService]

        })
            .overrideComponent(CollectTapeFormComponent, {
                set: {
                    templateUrl: '/base/src/app/templates/collect-tape-form.component.html',
                    styleUrls: ['/base/src/app/styles.css'],
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollectTapeFormComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.queryAll(By.css('div'));
        el = de[0].nativeElement;
        tapeService = fixture.debugElement.injector.get(TapeService);
        spyOn(tapeService, 'getDamages').and.returnValue(['broken']);
        spyOn(tapeService, 'getRatings').and.returnValue([1]);
        customer=new Customer('Adam','Adamski');
        rentDate=new Date('2017-04-05');
        returnDate=new Date('2017-04-06');
       comp.tapeToCollect=new Tape(1, 'Apocalypse Now','Francis Ford Copola', 1979,1.99,TapeStatus.RENTED,customer,rentDate,returnDate,5,1.99,'./app/covers/apocalypseNow.jpg','./app/gifs/apocalypseNow.gif');
    });

    it('should create component', () => expect(comp).toBeDefined());
    it('should get damages', () => {
        fixture.detectChanges();
        expect(comp.damages).toEqual(['broken']);
    });
    it('should get ratings', () => {
        fixture.detectChanges();
        expect(comp.ratings).toEqual([1]);
    });
    it('should submit data from form when onSubmit called', () => {
        rating=5;
        fee=5;
        additionalFee=5;
       comp.onSubmit(rating, fee, additionalFee);
        fixture.detectChanges();
        expect(comp.tapeToCollect.rating).toEqual(rating);
    });
});
