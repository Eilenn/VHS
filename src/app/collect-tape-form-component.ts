import { Component, Input, OnInit } from '@angular/core';
import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";
import { TAPES } from "./mock/mock-tapes";
import { TapeService } from "./tape.service";


@Component({
    selector: 'collect-tape-form',
    templateUrl: './templates/collect-tape-form.component.html',
    providers: [TapeService]
})
export class CollectTapeFormComponent implements OnInit {
    damages: string[];
    ratings: number[];
    ngOnInit(): void {
        this.damages = this._tapeService.getDamages();
        this.ratings=this._tapeService.getRatings();
    }

    @Input() tapeToCollect: Tape;

    constructor(private _tapeService: TapeService) {

    }
    onSubmit(rating: number, fee: number, additionalFee: number) {
        this.tapeToCollect.status = TapeStatus.AVAILABLE;
        this.tapeToCollect.customer = null;
        this.tapeToCollect.rentDate = null;
        this.tapeToCollect.returnDate = null;
        this.tapeToCollect.rating = rating;
        let sum = this.calculateFee(fee, additionalFee);
        alert("Fee equals " + sum + " dollars. \n Press ok to confirm that fee has been paid.");
    }
    private calculateFee(fee: number, additionalFee: number) {
        if (additionalFee === undefined) {
            additionalFee = 0;
        }
        return fee + additionalFee;
    }
}