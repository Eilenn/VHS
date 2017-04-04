import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TapesComponent } from './tapes.component';
import { TapeDetailComponent } from './tape-detail.component';
import { TapeService }         from './tape.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent,
  TapeDetailComponent,
  TapesComponent],
    providers: [
    TapeService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
