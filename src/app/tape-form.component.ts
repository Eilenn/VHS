import { Component, OnInit} from '@angular/core';

import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";
import { TAPES } from "./mock-tapes";
import { TapeService } from "./tape.service";

@Component({
    selector: 'tape-form',
    templateUrl: './templates/tape-form.component.html',
    providers: [TapeService]
})
export class TapeFormComponent implements OnInit {
    constructor(private _tapeService: TapeService){

    }
    categories: string[];
        ngOnInit(): void {
            this.categories=this._tapeService.getCategories();
        }

    model = new Tape(15, 'The Silence of the Lambs', 'Jonathan Demme', 1991,1.99,TapeStatus.AVAILABLE,null,null,null,5);

    onSubmit() {
        let index=TAPES.length+1;
        this.model.id=index;
        let newTape: Tape=Object.assign({},this.model);
        TAPES.push(newTape);
    }
}