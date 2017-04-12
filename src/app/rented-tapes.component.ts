import { Component, OnInit } from "@angular/core";
import { Location }                 from '@angular/common';
import { TapeService } from "./tape.service";
import { Tape } from "./tape";

@Component({
    selector: 'rented-tapes',
    templateUrl: './templates/rented-tapes.component.html',
    providers: [TapeService]
})
export class RentedTapesComponent implements OnInit{
     tapes: Tape[];
     asc: boolean=true;
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
  getRentedTapesSortedByTitle(): void{
    this._tapeService.getRentedTapesSortedByParameter('title',this.asc).then(tapes=>this.tapes=tapes);
    this.changeSortingDirection();
  }
    getRentedTapesSortedByRating(): void{
    this._tapeService.getRentedTapesSortedByParameter('rating',this.asc).then(tapes=>this.tapes=tapes);
    this.changeSortingDirection();
  }
  private changeSortingDirection(){
    if(this.asc){
      this.asc=false;
    }
    else{
      this.asc=true;
    }
  }
}