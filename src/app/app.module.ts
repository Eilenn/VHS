import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation'
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { TapesComponent } from './tapes.component';
import { TapeDetailComponent } from './tape-detail.component';
import { TapeService } from './tape.service';
import { AppRoutingModule } from './app-routing.module';
import { SubscribedCustomersComponent } from "./subscribed-customers.component";
import { RentedTapesComponent } from "./rented-tapes.component";
import { TapeFilterPipe } from "./tape-filter.pipe";
import { TapeSortPipe } from "./tape-sort.pipe";
import { StarComponent } from "./star.component";
import { TapeFormComponent } from "./tape-form.component";
import { RentTapeFormComponent } from "./rent-tape-form.component";
import { CollectTapeFormComponent } from "./collect-tape-form-component";
import { EditTapeComponent } from "./edit-tape.component";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule,CustomFormsModule],
  declarations: [AppComponent,
    TapeDetailComponent,
    TapesComponent, SubscribedCustomersComponent,RentedTapesComponent,
    TapeFilterPipe,TapeSortPipe, RentedTapesComponent,StarComponent, TapeFormComponent,RentTapeFormComponent, CollectTapeFormComponent, EditTapeComponent],
  providers: [
    TapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
