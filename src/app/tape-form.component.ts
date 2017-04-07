import { Component } from '@angular/core';

import { TapeStatus } from "./tape-status";
import { Tape } from "./tape";

@Component({
  selector: 'tape-form',
  templateUrl: './templates/tape-form.component.html'
})
export class TapeFormComponent {

  model = new Tape(15, 'The Silence of the Lambs', 'Jonathan Demme', 1991,1.99,TapeStatus.AVAILABLE);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}