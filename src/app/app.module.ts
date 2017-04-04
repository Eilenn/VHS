import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TapesComponent } from './tapes.component';
import { TapeDetailComponent } from './tape-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
  TapeDetailComponent,
  TapesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
