import { Component, Input } from '@angular/core';
import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";
import { TAPES } from "./mock-tapes";


@Component({
    selector: 'collect-tape-form',
    templateUrl: './templates/collect-tape-form.component.html'
})
export class CollectTapeFormComponent{
    @Input() tapeToCollect: Tape;

    onSubmit(rating: number, fee: number, additionalFee: number) {
        this.tapeToCollect.status = TapeStatus.AVAILABLE;
        this.tapeToCollect.customer=null;
        this.tapeToCollect.rentDate=null;
        this.tapeToCollect.returnDate=null;
        this.tapeToCollect.rating=rating;
        if(additionalFee===undefined){
            additionalFee=0;
        }
        let sum=fee+additionalFee;
        alert("Fee equals "+sum);
    }
}