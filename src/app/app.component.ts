import { Component } from '@angular/core';
import { Tape } from './tape';
import { TapeService } from './tape.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './templates/vhsListing.html',
  providers: [TapeService]
  //'./templates/mainView.html',
})
export class AppComponent implements OnInit {
  name = 'VHS Rental Service';
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
    this.tapes = this.tapeService.getTapes();
  }
  ngOnInit(): void {
    this.getTapes();
  }
}