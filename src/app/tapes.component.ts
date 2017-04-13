import { Component } from '@angular/core';
import { Tape } from './tape';
import { TapeService } from './tape.service';
import { OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-tapes',
  templateUrl: './templates/tapes.component.html',
  providers: [TapeService]
})
export class TapesComponent implements OnInit,OnChanges {
  tapes: Tape[];
  selectedTape=new Tape(null,null,null,null,null,null);
  listFilter: string;
  sortTerm: string='title';
   asc: boolean=true;

  constructor( private _location: Location, private _tapeService: TapeService) {
  }
  getTapes(): void {
    this._tapeService.getTapes().then(tapes => this.tapes = tapes);
  }
  ngOnInit(): void {
    this.getTapes();
  }
    ngOnChanges(): void {
    this.getTapes();
  }
  goBack(): void {
    this._location.back();
  }
  getSortedTapes(): void {
    this._tapeService.getSortedTapes('title', this.asc).then(tapes => this.tapes = tapes);
    this.changeSortingDirection();
  }
  getTapesSortedByRating(): void {
    this._tapeService.getSortedTapes('rating',this.asc).then(tapes => this.tapes = tapes);
     this.changeSortingDirection();
  }
  getTapesSortedByYear(): void {
    this._tapeService.getSortedTapes('year',this.asc).then(tapes => this.tapes = tapes);
     this.changeSortingDirection();
  }
  onSelect(tape: Tape){
    this.selectedTape=tape;
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