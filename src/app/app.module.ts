import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TapeDetailComponent } from './tape-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
  TapeDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
