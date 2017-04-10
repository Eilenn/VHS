import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";
import { TAPES } from "./mock-tapes";
import { TapeService } from "./tape.service";
import { Customer } from "./customer";
import { CUSTOMERS } from "./mock-customers";

@Component({
    selector: 'rent-tape-form',
    templateUrl: './templates/rent-tape-form.component.html',
    providers: [TapeService]
})
export class RentTapeFormComponent implements OnInit {
    @Input() tapeToRent: Tape;

    constructor(private _tapeService: TapeService,
    private _route: ActivatedRoute,
    private _location: Location){

    }
    customers: Customer[];
        ngOnInit(): void {
            this.customers=CUSTOMERS;
        }

    onSubmit(tape: Tape,customer: Customer) {
       this.tapeToRent.status=TapeStatus.RENTED;
        this.tapeToRent.customer=customer;
        TAPES[this.tapeToRent.id-1]=this.tapeToRent;
    }
    /*rent2(tape:Tape,customer:Customer){
        this.tapeToRent.status=TapeStatus.RENTED;
        this.tapeToRent.customer.firstName=customer.firstName;
        this.tapeToRent.customer.lastName=customer.lastName;
        TAPES[this.tapeToRent.id-1]=this.tapeToRent;
    }*/
    rent(customerFN: string, customerLN:string, rentDate: Date){
         this.tapeToRent.status=TapeStatus.RENTED;
        this.tapeToRent.customer=new Customer(customerFN,customerLN);
        this.tapeToRent.rentDate=rentDate;
        TAPES[this.tapeToRent.id-1]=this.tapeToRent;
    }
}