import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Tape } from './tape';
import { TapeService } from "./tape.service";

@Component({
  selector: 'tape-detail',
  templateUrl: './templates/tape-detail.component.html'
})
export class TapeDetailComponent implements OnInit {
  @Input() tape: Tape;
  constructor(
    private _tapeService: TapeService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }
  ngOnInit(): void {
    this._route.params
      .switchMap((params: Params) => this._tapeService.getTape(+params['id']))
      .subscribe(tape => this.tape = tape);
  }
  goBack(): void {
    this._location.back();
  }
}