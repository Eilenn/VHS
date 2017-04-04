import { NgModule }             from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { TapesComponent } from './tapes.component';
import { TapeDetailComponent } from './tape-detail.component';

const appRoutes: Routes = [
  { path: 'tapes', component: TapesComponent},
  { path: 'detail/:id', component: TapeDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}