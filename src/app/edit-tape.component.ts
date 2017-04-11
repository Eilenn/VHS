import { Component, Input, Output, OnInit, EventEmitter, OnChanges} from "@angular/core";
import { TapeService } from "./tape.service";
import { Tape } from "./tape";
import { TAPES } from "./mock-tapes";

@Component({
    selector: 'edit-tape',
    templateUrl: './templates/edit-tape-component.html',
    providers: [TapeService]
})
export class EditTapeComponent implements OnInit, OnChanges {

    @Input() tapeToEdit: Tape;
    private model: Tape;
    @Output() emitter = new EventEmitter<Tape>();

    constructor(private _tapeService: TapeService) { }

    categories: string[];
    ngOnInit(): void {
        this.categories = this._tapeService.getCategories();
    }
    onSubmit() {
        this.emitter.emit(this.model);
        alert("Tape details have been edited.");
      
    }
    ngOnChanges(): void {
        if (this.tapeToEdit != undefined) {
           this.model = Object.create(this.tapeToEdit);
        }
    }
}