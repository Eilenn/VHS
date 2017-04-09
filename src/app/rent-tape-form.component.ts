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
    @Input() customer: Customer;
    constructor(private _tapeService: TapeService,
    private _route: ActivatedRoute,
    private _location: Location){

    }
    customers: Customer[];
        ngOnInit(): void {
            this.customers=CUSTOMERS;
            /* this._route.params
      .switchMap((params: Params) => this._tapeService.getTape(+params['id']))
      .subscribe(tape => this.tapeToRent = tape);*/
        }

    model = new Tape(15, 'The Silence of the Lambs', 'Jonathan Demme', 1991,1.99,TapeStatus.AVAILABLE,null,5);

    onSubmit(tape: Tape,customer: Customer) {
       this.tapeToRent.status=TapeStatus.RENTED;
        this.tapeToRent.customer=customer;
        TAPES[this.tapeToRent.id-1]=this.tapeToRent;
        //let index=TAPES.length+1;
        //this.model.id=index;
       // let newTape: Tape=Object.assign({},this.model);
        //TAPES.push(newTape);
    }
    /*rent(tape:Tape,customer:Customer){



        this.tapeToRent.status=TapeStatus.RENTED;
        this.tapeToRent.customer=this.customer;
        TAPES[this.tapeToRent.id-1]=this.tapeToRent;
        //tape.status=TapeStatus.RENTED;
        //tape.customer=customer;
        //TAPES[tape.id-1]=tape;
    }*/
    rent(tape: Tape,customerFN: string, customerLN:string){
         this.tapeToRent.status=TapeStatus.RENTED;
        this.tapeToRent.customer=new Customer(customerFN,customerLN);
        TAPES[this.tapeToRent.id-1]=this.tapeToRent;
    }
}