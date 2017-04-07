import { Component } from '@angular/core';

import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";
import { TAPES } from "./mock-tapes";

@Component({
    selector: 'tape-form',
    templateUrl: './templates/tape-form.component.html'
})
export class TapeFormComponent {

    model = new Tape(15, 'The Silence of the Lambs', 'Jonathan Demme', 1991,1.99,TapeStatus.AVAILABLE,null,5);

    submitted = false;

    onSubmit() {
        let index=TAPES.length+1;
        this.model.id=index;
        TAPES.push(this.model);
        this.submitted = true;
    }
}