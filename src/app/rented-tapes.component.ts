import { Component } from "@angular/core";
import { TapeService } from "./tape.service";
import { Tape } from "./tape";

@Component({
    selector: 'rented-tapes',
    templateUrl: './templates/rented-tapes.component.html',
    providers: [TapeService]
})
export class RentedTapesComponent{
     tapes: Tape[];
    constructor(private tapeService: TapeService) {

  }
      getTapes(): void {
    this.tapeService.getTapes().then(tapes=>this.tapes=tapes);
  }
  ngOnInit(): void {
    this.getTapes();
  }
}