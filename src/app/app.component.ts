import { Component } from '@angular/core';
import { TapeService } from "./tape.service";
@Component({
  selector: 'my-app',
  templateUrl: './templates/mainView.html',
  providers:[TapeService]
})
export class AppComponent {
  name = 'VHS Rental';
}