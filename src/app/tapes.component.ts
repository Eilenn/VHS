import { Component } from '@angular/core';
import { Tape } from './tape';
import {Router} from '@angular/router';
import { TapeService } from './tape.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-tapes',
  templateUrl: './templates/vhsListing.html',
  providers: [TapeService]
})
export class TapesComponent implements OnInit {
  tapes: Tape[];
  selectedTape: Tape;

  onSelect(tape: Tape): void {
    this.selectedTape = tape;
  }
  constructor(private router: Router,private tapeService: TapeService) {

  }
  getTapes(): void {
    this.tapeService.getTapes().then(tapes=>this.tapes=tapes);
  }
  ngOnInit(): void {
    this.getTapes();
  }
    gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTape.id]);
  }
}