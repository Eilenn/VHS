import { Component, Input, OnInit } from "@angular/core";
import { TapeService } from "./tape.service";
import { Tape } from "./tape";
import { TAPES } from "./mock-tapes";

@Component({
    selector: 'edit-tape',
    templateUrl: './templates/edit-tape-component.html',
    providers: [TapeService]
})
export class EditTapeComponent implements OnInit {
    constructor(private _tapeService: TapeService) { }
    @Input() tapeToEdit: Tape;
    //private unchangedTape: Tape;
    categories: string[];
    ngOnInit(): void {
        this.categories = this._tapeService.getCategories();
         
    }
    onSubmit() {
        TAPES[this.tapeToEdit.id - 1] = this.tapeToEdit;
    }

}