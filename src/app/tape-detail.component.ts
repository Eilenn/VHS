import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Tape } from './tape';
import { TapeService } from "./tape.service";
import {TapeStatus} from './tape-status';

@Component({
  selector: 'tape-detail',
  templateUrl: './templates/tape-detail.component.html'
})
export class TapeDetailComponent implements OnInit, OnChanges {
   
  TapeStatus: typeof TapeStatus=TapeStatus;
  @Input() tape: Tape;
  constructor(
    private _tapeService: TapeService,
    private _route: ActivatedRoute,
    private _location: Location, private _router: Router
  ) { }
  ngOnInit(): void {
    this._route.params
      .switchMap((params: Params) => this._tapeService.getTape(+params['id']))
      .subscribe(tape => this.tape = tape);
  }
    ngOnChanges(): void {
    this._route.params
      .switchMap((params: Params) => this._tapeService.getTape(+params['id']))
      .subscribe(tape => this.tape = tape);
  }
  goBack(): void {
    this._location.back();
  }
    getTape(): void {
    this._tapeService.getTape(this.tape.id).then(tape => this.tape = tape);
  }
  update(tape: Tape){
    this._tapeService.update(tape);
    //this.getTape();
  }
  onClose(){
    this._router.navigate(['/tapes']);
  }
}