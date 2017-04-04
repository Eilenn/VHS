import { Component } from '@angular/core';
import { Tape } from './tape';
import { TapeService } from './tape.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-tapes',
  templateUrl: './templates/vhsListing.html',
  providers: [TapeService]
})
export class TapesComponent implements OnInit {
  tape = new Tape(1, "Casablanca", "Michael Curtiz", 1942);
  tape2: Tape = {
    id: 2,
    title: 'The Sting',
    director: 'George Roy Hill',
    year: 1973,
    category: 'crime'
  };
  tapes: Tape[];
  selectedTape: Tape;

  onSelect(tape: Tape): void {
    this.selectedTape = tape;
  }
  constructor(private tapeService: TapeService) {

  }
  getTapes(): void {
    this.tapeService.getTapes().then(tapes=>this.tapes=tapes);
  }
  ngOnInit(): void {
    this.getTapes();
  }
}