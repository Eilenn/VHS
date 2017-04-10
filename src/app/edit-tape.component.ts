import { Component, Input } from "@angular/core";
import { TapeService } from "./tape.service";
import { Tape } from "./tape";

@Component({
selector: 'edit-tape',
    templateUrl: './templates/edit-tape-component.html',
    providers: [TapeService]
})
export class EditTapeComponent{
@Input() tapeToEdit: Tape;
}