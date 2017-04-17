import { Component, OnInit, Input } from '@angular/core';
import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";
import { TAPES } from "./mock/mock-tapes";
import { TapeService } from "./tape.service";
import { Customer } from "./customer";
import { CUSTOMERS } from "./mock/mock-customers";

@Component({
    selector: 'rent-tape-form',
    templateUrl: './templates/rent-tape-form.component.html',
    providers: [TapeService]
})
export class RentTapeFormComponent implements OnInit {
    @Input() tapeToRent: Tape;

    constructor(private _tapeService: TapeService,
       ) {

    }
    customers: Customer[];
    ngOnInit(): void {
        this.customers = CUSTOMERS;
    }

    rent(customerFN: string, customerLN: string, rentDate: Date, returnDate: Date) {
        this.tapeToRent.status = TapeStatus.RENTED;
        let anotherCustomer = new Customer(customerFN, customerLN);
        this.tapeToRent.customer = anotherCustomer;
        this.tapeToRent.rentDate = rentDate;
        this.tapeToRent.returnDate = returnDate;
        if (CUSTOMERS.indexOf(anotherCustomer)==- 1) {
            CUSTOMERS.push(anotherCustomer);
        }
        this.tapeToRent.suggestedFee=this.calculateSuggestedFee();
        alert("Tape has been rented to " + customerFN + " " + customerLN + ".");
    }
        private calculateNumberOfDays() {
        
        let oneDay:number = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let returnDate=new Date(this.tapeToRent.returnDate).getTime();
        let rentDate=new Date(this.tapeToRent.rentDate).getTime();
        let diffDays:number = Math.round(Math.abs(( returnDate- rentDate) / (oneDay)));
        return diffDays;
    }
     private calculateSuggestedFee(){    
        return this.calculateNumberOfDays()*this.tapeToRent.price;
     }
}