import { Component } from '@angular/core';
import { Tape } from './tape';
import { Router } from '@angular/router';
import { TapeService } from './tape.service';
import { OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-tapes',
  templateUrl: './templates/tapes.component.html',
  providers: [TapeService]
})
export class TapesComponent implements OnInit {
  tapes: Tape[];
  selectedTape: Tape;
  listFilter: string;

  onSelect(tape: Tape): void {
    this.selectedTape = tape;
  }
  constructor(private _router: Router, private _location: Location, private _tapeService: TapeService) {

  }
  getTapes(): void {
    this._tapeService.getTapes().then(tapes => this.tapes = tapes);
  }
  ngOnInit(): void {
    this.getTapes();
  }
  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedTape.id]);
  }
  goBack(): void {
    this._location.back();
  }
  getSortedTapes(): void {
    this._tapeService.getSortedTapes('title').then(tapes => this.tapes = tapes);
  }
}