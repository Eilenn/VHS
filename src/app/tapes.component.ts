import { Component } from '@angular/core';
import { Tape } from './tape';
import { Router } from '@angular/router';
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

  constructor(private _router: Router, private _location: Location, private _tapeService: TapeService) {
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
    this._tapeService.getSortedTapes('title').then(tapes => this.tapes = tapes);
  }
  getTapesSortedByRating(): void {
    this._tapeService.getSortedTapes('rating').then(tapes => this.tapes = tapes);
  }
  getTapesSortedByYear(): void {
    this._tapeService.getSortedTapes('year').then(tapes => this.tapes = tapes);
  }
  onSelect(tape: Tape){
    this.selectedTape=tape;
  }
}