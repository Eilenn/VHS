import { NgModule }             from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { TapesComponent } from './tapes.component';
import { TapeDetailComponent } from './tape-detail.component';
import { SubscribedCustomersComponent } from "./subscribed-customers.component";
import { RentedTapesComponent } from "./rented-tapes.component";

const appRoutes: Routes = [
  { path: 'tapes', component: TapesComponent},
  { path: 'detail/:id', component: TapeDetailComponent },
  { path: 'customers', component: SubscribedCustomersComponent},
  {path: 'rentedTapes', component: RentedTapesComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}