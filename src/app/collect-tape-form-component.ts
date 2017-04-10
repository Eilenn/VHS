import { Component, OnInit, Input } from '@angular/core';
import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";
import { TAPES } from "./mock-tapes";
import { TapeService } from "./tape.service";


@Component({
    selector: 'collect-tape-form',
    templateUrl: './templates/collect-tape-form.component.html',
    providers: [TapeService]
})
export class CollectTapeFormComponent implements OnInit {
    @Input() tapeToCollect: Tape;

    constructor(private _tapeService: TapeService) {

    }

    ngOnInit(): void {

    }
    onSubmit(rating: number) {
        this.tapeToCollect.status = TapeStatus.AVAILABLE;
        this.tapeToCollect.customer=null;
        this.tapeToCollect.rentDate=null;
        this.tapeToCollect.returnDate=null;
        this.tapeToCollect.rating=rating;
    }
}