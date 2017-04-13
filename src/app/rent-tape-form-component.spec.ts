import { DebugElement } from "@angular/core";
import { RentTapeFormComponent } from "./rent-tape-form.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { By, BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { TapeService } from "./tape.service";
import { Tape } from "./tape";
import { TapeStatus } from "./tape-status";
import { Customer } from "./customer";

describe('RentTapeFormComponent(templateUrl)', function () {
    let de: DebugElement[];
    let comp: RentTapeFormComponent;
    let fixture: ComponentFixture<RentTapeFormComponent>;
    let el: HTMLElement;
    let tapeService;
    let customer: Customer;
    let rentDate:Date, returnDate:Date;
    let rating,fee,additionalFee;
    let firstName:string;
     let lastName: string
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, FormsModule],
            declarations: [RentTapeFormComponent],
            providers: [TapeService]

        })
            .overrideComponent(RentTapeFormComponent, {
                set: {
                    templateUrl: '/base/src/app/templates/rent-tape-form.component.html',
                    styleUrls: ['/base/src/app/styles.css'],
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RentTapeFormComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.queryAll(By.css('div'));
        el = de[0].nativeElement;
        tapeService = fixture.debugElement.injector.get(TapeService);
       // spyOn(tapeService, 'getDamages').and.returnValue(['broken']);
       // spyOn(tapeService, 'getRatings').and.returnValue([1]);
      firstName='Adam';
       lastName='Adamski';
        customer=new Customer(firstName,lastName);
        rentDate=new Date('2017-04-05');
        returnDate=new Date('2017-04-06');
       comp.tapeToRent=new Tape(1, 'Apocalypse Now','Francis Ford Copola', 1979,1.99,TapeStatus.AVAILABLE,null,null,null,5,null,'./app/covers/apocalypseNow.jpg','./app/gifs/apocalypseNow.gif');
    });

    it('should create component', () => expect(comp).toBeDefined());
    it('should rent a tape', () =>{
        comp.rent(firstName,lastName,rentDate,returnDate);
        fixture.detectChanges();
        expect(comp.tapeToRent.customer).toEqual(customer);
        expect(comp.tapeToRent.rentDate).toEqual(rentDate);
        expect(comp.tapeToRent.returnDate).toEqual(returnDate);
        expect(comp.tapeToRent.suggestedFee).toEqual(comp.tapeToRent.price);
    });
   

});
