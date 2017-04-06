import { Component } from "@angular/core";
import { Location }                 from '@angular/common';
import { TapeService } from "./tape.service";
import { Tape } from "./tape";

@Component({
    selector: 'rented-tapes',
    templateUrl: './templates/rented-tapes.component.html',
    providers: [TapeService]
})
export class RentedTapesComponent{
     tapes: Tape[];
    constructor(private _tapeService: TapeService, private _location: Location) {

  }
      getRentedTapes(): void {
    this._tapeService.getRentedTapes().then(tapes=>this.tapes=tapes);
  }
  ngOnInit(): void {
    this.getRentedTapes();
  }
    goBack(): void {
  this._location.back();
}
}