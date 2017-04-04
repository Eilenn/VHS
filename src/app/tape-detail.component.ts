import { Component,Input } from '@angular/core';
import{Tape} from './tape';

@Component({
  selector: 'tape-detail',
  templateUrl: './templates/tapeDetail.html'
})
export class TapeDetailComponent {
    @Input() tape: Tape;
}