import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }  from './app.component';
import { TapesComponent } from './tapes.component';
import { TapeDetailComponent } from './tape-detail.component';
import { TapeService }         from './tape.service';



const appRoutes: Routes = [
  { path: 'tapes', component: TapesComponent},
  { path: 'detail/:id', component: TapeDetailComponent }
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,
  TapeDetailComponent,
  TapesComponent],
    providers: [
    TapeService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
